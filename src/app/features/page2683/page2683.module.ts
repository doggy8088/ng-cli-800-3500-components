import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2683Component } from './page2683.component';

@NgModule({
  declarations: [Page2683Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2683Component }])],
  exports: [Page2683Component]
})
export class Page2683Module {}
