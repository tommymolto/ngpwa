import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar, MatToolbar} from '@angular/material';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

import {PwaServiceService} from '../pwa-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent implements OnInit {


  constructor(public Pwa: PwaServiceService, private snackBarRef: MatSnackBar) {
    this.Pwa.swUpdate.activated.subscribe( ret =>{
      this.snackBarRef.open('Atualizar App?', 'Sim').onAction().subscribe( ret =>{
        window.location.reload();
      });
    });
  }

  ngOnInit() {
  }
  installPwa(): void {
    this.snackBarRef.open('Instalar App?', 'Sim').onAction().subscribe( ret =>{
      this.Pwa.promptEvent.prompt();
    });
  }
}
