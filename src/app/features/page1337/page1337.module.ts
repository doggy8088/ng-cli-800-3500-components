import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1337Component } from './page1337.component';

@NgModule({
  declarations: [Page1337Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1337Component }])],
  exports: [Page1337Component]
})
export class Page1337Module {}
