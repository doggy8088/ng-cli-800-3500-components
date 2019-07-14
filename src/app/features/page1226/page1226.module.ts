import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1226Component } from './page1226.component';

@NgModule({
  declarations: [Page1226Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1226Component }])],
  exports: [Page1226Component]
})
export class Page1226Module {}
