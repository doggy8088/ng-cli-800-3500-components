import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1090Component } from './page1090.component';

@NgModule({
  declarations: [Page1090Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1090Component }])],
  exports: [Page1090Component]
})
export class Page1090Module {}
