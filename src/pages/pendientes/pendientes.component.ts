import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models";

@Component({
	selector: 'pendientes-page',
	templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
	constructor(public _DeseosServices: DeseosService) { };

	itemSelected(iobList: Lista) {
		console.log('hola');
	}

}