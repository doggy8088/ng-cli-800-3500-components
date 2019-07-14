import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3313Component } from './page3313.component';

@NgModule({
  declarations: [Page3313Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3313Component }])],
  exports: [Page3313Component]
})
export class Page3313Module {}
