import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3040Component } from './page3040.component';

@NgModule({
  declarations: [Page3040Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3040Component }])],
  exports: [Page3040Component]
})
export class Page3040Module {}
