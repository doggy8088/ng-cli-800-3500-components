import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2723Component } from './page2723.component';

@NgModule({
  declarations: [Page2723Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2723Component }])],
  exports: [Page2723Component]
})
export class Page2723Module {}
