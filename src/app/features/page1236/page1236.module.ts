import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1236Component } from './page1236.component';

@NgModule({
  declarations: [Page1236Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1236Component }])],
  exports: [Page1236Component]
})
export class Page1236Module {}
