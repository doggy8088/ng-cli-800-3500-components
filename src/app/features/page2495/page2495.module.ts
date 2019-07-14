import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2495Component } from './page2495.component';

@NgModule({
  declarations: [Page2495Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2495Component }])],
  exports: [Page2495Component]
})
export class Page2495Module {}
