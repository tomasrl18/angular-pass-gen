import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordGeneratorComponent } from './password-generator.component';

describe('PasswordGeneratorComponent', () => {
  let component: PasswordGeneratorComponent;
  let fixture: ComponentFixture<PasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a password of the correct length', () => {
    component.length.setValue(12);
    component.generatePassword(new Event('click'));
    expect(component.password.length).toBe(12);
  });

  it('should include uppercase letters when selected', () => {
    component.length.setValue(12);
    component.includeUppercase.setValue(true);
    component.generatePassword(new Event('click'));
  
    const hasUppercase = /[A-Z]/.test(component.password);
    expect(hasUppercase).toBe(true);
  });

  it('should include numbers when selected', () => {
    component.length.setValue(12);
    component.includeNumbers.setValue(true);
    component.generatePassword(new Event('click'));
  
    const hasNumber = /\d/.test(component.password);
    expect(hasNumber).toBe(true);
  });

  it('should include symbols when selected', () => {
    component.length.setValue(12);
    component.includeSymbols.setValue(true);
    component.generatePassword(new Event('click'));
  
    const hasSymbol = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(component.password);
    expect(hasSymbol).toBe(true);
  });

  it('should show alert if length if less then 8', () => {
    spyOn(window, 'alert');
    component.length.setValue(4);
    component.generatePassword(new Event('click'));
  
    expect(window.alert).toHaveBeenCalledWith('Password length must be at least 8 characters');
  });

  it('should show alert if length is not provided', () => {
    spyOn(window, 'alert');
    component.length.setValue(null);
    component.generatePassword(new Event('click'));
  
    expect(window.alert).toHaveBeenCalledWith('Please enter a password length');
  });
});
