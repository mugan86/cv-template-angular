import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';

@NgModule({
  declarations: [NavbarComponent, NavbarItemComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class PublicNavbarModule {}
