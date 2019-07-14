import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2620Component } from './page2620.component';

@NgModule({
  declarations: [Page2620Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2620Component }])],
  exports: [Page2620Component]
})
export class Page2620Module {}
