import { Container } from "./container";
import { ChartData } from "./chartData";
import { setTransitionHooks, withCtx } from "vue";

export{
    PieChart,
}

class PieChart extends Container{
    // 半径，取宽度和高度的min
    private radius: number;
    // 圆心坐标，x和y坐标是相等的
    private center!: number;
    // 构造函数
    constructor(element: string, width: number, height: number,data: ChartData[]) {
        super(element, width, height);
        this.radius = Math.min(width,height)/2;
        this.center = this.radius;
        this.datas = data;
    }
    // 渲染，把ctx的位置放到圆心，然后绘制圆弧后使用closePath
    public render(): void {
        super.render();
        const colors =['red','orange','yellow','green','cyan','blue','purple'];
        let lastPosition =0;
        for(let i=0;i<this.datas.length;i++){
            this.renderingContext.beginPath();
            this.renderingContext.moveTo(this.center, this.center);
            let angle = this.datas[i].value * 2 * Math.PI;
            this.renderingContext.arc(this.center, this.center, this.radius,lastPosition,angle+lastPosition);
            this.renderingContext.fillStyle = colors[i];
            this.renderingContext.closePath();
            this.renderingContext.fill();
            lastPosition += angle;
        }
    }
}