import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2409Component } from './page2409.component';

@NgModule({
  declarations: [Page2409Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2409Component }])],
  exports: [Page2409Component]
})
export class Page2409Module {}
