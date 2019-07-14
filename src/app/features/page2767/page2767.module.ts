import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2767Component } from './page2767.component';

@NgModule({
  declarations: [Page2767Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2767Component }])],
  exports: [Page2767Component]
})
export class Page2767Module {}
