import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1156Component } from './page1156.component';

@NgModule({
  declarations: [Page1156Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1156Component }])],
  exports: [Page1156Component]
})
export class Page1156Module {}
