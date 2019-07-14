import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3143Component } from './page3143.component';

@NgModule({
  declarations: [Page3143Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3143Component }])],
  exports: [Page3143Component]
})
export class Page3143Module {}
