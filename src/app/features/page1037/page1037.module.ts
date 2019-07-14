import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1037Component } from './page1037.component';

@NgModule({
  declarations: [Page1037Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1037Component }])],
  exports: [Page1037Component]
})
export class Page1037Module {}
