import { Component, OnInit, Input } from '@angular/core';
import { user } from 'src/app/intermap/user';
@Component({
  selector: 'app-menu-friends',
  templateUrl: './menu-friends.component.html',
  styleUrls: ['./menu-friends.component.scss'],
})
export class MenuFriendsComponent implements OnInit {
  @Input() friends = false;
  @Input() userList: any;
  @Input() toggleFriends: any;
  constructor() {}

  ngOnInit(): void {}
}
