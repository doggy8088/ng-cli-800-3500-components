import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0129Component } from './page0129.component';

@NgModule({
  declarations: [Page0129Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0129Component }])],
  exports: [Page0129Component]
})
export class Page0129Module {}
