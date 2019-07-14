import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2187Component } from './page2187.component';

@NgModule({
  declarations: [Page2187Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2187Component }])],
  exports: [Page2187Component]
})
export class Page2187Module {}
