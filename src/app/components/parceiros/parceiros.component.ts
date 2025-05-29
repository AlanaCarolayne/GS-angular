import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {
  logoIBM = 'assets/IBM_logo.svg.png';
  logoMSF = 'assets/msf.png';
  logoInpe = 'assets/inpe.png';
  logoDC = 'assets/logo-df.png';
  logoBombeiros = 'assets/bombeiros.png';

  parceiros = [
    {
      nome: 'IBM',
      logo: this.logoIBM,
      descricao: 'Logo da IBM - Parceira do Global Solutionl'
    },
    {
      nome: 'Médicos sem fronteiras',
      logo: this.logoMSF,
      descricao: 'Logo dos Médicos sem fronteiras - Parceira do Global Solutionl'
    },
    {
      nome: 'Inpe',
      logo: this.logoInpe,
      descricao: 'Logo da Inpe - Parceira do Global Solutionl'
    },
    {
      nome: 'Santo André Defesa Cívil',
      logo: this.logoDC,
      descricao: 'Logo do Santo André Defesa Cívil - Parceira do Global Solutionl'
    },
    {
      nome: 'Corpo de Bombeiros',
      logo: this.logoBombeiros,
      descricao: 'Logo do Corpo de Bombeiros - Parceira do Global Solutionl'
    },

  ]

}
