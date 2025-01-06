import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlaneComponent } from './add-plane/add-plane.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'add-plane', component: AddPlaneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
