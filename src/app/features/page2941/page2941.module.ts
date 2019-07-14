import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2941Component } from './page2941.component';

@NgModule({
  declarations: [Page2941Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2941Component }])],
  exports: [Page2941Component]
})
export class Page2941Module {}
