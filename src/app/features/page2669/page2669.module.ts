import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2669Component } from './page2669.component';

@NgModule({
  declarations: [Page2669Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2669Component }])],
  exports: [Page2669Component]
})
export class Page2669Module {}
