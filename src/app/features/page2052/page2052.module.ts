import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2052Component } from './page2052.component';

@NgModule({
  declarations: [Page2052Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2052Component }])],
  exports: [Page2052Component]
})
export class Page2052Module {}
