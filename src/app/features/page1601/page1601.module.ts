import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1601Component } from './page1601.component';

@NgModule({
  declarations: [Page1601Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1601Component }])],
  exports: [Page1601Component]
})
export class Page1601Module {}
