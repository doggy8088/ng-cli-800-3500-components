import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2677Component } from './page2677.component';

@NgModule({
  declarations: [Page2677Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2677Component }])],
  exports: [Page2677Component]
})
export class Page2677Module {}
