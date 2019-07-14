import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1966Component } from './page1966.component';

@NgModule({
  declarations: [Page1966Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1966Component }])],
  exports: [Page1966Component]
})
export class Page1966Module {}
