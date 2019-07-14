import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2578Component } from './page2578.component';

@NgModule({
  declarations: [Page2578Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2578Component }])],
  exports: [Page2578Component]
})
export class Page2578Module {}
