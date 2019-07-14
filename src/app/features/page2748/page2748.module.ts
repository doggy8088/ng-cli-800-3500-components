import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2748Component } from './page2748.component';

@NgModule({
  declarations: [Page2748Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2748Component }])],
  exports: [Page2748Component]
})
export class Page2748Module {}
