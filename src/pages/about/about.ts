import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import { FacebookAuth } from '@ionic/cloud-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public facebookAuth: FacebookAuth,
              public navCtrl: NavController) {

  }

  login() {
    this.facebookAuth.login().then((success) => {
      // handle success
      alert('sss');
    }, (err) => {
      alert('err');
      console.log('*****');
      console.log(err);
      // handle err
    });
  }

}
