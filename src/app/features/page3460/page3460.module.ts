import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3460Component } from './page3460.component';

@NgModule({
  declarations: [Page3460Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3460Component }])],
  exports: [Page3460Component]
})
export class Page3460Module {}
