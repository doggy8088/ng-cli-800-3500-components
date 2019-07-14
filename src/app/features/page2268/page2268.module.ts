import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2268Component } from './page2268.component';

@NgModule({
  declarations: [Page2268Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2268Component }])],
  exports: [Page2268Component]
})
export class Page2268Module {}
