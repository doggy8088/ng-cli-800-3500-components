import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2096Component } from './page2096.component';

@NgModule({
  declarations: [Page2096Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2096Component }])],
  exports: [Page2096Component]
})
export class Page2096Module {}
