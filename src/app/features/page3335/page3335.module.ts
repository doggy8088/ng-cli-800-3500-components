import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3335Component } from './page3335.component';

@NgModule({
  declarations: [Page3335Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3335Component }])],
  exports: [Page3335Component]
})
export class Page3335Module {}
