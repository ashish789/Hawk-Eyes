import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DroneInfoComponent } from './drone-info/drone-info.component';
import { DroneDetailComponent } from './drone-detail/drone-detail.component';
import { DroneActionsComponent } from './drone-actions/drone-actions.component';
import { DroneNavMapComponent } from './drone-nav-map/drone-nav-map.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    DroneInfoComponent,
    DroneDetailComponent,
    DroneActionsComponent,
    DroneNavMapComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
