import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2771Component } from './page2771.component';

@NgModule({
  declarations: [Page2771Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2771Component }])],
  exports: [Page2771Component]
})
export class Page2771Module {}
