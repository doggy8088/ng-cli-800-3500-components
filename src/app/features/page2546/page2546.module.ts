import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2546Component } from './page2546.component';

@NgModule({
  declarations: [Page2546Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2546Component }])],
  exports: [Page2546Component]
})
export class Page2546Module {}
