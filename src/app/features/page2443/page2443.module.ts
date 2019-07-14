import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2443Component } from './page2443.component';

@NgModule({
  declarations: [Page2443Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2443Component }])],
  exports: [Page2443Component]
})
export class Page2443Module {}
