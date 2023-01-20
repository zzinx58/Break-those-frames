export{
    ChartData,
}

class ChartData{
    public key:string;
    public value:number;
    constructor(key:string, value:number){
        this.key = key;
        this.value = value;
    }
}