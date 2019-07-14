import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2936Component } from './page2936.component';

@NgModule({
  declarations: [Page2936Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2936Component }])],
  exports: [Page2936Component]
})
export class Page2936Module {}
