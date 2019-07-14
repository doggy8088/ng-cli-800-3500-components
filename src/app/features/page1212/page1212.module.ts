import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1212Component } from './page1212.component';

@NgModule({
  declarations: [Page1212Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1212Component }])],
  exports: [Page1212Component]
})
export class Page1212Module {}
