import { Routes } from '@angular/router';
import { MainContainerComponent } from './components/user/home-page/main-container.component';
import { RegistrationPageComponent } from './components/user/registration-page/registration-page.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';

export const routes: Routes = [
    { path: '', component: MainContainerComponent },
    { path: 'registration', component: RegistrationPageComponent },
    { path: 'admin', component: AdminPageComponent },
    //{ path: '**', component: PageNotFoundComponent }
];
