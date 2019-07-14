import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2721Component } from './page2721.component';

@NgModule({
  declarations: [Page2721Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2721Component }])],
  exports: [Page2721Component]
})
export class Page2721Module {}
