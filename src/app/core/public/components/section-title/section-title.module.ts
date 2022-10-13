import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title.component';

@NgModule({
  declarations: [SectionTitleComponent],
  exports: [SectionTitleComponent],
  imports: [CommonModule],
})
export class SectionTitleModule {}
