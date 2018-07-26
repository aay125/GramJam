import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { performanceComponent } from './components/performance/performance.component';
import { ExecuteFormComponent } from './components/execute-form/execute-form.component';
import { Step_planFormComponent } from './components/step_plan-form/step_plan-form.component';
import { LoginComponent } from './components/login/login.component';
import { FormViewComponent } from './components/formView/formView.component'
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { Basic_infoFormComponent } from './components/basic_info-form/basic_info-form.component';
import { ListViewComponent } from './components/listView/listView.component';
import { AppealFormComponent } from './components/appeal-form/appeal-form.component';
import { SignatureComponent } from './components/signature/signature.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        LoginComponent,
        performanceComponent,
        ExecuteFormComponent,
        Step_planFormComponent,
        AppealFormComponent,
        FormViewComponent,
        HomeComponent,
        ListViewComponent,
        Basic_infoFormComponent,
        SignatureComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'execute', component: ExecuteFormComponent},
            { path: 'performance', component: performanceComponent },
            { path: 'step', component: Step_planFormComponent },
            { path: 'appeal', component: AppealFormComponent },
            { path: 'login', component: LoginComponent },
            { path: 'formView', component: FormViewComponent },
            { path: 'forms', component: FormViewComponent },
            { path: 'listView', component: ListViewComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],

    providers: [UserService, AuthguardGuard]

})
export class AppModuleShared {
}