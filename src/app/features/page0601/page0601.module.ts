import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0601Component } from './page0601.component';

@NgModule({
  declarations: [Page0601Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0601Component }])],
  exports: [Page0601Component]
})
export class Page0601Module {}
