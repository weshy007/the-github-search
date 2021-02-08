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

  user?: User;
  userRepo?: Repository;
  User = environment.apiKey;

  constructor(public gitService:GitRequestService) { }

  userRequest(){
    this.gitService.userRequest().then(
     ( success:any)=>{
       this.user = this.gitService.user;
     },
    )}

    
  ngOnInit(): void {
    this.gitService.userRequest()
    this.user = this.gitService.user

}

    
}

