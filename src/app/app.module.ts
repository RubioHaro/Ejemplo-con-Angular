import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { resaltarTipoCuenta } from './directives/resaltar.tipo.cuenta.directive';
import { ContarClicksDirective } from './directives/contador-de-clicks.directive';

import {Routes, RouterModule} from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NvarHomeComponent } from './nvar-home/nvar-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MapaGeneralComponent } from './mapa-general/mapa-general.component';

const appRoutes: Routes = [
  {path: 'Empresas', component: EmpresasComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'Detalles/:id', component: DetallesComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'Inicio', component: HomeComponentComponent},
  {path: 'inicio', component: HomeComponentComponent},
  {path: 'Contacto', component: ContactoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'Ubicacion', component: MapaGeneralComponent},
  {path: 'ubicacion', component: MapaGeneralComponent},
  {path: '', component: HomeComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    resaltarTipoCuenta,
    ContarClicksDirective,
    DetallesComponent,
    EmpresasComponent,
    NvarHomeComponent,
    FooterHomeComponent,
    HomeComponentComponent,
    ContactoComponent,
    MapaGeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeu8SVknFvRC9tXSL_wnj-oYcQR1Fgw_c'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
