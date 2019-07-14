import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2196Component } from './page2196.component';

@NgModule({
  declarations: [Page2196Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2196Component }])],
  exports: [Page2196Component]
})
export class Page2196Module {}
