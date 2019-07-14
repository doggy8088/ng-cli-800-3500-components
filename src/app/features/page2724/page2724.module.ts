import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2724Component } from './page2724.component';

@NgModule({
  declarations: [Page2724Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2724Component }])],
  exports: [Page2724Component]
})
export class Page2724Module {}
