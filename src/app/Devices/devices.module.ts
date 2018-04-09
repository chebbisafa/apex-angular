import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DevicesRoutingModule } from "./devices-routing.module";

import { DevicesTableComponet } from "./devices-data-table/devices-data-table.component";
import {AddFormsComponent} from "./devices-forms-add/add-forms.component";

@NgModule({
    imports: [
        CommonModule,
        DevicesRoutingModule,
        Ng2SmartTableModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,


    ],
    declarations: [

      DevicesTableComponet,
      AddFormsComponent
    ]
})
export class DevicesModule { }
