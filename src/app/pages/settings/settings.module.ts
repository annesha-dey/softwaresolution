import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from 'angular2-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { Settings } from './settings.component';
import { routing } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
  ],
  declarations: [
    Settings,


  ],
  providers: [

  ]
})
export class SettingsModule {}
