import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3391Component } from './page3391.component';

@NgModule({
  declarations: [Page3391Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3391Component }])],
  exports: [Page3391Component]
})
export class Page3391Module {}
