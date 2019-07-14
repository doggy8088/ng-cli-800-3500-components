import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3072Component } from './page3072.component';

@NgModule({
  declarations: [Page3072Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3072Component }])],
  exports: [Page3072Component]
})
export class Page3072Module {}
