import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EThemeVariant } from '@core/public/constants/theme';
import { ThemeService } from '@core/public/services/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class PublicBaseComponent implements OnInit, OnDestroy {
  theme = EThemeVariant.PRIMARY;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  themeService = inject(ThemeService);

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
