import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3317Component } from './page3317.component';

@NgModule({
  declarations: [Page3317Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3317Component }])],
  exports: [Page3317Component]
})
export class Page3317Module {}
