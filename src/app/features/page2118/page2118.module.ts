import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2118Component } from './page2118.component';

@NgModule({
  declarations: [Page2118Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2118Component }])],
  exports: [Page2118Component]
})
export class Page2118Module {}
