import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2038Component } from './page2038.component';

@NgModule({
  declarations: [Page2038Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2038Component }])],
  exports: [Page2038Component]
})
export class Page2038Module {}
