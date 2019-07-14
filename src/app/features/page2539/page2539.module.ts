import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2539Component } from './page2539.component';

@NgModule({
  declarations: [Page2539Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2539Component }])],
  exports: [Page2539Component]
})
export class Page2539Module {}
