import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users-data-table.component.html',
  styleUrls: ['./users-data-table.component.scss']
})

@Injectable()
export class UsersTableComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
  }
  openDialog(): void {
   let dialogRef = this.dialog.open( UsersTableComponent, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });
    }

}
