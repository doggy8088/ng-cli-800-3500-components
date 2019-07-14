import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2760Component } from './page2760.component';

@NgModule({
  declarations: [Page2760Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2760Component }])],
  exports: [Page2760Component]
})
export class Page2760Module {}
