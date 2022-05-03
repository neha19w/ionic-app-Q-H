import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  hashTagData: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHashTagData();
  }

  getHashTagData(){
    console.log('getHashTagData function called');
    this.userService.getHashTagDataApi().subscribe((res: any)=>{
      console.log('get data');
      res.data.forEach(element => {
        element.message = element.message.replaceAll('daikin','#');
      });
      console.log('response',res.data);

      this.hashTagData=res.data;
    });
  }
}
