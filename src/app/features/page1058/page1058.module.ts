import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1058Component } from './page1058.component';

@NgModule({
  declarations: [Page1058Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1058Component }])],
  exports: [Page1058Component]
})
export class Page1058Module {}
