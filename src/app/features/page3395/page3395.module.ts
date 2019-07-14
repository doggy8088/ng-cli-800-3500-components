import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3395Component } from './page3395.component';

@NgModule({
  declarations: [Page3395Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3395Component }])],
  exports: [Page3395Component]
})
export class Page3395Module {}
