import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2781Component } from './page2781.component';

@NgModule({
  declarations: [Page2781Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2781Component }])],
  exports: [Page2781Component]
})
export class Page2781Module {}
