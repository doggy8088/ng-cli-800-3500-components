import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2241Component } from './page2241.component';

@NgModule({
  declarations: [Page2241Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2241Component }])],
  exports: [Page2241Component]
})
export class Page2241Module {}
