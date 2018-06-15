import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  Empresas = null;
  constructor(private EmpresasObtenidas: EmpresasService) {
    this.Empresas = EmpresasObtenidas.GetEmpresas();
  }

  ngOnInit() {
  }

}
