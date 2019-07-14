import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2488Component } from './page2488.component';

@NgModule({
  declarations: [Page2488Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2488Component }])],
  exports: [Page2488Component]
})
export class Page2488Module {}
