import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports for @Angular/Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

// Application Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ConnectComponent } from './connect/connect.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { SidenavComponent } from './nav-bar/sidenav/sidenav.component';

// Application Routing
const appRoutes: Routes = [
  { 
    path: 'profile', 
    component: ProfileComponent
  },
  { 
    path: 'experience',      
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  { 
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ProfileComponent,
    ExperienceComponent,
    ProjectsComponent,
    ConnectComponent,
    FooterBarComponent,
    SidenavComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
