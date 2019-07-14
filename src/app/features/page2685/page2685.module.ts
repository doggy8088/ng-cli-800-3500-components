import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2685Component } from './page2685.component';

@NgModule({
  declarations: [Page2685Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2685Component }])],
  exports: [Page2685Component]
})
export class Page2685Module {}
