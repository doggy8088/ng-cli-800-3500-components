import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2027Component } from './page2027.component';

@NgModule({
  declarations: [Page2027Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2027Component }])],
  exports: [Page2027Component]
})
export class Page2027Module {}
