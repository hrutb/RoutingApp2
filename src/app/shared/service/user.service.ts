import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userService  implements OnInit{

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {


  }

users: Iuser[] = [
  {
    id: 1,
    Uid: "USR001",
    name: "Rohan Joshi",
    role: "Manager",
    experience: 7,
    status: false,
    description: "Project Manager experienced in leading software development teams and delivering projects.",
    skills: ["Project Management", "Agile", "Scrum", "Team Leadership", "JIRA"],
    currentAddress: {
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      zipcode: "560001"
    },
    permanentAddress: {
      country: "India",
      state: "Maharashtra",
      city: "Aurangabad",
      zipcode: "431001"
    },
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    Uid: "USR002",
    name: "Sneha Patel",
    role: "UI/UX Designer",
    experience: 5,
    status: true,
    description: "Creative designer passionate about crafting intuitive user experiences and clean interfaces.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    currentAddress: {
      country: "India",
      state: "Gujarat",
      city: "Ahmedabad",
      zipcode: "380015"
    },
    permanentAddress: {
      country: "India",
      state: "Gujarat",
      city: "Surat",
      zipcode: "395007"
    },
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    Uid: "USR003",
    name: "Arjun Mehta",
    role: "Frontend Developer",
    experience: 3,
    status: true,
    description: "Frontend developer skilled in Angular and TypeScript with a focus on responsive design.",
    skills: ["HTML", "CSS", "JavaScript", "Angular", "TypeScript"],
    currentAddress: {
      country: "India",
      state: "Maharashtra",
      city: "Pune",
      zipcode: "411001"
    },
    permanentAddress: {
      country: "India",
      state: "Maharashtra",
      city: "Nashik",
      zipcode: "422001"
    },
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    Uid: "USR004",
    name: "Priya Sharma",
    role: "Backend Developer",
    experience: 4,
    status: true,
    description: "Backend developer specializing in Node.js and MongoDB with experience in RESTful APIs.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT"],
    currentAddress: {
      country: "India",
      state: "Delhi",
      city: "New Delhi",
      zipcode: "110001"
    },
    permanentAddress: {
      country: "India",
      state: "Uttar Pradesh",
      city: "Lucknow",
      zipcode: "226001"
    },
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    Uid: "USR005",
    name: "Vikram Singh",
    role: "QA Engineer",
    experience: 6,
    status: false,
    description: "Quality assurance engineer ensuring product reliability through automated and manual testing.",
    skills: ["Selenium", "Cypress", "Jest", "Postman", "TestNG"],
    currentAddress: {
      country: "India",
      state: "Tamil Nadu",
      city: "Chennai",
      zipcode: "600001"
    },
    permanentAddress: {
      country: "India",
      state: "Tamil Nadu",
      city: "Madurai",
      zipcode: "625001"
    },
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];



  // product_url =  environment.production;

    //  userArr:Iuser[] = users;


      fetchProducts():Observable<Iuser[]>{
         return of(this.users);
      }


     fetchProductById(id:string):Observable<Iuser>{
          let user  = this.users.find(ele=>ele.Uid===id) as  Iuser;
                       console.log(user);
           return of(user) ;
       }

      createUsers(newUser:Iuser):Observable<Iuser>{
          this.users.push(newUser);
          return of(newUser)
       }


    updateUser(User:Iuser):Observable<Iuser>{
          let updateId= User.id;
          let getIndex = this.users.findIndex(ele=>ele.id===updateId);
          let updateObj = {
                ...this.users[getIndex],
                ...User
               }
             this.users[getIndex] = updateObj;
              return of(updateObj);
    }


    onRemoveUser(id:number): Observable<Iuser[]>{
            let getIndex = this.users.findIndex(ele=>ele.id===id) ;
                   this.users.splice(getIndex,1) ;
                 return of(this.users) ;
          }



}
