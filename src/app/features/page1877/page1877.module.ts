import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1877Component } from './page1877.component';

@NgModule({
  declarations: [Page1877Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1877Component }])],
  exports: [Page1877Component]
})
export class Page1877Module {}
