import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage implements OnInit {

  quotesData: any;
  constructor(private userService: UserService,private router: Router) {}

  ngOnInit() {
    this.getQuotesData();
  }

  backToTab4(){
    console.log('backToBirthday function called');
    this.router.navigate(['/tabs/tab4']);
  }

  getQuotesData() {
    console.log('api called');

    this.userService.getData().subscribe((res: any) => {
      console.log('get data');
      console.log('response',res.data);

      this.quotesData = res.data;
      console.log(this.quotesData,'this.quotesData');

    });
  }
}
