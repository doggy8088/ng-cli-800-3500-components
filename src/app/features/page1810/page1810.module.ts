import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1810Component } from './page1810.component';

@NgModule({
  declarations: [Page1810Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1810Component }])],
  exports: [Page1810Component]
})
export class Page1810Module {}
