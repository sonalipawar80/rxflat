import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MergeMapUsersComponent } from './shared/components/merge-map-users/merge-map-users.component';
import { MergeMapPostsComponent } from './shared/components/merge-map-posts/merge-map-posts.component';
import {MatCardModule} from '@angular/material/card';
import { MergeMapProdComponent } from './shared/components/merge-map-prod/merge-map-prod.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MergeMapUsersComponent,
    MergeMapPostsComponent,
    MergeMapProdComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
