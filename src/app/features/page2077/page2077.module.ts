import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2077Component } from './page2077.component';

@NgModule({
  declarations: [Page2077Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2077Component }])],
  exports: [Page2077Component]
})
export class Page2077Module {}
