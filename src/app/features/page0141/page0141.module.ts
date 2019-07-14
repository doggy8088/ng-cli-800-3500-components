import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0141Component } from './page0141.component';

@NgModule({
  declarations: [Page0141Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0141Component }])],
  exports: [Page0141Component]
})
export class Page0141Module {}
