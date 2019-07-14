import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3360Component } from './page3360.component';

@NgModule({
  declarations: [Page3360Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3360Component }])],
  exports: [Page3360Component]
})
export class Page3360Module {}
