import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3375Component } from './page3375.component';

@NgModule({
  declarations: [Page3375Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3375Component }])],
  exports: [Page3375Component]
})
export class Page3375Module {}
