import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { HomeComponent } from './home/home.component';
import { WishesComponent } from './wishes/wishes.component';
const routes: Routes = [
  { path: 'ourStory', component: OurStoryComponent },
  { path: 'home', component: HomeComponent},
  { path: 'wishes', component: WishesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
