import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2037Component } from './page2037.component';

@NgModule({
  declarations: [Page2037Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2037Component }])],
  exports: [Page2037Component]
})
export class Page2037Module {}
