import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3234Component } from './page3234.component';

@NgModule({
  declarations: [Page3234Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3234Component }])],
  exports: [Page3234Component]
})
export class Page3234Module {}
