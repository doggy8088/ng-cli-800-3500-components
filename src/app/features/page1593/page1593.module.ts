import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1593Component } from './page1593.component';

@NgModule({
  declarations: [Page1593Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1593Component }])],
  exports: [Page1593Component]
})
export class Page1593Module {}
