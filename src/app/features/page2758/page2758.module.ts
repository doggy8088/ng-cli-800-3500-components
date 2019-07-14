import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2758Component } from './page2758.component';

@NgModule({
  declarations: [Page2758Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2758Component }])],
  exports: [Page2758Component]
})
export class Page2758Module {}
