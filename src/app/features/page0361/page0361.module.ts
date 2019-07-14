import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0361Component } from './page0361.component';

@NgModule({
  declarations: [Page0361Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0361Component }])],
  exports: [Page0361Component]
})
export class Page0361Module {}
