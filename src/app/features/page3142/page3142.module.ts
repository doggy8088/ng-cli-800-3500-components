import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3142Component } from './page3142.component';

@NgModule({
  declarations: [Page3142Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3142Component }])],
  exports: [Page3142Component]
})
export class Page3142Module {}
