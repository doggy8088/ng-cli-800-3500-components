import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2021Component } from './page2021.component';

@NgModule({
  declarations: [Page2021Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2021Component }])],
  exports: [Page2021Component]
})
export class Page2021Module {}
