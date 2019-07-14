import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1585Component } from './page1585.component';

@NgModule({
  declarations: [Page1585Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1585Component }])],
  exports: [Page1585Component]
})
export class Page1585Module {}
