import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2101Component } from './page2101.component';

@NgModule({
  declarations: [Page2101Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2101Component }])],
  exports: [Page2101Component]
})
export class Page2101Module {}
