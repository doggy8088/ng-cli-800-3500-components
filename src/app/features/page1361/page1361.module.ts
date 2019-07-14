import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1361Component } from './page1361.component';

@NgModule({
  declarations: [Page1361Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1361Component }])],
  exports: [Page1361Component]
})
export class Page1361Module {}
