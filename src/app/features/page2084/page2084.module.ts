import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2084Component } from './page2084.component';

@NgModule({
  declarations: [Page2084Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2084Component }])],
  exports: [Page2084Component]
})
export class Page2084Module {}
