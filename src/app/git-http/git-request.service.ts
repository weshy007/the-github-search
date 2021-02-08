import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repository} from '../repository'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
  
  user: User;
  repos: Repository;
  Username?: string;
  
  repo:any;
  
  constructor(private http:HttpClient) {
    this.user = new User("","",0 , 0,)
    this.repos = new Repository("", "", "", new Date())
    
    this.Username = "weshy007" 
    
    console.log(this.user)
  }
  
  // searchUser(userRequest: any) {
  //   throw new Error('Method not implemented.');
  // }

   userRequest(){
    interface ApiResponse{
      name:string,
      login: string,
      followers: number,
      following: number,
      repos_url: string,
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl+this.Username+"?access_token="+environment.apiKey).toPromise().then(response=>{
        this.user.name = response.name
        this.user.login = response.login
        this.user.followers = response.followers
        this.user.following = response.following
        
        // console.log(response)

        resolve(response)
      }), 
      (error:any) => {
        reject()

      }
        
    })
    return promise;
  }
  getUserRepos(UserName:string){
    interface ApiResponse{
      name:string,
      description:string,
      language:string,
      created_at:Date
    }

      let promise = new Promise((resolve, reject) => {
        let apiURL = 'https://api.github.com/users/' + UserName + '/repos?access_token=' + environment.apiKey;
        this.http.get<ApiResponse>(apiURL)
          .toPromise().then(res => { 
              this.repos = res;
              // resolve();
            },
            (error)=>{
              reject();
            }
          );
      });
      return promise;
}
getRepository(repo:any){
  interface ApiResponse{
  }
  
  let promise = new Promise((resolve, reject) => {
    let apiURL = 'https://api.github.com/search/repositories?q=' + repo + '&order=asc?access_token=' + environment.apiKey;
    this.http.get<ApiResponse>(apiURL)
      .toPromise()
      .then(
        res => { 
          this.repo = res;
          // resolve();
        },
        (error)=>{
          reject();
        }
      );
  });
  return promise;


}

}



    
