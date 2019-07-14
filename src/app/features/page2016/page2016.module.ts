import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2016Component } from './page2016.component';

@NgModule({
  declarations: [Page2016Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2016Component }])],
  exports: [Page2016Component]
})
export class Page2016Module {}
