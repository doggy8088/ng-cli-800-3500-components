import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0024Component } from './page0024.component';

@NgModule({
  declarations: [Page0024Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0024Component }])],
  exports: [Page0024Component]
})
export class Page0024Module {}
