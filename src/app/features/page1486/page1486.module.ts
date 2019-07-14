import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1486Component } from './page1486.component';

@NgModule({
  declarations: [Page1486Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1486Component }])],
  exports: [Page1486Component]
})
export class Page1486Module {}
