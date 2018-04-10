import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from "./users-routing.module";
import { MatDialogModule} from '@angular/material/dialog';
import { UsersTableComponent } from "./users-data-table/users-data-table.component";

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        Ng2SmartTableModule,
        MatDialogModule
    ],
    declarations: [

       UsersTableComponent
    ]
})
export class UsersModule { }
