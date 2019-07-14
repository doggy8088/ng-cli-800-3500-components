import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2746Component } from './page2746.component';

@NgModule({
  declarations: [Page2746Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2746Component }])],
  exports: [Page2746Component]
})
export class Page2746Module {}
