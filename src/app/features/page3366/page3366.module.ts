import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3366Component } from './page3366.component';

@NgModule({
  declarations: [Page3366Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3366Component }])],
  exports: [Page3366Component]
})
export class Page3366Module {}
