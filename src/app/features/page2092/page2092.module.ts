import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2092Component } from './page2092.component';

@NgModule({
  declarations: [Page2092Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2092Component }])],
  exports: [Page2092Component]
})
export class Page2092Module {}
