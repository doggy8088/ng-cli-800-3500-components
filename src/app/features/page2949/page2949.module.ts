import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2949Component } from './page2949.component';

@NgModule({
  declarations: [Page2949Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2949Component }])],
  exports: [Page2949Component]
})
export class Page2949Module {}
