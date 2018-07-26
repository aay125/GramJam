import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appeal } from '../../models/appeal_info';
@Component({
    selector: 'appeal-form',
    templateUrl: './appeal-form.component.html',
    styleUrls: ['./appeal-form.component.css']
})


export class AppealFormComponent implements OnInit {
    AppealForm: FormGroup;
    appeal: Appeal = new Appeal();
    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
        this.AppealForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            department: ['', [Validators.required, Validators.minLength(5)]],
            RaterName: ['', [Validators.required, Validators.minLength(5)]],
            EmpSapNum: ['', [Validators.required, Validators.minLength(5)]],
            RaterSapNum: ['', [Validators.required, Validators.minLength(5)]]
        });
    }
}