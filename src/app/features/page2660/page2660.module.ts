import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2660Component } from './page2660.component';

@NgModule({
  declarations: [Page2660Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2660Component }])],
  exports: [Page2660Component]
})
export class Page2660Module {}
