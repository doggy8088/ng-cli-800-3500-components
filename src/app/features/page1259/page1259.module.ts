import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1259Component } from './page1259.component';

@NgModule({
  declarations: [Page1259Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1259Component }])],
  exports: [Page1259Component]
})
export class Page1259Module {}
