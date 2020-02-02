import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakesComponent } from './makes/makes.component';
import { ModelsComponent } from './models/models.component';
import { TrimsComponent } from './trims/trims.component';


const routes: Routes = [
{path:'makes', component: MakesComponent},
{path:'models', component: ModelsComponent},
{path:'models/:name/:id', component: ModelsComponent},
{path:'models/:name/:id/:year', component: ModelsComponent},
{path:'trims', component: TrimsComponent},
{path:'trims/:id/:model', component: TrimsComponent},
{path:'trims/:id/:model/:year', component: TrimsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
