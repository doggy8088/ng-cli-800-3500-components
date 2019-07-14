import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2162Component } from './page2162.component';

@NgModule({
  declarations: [Page2162Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2162Component }])],
  exports: [Page2162Component]
})
export class Page2162Module {}
