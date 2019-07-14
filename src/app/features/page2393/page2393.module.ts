import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2393Component } from './page2393.component';

@NgModule({
  declarations: [Page2393Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2393Component }])],
  exports: [Page2393Component]
})
export class Page2393Module {}
