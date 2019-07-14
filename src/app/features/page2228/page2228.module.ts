import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2228Component } from './page2228.component';

@NgModule({
  declarations: [Page2228Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2228Component }])],
  exports: [Page2228Component]
})
export class Page2228Module {}
