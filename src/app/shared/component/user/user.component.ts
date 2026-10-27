import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user.model';
import { userService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _userService : userService) { }

   userArr!:Iuser[]

  ngOnInit(): void {
          this.getAllProduct();
    }

  getAllProduct(){
       this._userService.fetchProducts()
        .subscribe({
               next:res=>{
                     console.log(res);
                     this.userArr=res ;
               }
        });
  }


}
