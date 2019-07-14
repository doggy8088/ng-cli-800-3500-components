import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2899Component } from './page2899.component';

@NgModule({
  declarations: [Page2899Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2899Component }])],
  exports: [Page2899Component]
})
export class Page2899Module {}
