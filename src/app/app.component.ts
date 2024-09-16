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
}
