export{
    Container
}

class Container{
    // 对应的div元素id
    public element!: string;
    // 宽度，单位为像素
    public width: number;
    // 高度，单位为像素
    public height: number;
    // 是否展示
    public display: boolean;
    // 实际上的canvas元素，所有的元素都在这个元素中实现
    protected canvasElement: HTMLCanvasElement;
    // 通过div元素的id找到元素对象，私有属性，外部无法访问
    private outsideDiv: HTMLElement;
    // canvas渲染上下文
    protected renderingContext: CanvasRenderingContext2D;
    constructor(element: string, width: number, height: number){
        this.outsideDiv = document.getElementById(element);
        this.canvasElement = document.createElement("canvas");
        if(width === null){
            this.width = 400;
            this.canvasElement.style.width = '400';
        }else{
            this.width = width;
            this.canvasElement.style.width = `${width}px`;
        }
        if(height === null){
            this.height = 300;
            this.canvasElement.style["height"] = "300";
        }else{
            this.height=height;
            this.canvasElement.style["height"]= `${height}px`;
        }
        this.display = true;
        this.renderingContext = this.canvasElement.getContext('2d');
    };
    // 开始渲染，也就是把canvas放到div元素中。
    render(){
        if(this.display){
            this.outsideDiv.appendChild(this.canvasElement);
        }
    }
}