import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3398Component } from './page3398.component';

@NgModule({
  declarations: [Page3398Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3398Component }])],
  exports: [Page3398Component]
})
export class Page3398Module {}
