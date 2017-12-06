import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './services/post.service';

import {NewsFeedComponent, NewsFeedDetailsComponent} from './containers';
import { reducers } from './store/reducers';

import {
  PostProfileComponent,
  PostNewsFeedMenuComponent,
  PostChatOnlineComponent,
  PostFollowUserComponent,
  AddPostComponent,
  PostListComponent,
  SearchPostComponent,
  PostAddCommmentComponent,
  PostCommmentListComponent
} from './components';

const components = [
  AddPostComponent,
  AddPostComponent,
  PostListComponent,
  NewsFeedComponent,
  NewsFeedDetailsComponent,
  PostProfileComponent,
  PostNewsFeedMenuComponent,
  PostChatOnlineComponent,
  PostFollowUserComponent,
  SearchPostComponent,
  PostAddCommmentComponent,
  PostCommmentListComponent  
];
@NgModule({
  declarations: [components],

  imports: [
    PostsRoutingModule, 
    SharedModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('PostFeature', reducers),
  ],
  providers: [PostService]  

})
export class PostsModule {}