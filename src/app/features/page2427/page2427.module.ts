import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2427Component } from './page2427.component';

@NgModule({
  declarations: [Page2427Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2427Component }])],
  exports: [Page2427Component]
})
export class Page2427Module {}
