import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2476Component } from './page2476.component';

@NgModule({
  declarations: [Page2476Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2476Component }])],
  exports: [Page2476Component]
})
export class Page2476Module {}
