import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2354Component } from './page2354.component';

@NgModule({
  declarations: [Page2354Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2354Component }])],
  exports: [Page2354Component]
})
export class Page2354Module {}
