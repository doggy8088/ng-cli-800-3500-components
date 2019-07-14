import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3176Component } from './page3176.component';

@NgModule({
  declarations: [Page3176Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3176Component }])],
  exports: [Page3176Component]
})
export class Page3176Module {}
