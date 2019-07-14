import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3001Component } from './page3001.component';

@NgModule({
  declarations: [Page3001Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3001Component }])],
  exports: [Page3001Component]
})
export class Page3001Module {}
