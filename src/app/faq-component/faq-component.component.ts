import { Component } from '@angular/core';

type faq =
{
  id:number,
  question:string,
  answer:string,
  hidden:boolean;
}

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrl: './faq-component.component.css'
})
export class FaqComponentComponent {
  faqs: faq[] = [
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.',
      hidden: true
    },
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
      hidden: true
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!',
      hidden: true
    },
    {
      id: 4,
      question: 'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
      answer: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.',
      hidden: true
    }
  ];

  hidden:boolean = false;

  Answer(id: number) : void
  {
    let item: faq | undefined = this.faqs.at(id - 1);
    if (item == undefined)
    {
      throw new Error("Invalid answer")
    }

    item.hidden =!item.hidden;

    this.faqs.forEach(curItem =>
      {
        if(curItem != item && curItem.hidden == false)
          {
            curItem.hidden = true;
          }
      }
    )
  }
}
