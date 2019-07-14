import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2201Component } from './page2201.component';

@NgModule({
  declarations: [Page2201Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2201Component }])],
  exports: [Page2201Component]
})
export class Page2201Module {}
