import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2870Component } from './page2870.component';

@NgModule({
  declarations: [Page2870Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2870Component }])],
  exports: [Page2870Component]
})
export class Page2870Module {}
