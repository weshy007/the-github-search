import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { User } from '../user';

@Component({
  selector: 'app-git-display',
  templateUrl: './git-display.component.html',
  styleUrls: ['./git-display.component.css']
})
export class GitDisplayComponent implements OnInit {

  user?: User;

  constructor(private gitService:GitRequestService) { 
    
    
    
  }

  ngOnInit(): void {
    this.gitService.userRequest()
    this.user = this.gitService.user
  }

}
