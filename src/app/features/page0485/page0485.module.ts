import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0485Component } from './page0485.component';

@NgModule({
  declarations: [Page0485Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0485Component }])],
  exports: [Page0485Component]
})
export class Page0485Module {}
