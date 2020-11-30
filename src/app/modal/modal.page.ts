import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  // props do componente

  @Input() nome: string;
  @Input() telefone: string;
  @Input() email: string;

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
