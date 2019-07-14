import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2991Component } from './page2991.component';

@NgModule({
  declarations: [Page2991Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2991Component }])],
  exports: [Page2991Component]
})
export class Page2991Module {}
