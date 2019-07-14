import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3347Component } from './page3347.component';

@NgModule({
  declarations: [Page3347Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3347Component }])],
  exports: [Page3347Component]
})
export class Page3347Module {}
