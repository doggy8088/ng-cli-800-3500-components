import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1884Component } from './page1884.component';

@NgModule({
  declarations: [Page1884Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1884Component }])],
  exports: [Page1884Component]
})
export class Page1884Module {}
