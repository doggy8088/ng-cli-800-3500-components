import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2764Component } from './page2764.component';

@NgModule({
  declarations: [Page2764Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2764Component }])],
  exports: [Page2764Component]
})
export class Page2764Module {}
