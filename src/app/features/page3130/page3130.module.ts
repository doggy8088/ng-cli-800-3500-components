import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3130Component } from './page3130.component';

@NgModule({
  declarations: [Page3130Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3130Component }])],
  exports: [Page3130Component]
})
export class Page3130Module {}
