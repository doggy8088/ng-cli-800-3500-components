import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2258Component } from './page2258.component';

@NgModule({
  declarations: [Page2258Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2258Component }])],
  exports: [Page2258Component]
})
export class Page2258Module {}
