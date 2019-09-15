import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material';
import {PwaServiceService} from '../pwa-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})
export class HeaderComponent implements OnInit {

  constructor(private Pwa: PwaServiceService) { }

  ngOnInit() {
  }
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}
