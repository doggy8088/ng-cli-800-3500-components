import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2710Component } from './page2710.component';

@NgModule({
  declarations: [Page2710Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2710Component }])],
  exports: [Page2710Component]
})
export class Page2710Module {}
