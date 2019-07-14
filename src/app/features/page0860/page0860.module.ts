import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0860Component } from './page0860.component';

@NgModule({
  declarations: [Page0860Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0860Component }])],
  exports: [Page0860Component]
})
export class Page0860Module {}
