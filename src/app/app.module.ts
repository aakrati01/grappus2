import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material/tabs";
import { InfoContainerComponent } from './info-container/info-container.component';
import { SideNavContainerComponent } from './side-nav-container/side-nav-container.component';
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule, MatIconModule, } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoContainerComponent,
    SideNavContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    BrowserAnimationsModule,
    Ng2CarouselamosModule,
    MatIconModule,
  ],
  exports : [
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    Ng2CarouselamosModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
