import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2898Component } from './page2898.component';

@NgModule({
  declarations: [Page2898Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2898Component }])],
  exports: [Page2898Component]
})
export class Page2898Module {}
