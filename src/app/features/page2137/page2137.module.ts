import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2137Component } from './page2137.component';

@NgModule({
  declarations: [Page2137Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2137Component }])],
  exports: [Page2137Component]
})
export class Page2137Module {}
