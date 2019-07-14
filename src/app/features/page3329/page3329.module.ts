import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3329Component } from './page3329.component';

@NgModule({
  declarations: [Page3329Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3329Component }])],
  exports: [Page3329Component]
})
export class Page3329Module {}
