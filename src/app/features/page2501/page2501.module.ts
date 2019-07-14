import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2501Component } from './page2501.component';

@NgModule({
  declarations: [Page2501Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2501Component }])],
  exports: [Page2501Component]
})
export class Page2501Module {}
