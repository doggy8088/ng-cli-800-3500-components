import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2705Component } from './page2705.component';

@NgModule({
  declarations: [Page2705Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2705Component }])],
  exports: [Page2705Component]
})
export class Page2705Module {}
