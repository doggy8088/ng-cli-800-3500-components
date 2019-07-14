import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3207Component } from './page3207.component';

@NgModule({
  declarations: [Page3207Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3207Component }])],
  exports: [Page3207Component]
})
export class Page3207Module {}
