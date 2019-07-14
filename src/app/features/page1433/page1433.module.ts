import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1433Component } from './page1433.component';

@NgModule({
  declarations: [Page1433Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1433Component }])],
  exports: [Page1433Component]
})
export class Page1433Module {}
