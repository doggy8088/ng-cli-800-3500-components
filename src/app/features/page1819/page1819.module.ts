import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1819Component } from './page1819.component';

@NgModule({
  declarations: [Page1819Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1819Component }])],
  exports: [Page1819Component]
})
export class Page1819Module {}
