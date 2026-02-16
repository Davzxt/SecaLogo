import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  faqs = signal<FaqItem[]>([
    {
      question: 'Este ebook é para quem?',
      answer: 'Para quem busca emagrecimento rápido, desinflamação e um "reset" metabólico em 7 dias. Ideal para quem se sente inchada(o) e sem energia.',
      isOpen: false
    },
    {
      question: 'Preciso de equipamentos especiais?',
      answer: 'Não, o plano é focado na alimentação e hábitos. É totalmente adaptável e não exige equipamentos específicos de academia.',
      isOpen: false
    },
    {
      question: 'Posso adaptar o cardápio?',
      answer: 'Sim, o Capítulo 6 oferece um guia completo de substituições inteligentes para que você possa adaptar à sua realidade e gostos.',
      isOpen: false
    },
    {
      question: 'Tenho pouco tempo para cozinhar, serve para mim?',
      answer: 'Com certeza. O guia inclui dicas de "Meal Prep" (preparação antecipada) para otimizar seu tempo e garantir que você mantenha o foco durante a semana.',
      isOpen: false
    }
  ]);

  toggleFaq(index: number) {
    this.faqs.update(items => {
      const newItems = [...items];
      // Close others if you want accordion style, or just toggle current
      newItems[index] = { ...newItems[index], isOpen: !newItems[index].isOpen };
      return newItems;
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}