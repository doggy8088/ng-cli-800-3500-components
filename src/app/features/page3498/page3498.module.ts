import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3498Component } from './page3498.component';

@NgModule({
  declarations: [Page3498Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3498Component }])],
  exports: [Page3498Component]
})
export class Page3498Module {}
