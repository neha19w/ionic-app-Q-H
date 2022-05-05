import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/api/auth.service';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  productList: any;
  constructor(private userService: UserService,public loadingController: LoadingController) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.presentLoading();
    console.log('getProductList() called');
    this.userService.getProductList().subscribe((res: any) => {
      console.log('res data -');
      console.log(res.data);

      this.productList = res.data;
      console.log('this.productList -- ',this.productList);

    });
  }

  //Loading Bar -
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Product loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
