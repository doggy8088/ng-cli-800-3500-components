import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2522Component } from './page2522.component';

@NgModule({
  declarations: [Page2522Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2522Component }])],
  exports: [Page2522Component]
})
export class Page2522Module {}
