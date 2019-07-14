import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2168Component } from './page2168.component';

@NgModule({
  declarations: [Page2168Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2168Component }])],
  exports: [Page2168Component]
})
export class Page2168Module {}
