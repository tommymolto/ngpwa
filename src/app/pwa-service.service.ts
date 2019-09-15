import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {
   promptEvent;
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (this.askUserToUpdate()) {
        window.location.reload();
      }
    });
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
  instalaApp(){
    this.swUpdate.available.subscribe(event => {
        window.location.reload();
    });
  }
  askUserToUpdate(): boolean{
    return confirm('Atualizar?');
  }
}
