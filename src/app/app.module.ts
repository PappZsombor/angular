import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importálás
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddPlaneComponent } from './add-plane/add-plane.component';
import { PlaneService } from './plane.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPlaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Hozzáadás
    HttpClientModule
  ],
  providers: [PlaneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
