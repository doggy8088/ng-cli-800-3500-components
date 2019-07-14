import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1931Component } from './page1931.component';

@NgModule({
  declarations: [Page1931Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1931Component }])],
  exports: [Page1931Component]
})
export class Page1931Module {}
