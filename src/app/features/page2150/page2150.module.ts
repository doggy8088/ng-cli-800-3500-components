import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2150Component } from './page2150.component';

@NgModule({
  declarations: [Page2150Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2150Component }])],
  exports: [Page2150Component]
})
export class Page2150Module {}
