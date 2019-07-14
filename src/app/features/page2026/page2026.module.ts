import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2026Component } from './page2026.component';

@NgModule({
  declarations: [Page2026Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2026Component }])],
  exports: [Page2026Component]
})
export class Page2026Module {}
