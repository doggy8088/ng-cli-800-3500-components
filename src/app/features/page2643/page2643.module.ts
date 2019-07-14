import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2643Component } from './page2643.component';

@NgModule({
  declarations: [Page2643Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2643Component }])],
  exports: [Page2643Component]
})
export class Page2643Module {}
