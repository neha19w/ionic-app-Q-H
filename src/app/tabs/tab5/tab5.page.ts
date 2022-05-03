import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private loginservice: AuthService) { }

  ngOnInit() {
  }

  onClick(event) {

    if (event.detail.checked) {
      document.body.setAttribute('data-theme', 'dark');
    }
    else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  logout(){
    this.loginservice.logout();
  }
}
