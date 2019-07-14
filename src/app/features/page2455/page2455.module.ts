import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2455Component } from './page2455.component';

@NgModule({
  declarations: [Page2455Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2455Component }])],
  exports: [Page2455Component]
})
export class Page2455Module {}
