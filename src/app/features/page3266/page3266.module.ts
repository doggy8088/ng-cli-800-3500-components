import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3266Component } from './page3266.component';

@NgModule({
  declarations: [Page3266Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3266Component }])],
  exports: [Page3266Component]
})
export class Page3266Module {}
