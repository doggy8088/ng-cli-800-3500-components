import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1979Component } from './page1979.component';

@NgModule({
  declarations: [Page1979Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1979Component }])],
  exports: [Page1979Component]
})
export class Page1979Module {}
