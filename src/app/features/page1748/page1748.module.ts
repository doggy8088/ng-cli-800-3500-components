import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1748Component } from './page1748.component';

@NgModule({
  declarations: [Page1748Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1748Component }])],
  exports: [Page1748Component]
})
export class Page1748Module {}
