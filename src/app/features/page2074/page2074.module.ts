import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2074Component } from './page2074.component';

@NgModule({
  declarations: [Page2074Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2074Component }])],
  exports: [Page2074Component]
})
export class Page2074Module {}
