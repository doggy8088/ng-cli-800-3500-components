import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0479Component } from './page0479.component';

@NgModule({
  declarations: [Page0479Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0479Component }])],
  exports: [Page0479Component]
})
export class Page0479Module {}
