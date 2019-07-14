import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2483Component } from './page2483.component';

@NgModule({
  declarations: [Page2483Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2483Component }])],
  exports: [Page2483Component]
})
export class Page2483Module {}
