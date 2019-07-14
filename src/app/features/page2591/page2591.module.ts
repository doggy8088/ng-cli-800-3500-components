import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2591Component } from './page2591.component';

@NgModule({
  declarations: [Page2591Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2591Component }])],
  exports: [Page2591Component]
})
export class Page2591Module {}
