import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2270Component } from './page2270.component';

@NgModule({
  declarations: [Page2270Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2270Component }])],
  exports: [Page2270Component]
})
export class Page2270Module {}
