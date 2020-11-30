import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatosPageRoutingModule } from './contatos-routing.module';

import { ContatosPage } from './contatos.page';

import { HttpClientModule } from '@angular/common/http';

import { ContatosService } from '../api/contatos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatosPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContatosService,
    HttpClientModule
  ],
  declarations: [ContatosPage]
})
export class ContatosPageModule {}
