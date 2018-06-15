import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  Empresa : any = {};
  id = null;
  constructor(private route:ActivatedRoute, private ServicioEmpresas: EmpresasService) {
    console.log("El parametro recibido es: " + this.route.snapshot.params['id']);
    console.log("El parametro recibido es: " + this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.ServicioEmpresas.BuscarEmpresa(this.id));
    this.Empresa = this.ServicioEmpresas.BuscarEmpresa(this.id);
  }

  ngOnInit() {
  }

}
