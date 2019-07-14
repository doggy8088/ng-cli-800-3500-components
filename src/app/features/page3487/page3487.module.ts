import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3487Component } from './page3487.component';

@NgModule({
  declarations: [Page3487Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3487Component }])],
  exports: [Page3487Component]
})
export class Page3487Module {}
