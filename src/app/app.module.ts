import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//componentes
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from "../pages/pendientes/pendientes.component";
import { TerminadosPage } from "../pages/terminados/terminados.component";

//servicios
import { DeseosService } from "../services/deseos.service";

@NgModule({
	declarations: [
		MyApp,
		TabsPage,
		PendientesPage,
		TerminadosPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage,
		PendientesPage,
		TerminadosPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		DeseosService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
