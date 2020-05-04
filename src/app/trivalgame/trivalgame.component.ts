import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivalgame',
  templateUrl: './trivalgame.component.html',
  styleUrls: ['./trivalgame.component.scss']
})
export class TrivalgameComponent implements OnInit {

  constructor() { }

  myarray: string[] = [];
i = 0;
languages: string[] = ['java', 'cprogram', 'C++', 'Spring', 'Html', 'Asp.net'];
 newstr: string;

  quizlist = [
    {
      ID: 1,
      language: 'java',
      question: 'Inventor of c++?',
      anslistobj: ['Pavan.c', 'James Gosling', 'Richie Richie', 'Amos.Emmanual'],
      answer: 'Richie Richie'
    },
    {
      ID: 2,
      language: 'java',
      question: 'Inventor of java?',
      anslistobj: ['Nayan.c', 'Ärmesh', 'Denish Richie', 'Kiran.DY'],
      answer: 'Denish Richie'
    },
    {
      ID: 3, language: 'java',
      question: 'how is java?',
      anslistobj: ['Easy', 'Difficult', 'moderate', 'nonoe'], 
      answer: 'Easy'
    },
    {
      ID: 4,
      language: 'cprogram',
      question: 'Inventor of cprogram?',
      anslistobj: ['a', 'b', 'c', 'd'],
      answer: 'a'
    } ,
    {
      ID: 5,
      language: 'cprogram',
      question: 'Inventor of cprogram?',
      anslistobj: ['a', 'b', 'c', 'd'],
      answer: 'b'
    }
  ];

quizlength: number;
selectedlanguage: any[];
question: string;
selectedvalue: string;
option: any[];
selectedlanques: any[];

  answerkey: AnswerKey[] = [];
  marks = 0;

  ngOnInit(): void {
  }
gettinglanguage() {
this.selectedlanques =  this.quizlist.filter(d => (d.language === this.selectedvalue));
this.question = this.selectedlanques[0].question;
this.option = this.selectedlanques[0].anslistobj;
this.i = 0;
this.quizlength = this.selectedlanques.length;
  }

  next() {
    ++this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }
  previous() {
    --this.i;
    this.question = this.selectedlanques[this.i].question;
    this.option = this.selectedlanques[this.i].anslistobj;
  }

  check(e, str: string, answer: string) {
    if (e.target.checked) {
      console.log('...................' + str + ' ' + answer);
      this.answerkey.push(new AnswerKey(str, answer));
    } else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
  generatemark() {
    for (let i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen === this.quizlist[i].answer) { this.marks++; }
    }
    // alert("your score is "+JSON.stringify(this.marks));
    document.writeln('your score is ' + this.marks);
  }

  recursivecheck() {
    const result1 = this.quizlist;
    const result2 = this.answerkey;

    const props = ['id', 'answer'];

    const result = result1.filter((o1) => {
      // filter out (!) items in result2
      return result2.some((o2) => {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map((o) => {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce((newo, ans) => {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log('result:' + JSON.stringify(result));
  }
}
export class AnswerKey {
  choosen: string;
  answer: string;
  constructor(choosen: string, answer: string) {
    this.choosen = choosen;
    this.answer = answer;
  }

}
