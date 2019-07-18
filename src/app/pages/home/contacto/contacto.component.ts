import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from './services/message.service';

declare let L;
declare let M;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @ViewChild('contactForm', {static: false}) contactForm;

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    const map = L.map('map').setView([4.628, -74.06537], 13);

    L.marker([4.628, -74.06537]).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      minZoom: 18
    }).addTo(map);
  }

  onSubmit(data) {
    this.messageService.sendMessage(data).subscribe(
      (response) => {
        M.toast({html: 'Correo enviado correctamente.'});
        this.contactForm.reset();
      },
      err => {
        M.toast({html: 'No se ha podido enviar su correo'});
      });
  }

}
