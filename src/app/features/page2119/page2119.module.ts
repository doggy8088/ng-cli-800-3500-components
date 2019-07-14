import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2119Component } from './page2119.component';

@NgModule({
  declarations: [Page2119Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2119Component }])],
  exports: [Page2119Component]
})
export class Page2119Module {}
