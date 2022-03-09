import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { PokemonSelectionComponent } from './pages/pokemon-selection/pokemon-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeSearchedCardComponent } from './components/poke-searched-card/poke-searched-card.component';
import { CustomizeCardComponent } from './pages/customize-card/customize-card.component';
import { PokemonCardCentralImageComponent } from './components/pokemon-card-central-image/pokemon-card-central-image.component';
import { EditionOptionsPanelComponent } from './components/edition-options-panel/edition-options-panel.component';
import { ControlsLayoutCentralImageComponent } from './components/controls-layout-central-image/controls-layout-central-image.component';


@NgModule({
    declarations: [
        PokemonSelectionComponent,
        PokeSearchedCardComponent,
        CustomizeCardComponent,
        PokemonCardCentralImageComponent,
        EditionOptionsPanelComponent,
        ControlsLayoutCentralImageComponent
    ],
    imports: [
        CommonModule,
        EditorRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EditorModule { }
