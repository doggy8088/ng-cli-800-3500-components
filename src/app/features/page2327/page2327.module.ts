import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2327Component } from './page2327.component';

@NgModule({
  declarations: [Page2327Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2327Component }])],
  exports: [Page2327Component]
})
export class Page2327Module {}
