import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2171Component } from './page2171.component';

@NgModule({
  declarations: [Page2171Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2171Component }])],
  exports: [Page2171Component]
})
export class Page2171Module {}
