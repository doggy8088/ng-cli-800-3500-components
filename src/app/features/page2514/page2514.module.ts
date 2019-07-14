import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2514Component } from './page2514.component';

@NgModule({
  declarations: [Page2514Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2514Component }])],
  exports: [Page2514Component]
})
export class Page2514Module {}
