import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1612Component } from './page1612.component';

@NgModule({
  declarations: [Page1612Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1612Component }])],
  exports: [Page1612Component]
})
export class Page1612Module {}
