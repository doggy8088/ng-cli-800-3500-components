import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2152Component } from './page2152.component';

@NgModule({
  declarations: [Page2152Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2152Component }])],
  exports: [Page2152Component]
})
export class Page2152Module {}
