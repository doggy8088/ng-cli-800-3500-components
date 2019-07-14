import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2059Component } from './page2059.component';

@NgModule({
  declarations: [Page2059Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2059Component }])],
  exports: [Page2059Component]
})
export class Page2059Module {}
