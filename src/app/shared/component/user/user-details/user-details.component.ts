import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user.model';
import { userService } from 'src/app/shared/service/user.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { filter, switchMap } from 'rxjs';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _userService:userService ,
               private  _routes:ActivatedRoute,
                private _router: Router,
                private _matDialog:MatDialog,
                private _snackbar:SnackbarService
)  {}

  ngOnInit(): void {
       console.log(this.userId);
       this.getUserInfo();

  }


  User!:Iuser
  userId!:string

  getUserInfo(){
     this.userId=this._routes.snapshot.paramMap.get('Uid') || " ";
      this._userService.fetchProductById(this.userId)
         .subscribe({
           next:(data:any)=>{
             console.log(data);
              this.User =data ;
           },
           error:err=>{
               console.log(err);
           }
         });
  }

  OnRemove(){
        //  this.userId= this._routes.snapshot.params('id');
         let matConfig  =  new MatDialogConfig() ;
                 matConfig.width = '600px';
                 matConfig.height= '200px' ;
                  let matDialogRef = this._matDialog.open(GetConfirmComponent, matConfig);
                   //This optimized code...
                     matDialogRef
                     .afterClosed()
                      .pipe(
                           filter(ele=>ele),
                           switchMap(()=>this._userService.onRemoveUser(this.User.id))
                          )

                        .subscribe({
                                   next:res=>{
                                       this._router.navigate(['user'])
                                        this._snackbar.Snackbar('User deleted successfully')
                                   },
                                   error:err=>{
                                  }
                               })



                  //  matDialogRef.afterClosed()
                  //   .subscribe(flag=>{
                  //      console.log(flag);

                  //      if(flag){
                  //            this._userService.onRemoveUser(this.User.id)


                  //      }

                   // })

  }



}
