import { Component, OnInit } from '@angular/core';
import { IntermapService } from './intermap.service';
import { user, userRequest } from './user';

@Component({
  selector: 'app-intermap',
  templateUrl: './intermap.component.html',
  styles: [],
})
export class IntermapComponent implements OnInit {
  userList: user[] = [];
  constructor(private intermapService: IntermapService) {}

  ngOnInit(): void {
    console.log('component');
    this.intermapService
      .getUsersList()
      .subscribe((userList) => (this.userList = userList.results));
  }
}
