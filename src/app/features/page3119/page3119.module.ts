import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3119Component } from './page3119.component';

@NgModule({
  declarations: [Page3119Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3119Component }])],
  exports: [Page3119Component]
})
export class Page3119Module {}
