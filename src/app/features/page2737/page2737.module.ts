import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2737Component } from './page2737.component';

@NgModule({
  declarations: [Page2737Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2737Component }])],
  exports: [Page2737Component]
})
export class Page2737Module {}
