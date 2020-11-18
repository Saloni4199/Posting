import { PostComponent } from '../component/post/post.component';

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class addpostCanDeactivateGuard implements CanDeactivate<PostComponent> {
    canDeactivate(
        component: PostComponent
    ): boolean {
        if (component.postForm.dirty) {
            return confirm('Are you sure want to discard changes?');
        }
        return true;
    }
}
