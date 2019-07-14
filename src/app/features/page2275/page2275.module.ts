import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2275Component } from './page2275.component';

@NgModule({
  declarations: [Page2275Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2275Component }])],
  exports: [Page2275Component]
})
export class Page2275Module {}
