import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1664Component } from './page1664.component';

@NgModule({
  declarations: [Page1664Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1664Component }])],
  exports: [Page1664Component]
})
export class Page1664Module {}
