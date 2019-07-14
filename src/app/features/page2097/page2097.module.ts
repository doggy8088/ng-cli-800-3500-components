import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2097Component } from './page2097.component';

@NgModule({
  declarations: [Page2097Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2097Component }])],
  exports: [Page2097Component]
})
export class Page2097Module {}
