import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostOrderService } from '../shared/post-order.service';
interface Competitors {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
}
interface languages {
  eng: boolean;
  ru: boolean;
}
interface content {
  photo: boolean;
  text: boolean;
  video: boolean;
  no: boolean;
}

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
})
export class BriefComponent implements OnInit {
  popupSuccess = false;

  currentService = '';
  another = '';
  marketing = false;
  reason = '';
  description = '';
  visitors = '';
  competitors: Competitors = {
    c1: '',
    c2: '',
    c3: '',
    c4: '',
  };
  features = '';
  benefits = '';
  purpose = '';
  langs: languages = {
    eng: false,
    ru: false,
  };
  examples: Competitors = {
    c1: '',
    c2: '',
    c3: '',
    c4: '',
  };
  wishes = '';
  content: content = {
    photo: false,
    text: false,
    video: false,
    no: false,
  };
  terms = '';
  contacts: Competitors = {
    c1: '',
    c2: '',
    c3: '',
    c4: '',
  };

  constructor(
    private service: PostOrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentService = this.route.snapshot.paramMap.get('service') || '';
  }

  toggleService(service: string): void {
    this.currentService === service
      ? (this.currentService = '')
      : (this.currentService = service);
  }
  toggleTerms(terms: string): void {
    this.terms === terms ? (this.terms = '') : (this.terms = terms);
  }
  resetContent(): void {
    this.content = {
      photo: false,
      text: false,
      video: false,
      no: !this.content.no,
    };
  }
  resetAll(): void {
    this.another = '';
    this.currentService = '';
    this.marketing = false;
    this.reason = '';
    this.description = '';
    this.visitors = '';
    this.competitors = {
      c1: '',
      c2: '',
      c3: '',
      c4: '',
    };
    this.features = '';
    this.benefits = '';
    this.purpose = '';
    this.langs = {
      eng: false,
      ru: false,
    };
    this.examples = {
      c1: '',
      c2: '',
      c3: '',
      c4: '',
    };
    this.wishes = '';
    this.content = {
      photo: false,
      text: false,
      video: false,
      no: false,
    };
    this.terms = '';
    this.contacts = {
      c1: '',
      c2: '',
      c3: '',
      c4: '',
    };
  }
  log(): void {
    const result = `Услуги: ${this.currentService} ${
      this.marketing ? ' + маркетинг' : ''
    }\n
Для чего вам нужен сайт:\n${this.reason}\n
Опишите ваш проект:\n${this.description}\n
Кто ваша целевая аудитория:\n${this.visitors}\n
Укажите ваших основных конкурентов:
${this.competitors.c1}
${this.competitors.c2}
${this.competitors.c3}
${this.competitors.c4}\n
Что вы хотите видеть на сайте (контент,функционал):\n${this.features}\n
Какие есть преимущества у вашей компании/ чем вы отличаетесь от других:\n${
      this.benefits
    }\n
Укажите конкретные цели и задачи сайта (приобрести товар, оставить заявку и тд.):\n${
      this.purpose
    }\n
Требуются ли создать разные языковые версии сайта (русский,английский):\n${
      this.langs.ru ? 'Rus' : ''
    }, ${this.langs.eng ? 'Eng' : ''}\n
Сайты, которые вам нравятся:
${this.examples.c1}
${this.examples.c2}
${this.examples.c3}
${this.examples.c4}\n
Расскажите о ваших пожеланиях:\n${this.wishes}\n
Наличие материалов для сайта:\n${this.content.photo ? 'есть фото, ' : ''}${
      this.content.text ? 'есть текст, ' : ''
    }${this.content.video ? 'есть видео, ' : ''}${
      this.content.no ? 'с нуля' : ''
    }\n
Сроки проекта:\n${this.terms}\n
Контакты:
Имя: ${this.contacts.c1}
Телефон: ${this.contacts.c2}
E-mail: ${this.contacts.c3}
Компания: ${this.contacts.c4}`;
    this.service.post(result).subscribe((a) => {
      this.popupSuccess = true;
      this.resetAll();
    });
  }
}
