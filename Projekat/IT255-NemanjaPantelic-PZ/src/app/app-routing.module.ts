import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakesComponent } from './makes/makes.component';
import { ModelsComponent } from './models/models.component';


const routes: Routes = [
{path:'makes', component: MakesComponent},
{path:'models', component: ModelsComponent},
{path:'models/:id', component: ModelsComponent},
{path:'models/:id/:year', component: ModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
