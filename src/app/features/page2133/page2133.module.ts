import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2133Component } from './page2133.component';

@NgModule({
  declarations: [Page2133Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2133Component }])],
  exports: [Page2133Component]
})
export class Page2133Module {}
