import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2025Component } from './page2025.component';

@NgModule({
  declarations: [Page2025Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2025Component }])],
  exports: [Page2025Component]
})
export class Page2025Module {}
