import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3027Component } from './page3027.component';

@NgModule({
  declarations: [Page3027Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3027Component }])],
  exports: [Page3027Component]
})
export class Page3027Module {}
