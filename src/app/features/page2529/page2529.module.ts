import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2529Component } from './page2529.component';

@NgModule({
  declarations: [Page2529Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2529Component }])],
  exports: [Page2529Component]
})
export class Page2529Module {}
