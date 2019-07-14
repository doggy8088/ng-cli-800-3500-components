import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2616Component } from './page2616.component';

@NgModule({
  declarations: [Page2616Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2616Component }])],
  exports: [Page2616Component]
})
export class Page2616Module {}
