import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SearchComponent } from './pages/search/search.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
