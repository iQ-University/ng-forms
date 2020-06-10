import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.css' ]
})
export class ContactFormComponent implements OnInit {
  public heroForm: FormGroup;
  public model: Hero;
  public submittedModel: Hero;
  public powers: string[];
  public submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.model = new Hero('Hulk', 'super flexible', 'hulk the great', 'hulk@avengers.com');
    this.powers = [ 'giant', 'super flexible', 'spits fire' ];

    this.heroForm = this.formBuilder.group({
      name: [ this.model.name, Validators.required ],
      alterEgo: [ this.model.alterEgo, Validators.required ],
      email: [ this.model.email, [ Validators.required, this.emailValidator ] ],
      power: [ this.filterPower(this.powers, this.model), Validators.required ]
    }, {updateOn: 'blur'});
  }

  private filterPower(powers: string[], { power }: Hero) {
    return powers.filter((element) => element === power)[ 0 ];
  }

  onSubmit(hero: FormGroup) {
    this.submitted = true;
    this.submittedModel = hero.value;
    return false;
  }

  private emailValidator(control: AbstractControl) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }

}



