import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CreatePostComponent } from '../../pages/post/create-post/create-post.component';
import { AdviceComponent } from '../../pages/advice/advice.component';
import { SocialComponent } from '../../pages/social/social.component';
import { ResourcesComponent } from '../../pages/resources/resources.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'create-post',    component: CreatePostComponent },
    { path: 'advice',         component: AdviceComponent },
    { path: 'social',         component: SocialComponent },
    { path: 'resources',      component: ResourcesComponent }

];
