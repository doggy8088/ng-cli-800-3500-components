import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2805Component } from './page2805.component';

@NgModule({
  declarations: [Page2805Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2805Component }])],
  exports: [Page2805Component]
})
export class Page2805Module {}
