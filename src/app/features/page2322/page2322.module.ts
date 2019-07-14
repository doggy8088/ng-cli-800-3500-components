import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2322Component } from './page2322.component';

@NgModule({
  declarations: [Page2322Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2322Component }])],
  exports: [Page2322Component]
})
export class Page2322Module {}
