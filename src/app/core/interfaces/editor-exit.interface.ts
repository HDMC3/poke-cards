import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface EditorExit {
    onExit: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}
