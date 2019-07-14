import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1984Component } from './page1984.component';

@NgModule({
  declarations: [Page1984Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1984Component }])],
  exports: [Page1984Component]
})
export class Page1984Module {}
