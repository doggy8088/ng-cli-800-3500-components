import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2935Component } from './page2935.component';

@NgModule({
  declarations: [Page2935Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2935Component }])],
  exports: [Page2935Component]
})
export class Page2935Module {}
