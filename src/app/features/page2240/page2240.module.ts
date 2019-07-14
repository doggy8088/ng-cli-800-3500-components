import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2240Component } from './page2240.component';

@NgModule({
  declarations: [Page2240Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2240Component }])],
  exports: [Page2240Component]
})
export class Page2240Module {}
