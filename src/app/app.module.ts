import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PublicNavbarModule } from '@core/public/components/navbar/navbar.module';
import { SectionTitleModule } from '@core/public/components/section-title/section-title.module';
import { FaIconsModule } from '@shared/components/fa-icons/fa-icons.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FaIconsModule,
    PublicNavbarModule,
    SectionTitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
