import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2690Component } from './page2690.component';

@NgModule({
  declarations: [Page2690Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2690Component }])],
  exports: [Page2690Component]
})
export class Page2690Module {}
