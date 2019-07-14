import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1960Component } from './page1960.component';

@NgModule({
  declarations: [Page1960Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1960Component }])],
  exports: [Page1960Component]
})
export class Page1960Module {}
