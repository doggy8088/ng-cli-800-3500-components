import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2479Component } from './page2479.component';

@NgModule({
  declarations: [Page2479Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2479Component }])],
  exports: [Page2479Component]
})
export class Page2479Module {}
