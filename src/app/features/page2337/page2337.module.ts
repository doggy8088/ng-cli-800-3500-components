import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2337Component } from './page2337.component';

@NgModule({
  declarations: [Page2337Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2337Component }])],
  exports: [Page2337Component]
})
export class Page2337Module {}
