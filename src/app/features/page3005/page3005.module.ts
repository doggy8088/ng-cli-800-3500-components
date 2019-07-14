import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3005Component } from './page3005.component';

@NgModule({
  declarations: [Page3005Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3005Component }])],
  exports: [Page3005Component]
})
export class Page3005Module {}
