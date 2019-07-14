import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3387Component } from './page3387.component';

@NgModule({
  declarations: [Page3387Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3387Component }])],
  exports: [Page3387Component]
})
export class Page3387Module {}
