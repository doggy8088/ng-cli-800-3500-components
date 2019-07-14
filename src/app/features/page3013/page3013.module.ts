import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3013Component } from './page3013.component';

@NgModule({
  declarations: [Page3013Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3013Component }])],
  exports: [Page3013Component]
})
export class Page3013Module {}
