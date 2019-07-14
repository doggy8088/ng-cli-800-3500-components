import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1305Component } from './page1305.component';

@NgModule({
  declarations: [Page1305Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1305Component }])],
  exports: [Page1305Component]
})
export class Page1305Module {}
