import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1159Component } from './page1159.component';

@NgModule({
  declarations: [Page1159Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1159Component }])],
  exports: [Page1159Component]
})
export class Page1159Module {}
