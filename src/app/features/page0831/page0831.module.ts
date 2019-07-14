import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0831Component } from './page0831.component';

@NgModule({
  declarations: [Page0831Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0831Component }])],
  exports: [Page0831Component]
})
export class Page0831Module {}
