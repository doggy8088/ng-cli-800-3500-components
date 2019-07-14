import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2262Component } from './page2262.component';

@NgModule({
  declarations: [Page2262Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2262Component }])],
  exports: [Page2262Component]
})
export class Page2262Module {}
