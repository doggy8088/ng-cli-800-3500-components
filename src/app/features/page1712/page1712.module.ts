import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1712Component } from './page1712.component';

@NgModule({
  declarations: [Page1712Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1712Component }])],
  exports: [Page1712Component]
})
export class Page1712Module {}
