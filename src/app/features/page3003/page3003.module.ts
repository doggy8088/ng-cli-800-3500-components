import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3003Component } from './page3003.component';

@NgModule({
  declarations: [Page3003Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3003Component }])],
  exports: [Page3003Component]
})
export class Page3003Module {}
