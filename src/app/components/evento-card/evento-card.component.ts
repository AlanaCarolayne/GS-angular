import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css'],
  standalone: true,
  imports:[SharedDirectivesModule]
})
export class EventoCardComponent {

  @Input() titulo: string = '';
  @Input() data: string = '';
  @Input() horario: string = '';
  @Input() local: string = '';
  @Input() corBorda: string = '#FF5100';

  @Output() participarEvento = new EventEmitter<string>();

  inscrito: boolean = false;
  mensagemInscricao: string = '';

  participar() {
    this.inscrito = true;
    this.mensagemInscricao = `Você se inscreveu no evento: ${this.titulo}`;
    this.participarEvento.emit(this.titulo);
  }
}
