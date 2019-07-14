import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1898Component } from './page1898.component';

@NgModule({
  declarations: [Page1898Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1898Component }])],
  exports: [Page1898Component]
})
export class Page1898Module {}
