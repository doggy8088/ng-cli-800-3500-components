import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0720Component } from './page0720.component';

@NgModule({
  declarations: [Page0720Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0720Component }])],
  exports: [Page0720Component]
})
export class Page0720Module {}
