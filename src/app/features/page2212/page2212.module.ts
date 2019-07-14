import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2212Component } from './page2212.component';

@NgModule({
  declarations: [Page2212Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2212Component }])],
  exports: [Page2212Component]
})
export class Page2212Module {}
