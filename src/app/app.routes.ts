import { Routes } from '@angular/router';
import { Api1Component } from './componentes/api1/api1.component';
import { Api2Component } from './componentes/api2/api2.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'Api1' ,component: Api1Component},
    {path: 'Api2' ,component: Api2Component},
];
