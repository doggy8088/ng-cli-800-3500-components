import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2114Component } from './page2114.component';

@NgModule({
  declarations: [Page2114Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2114Component }])],
  exports: [Page2114Component]
})
export class Page2114Module {}
