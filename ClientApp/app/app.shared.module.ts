import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { performanceComponent } from './components/performance/performance.component';
import { ExecuteFormComponent } from './components/execute-form/execute-form.component';
import { Step_planFormComponent } from './components/step_plan-form/step_plan-form.component';
import { LoginComponent } from './components/login/login.component';
import { FormViewComponent } from './components/formView/formView.component'
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { Basic_infoFormComponent } from './components/basic_info-form/basic_info-form.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        LoginComponent,
        CounterComponent,
        performanceComponent,
        ExecuteFormComponent,
        Step_planFormComponent,
        FormViewComponent,
        HomeComponent,
        Basic_infoFormComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'execute', component: ExecuteFormComponent},
            { path: 'performance', component: performanceComponent },
            { path: 'step', component: Step_planFormComponent },
            { path: 'login', component: LoginComponent },
            { path: 'formView', canActivate: [AuthguardGuard], component: FormViewComponent },
            //test path to forms page
            { path: 'forms', component: FormViewComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],

    providers: [UserService, AuthguardGuard]

})
export class AppModuleShared {
}
