import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3471Component } from './page3471.component';

@NgModule({
  declarations: [Page3471Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3471Component }])],
  exports: [Page3471Component]
})
export class Page3471Module {}
