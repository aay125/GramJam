/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { Step_planFormComponent } from './step_plan-form.component';

let component: Step_planFormComponent;
let fixture: ComponentFixture<Step_planFormComponent>;

describe('step_plan-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ Step_planFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(Step_planFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});