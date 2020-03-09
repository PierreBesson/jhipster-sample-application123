import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSampleApplication123SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhipsterSampleApplication123SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
