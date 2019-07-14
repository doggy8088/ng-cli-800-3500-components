import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2625Component } from './page2625.component';

@NgModule({
  declarations: [Page2625Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2625Component }])],
  exports: [Page2625Component]
})
export class Page2625Module {}
