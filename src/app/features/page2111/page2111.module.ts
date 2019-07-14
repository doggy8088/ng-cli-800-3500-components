import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2111Component } from './page2111.component';

@NgModule({
  declarations: [Page2111Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2111Component }])],
  exports: [Page2111Component]
})
export class Page2111Module {}
