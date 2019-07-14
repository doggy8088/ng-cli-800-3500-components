import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2922Component } from './page2922.component';

@NgModule({
  declarations: [Page2922Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2922Component }])],
  exports: [Page2922Component]
})
export class Page2922Module {}
