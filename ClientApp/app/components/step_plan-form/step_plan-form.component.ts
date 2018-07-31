import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StepPayPlan } from './StepPayPlan'; //our data model

@Component({
    selector: 'app-step_plan-form', //leave these as is for now (rename later)
    templateUrl: './step_plan-form.component.html',
    styleUrls: ['./step_plan-form.component.css']
})

export class Step_planFormComponent implements OnInit {
    stepPayPlanForm: FormGroup; // root formgroup property
    stepModel: StepPayPlan = new StepPayPlan(); // data model

    constructor(private fb: FormBuilder) { } // so we can inject the FormBuilder service

    ngOnInit(): void {
        this.stepPayPlanForm = this.fb.group({
            //sectionI
            teamworkRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]], //I'm not sure if these validators will work, I could add the ratingRange custom validationFN Function
            integrityRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            innovationRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            professionalismRating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            //sectionII
            rating: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
            responsibility: ['', [Validators.required, Validators.minLength(3)]], //keep these general validators for now
            summary: ['', [Validators.required, Validators.minLength(3)]],
            //sectionIII
            completionDate: ['', [Validators.required, Validators.minLength(3)]], //enter a manual date for now
            goal: ['', [Validators.required, Validators.minLength(3)]],
            //sectionIV
            raterComments: ['', [Validators.required, Validators.minLength(3)]],
            //sectionV
            reviewerComments: ['', [Validators.required, Validators.minLength(3)]],
            employeeComments: ['', [Validators.required, Validators.minLength(3)]],
            supervisorSignature: ['', [Validators.required, Validators.minLength(3)]],  //not sure what to do for these
            supervisorDate: ['', [Validators.required, Validators.minLength(3)]], //manual data
            supervisorSap: ['', [Validators.required, Validators.minLength(3)]],  //general validators
            officerSignature: ['', [Validators.required, Validators.minLength(3)]],     //not sure what to do for these
            officerDate: ['', [Validators.required, Validators.minLength(3)]], //manual data
            officerSap: ['', [Validators.required, Validators.minLength(3)]],  //general validators
            employeeSignature: ['', [Validators.required, Validators.minLength(3)]],     //not sure what to do for these
            employeeDate: ['', [Validators.required, Validators.minLength(3)]], //manual data
            employeeSap: ['', [Validators.required, Validators.minLength(3)]]  //general validators
        });
    }

    populateTestData(): void { //for testing purposes or demo purposes (side note, can we use this somehow for our auto-fill feature?)
        this.stepPayPlanForm.patchValue({
             teamworkRating: '3',
             integrityRating: '3',
             innovationRating: '3',
             professionalismRating: '3',
           
             rating: '3', 
             responsibility: 'Example Text Here',
             summary: 'Example Text Here',
            
             completionDate: 'mm/dd/yyyy',
             goal: 'Example Text Here',
            
             raterComments: 'Example Text Here',
            
             reviewerComments: 'Example Text Here',
             employeeComments: 'Example Text Here',
             supervisorSignature: 'Supervisor', 
             supervisorDate: 'mm/dd/yyyy',
             supervisorSap: '123456',
             officerSignature: 'Reviewing Officer',
             officerDate: 'mm/dd/yyyy',
             officerSap: '123456',
             employeeSignature: 'Reviewing Officer',
             employeeDate: 'mm/dd/yyyy',
             employeeSap: '123456'
        });
    }

    save() { //where is this saved to again? how is it saved?
        console.log(this.stepPayPlanForm);
        console.log('Saved: ' + JSON.stringify(this.stepPayPlanForm.value));
    }
}