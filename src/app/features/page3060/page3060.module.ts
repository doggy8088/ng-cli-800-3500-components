import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3060Component } from './page3060.component';

@NgModule({
  declarations: [Page3060Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3060Component }])],
  exports: [Page3060Component]
})
export class Page3060Module {}
