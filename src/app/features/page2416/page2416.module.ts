import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2416Component } from './page2416.component';

@NgModule({
  declarations: [Page2416Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2416Component }])],
  exports: [Page2416Component]
})
export class Page2416Module {}
