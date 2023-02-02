import { Container } from "./container";
import axios from 'axios'

class MapChart extends Container{
    // 所需要的geoJSON
    public geoJson: any;
    // canvasx和y坐标所对应的经纬度
    private geoCenterX: number;
    private geoCenterY: number;
    // 缩放系数
    private scale:number;
    // 构造函数，需要额外传一个链接作为参数
    constructor(element: string, width: number, height: number, jsonLink: string){
        super(element, width, height);
        axios.get(jsonLink)
            .then((res)=>{
                this.geoJson = res.data;
                console.log(this.geoJson);
                this.render();
            })
    }
    // 绘制地图的各种区域、标出地点
    render(): void {
        super.render();
        this.getBoxArea();
        this.drawMap();

    }
    // 把纬度坐标转化为canvas坐标
    private toScreenPosition(horizontal:number, vertical:number){
    return {
        x: (horizontal - this.geoCenterX) * this.scale,
        y: (this.geoCenterY - vertical) * this.scale
    }
}
    // 根据GeoJSON的经纬度范围获取canvas中心的经纬度坐标
    getBoxArea():void{
        let N = -90, S = 90, W = 180, E = -180;
        this.geoJson.features.forEach((item:any) => {
            // 将MultiPolygon和Polygon格式的地图处理成统一数据格式
            if (item.geometry.type === 'Polygon') {
                item.geometry.coordinates = [item.geometry.coordinates]
            }
            // 取四个方向的极值
            item.geometry.coordinates.forEach( (area:any) => {
                let areaN = - 90, areaS = 90, areaW = 180, areaE = -180
                area[0].forEach((elem: number[]) => {
                    if (elem[0] < W) {
                        W = elem[0]
                    }
                    if (elem[0] > E) {
                        E = elem[0]
                    }
                    if (elem[1] > N) {
                        N = elem[1]
                    }
                    if (elem[1] < S) {
                        S = elem[1]
                    }
                })
            })
        })
        // 计算包围盒的宽高
        let width = Math.abs(E - W);
        let height = Math.abs(N - S);
        let wScale = this.width / width;
        let hScale = this.height / height;
        // 计算地图缩放系数
        this.scale = wScale > hScale ? hScale : wScale;
        // 获取包围盒中心经纬度坐标
        this.geoCenterX = (E + W) / 2;
        this.geoCenterY = (N + S) / 2;
    }
    // 绘制地图
    private drawMap():void{
        const dataArray = this.geoJson.features;
        // 鼠标是否扫到了位置
        let cursorFlag:boolean = false;
        for (let i = 0; i < dataArray.length; i++) {
            // canvas中心坐标
            const centerX = this.width / 2;
            const centerY = this.height / 2;
            // 换个名字，简单一些
            let ctx = this.renderingContext
            // 对于每一个feature数据的点进行遍历，是一个二维的数组
            dataArray[i].geometry.coordinates.forEach((area:any) => {
                ctx.save();
                ctx.beginPath();
                // 将canvas进行平移变换
                ctx.translate(centerX, centerY);
                area[0].forEach((elem:any, index:any) => {
                    let position = this.toScreenPosition(elem[0], elem[1]);
                    if (index === 0) {
                        ctx.moveTo(position.x, position.y)
                    } else {
                        ctx.lineTo(position.x, position.y)
                    }
                })
                ctx.closePath()
                ctx.strokeStyle = '#00cccc'
                ctx.lineWidth = 1
                /*
                // 将鼠标悬浮的区域设置为橘黄色（先不做）
                if (ctx.isPointInPath(offsetX, offsetY)) {
                    cursorFlag = true
                    ctx.fillStyle = 'orange'
                    if (eventType === 'click') {
                        console.log(dataArr[i])
                    }
                } else {
                    ctx.fillStyle = '#004444'
                }
                */
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            });
            /*
            // 动态设置鼠标样式（也没做）
            if (cursorFlag) {
                this.canvasElement.style.cursor = 'pointer'
            } else {
                this.canvasElement.style.cursor = 'default'
            }
            */
        }
    }
}

export{
    MapChart,
}