import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2349Component } from './page2349.component';

@NgModule({
  declarations: [Page2349Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2349Component }])],
  exports: [Page2349Component]
})
export class Page2349Module {}
