import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1462Component } from './page1462.component';

@NgModule({
  declarations: [Page1462Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1462Component }])],
  exports: [Page1462Component]
})
export class Page1462Module {}
