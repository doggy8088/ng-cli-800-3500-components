import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2166Component } from './page2166.component';

@NgModule({
  declarations: [Page2166Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2166Component }])],
  exports: [Page2166Component]
})
export class Page2166Module {}
