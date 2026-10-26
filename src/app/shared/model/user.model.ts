// export interface Iuser {
//           id: number;
//         name: string;
//         email: string;
//         role: string;
//         isActive: boolean;
//         createdAt: string;
//         userImage:string;
//         Uid:string
//  }



 export interface  Iuser {
  Uid: string;
  id:number;
  name: string;
  role: string;
  experience: number;
  status: boolean; // true = active, false = inactive
  description: string;
  skills: string[];
  currentAddress: Address;
  permanentAddress: Address;
  imageUrl: string | null;
}

export interface Address {
  country: string;
  state: string;
  city: string;
  zipcode: string;
}
