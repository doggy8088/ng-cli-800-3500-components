import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1856Component } from './page1856.component';

@NgModule({
  declarations: [Page1856Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1856Component }])],
  exports: [Page1856Component]
})
export class Page1856Module {}
