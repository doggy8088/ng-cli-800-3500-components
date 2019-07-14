import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2735Component } from './page2735.component';

@NgModule({
  declarations: [Page2735Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2735Component }])],
  exports: [Page2735Component]
})
export class Page2735Module {}
