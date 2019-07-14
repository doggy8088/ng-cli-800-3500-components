import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0111Component } from './page0111.component';

@NgModule({
  declarations: [Page0111Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0111Component }])],
  exports: [Page0111Component]
})
export class Page0111Module {}
