import { Component, OnInit, } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-git-display',
  templateUrl: './git-display.component.html',
  styleUrls: ['./git-display.component.css']
})
export class GitDisplayComponent implements OnInit {

  user?: any;
  userRepo?: Repository;
  User = environment.apiKey;
  UserName?: string;

  constructor(public gitService:GitRequestService) { }

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
    // this.gitService.userRequest()
    // this.user = this.gitService.user
    this.userRequest("weshy007");

}

    
}

