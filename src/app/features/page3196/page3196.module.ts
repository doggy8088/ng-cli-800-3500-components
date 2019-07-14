import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3196Component } from './page3196.component';

@NgModule({
  declarations: [Page3196Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3196Component }])],
  exports: [Page3196Component]
})
export class Page3196Module {}
