import {provideRouter, RouterConfig} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {GamesComponent} from './games/games.component';
import {SceneComponent} from './scene/scene.component';

export const routes:RouterConfig = [
  {path: '', component: GamesComponent},
  {path: 'scene', component: SceneComponent},
  {path: 'contact', component: ContactComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
