import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  user?: any;
  repository?: any;
  User = environment.apiKey;
  UserName?: string;

  constructor(public gitService:GitRequestService) { 
    this.gitService.getUserRepos().then(repos =>{
      this.repository = repos;
      }); 
  }

  
  searchUser() {
    // this.emitSearch.emit(this.Username);
    // this.Username; 
    this.gitService.userRequest(this.UserName);
    this.user= this.gitService.user
  }


  userRequest(Username:any){
    this.gitService.userRequest(Username).then(
     ( success:any)=>{
       this.user = this.gitService.user.login;
     },
    )}

  

    
  ngOnInit(): void {
    this.gitService.getUser()
    // this.gitService.getUserRepos()
    // this.userRepo = this.gitService.repos
    this.user = this.gitService.user
    this.userRequest("weshy007");

}

    
}

