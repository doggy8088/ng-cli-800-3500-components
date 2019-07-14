import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2000Component } from './page2000.component';

@NgModule({
  declarations: [Page2000Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2000Component }])],
  exports: [Page2000Component]
})
export class Page2000Module {}
