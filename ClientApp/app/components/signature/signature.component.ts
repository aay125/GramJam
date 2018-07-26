import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signature',
    templateUrl: './signature.component.html',
    styleUrls: ['./signature.component.css']
})
/** signature component*/
export class SignatureComponent implements OnInit {
    signatureForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.signatureForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            title: ['', [Validators.required, Validators.minLength(3)]],
            department: ['', [Validators.required, Validators.minLength(3)]],
            period: ['', [Validators.required, Validators.minLength(3)]],
            division: ['', [Validators.required, Validators.minLength(3)]],
            reviewType: ['', [Validators.required, Validators.minLength(3)]],
            sapNum: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    populateTestData(): void {
        this.signatureForm.patchValue({
            name: 'John Doe',
            title: 'Manager',
            department: 'Information Technology', // drop down cell, doesn't populate
            division: 'Help Desk',
            reviewType: 'Planning',
            sapNum: '123456'
        });
    }

    save() {
        console.log(this.signatureForm);
        console.log('Saved: ' + JSON.stringify(this.signatureForm.value));
    }
}