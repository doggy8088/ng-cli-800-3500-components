import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2138Component } from './page2138.component';

@NgModule({
  declarations: [Page2138Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2138Component }])],
  exports: [Page2138Component]
})
export class Page2138Module {}
