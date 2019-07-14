import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1936Component } from './page1936.component';

@NgModule({
  declarations: [Page1936Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1936Component }])],
  exports: [Page1936Component]
})
export class Page1936Module {}
