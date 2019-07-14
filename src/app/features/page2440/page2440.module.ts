import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2440Component } from './page2440.component';

@NgModule({
  declarations: [Page2440Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2440Component }])],
  exports: [Page2440Component]
})
export class Page2440Module {}
