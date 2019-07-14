import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2112Component } from './page2112.component';

@NgModule({
  declarations: [Page2112Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2112Component }])],
  exports: [Page2112Component]
})
export class Page2112Module {}
