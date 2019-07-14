import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2414Component } from './page2414.component';

@NgModule({
  declarations: [Page2414Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2414Component }])],
  exports: [Page2414Component]
})
export class Page2414Module {}
