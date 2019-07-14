import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2858Component } from './page2858.component';

@NgModule({
  declarations: [Page2858Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2858Component }])],
  exports: [Page2858Component]
})
export class Page2858Module {}
