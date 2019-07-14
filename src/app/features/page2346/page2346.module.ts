import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2346Component } from './page2346.component';

@NgModule({
  declarations: [Page2346Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2346Component }])],
  exports: [Page2346Component]
})
export class Page2346Module {}
