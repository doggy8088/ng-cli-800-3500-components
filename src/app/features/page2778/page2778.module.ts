import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2778Component } from './page2778.component';

@NgModule({
  declarations: [Page2778Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2778Component }])],
  exports: [Page2778Component]
})
export class Page2778Module {}
