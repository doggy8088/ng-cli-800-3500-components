import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1145Component } from './page1145.component';

@NgModule({
  declarations: [Page1145Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1145Component }])],
  exports: [Page1145Component]
})
export class Page1145Module {}
