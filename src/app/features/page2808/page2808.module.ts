import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2808Component } from './page2808.component';

@NgModule({
  declarations: [Page2808Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2808Component }])],
  exports: [Page2808Component]
})
export class Page2808Module {}
