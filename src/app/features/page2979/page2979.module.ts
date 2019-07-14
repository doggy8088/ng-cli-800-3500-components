import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2979Component } from './page2979.component';

@NgModule({
  declarations: [Page2979Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2979Component }])],
  exports: [Page2979Component]
})
export class Page2979Module {}
