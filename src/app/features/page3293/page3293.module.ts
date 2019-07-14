import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3293Component } from './page3293.component';

@NgModule({
  declarations: [Page3293Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3293Component }])],
  exports: [Page3293Component]
})
export class Page3293Module {}
