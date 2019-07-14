import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2773Component } from './page2773.component';

@NgModule({
  declarations: [Page2773Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2773Component }])],
  exports: [Page2773Component]
})
export class Page2773Module {}
