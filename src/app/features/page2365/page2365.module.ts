import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2365Component } from './page2365.component';

@NgModule({
  declarations: [Page2365Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2365Component }])],
  exports: [Page2365Component]
})
export class Page2365Module {}
