export{
    Container
}

class Container{
    public element: string;
    public width: number;
    public height: number;
    public type: string;
    public display: boolean;
    private canvasElement: HTMLCanvasElement;
    private outsideDiv: HTMLElement;
    constructor(element: string, width: number, height: number){
        this.outsideDiv = document.getElementById(element);
        this.canvasElement = document.createElement("canvas");
        if(width === null){
            this.width = 400;
            this.canvasElement.style.width = '400px';
        }else{
            this.width = width;
            this.canvasElement.style.width = `${width}px`;
        }
        if(height === null){
            this.height = 300;
            this.canvasElement.style["height"] = "300px";
        }else{
            this.height=height;
            this.canvasElement.style["height"]=`${height}px`;
        }
        this.display = true;
    };
    render(){
        if(this.display){
            this.outsideDiv.appendChild(this.canvasElement);
        }
    }
}