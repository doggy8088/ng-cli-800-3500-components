import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3165Component } from './page3165.component';

@NgModule({
  declarations: [Page3165Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3165Component }])],
  exports: [Page3165Component]
})
export class Page3165Module {}
