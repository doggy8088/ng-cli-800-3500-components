import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1606Component } from './page1606.component';

@NgModule({
  declarations: [Page1606Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1606Component }])],
  exports: [Page1606Component]
})
export class Page1606Module {}
