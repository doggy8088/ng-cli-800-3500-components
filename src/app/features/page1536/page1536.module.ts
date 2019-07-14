import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1536Component } from './page1536.component';

@NgModule({
  declarations: [Page1536Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1536Component }])],
  exports: [Page1536Component]
})
export class Page1536Module {}
