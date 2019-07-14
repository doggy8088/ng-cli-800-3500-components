import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2872Component } from './page2872.component';

@NgModule({
  declarations: [Page2872Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2872Component }])],
  exports: [Page2872Component]
})
export class Page2872Module {}
