import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2329Component } from './page2329.component';

@NgModule({
  declarations: [Page2329Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2329Component }])],
  exports: [Page2329Component]
})
export class Page2329Module {}
