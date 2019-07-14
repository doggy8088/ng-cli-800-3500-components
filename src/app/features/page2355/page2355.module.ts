import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2355Component } from './page2355.component';

@NgModule({
  declarations: [Page2355Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2355Component }])],
  exports: [Page2355Component]
})
export class Page2355Module {}
