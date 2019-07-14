import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3156Component } from './page3156.component';

@NgModule({
  declarations: [Page3156Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3156Component }])],
  exports: [Page3156Component]
})
export class Page3156Module {}
