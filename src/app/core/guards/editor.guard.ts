import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EditorExit } from '../interfaces/editor-exit.interface';
import { PokemonService } from '../services/pokemon.service';

@Injectable({
    providedIn: 'root'
})
export class EditorGuard implements CanActivate, CanDeactivate<unknown> {

    constructor(
        private pokemonService: PokemonService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.pokemonService.selectedPokemon$.pipe(
            map(value => {
                const activate = value !== undefined;

                if (!activate) {
                    this.router.navigate(['/editor']);
                }

                return activate;
            })
        );
    }

    canDeactivate(
        component: EditorExit,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return component.onExit();
    }

}
