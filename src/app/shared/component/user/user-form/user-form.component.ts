// import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user.model';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { userService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private _userService:userService , private _router:Router, private _routes: ActivatedRoute, private _snackbar:SnackbarService) { }

  ngOnInit(): void {

    this.oncreate();
//  this.onPatchValues();
        let userId =this._routes.snapshot.params['Uid'] ;

     if(userId){
        this.IsInEditMode = true ;
          this._userService.fetchProductById(userId)
                .subscribe(res=>{
                  this.onPatchValues(res) ;

                })
     }
    this.AddSkills();
    this.valueChanges();
    this.patchValues();
    this.onUpdate() ;

  }



  UserForm!:FormGroup




// patchSkill(user: Iuser){
//    this.skillsArr.clear() ;
//     for(const skill of  user.skills){
//         this.skillsArr.push(new FormControl(skill, Validators.required)) ;

//     }
//      this.UserForm.patchValue(user)
// }

  oncreate(){
       this.UserForm = new  FormGroup({
               name : new FormControl('',[Validators.required]) ,
               role : new FormControl('',[Validators.required]) ,
              experience: new FormControl('',[Validators.required]),
              description: new FormControl('',[Validators.required]) ,
              imageUrl: new FormControl('',[Validators.required]) ,
              status: new FormControl('',[Validators.required]),



                currentAddress: new FormGroup({
                     country : new FormControl('',[Validators.required]),
                        state: new FormControl('',[Validators.required]),
                         city: new FormControl('',[Validators.required]),
                     zipcode : new  FormControl('',[Validators.required])
                     }),

                 permanentAddress: new FormGroup({
                     country : new FormControl('',[Validators.required]),
                        state: new FormControl('',[Validators.required]),
                         city: new FormControl('',[Validators.required]),
                     zipcode : new  FormControl('',[Validators.required])
                     }) ,

                     isAddSame: new FormControl({value:false, disabled:true}),


                 Skills: new  FormArray([]) ,
          })
  }
  onAdd(){
    console.log(this.UserForm)
    if(this.UserForm.invalid){
           this.UserForm.markAllAsTouched();
    }else{
         let newObj ={
              ...this.UserForm.getRawValue(),
                 Uid:Date.now().toString(),
                 id:Date.now()
              } ;

        this._userService.createUsers(newObj)
               .subscribe({
                   next:res=>{
                      console.log(res);
                     this._router.navigate(['user']) ;
                    this._snackbar.Snackbar('New user added  successfully')

                    },
                    error:err=>{
                    console.log(err);
                    }
               });


    }
  }


  get skillsArr(): FormArray{
        return this.UserForm.get('Skills') as FormArray ;
  }



 AddSkills(){
     let controls = new FormControl(null,[Validators.required]) ;
      this.skillsArr.push(controls);
  }
get controls(){
   return this.UserForm.controls ;
}

get address(): FormGroup {
  return this.UserForm.get('currentAddress') as FormGroup;
}

get per_address(): FormGroup{
   return this.UserForm.get('permanentAddress') as FormGroup
 }

valueChanges(){
    this.UserForm.get('currentAddress')?.valueChanges
      .subscribe(res=>{
        console.log(res);
        if(this.UserForm.get('currentAddress')?.valid) {
                       console.log("true")
                this.controls['isAddSame']?.enable();
          } else{
                this.controls['isAddSame']?.disable();
                this.controls['isAddSame']?.reset();
             }
          })
}


patchValues(){
     this.UserForm.get('isAddSame')?.valueChanges
     .subscribe(isValid=>{
         console.log(isValid);
        if(isValid){
           const currentAddress = this.address.getRawValue();
            this.per_address.patchValue(currentAddress);
            this.per_address.disable();

          }else{
            this.per_address.enable();
            this.per_address.reset();


          }
        })
      }

onRemove(i:number){
     this.skillsArr.removeAt(i);
}

IsInEditMode:boolean =false ;


    onPatchValues(user:Iuser){
      this.skillsArr.clear()
        for(const skill of user.skills){

         this.skillsArr.push(new FormControl(skill,Validators.required)) ;
         }
          this.UserForm.patchValue(user) ;
       }





    onUpdate(){
      // this._userService.updateUser(User)

         if(this.UserForm.valid){
                 this.UserForm.markAllAsTouched()
                 return ;
          }

        const  updatedUser : Iuser={
                ...this.UserForm.value,
                id: Date.now(),
                Uid:Date.now().toString()
         }

        this._userService.updateUser(updatedUser)
          .subscribe({
              next:res=>{
                 this._router.navigate(['user']);
                    this._snackbar.Snackbar('User updated successfully')

              },
              error:err=>{
                   console.log(err);
              }
          })
    }

}
