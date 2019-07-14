import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0837Component } from './page0837.component';

@NgModule({
  declarations: [Page0837Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0837Component }])],
  exports: [Page0837Component]
})
export class Page0837Module {}
