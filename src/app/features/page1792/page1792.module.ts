import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1792Component } from './page1792.component';

@NgModule({
  declarations: [Page1792Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1792Component }])],
  exports: [Page1792Component]
})
export class Page1792Module {}
