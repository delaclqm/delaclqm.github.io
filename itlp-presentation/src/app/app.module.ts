import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Components
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// User Created Components
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { AboutMeComponent } from './tab-content/about-me/about-me.component';
import { GoalsComponent } from './tab-content/goals/goals.component';
import { MyRoleComponent } from './tab-content/my-role/my-role.component';
import { TakeawaysComponent } from './tab-content/takeaways/takeaways.component';
import { WrapUpComponent } from './tab-content/wrap-up/wrap-up.component';
import { UserStoriesComponent } from './tab-content/user-stories/user-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TabContentComponent,
    AboutMeComponent,
    GoalsComponent,
    MyRoleComponent,
    TakeawaysComponent,
    WrapUpComponent,
    UserStoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    // Material Components
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
