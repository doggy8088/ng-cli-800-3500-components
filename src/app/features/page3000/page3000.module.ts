import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3000Component } from './page3000.component';

@NgModule({
  declarations: [Page3000Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3000Component }])],
  exports: [Page3000Component]
})
export class Page3000Module {}
