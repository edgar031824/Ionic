import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models";

@Component({
	selector: 'terminados-page',
	templateUrl: 'terminados.component.html'
})

export class TerminadosPage {
	constructor(public _DeseosServices: DeseosService) { }

	itemSelected(iobList: Lista) {
		console.log('hola');
	}
}