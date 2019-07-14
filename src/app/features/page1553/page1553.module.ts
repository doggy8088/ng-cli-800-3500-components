import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1553Component } from './page1553.component';

@NgModule({
  declarations: [Page1553Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1553Component }])],
  exports: [Page1553Component]
})
export class Page1553Module {}
