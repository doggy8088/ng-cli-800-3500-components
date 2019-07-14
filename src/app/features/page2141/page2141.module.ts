import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2141Component } from './page2141.component';

@NgModule({
  declarations: [Page2141Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2141Component }])],
  exports: [Page2141Component]
})
export class Page2141Module {}
