import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1952Component } from './page1952.component';

@NgModule({
  declarations: [Page1952Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1952Component }])],
  exports: [Page1952Component]
})
export class Page1952Module {}
