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


}



