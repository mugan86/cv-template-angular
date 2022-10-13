import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EThemeVariant } from '@core/public/constants/theme';
import { ThemeService } from '@core/public/services/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  theme = EThemeVariant.PRIMARY;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  themeService = inject(ThemeService);
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

  ngOnInit(): void {
    this.themeService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => (this.theme = theme));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
