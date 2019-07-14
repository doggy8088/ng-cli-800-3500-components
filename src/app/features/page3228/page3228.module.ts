import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3228Component } from './page3228.component';

@NgModule({
  declarations: [Page3228Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3228Component }])],
  exports: [Page3228Component]
})
export class Page3228Module {}
