﻿/*
import { Component } from '@angular/core';

@Component({
    selector: 'app-step_plan-form',
    templateUrl: './step_plan-form.component.html',
    styleUrls: ['./step_plan-form.component.css']
})
// step_plan-form component
export class Step_planFormComponent {
    // step_plan-form ctor
    constructor() {

    }
}
*/

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
            officerSignature: ['', [Validators.required, Validators.minLength(3)]],     //not sure what to do for these
            date: ['', [Validators.required, Validators.minLength(3)]], //manual data
            sap: ['', [Validators.required, Validators.minLength(3)]],  //general validators
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
             officerSignature: 'Reviewing Officer',
             date: 'mm/dd/yyyy',
             sap: '123456'
        });
    }

    save() { //where is this saved to again? how is it saved?
        console.log(this.stepPayPlanForm);
        console.log('Saved: ' + JSON.stringify(this.stepPayPlanForm.value));
    }
}