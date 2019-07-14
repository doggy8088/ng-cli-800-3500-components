import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2747Component } from './page2747.component';

@NgModule({
  declarations: [Page2747Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2747Component }])],
  exports: [Page2747Component]
})
export class Page2747Module {}
