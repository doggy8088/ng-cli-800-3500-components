import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2109Component } from './page2109.component';

@NgModule({
  declarations: [Page2109Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2109Component }])],
  exports: [Page2109Component]
})
export class Page2109Module {}
