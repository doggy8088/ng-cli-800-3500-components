import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2506Component } from './page2506.component';

@NgModule({
  declarations: [Page2506Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2506Component }])],
  exports: [Page2506Component]
})
export class Page2506Module {}
