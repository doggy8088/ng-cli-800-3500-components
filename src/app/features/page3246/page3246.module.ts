import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3246Component } from './page3246.component';

@NgModule({
  declarations: [Page3246Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3246Component }])],
  exports: [Page3246Component]
})
export class Page3246Module {}
