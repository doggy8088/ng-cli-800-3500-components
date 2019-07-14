import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2436Component } from './page2436.component';

@NgModule({
  declarations: [Page2436Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2436Component }])],
  exports: [Page2436Component]
})
export class Page2436Module {}
