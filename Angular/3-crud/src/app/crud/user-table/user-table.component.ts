import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  usersList!: Users[];
  @Output() modifyUser = new EventEmitter<Users>();
  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.users.usersList().subscribe((users) => (this.usersList = users));
  }

  editUser(id: string) {
    this.users.catchUser(id).subscribe((user) => this.modifyUser.emit(user));
  }

  deleteUser(id: string) {
    this.users
      .delete(id)
      .subscribe(() =>
        this.users.usersList().subscribe((users) => (this.usersList = users))
      );
  }
}
