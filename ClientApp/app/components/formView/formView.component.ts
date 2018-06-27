import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'formView',
    templateUrl: './formView.component.html',
    styleUrls: ['./formView.component.css']
})

export class FormViewComponent implements OnInit {



    constructor(private user: UserService) {}

    ngOnInit() {

    }
}
