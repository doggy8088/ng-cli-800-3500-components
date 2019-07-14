import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2093Component } from './page2093.component';

@NgModule({
  declarations: [Page2093Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2093Component }])],
  exports: [Page2093Component]
})
export class Page2093Module {}
