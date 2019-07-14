import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2056Component } from './page2056.component';

@NgModule({
  declarations: [Page2056Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2056Component }])],
  exports: [Page2056Component]
})
export class Page2056Module {}
