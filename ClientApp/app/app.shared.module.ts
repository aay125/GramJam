import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        LoginComponent,
        CounterComponent,
        HomeComponent,
        performanceComponent,
        ExecuteFormComponent,
        Step_planFormComponent,
        FormViewComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
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
            { path: '**', redirectTo: 'home' }
        ])
    ],

    providers: [UserService, AuthguardGuard]

})
export class AppModuleShared {
}
