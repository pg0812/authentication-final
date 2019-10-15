import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";




describe('AppComponent', () => {
    let component: SigninComponent;
    let fixture: ComponentFixture<SigninComponent>;
    
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninComponent
      ],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(SigninComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SigninComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
});

it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
});

it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
});

});