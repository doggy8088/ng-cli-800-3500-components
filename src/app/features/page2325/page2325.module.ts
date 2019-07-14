import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2325Component } from './page2325.component';

@NgModule({
  declarations: [Page2325Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2325Component }])],
  exports: [Page2325Component]
})
export class Page2325Module {}
