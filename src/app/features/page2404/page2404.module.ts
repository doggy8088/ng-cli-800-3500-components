import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2404Component } from './page2404.component';

@NgModule({
  declarations: [Page2404Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2404Component }])],
  exports: [Page2404Component]
})
export class Page2404Module {}
