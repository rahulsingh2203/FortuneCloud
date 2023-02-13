import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { ITComponent } from './components/it/it.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { StaffingComponent } from './components/staffing/staffing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    BlogComponent,
    ReviewComponent,
    ContactComponent,
    ITComponent,
    CloudComponent,
    StaffingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
