import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3370Component } from './page3370.component';

@NgModule({
  declarations: [Page3370Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3370Component }])],
  exports: [Page3370Component]
})
export class Page3370Module {}
