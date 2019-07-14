import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2555Component } from './page2555.component';

@NgModule({
  declarations: [Page2555Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2555Component }])],
  exports: [Page2555Component]
})
export class Page2555Module {}
