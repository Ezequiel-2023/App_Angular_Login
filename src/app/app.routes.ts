import { ProfileComponent } from './views/profile/profile.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { AuthGuard } from './guards/auth.guard';
import { SociaNetworksComponent } from './views/socia-networks/socia-networks.component';


export const routes: Routes = [
    {path:'', 
        component: AuthLayoutComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'register', component: RegisterComponent}
        ],
    },
    {path: '',
        component : AdminLayoutsComponent,
        children:[
            {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},//ruta protegida
            {path:'socialProfile', component: SociaNetworksComponent}
        ]
    }
];
