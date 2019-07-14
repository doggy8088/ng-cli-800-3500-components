import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1332Component } from './page1332.component';

@NgModule({
  declarations: [Page1332Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1332Component }])],
  exports: [Page1332Component]
})
export class Page1332Module {}
