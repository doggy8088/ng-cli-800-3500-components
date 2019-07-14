import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2432Component } from './page2432.component';

@NgModule({
  declarations: [Page2432Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2432Component }])],
  exports: [Page2432Component]
})
export class Page2432Module {}
