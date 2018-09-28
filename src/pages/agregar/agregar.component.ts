import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { NavParams } from "ionic-angular";
import { ListaItem,Lista } from "../../models";

@Component({
    selector:"agregar-page",
    templateUrl:"agregar.component.html"
})
export class AgregarPage{
    obList:Lista;
    sbItemName:string="";
    constructor(public DeseosService:DeseosService,private navParams:NavParams){
        const sbTitle=this.navParams.get("titulo");
        this.obList= new Lista(sbTitle);
    }
    
    AgregarItem(){
        if(this.sbItemName.length===0){
            return;       
        } 
        const obNewItem= new ListaItem(this.sbItemName);   
        this.obList.item.push(obNewItem);    
        this.sbItemName="";
    }
    ActualizarCheck(iobItem){
      iobItem.completado=!iobItem.completado;
    }
}