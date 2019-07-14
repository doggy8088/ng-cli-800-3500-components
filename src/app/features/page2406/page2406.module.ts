import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2406Component } from './page2406.component';

@NgModule({
  declarations: [Page2406Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2406Component }])],
  exports: [Page2406Component]
})
export class Page2406Module {}
