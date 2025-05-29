import { NgModule } from '@angular/core';
import { HoverBorderDirective } from './hover-border.directive';

@NgModule({
  declarations: [
    HoverBorderDirective
  ],
  exports: [
    HoverBorderDirective
  ]
})
export class SharedDirectivesModule { }
