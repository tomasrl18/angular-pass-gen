import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-password-generator',
  imports: [ReactiveFormsModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css',
})
export class PasswordGeneratorComponent {
  length = new FormControl();
  includeUppercase = new FormControl();
  includeNumbers = new FormControl();
  includeSymbols = new FormControl();
  password: string = '';

  generatePassword(event: Event) {
    event.preventDefault();

    if (!this.length.value) {
      alert('Please enter a password length');
      return;
    }
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercaseChars;
    if (this.includeUppercase.value) {
      characters += uppercaseChars;
    }

    if (this.includeNumbers.value) {
      characters += numberChars;
    }

    if (this.includeSymbols.value) {
      characters += symbolChars;
    }

    if (!characters) {
      characters = lowercaseChars;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length.value; i++) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      const randomIndex = array[0] % characters.length;
      generatedPassword += characters.charAt(randomIndex);
    }

    this.password = generatedPassword;
  }
}
