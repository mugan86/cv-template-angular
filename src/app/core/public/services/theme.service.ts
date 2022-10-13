import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeTypes, EThemeVariant } from '@core/public/constants/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = new BehaviorSubject<ThemeTypes>(
    (localStorage.getItem('theme') || EThemeVariant.PRIMARY) as ThemeTypes
  );
  theme$ = this.theme.asObservable();

  change(theme: ThemeTypes) {
    this.theme.next(theme);
  }
}
