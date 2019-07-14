import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2031Component } from './page2031.component';

@NgModule({
  declarations: [Page2031Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2031Component }])],
  exports: [Page2031Component]
})
export class Page2031Module {}
