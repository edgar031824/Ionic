import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models";
import { NavController, AlertController} from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
	selector: 'pendientes-page',
	templateUrl: 'pendientes.component.html'
})

export class PendientesPage {
	constructor(public _DeseosServices: DeseosService,private navCtrl:NavController,private alertCtrl:AlertController) { };
	
	itemSelected(iobList: Lista) {
		console.log('hola');
	}
	AgregarLista(){
		const alertCtrl=this.alertCtrl.create({
			title: 'Nueva lista',
			message: "Nombre de la nueva lista que desea ingresar",
			inputs: [{
				name: 'titulo',
				placeholder: 'Nombre de la lista'
			}],
			buttons:[
				{
					text:"Cancelar"
				},
				{
					text:"Agregar",
					handler:(iobData)=>{
						if(iobData.length===0){
							return;
						}
						/*se va a la vista agregarPage y se le envían parámetros*/
						this.navCtrl.push(AgregarPage,{
							titulo:iobData.titulo
						});
					}
				}]
			});
			alertCtrl.present();
		}
	}