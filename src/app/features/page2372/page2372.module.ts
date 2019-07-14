import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2372Component } from './page2372.component';

@NgModule({
  declarations: [Page2372Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2372Component }])],
  exports: [Page2372Component]
})
export class Page2372Module {}
