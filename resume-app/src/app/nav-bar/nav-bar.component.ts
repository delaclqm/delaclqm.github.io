import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // Will determine if we show it
  mobileQuery: MediaQueryList;
  
  navLinks: Link[] = [
    {
      path: '/profile',
      label: 'Profile',
      icon: 'assignment_nd'
    },
    {
      path: '/experience',
      label: 'Experience',
      icon: 'work'
    },
    {
      path: '/projects',
      label: 'Projects',
      icon: 'code'
    },
    {
      path: '/connect',
      label: 'Connect',
      icon: 'share'
    },
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

interface Link {
  path: string;
  label: string;
  icon: string;
}