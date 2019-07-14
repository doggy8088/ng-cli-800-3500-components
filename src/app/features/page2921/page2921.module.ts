import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2921Component } from './page2921.component';

@NgModule({
  declarations: [Page2921Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2921Component }])],
  exports: [Page2921Component]
})
export class Page2921Module {}
