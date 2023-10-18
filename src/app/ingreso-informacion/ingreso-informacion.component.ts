import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-ingreso-informacion',
  templateUrl: './ingreso-informacion.component.html',
  styleUrls: ['./ingreso-informacion.component.css']
})
export class IngresoInformacionComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private sharedService: SharedService
  ) { }

  buscarCliente() {
    if (this.tipoDocumento && this.numeroDocumento) {
      this.clienteService.getClienteInfo(this.tipoDocumento, this.numeroDocumento)
        .subscribe((data) => {
          console.log(data);
          
          this.sharedService.clienteData = data;
          this.router.navigate(['/resumen']);
        });
    }
  }
}
