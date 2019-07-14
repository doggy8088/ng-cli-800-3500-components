import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1831Component } from './page1831.component';

@NgModule({
  declarations: [Page1831Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1831Component }])],
  exports: [Page1831Component]
})
export class Page1831Module {}
