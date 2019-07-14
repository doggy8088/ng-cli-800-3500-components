import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1439Component } from './page1439.component';

@NgModule({
  declarations: [Page1439Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1439Component }])],
  exports: [Page1439Component]
})
export class Page1439Module {}
