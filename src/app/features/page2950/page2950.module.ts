import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2950Component } from './page2950.component';

@NgModule({
  declarations: [Page2950Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2950Component }])],
  exports: [Page2950Component]
})
export class Page2950Module {}
