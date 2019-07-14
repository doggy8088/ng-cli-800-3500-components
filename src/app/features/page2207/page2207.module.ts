import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2207Component } from './page2207.component';

@NgModule({
  declarations: [Page2207Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2207Component }])],
  exports: [Page2207Component]
})
export class Page2207Module {}
