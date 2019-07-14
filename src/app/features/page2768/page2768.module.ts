import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2768Component } from './page2768.component';

@NgModule({
  declarations: [Page2768Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2768Component }])],
  exports: [Page2768Component]
})
export class Page2768Module {}
