import { Component } from '@angular/core';
import { EventoCardComponent } from '../evento-card/evento-card.component';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css'],
  standalone: true,
  imports: [EventoCardComponent]
})
export class ProgramacaoComponent {
  eventos = [
    {
      titulo: 'Kick-off',
      data: '26 de maio',
      horario: '19H00',
      local: 'ONLINE',
      corBorda: '#FF5100'
    },
    {
      titulo: 'Palestra do Corpo Civíl',
      data: '26 de maio',
      horario: '20H00',
      local: 'Unidade Paulista',
      corBorda: '#FF5100'
    },
    {
      titulo: 'Palestra dos Médicos sem Fronteiras',
      data: '27 de maio',
      horario: '21H00',
      local: 'ONLINE',
      corBorda: '#FF5100'
    },


  ];

  onParticiparEvento(nomeEvento: string) {
    console.log(`Evento "${nomeEvento}" recebeu inscrição`);
  }
}
