import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2634Component } from './page2634.component';

@NgModule({
  declarations: [Page2634Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2634Component }])],
  exports: [Page2634Component]
})
export class Page2634Module {}
