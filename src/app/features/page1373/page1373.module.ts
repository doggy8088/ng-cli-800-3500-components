import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1373Component } from './page1373.component';

@NgModule({
  declarations: [Page1373Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1373Component }])],
  exports: [Page1373Component]
})
export class Page1373Module {}
