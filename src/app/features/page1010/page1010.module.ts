import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1010Component } from './page1010.component';

@NgModule({
  declarations: [Page1010Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1010Component }])],
  exports: [Page1010Component]
})
export class Page1010Module {}
