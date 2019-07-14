import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1809Component } from './page1809.component';

@NgModule({
  declarations: [Page1809Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1809Component }])],
  exports: [Page1809Component]
})
export class Page1809Module {}
