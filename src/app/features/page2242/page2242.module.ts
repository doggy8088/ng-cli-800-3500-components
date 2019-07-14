import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2242Component } from './page2242.component';

@NgModule({
  declarations: [Page2242Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2242Component }])],
  exports: [Page2242Component]
})
export class Page2242Module {}
