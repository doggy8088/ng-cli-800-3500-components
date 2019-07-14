import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2099Component } from './page2099.component';

@NgModule({
  declarations: [Page2099Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2099Component }])],
  exports: [Page2099Component]
})
export class Page2099Module {}
