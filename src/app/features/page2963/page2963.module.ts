import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2963Component } from './page2963.component';

@NgModule({
  declarations: [Page2963Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2963Component }])],
  exports: [Page2963Component]
})
export class Page2963Module {}
