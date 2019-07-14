import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2831Component } from './page2831.component';

@NgModule({
  declarations: [Page2831Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2831Component }])],
  exports: [Page2831Component]
})
export class Page2831Module {}
