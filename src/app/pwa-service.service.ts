import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {
  promptEvent;
  temSWatualizado = false;
  constructor(public swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', event => {
      console.log('aqui',event);
      this.promptEvent = event;
    });

  }

}
