import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3271Component } from './page3271.component';

@NgModule({
  declarations: [Page3271Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3271Component }])],
  exports: [Page3271Component]
})
export class Page3271Module {}
