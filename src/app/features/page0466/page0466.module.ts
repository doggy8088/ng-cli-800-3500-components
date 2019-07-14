import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0466Component } from './page0466.component';

@NgModule({
  declarations: [Page0466Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0466Component }])],
  exports: [Page0466Component]
})
export class Page0466Module {}
