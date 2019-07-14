import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2130Component } from './page2130.component';

@NgModule({
  declarations: [Page2130Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2130Component }])],
  exports: [Page2130Component]
})
export class Page2130Module {}
