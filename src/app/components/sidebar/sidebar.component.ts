import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-teal', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-green', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'ni-single-02 text-primary', class: '' },
    { path: '/dashboard', title: 'Home Page',  icon: 'ni-button-power text-red', class: '' },

    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },

    { path: '/create-post', title: 'Create Post',  icon:'ni-fat-add text-orange', class: '' },

    // channels
    { path: '/resources', title: 'Resources',  icon:'ni-single-copy-04 text-cyan', class: '' },
    { path: '/advice', title: 'Advice',  icon:'ni-satisfied text-yellow', class: '' },
    { path: '/social', title: 'Social',  icon:'ni-chat-round text-purple', class: '' },
    { path: '/about', title: 'About',  icon:'ni-zoom-split-in text-blue', class: '' },
    // { path: '/resources', title: 'Resources',  icon:'ni-single-copy-04 text-purple', class: '' },
    // { path: '/resources', title: 'Resources',  icon:'ni-planet text-blue', class: '' },
    // { path: '/social', title: 'Social',  icon:'ni-planet text-blue', class: '' },

    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
