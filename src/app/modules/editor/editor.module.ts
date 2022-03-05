import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { PokemonSelectionComponent } from './pages/pokemon-selection/pokemon-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeSearchedCardComponent } from './components/poke-searched-card/poke-searched-card.component';
import { CustomizeCardComponent } from './pages/customize-card/customize-card.component';


@NgModule({
    declarations: [
        PokemonSelectionComponent,
        PokeSearchedCardComponent,
        CustomizeCardComponent
    ],
    imports: [
        CommonModule,
        EditorRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EditorModule { }
