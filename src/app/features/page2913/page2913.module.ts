import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2913Component } from './page2913.component';

@NgModule({
  declarations: [Page2913Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2913Component }])],
  exports: [Page2913Component]
})
export class Page2913Module {}
