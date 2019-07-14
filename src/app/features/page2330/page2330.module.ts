import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2330Component } from './page2330.component';

@NgModule({
  declarations: [Page2330Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2330Component }])],
  exports: [Page2330Component]
})
export class Page2330Module {}
