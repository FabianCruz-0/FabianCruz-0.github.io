import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ThreeBackComponent } from './components/three-back/three-back.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ThreeBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
