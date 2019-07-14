import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1268Component } from './page1268.component';

@NgModule({
  declarations: [Page1268Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1268Component }])],
  exports: [Page1268Component]
})
export class Page1268Module {}
