import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3184Component } from './page3184.component';

@NgModule({
  declarations: [Page3184Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3184Component }])],
  exports: [Page3184Component]
})
export class Page3184Module {}
