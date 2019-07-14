import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1495Component } from './page1495.component';

@NgModule({
  declarations: [Page1495Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1495Component }])],
  exports: [Page1495Component]
})
export class Page1495Module {}
