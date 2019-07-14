import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2813Component } from './page2813.component';

@NgModule({
  declarations: [Page2813Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2813Component }])],
  exports: [Page2813Component]
})
export class Page2813Module {}
