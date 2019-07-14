import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2200Component } from './page2200.component';

@NgModule({
  declarations: [Page2200Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2200Component }])],
  exports: [Page2200Component]
})
export class Page2200Module {}
