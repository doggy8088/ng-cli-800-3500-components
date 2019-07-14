import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2976Component } from './page2976.component';

@NgModule({
  declarations: [Page2976Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2976Component }])],
  exports: [Page2976Component]
})
export class Page2976Module {}
