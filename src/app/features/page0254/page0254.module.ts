import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0254Component } from './page0254.component';

@NgModule({
  declarations: [Page0254Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0254Component }])],
  exports: [Page0254Component]
})
export class Page0254Module {}
