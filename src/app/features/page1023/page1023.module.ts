import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1023Component } from './page1023.component';

@NgModule({
  declarations: [Page1023Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1023Component }])],
  exports: [Page1023Component]
})
export class Page1023Module {}
