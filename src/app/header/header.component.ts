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


  constructor(public Pwa: PwaServiceService, private snackBarRef: MatSnackBar) { }

  ngOnInit() {
  }
  instalarPWA(): void{
    this.Pwa.promptEvent.prompt();
  }
  installPwa(): void {
    //this.Pwa.promptEvent.prompt();
    this.snackBarRef.open('Instalar App?', 'Sim').onAction().subscribe( ret =>{
      console.log('instalado');
      this.Pwa.instalaApp();
    });

  }
}
