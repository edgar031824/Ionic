import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models";
import { NavController, NavControllerBase } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
	selector: 'pendientes-page',
	templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
	constructor(public _DeseosServices: DeseosService,private navCtrl:NavController) { };

	itemSelected(iobList: Lista) {
	console.log('hola');
	}
	AgregarLista(){
		/*con el push se va a la vista sugerida*/
     this.navCtrl.push(AgregarPage) ;
	}

}