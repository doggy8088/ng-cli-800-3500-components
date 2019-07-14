import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1996Component } from './page1996.component';

@NgModule({
  declarations: [Page1996Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1996Component }])],
  exports: [Page1996Component]
})
export class Page1996Module {}
