import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2085Component } from './page2085.component';

@NgModule({
  declarations: [Page2085Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2085Component }])],
  exports: [Page2085Component]
})
export class Page2085Module {}
