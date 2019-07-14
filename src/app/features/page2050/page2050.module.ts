import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2050Component } from './page2050.component';

@NgModule({
  declarations: [Page2050Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2050Component }])],
  exports: [Page2050Component]
})
export class Page2050Module {}
