import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

const items = [
    {
        name: "Something"
    },
    {
        name: "Something"
    },
    {
        name: "Something"
    },
    {
        name: "Something"
    }
]

@Component({
    selector: 'listView',
    templateUrl: './listView.component.html',
    styleUrls: ['./listView.component.css']
})

export class ListViewComponent implements OnInit {

    items = items;

    constructor() { }

    ngOnInit() {
        
    }
}
