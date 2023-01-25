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
    // 构造函数，宽度和高度默认分别为400和300px
    constructor(element: string, width: number = 400, height: number = 300){
        this.outsideDiv = document.getElementById(element)!;
        this.canvasElement = document.createElement("canvas");
        this.width = width;
        this.canvasElement.style.width = `${width}px`;
        this.height=height;
        this.canvasElement.style["height"]= `${height}px`;
        this.display = true;
        this.renderingContext = this.canvasElement.getContext('2d')!;
    };
    // 开始渲染，也就是把canvas放到div元素中。
    render(){
        if(this.display){
            this.outsideDiv.appendChild(this.canvasElement);
        }
    }
}