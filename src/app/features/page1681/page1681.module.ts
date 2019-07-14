import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1681Component } from './page1681.component';

@NgModule({
  declarations: [Page1681Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1681Component }])],
  exports: [Page1681Component]
})
export class Page1681Module {}
