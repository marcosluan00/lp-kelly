import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./components/services/services.component";
import { QualificationsComponent } from "./components/qualifications/qualifications.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from "./components/faq/faq.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ServicesDetailsComponent } from "./components/services-details/services-details.component";
import { CtaComponent } from "./components/cta/cta.component";
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, 
    HeroComponent, ServicesComponent, 
    QualificationsComponent, ContactComponent, 
    
    FooterComponent, TestimonialsComponent, 
    FaqComponent, BlogComponent, 
    ServicesDetailsComponent, CtaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'lp-psi-kelly'; 

  
  ngOnInit() {
    // Verificar se estamos no lado do cliente
    if (typeof window !== 'undefined') {

      // Animação para o título da seção 'home'
      gsap.from("#home h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: "#home h1",
          start: "top 80%", // Iniciar quando o topo do elemento estiver a 80% da viewport
          toggleActions: "play none none none" // Apenas tocar a animação uma vez
        }
      });

      // Animação para o parágrafo da seção 'home'
      gsap.from("#home p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: "#home p",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animação para o título da seção 'servicos'
      gsap.from("#servicos h3", {
        opacity: 0,
        y: -50,
        duration: 1,
        scrollTrigger: {
          trigger: "#servicos h3",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animação nos blocos de serviço
      gsap.from(".servico", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2, // Efeito de cascata entre os elementos
        scrollTrigger: {
          trigger: ".servico",
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animação para a seção 'atendimento' (rolagem para visualização)
      gsap.from("#atendimento", {
        opacity: 0,
        x: -100, // Deslizar da esquerda
        duration: 1,
        scrollTrigger: {
          trigger: "#atendimento", // O efeito será acionado quando esse elemento aparecer
          start: "top 80%", // Quando o topo do elemento atingir 80% da viewport
          toggleActions: "play none none none"
        }
      });

      // Animação para o botão de chamada à ação 'cta-what' (rolagem para visualização)
      gsap.from("#cta-what", {
        opacity: 0,
        scale: 0.8, // Efeito de zoom ao surgir
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: "#cta-what", // O efeito será acionado quando esse elemento aparecer
          start: "top 80%", // Quando o topo do elemento atingir 80% da viewport
          toggleActions: "play none none none"
        }
      });
    }
  }

}
