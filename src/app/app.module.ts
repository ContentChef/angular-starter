import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ContentChefService } from './contentChef';
import { SitesListComponent } from './sites-list/sites-list.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    SitesListComponent,
    SiteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: SitesListComponent},
      { path: 'sites/:sitePublicId', component: SiteDetailComponent}
    ])
  ],
  providers: [
    ContentChefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
