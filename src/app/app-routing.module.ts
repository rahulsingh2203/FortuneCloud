import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ITComponent } from './components/it/it.component';
import { ReviewComponent } from './components/review/review.component';
import { StaffingComponent } from './components/staffing/staffing.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:"IT",
    component: ITComponent
  },
  {
    path: 'cloud',
    component: CloudComponent
  },
  {
    path:'staffing',
    component: StaffingComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
