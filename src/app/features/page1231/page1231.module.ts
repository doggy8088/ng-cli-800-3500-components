import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1231Component } from './page1231.component';

@NgModule({
  declarations: [Page1231Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1231Component }])],
  exports: [Page1231Component]
})
export class Page1231Module {}
