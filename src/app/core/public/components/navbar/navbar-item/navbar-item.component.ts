import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
})
export class NavbarItemComponent {
  @Input() item!: {
    href: string;
    label: string;
  };
}
