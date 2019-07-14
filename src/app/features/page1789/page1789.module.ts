import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1789Component } from './page1789.component';

@NgModule({
  declarations: [Page1789Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1789Component }])],
  exports: [Page1789Component]
})
export class Page1789Module {}
