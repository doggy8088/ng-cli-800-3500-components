import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2618Component } from './page2618.component';

@NgModule({
  declarations: [Page2618Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2618Component }])],
  exports: [Page2618Component]
})
export class Page2618Module {}
