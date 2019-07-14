import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0490Component } from './page0490.component';

@NgModule({
  declarations: [Page0490Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0490Component }])],
  exports: [Page0490Component]
})
export class Page0490Module {}
