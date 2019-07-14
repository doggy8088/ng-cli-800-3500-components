import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2907Component } from './page2907.component';

@NgModule({
  declarations: [Page2907Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2907Component }])],
  exports: [Page2907Component]
})
export class Page2907Module {}
