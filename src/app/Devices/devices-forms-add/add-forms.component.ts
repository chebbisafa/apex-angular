import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-forms',
    templateUrl: './add-forms.component.html',
    styleUrls: ['./add-forms.component.scss']
})

export class AddFormsComponent implements OnInit {

    ngOnInit() {
        $.getScript('./assets/js/jquery.steps.min.js');
        $.getScript('./assets/js/wizard-steps.js');

    }
}
