import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista} from "../../models/lista.model";

@Component({
    selector:"agregar-page",
    templateUrl:"agregar.component.html"
})
export class AgregarPage{

 constructor(public DeseosService:DeseosService){
 }
}