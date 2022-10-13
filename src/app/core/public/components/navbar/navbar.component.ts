import { Component, OnDestroy, OnInit } from '@angular/core';
import { PublicBaseComponent } from '@core/public/components/base.component';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent
  extends PublicBaseComponent
  implements OnInit, OnDestroy
{
  items: Array<{
    href: string;
    label: string;
  }> = [
    {
      href: 'about',
      label: 'About',
    },
    {
      href: 'experience',
      label: 'Experience',
    },
    {
      href: 'education',
      label: 'Education',
    },
    {
      href: 'skills',
      label: 'Skills',
    },
    {
      href: 'interests',
      label: 'Interests',
    },
    {
      href: 'awards',
      label: 'Awards',
    },
  ];
}
