import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  // searchWord?:string 
  // @Output() searchProf = new EventEmitter<any>();

  // searchUser() {
  //   this.searchProf.emit(this.searchWord)
  // }



  constructor() { }

  ngOnInit(): void {
  }

}
