import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1834Component } from './page1834.component';

@NgModule({
  declarations: [Page1834Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1834Component }])],
  exports: [Page1834Component]
})
export class Page1834Module {}
