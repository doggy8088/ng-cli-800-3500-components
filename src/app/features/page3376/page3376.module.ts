import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3376Component } from './page3376.component';

@NgModule({
  declarations: [Page3376Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3376Component }])],
  exports: [Page3376Component]
})
export class Page3376Module {}
