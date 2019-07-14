import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3058Component } from './page3058.component';

@NgModule({
  declarations: [Page3058Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3058Component }])],
  exports: [Page3058Component]
})
export class Page3058Module {}
