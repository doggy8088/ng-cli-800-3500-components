import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3333Component } from './page3333.component';

@NgModule({
  declarations: [Page3333Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3333Component }])],
  exports: [Page3333Component]
})
export class Page3333Module {}
