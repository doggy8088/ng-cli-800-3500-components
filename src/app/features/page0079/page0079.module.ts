import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0079Component } from './page0079.component';

@NgModule({
  declarations: [Page0079Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0079Component }])],
  exports: [Page0079Component]
})
export class Page0079Module {}
