import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2246Component } from './page2246.component';

@NgModule({
  declarations: [Page2246Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2246Component }])],
  exports: [Page2246Component]
})
export class Page2246Module {}
