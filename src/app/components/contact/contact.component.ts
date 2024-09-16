import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    console.log('Message Sent', { name: this.name, email: this.email, message: this.message });
    // Aqui, você poderia implementar uma lógica de envio de email.
  }
}
