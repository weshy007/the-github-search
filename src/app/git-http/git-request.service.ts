import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {

  user: User;

  

  constructor(private http:HttpClient) {
    this.user = new User("","",0 , 0,"")

    console.log(this.user)
   }

   userRequest(){
    interface ApiResponse{
      name:string,
      login: string,
      followers: number,
      following: number,
      repos_url: string,
    }
    let promise = new Promise((resolve)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.name = response.name
        this.user.login = response.login
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.repos_url = response.repos_url
          
        console.log(response)

        resolve(response)
      })
    })
  }
}
    
