import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0740Component } from './page0740.component';

@NgModule({
  declarations: [Page0740Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0740Component }])],
  exports: [Page0740Component]
})
export class Page0740Module {}
