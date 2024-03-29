import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SearchComponent } from './pages/search/search.component';
import { ErrorComponent } from './pages/error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaroselComponent } from './components/carosel/carosel.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    EventsComponent,
    AboutUsComponent,
    SearchComponent,
    ErrorComponent,
    CaroselComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
