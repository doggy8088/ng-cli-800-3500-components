import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1249Component } from './page1249.component';

@NgModule({
  declarations: [Page1249Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1249Component }])],
  exports: [Page1249Component]
})
export class Page1249Module {}
