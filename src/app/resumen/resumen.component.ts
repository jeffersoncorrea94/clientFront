import { Component } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  clienteData: any;

  constructor(private sharedService: SharedService, private router: Router) {
    this.clienteData = this.sharedService.clienteData;
  }

  volver() {
    this.router.navigate(['/ingreso']);
  }
}
