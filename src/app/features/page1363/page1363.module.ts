import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1363Component } from './page1363.component';

@NgModule({
  declarations: [Page1363Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1363Component }])],
  exports: [Page1363Component]
})
export class Page1363Module {}
