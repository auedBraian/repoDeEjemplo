export class Auto{
    protected marca:string;
    protected modelo:number;

    constructor(paramMarca:string, paramModelo:number) {
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }

    public setModelo(paramModelo:number):void{
        this.modelo = paramModelo;
    }
    
}