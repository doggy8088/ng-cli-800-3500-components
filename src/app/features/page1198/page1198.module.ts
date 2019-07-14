import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1198Component } from './page1198.component';

@NgModule({
  declarations: [Page1198Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1198Component }])],
  exports: [Page1198Component]
})
export class Page1198Module {}
