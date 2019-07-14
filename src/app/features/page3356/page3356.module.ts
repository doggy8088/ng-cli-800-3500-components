import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3356Component } from './page3356.component';

@NgModule({
  declarations: [Page3356Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3356Component }])],
  exports: [Page3356Component]
})
export class Page3356Module {}
