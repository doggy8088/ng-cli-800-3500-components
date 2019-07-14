import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2738Component } from './page2738.component';

@NgModule({
  declarations: [Page2738Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2738Component }])],
  exports: [Page2738Component]
})
export class Page2738Module {}
