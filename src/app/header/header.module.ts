import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatSnackBar, MatSnackBarModule, MatToolbar, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [MatToolbar, MatSnackBar]
})
export class HeaderModule { }
