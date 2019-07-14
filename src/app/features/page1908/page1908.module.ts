import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1908Component } from './page1908.component';

@NgModule({
  declarations: [Page1908Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1908Component }])],
  exports: [Page1908Component]
})
export class Page1908Module {}
