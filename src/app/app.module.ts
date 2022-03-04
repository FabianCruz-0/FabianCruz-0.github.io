import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ThreeBackComponent } from './components/three-back/three-back.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PixiBackComponent } from './components/pixi-back/pixi-back.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ThreeBackComponent,
    ProjectsComponent,
    PixiBackComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
