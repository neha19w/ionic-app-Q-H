import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  quotesData: any;
  style: any;

  constructor(private userService: UserService,private toastr: ToastController) {}

  ngOnInit() {
    this.getQuotesData();
  }

  getQuotesData() {
    console.log('api called');

    this.userService.getData().subscribe((res: any) => {
      console.log('get data');
      console.log('response', res.data);

      this.quotesData = res.data;
      console.log(this.quotesData, 'this.quotesData');
    }

    );
  }

  eventEmitSingleClick() {
    console.log('Single Click Called');
    console.log(this.quotesData[0].likes);
    this.quotesData[0].likes++;
    // this.style.color = '#345465';


  }
}
