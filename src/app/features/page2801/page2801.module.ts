import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2801Component } from './page2801.component';

@NgModule({
  declarations: [Page2801Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2801Component }])],
  exports: [Page2801Component]
})
export class Page2801Module {}
