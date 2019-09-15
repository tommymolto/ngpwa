import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {
   promptEvent;
  constructor(public swUpdate: SwUpdate) {}

  installApp(): void {
    console.log('installApp');
    this.swUpdate.activateUpdate().then(x=> {
      console.log('nao quis');

    })
      this.swUpdate.available.subscribe(event => {
        if (this.askUserToUpdate()) {
          window.location.reload();
        }else{
          console.log('nao quis');
        }
      }, error => {
        console.log(error);
      });
      /*window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });*/
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
