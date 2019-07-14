import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1821Component } from './page1821.component';

@NgModule({
  declarations: [Page1821Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1821Component }])],
  exports: [Page1821Component]
})
export class Page1821Module {}
