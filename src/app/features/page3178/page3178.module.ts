import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3178Component } from './page3178.component';

@NgModule({
  declarations: [Page3178Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3178Component }])],
  exports: [Page3178Component]
})
export class Page3178Module {}
