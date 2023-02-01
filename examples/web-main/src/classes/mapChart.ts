import { Container } from "./container";
import axios from 'axios'


class MapChart extends Container{
    // 所需要的geoJSON
    public geoJson: {type:string,features:[]};
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
                this.render();
            })
    }
    // 绘制地图的各种区域、标出地点
    render(): void {
        super.render();
        this.getBoxArea();

    }
    getBoxArea():void{
        console.log(this.geoJson.features);
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
    let width = Math.abs(E - W)
    let height = Math.abs(N - S)
    let wScale = this.width / width
    let hScale = this.height / height
    // 计算地图缩放系数
    this.scale = wScale > hScale ? hScale : wScale
    // 获取包围盒中心经纬度坐标
    this.geoCenterX = (E + W) / 2
    this.geoCenterY = (N + S) / 2
    }
}

export{
    MapChart,
}