import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2879Component } from './page2879.component';

@NgModule({
  declarations: [Page2879Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2879Component }])],
  exports: [Page2879Component]
})
export class Page2879Module {}
