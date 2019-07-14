import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2528Component } from './page2528.component';

@NgModule({
  declarations: [Page2528Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2528Component }])],
  exports: [Page2528Component]
})
export class Page2528Module {}
