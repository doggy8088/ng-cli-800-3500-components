import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2462Component } from './page2462.component';

@NgModule({
  declarations: [Page2462Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2462Component }])],
  exports: [Page2462Component]
})
export class Page2462Module {}
