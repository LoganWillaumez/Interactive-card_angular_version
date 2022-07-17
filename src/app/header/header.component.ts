import { Component, OnInit } from '@angular/core';
import { IntermapService } from '../intermap/intermap.service';
import { user } from '../intermap/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userList: user[] = [];
  constructor(private intermapService: IntermapService) {}

  ngOnInit(): void {
    console.log('component');
    this.intermapService
      .getUsersList()
      .subscribe((userList) => (this.userList = userList.results));
  }
}
