import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3224Component } from './page3224.component';

@NgModule({
  declarations: [Page3224Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3224Component }])],
  exports: [Page3224Component]
})
export class Page3224Module {}
