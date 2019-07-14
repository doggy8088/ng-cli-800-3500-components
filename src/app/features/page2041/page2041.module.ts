import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2041Component } from './page2041.component';

@NgModule({
  declarations: [Page2041Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2041Component }])],
  exports: [Page2041Component]
})
export class Page2041Module {}
