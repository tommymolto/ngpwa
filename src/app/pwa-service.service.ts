import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PwaServiceService {
  promptEvent;
  SERVER_URL='';
  constructor(public swUpdate: SwUpdate, private http: HttpClient) {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(environment.SERVER_URL, subscription);
  }
}
