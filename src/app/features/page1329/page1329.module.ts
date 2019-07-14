import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1329Component } from './page1329.component';

@NgModule({
  declarations: [Page1329Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1329Component }])],
  exports: [Page1329Component]
})
export class Page1329Module {}
