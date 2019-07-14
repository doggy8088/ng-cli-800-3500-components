import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2978Component } from './page2978.component';

@NgModule({
  declarations: [Page2978Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2978Component }])],
  exports: [Page2978Component]
})
export class Page2978Module {}
