import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1494Component } from './page1494.component';

@NgModule({
  declarations: [Page1494Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1494Component }])],
  exports: [Page1494Component]
})
export class Page1494Module {}
