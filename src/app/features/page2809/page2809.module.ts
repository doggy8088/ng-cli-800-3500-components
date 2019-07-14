import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2809Component } from './page2809.component';

@NgModule({
  declarations: [Page2809Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2809Component }])],
  exports: [Page2809Component]
})
export class Page2809Module {}
