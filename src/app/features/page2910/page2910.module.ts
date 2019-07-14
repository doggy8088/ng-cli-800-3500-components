import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2910Component } from './page2910.component';

@NgModule({
  declarations: [Page2910Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2910Component }])],
  exports: [Page2910Component]
})
export class Page2910Module {}
