import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3325Component } from './page3325.component';

@NgModule({
  declarations: [Page3325Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3325Component }])],
  exports: [Page3325Component]
})
export class Page3325Module {}
