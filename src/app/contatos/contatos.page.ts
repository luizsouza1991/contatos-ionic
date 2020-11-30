import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../api/contatos.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  contatos:Array<any> = new Array();

  constructor(private contatosService: ContatosService, public modalController: ModalController) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.contatosService.getContatos().subscribe(response => {
      this.contatos = response.contatos;
    }, error => {
      console.log(error)
    })
  }

  async showModal(contato:any) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nome': contato.nome,
        'telefone': contato.telefone,
        'email': contato.email
      }
    });

    return await modal.present();
  }

}
