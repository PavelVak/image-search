import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageService } from './shared/image.service';
import {
  MdAutocompleteModule, MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule,
  MdCoreModule,
  MdDatepickerModule, MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule,
  MdInputModule, MdListModule, MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule, MdRippleModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule,
  MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnScrollTopComponent } from './shared/component/btn-scroll-top.component';
import { BtnScrollHideDirective } from './shared/directives/btn-scroll-hide.directive';
import { InfinityScrollDirective } from './shared/directives/infinity-scroll.directive';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    BtnScrollTopComponent,
    BtnScrollHideDirective,
    InfinityScrollDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MasonryModule,
    BrowserAnimationsModule,

    DynamicFormModule,

    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
