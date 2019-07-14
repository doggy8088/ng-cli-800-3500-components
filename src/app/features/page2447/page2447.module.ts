import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2447Component } from './page2447.component';

@NgModule({
  declarations: [Page2447Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2447Component }])],
  exports: [Page2447Component]
})
export class Page2447Module {}
