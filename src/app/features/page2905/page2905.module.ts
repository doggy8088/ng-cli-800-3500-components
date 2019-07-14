import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2905Component } from './page2905.component';

@NgModule({
  declarations: [Page2905Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2905Component }])],
  exports: [Page2905Component]
})
export class Page2905Module {}
