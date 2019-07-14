import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1972Component } from './page1972.component';

@NgModule({
  declarations: [Page1972Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1972Component }])],
  exports: [Page1972Component]
})
export class Page1972Module {}
