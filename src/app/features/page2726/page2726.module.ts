import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2726Component } from './page2726.component';

@NgModule({
  declarations: [Page2726Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2726Component }])],
  exports: [Page2726Component]
})
export class Page2726Module {}
