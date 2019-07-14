import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3237Component } from './page3237.component';

@NgModule({
  declarations: [Page3237Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3237Component }])],
  exports: [Page3237Component]
})
export class Page3237Module {}
