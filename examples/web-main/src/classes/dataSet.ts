import { ChartData } from "./chartData";
export{
    DataSet,
}

class DataSet{
    public name: string;
    public datas:ChartData[];
    constructor(name:string, datas:ChartData[]){
        this.name = name;
        this.datas = datas;
    }
}