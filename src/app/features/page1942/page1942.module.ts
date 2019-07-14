import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1942Component } from './page1942.component';

@NgModule({
  declarations: [Page1942Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1942Component }])],
  exports: [Page1942Component]
})
export class Page1942Module {}
