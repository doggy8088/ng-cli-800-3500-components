import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1271Component } from './page1271.component';

@NgModule({
  declarations: [Page1271Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1271Component }])],
  exports: [Page1271Component]
})
export class Page1271Module {}
