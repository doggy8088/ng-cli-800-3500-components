import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1849Component } from './page1849.component';

@NgModule({
  declarations: [Page1849Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1849Component }])],
  exports: [Page1849Component]
})
export class Page1849Module {}
