import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2423Component } from './page2423.component';

@NgModule({
  declarations: [Page2423Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2423Component }])],
  exports: [Page2423Component]
})
export class Page2423Module {}
