import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2640Component } from './page2640.component';

@NgModule({
  declarations: [Page2640Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2640Component }])],
  exports: [Page2640Component]
})
export class Page2640Module {}
