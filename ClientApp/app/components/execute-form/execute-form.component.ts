import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-execute-form',
    templateUrl: './execute-form.component.html',
    styleUrls: ['./execute-form.component.css']
})
/** execute-form component*/
export class ExecuteFormComponent implements OnInit{
    /** execute-form ctor */
    executiveForm: FormGroup;
    get section2(): FormArray{
        return <FormArray>this.executiveForm.get('section2');
    }
    get section5(): FormArray {
        return <FormArray>this.executiveForm.get('section5');
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.executiveForm = this.fb.group({
            section2: this.fb.array([this.buildEntry2()]),
            section5: this.fb.array([this.buildEntry5()])
        });
    }
    addEntry2(): void {
        this.section2.push(this.buildEntry2());
    }
    addEntry5(): void {
        this.section5.push(this.buildEntry5());
    }
    buildEntry2(): FormGroup {
        return this.fb.group({
            percent: ['', [Validators.required, Validators.minLength(3)]],
            rating: ['', [Validators.required, Validators.minLength(3)]],
            responsibility: ['', [Validators.required, Validators.minLength(3)]],
            summary: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
    buildEntry5(): FormGroup {
        return this.fb.group({
            time: ['', [Validators.required, Validators.minLength(3)]],
            summary: ['', [Validators.required, Validators.minLength(3)]]
        });
    }
    populateTestData(): void {
        this.executiveForm.patchValue({
            percent: '100%',
            rating: '11/10',
            responsibility: 'Make the code gud.',
            summary: 'This is a summary.'
        });
    }

    save() {
        console.log(this.executiveForm);
        console.log('Saved: ' + JSON.stringify(this.executiveForm.value));
    }
}