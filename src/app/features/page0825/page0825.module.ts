import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0825Component } from './page0825.component';

@NgModule({
  declarations: [Page0825Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0825Component }])],
  exports: [Page0825Component]
})
export class Page0825Module {}
