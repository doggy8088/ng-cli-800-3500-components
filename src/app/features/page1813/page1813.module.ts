import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1813Component } from './page1813.component';

@NgModule({
  declarations: [Page1813Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1813Component }])],
  exports: [Page1813Component]
})
export class Page1813Module {}
