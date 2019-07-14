import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1336Component } from './page1336.component';

@NgModule({
  declarations: [Page1336Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1336Component }])],
  exports: [Page1336Component]
})
export class Page1336Module {}
