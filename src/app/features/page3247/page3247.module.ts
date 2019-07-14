import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3247Component } from './page3247.component';

@NgModule({
  declarations: [Page3247Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3247Component }])],
  exports: [Page3247Component]
})
export class Page3247Module {}
