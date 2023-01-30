import { ChartData } from "./chartData";
import { Container } from "./container";

export{
    BarChart,
}

class BarChart extends Container{
    // 每个条形的宽度，单位为像素
    private barWidth!: number;
    // 最大值，这样就可以设置每个像素的大小
    private maxValue!: number;
    // 每个值对应的canvas像素大小，这样就可以让统计图变得更合理
    private perPixel!: number;
    // 构造函数
    constructor(element: string, width: number, height: number,data: ChartData[]) {
        super(element, width, height);
        this.datas = data;
    }
    // 渲染出条形统计图，目前有点bug，第一个条会占据双倍的宽度，还没有修复
    public render(): void {
        super.render();
        this.updateNumber();
        // 这里最好可以根据传入的参数来获取对应的颜色
        const colors =['red','orange','yellow','green','cyan','blue','purple'];
        this.renderingContext.clearRect(0,0,this.width,this.height);
        for(let i = 0; i < this.datas.length;i++){
            this.renderingContext.fillStyle=colors[i];
            const startX = i*this.barWidth;
            const startY = this.height - this.perPixel * this.datas[i].value;
            const rectHeight = Math.min(this.perPixel * this.datas[i].value, this.height);
            const rectWidth = this.barWidth;
            this.renderingContext.fillRect(startX, startY, rectWidth, rectHeight);
        }
    }
    // 更新数据，比如条的宽度和高度等
    private updateNumber():void{
        this.barWidth = this.width/this.datas.length;
        let max =0;
        for(let i = 0; i< this.datas.length;i++){
            if(this.datas[i].value>max){
                max = this.datas[i].value;
            }
        }
        this.maxValue = max;
        this.perPixel = this.height/this.maxValue
    }
}