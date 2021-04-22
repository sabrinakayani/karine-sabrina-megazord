const tableauQuiz = [
    {
      q: "En quelle année Day6 a débuté?",
      o1: 2015,
      o2: 2017,
      o3: 2019,
      o4: 2018,
      r: 1
    },
    {
      q: "Combien y a-t-il de membre dans Day6?",
      o1: 4,
      o2: 5,
      o3: 6,
      o4: 7,
      r: 2
    },
    {
      q: "Combien de chansons y a-t-il dans le premier album de Day6?",
      o1: 5,
      o2: 6,
      o3: 7,
      o4: 8,
      r: 2
    },
    {
      q: "Tous les membres de Day6 chantent.",
      o1: "Vrai",
      o2: "Faux",
      r: 1
    },
    {
      q: "Quel membre a recemment commencé son service militaire?",
      o1: "Jae",
      o2: "YoungK",
      o3: "Wonpil",
      o4: "Sungjin",
      r: 4
    },
    {
      q: "Day6 a presque débuté sous le nom de 6LIVE.",
      o1: "Vrai",
      o2: "Faux",
      r: 2
    },
    {
      q: "Qui a été le dernier membre à être ajouté à day6?",
      o1: "Jae",
      o2: "Wonpil",
      o3: "Dowoon",
      r: 3
    },
    {
      q: "Quel était la première chanson de Day6?",
      o1: "You Were Beautiful",
      o2: "Sweet Chaos",
      o3: "Congratulations",
      o4: "Zombie",
      r: 3
    }
  ];
  let i;
  class Quiz {
    constructor(settings) {
      this.index = 0;
      this.score = 0;
      this.settings = settings;
      for (i = 0; i < tableauQuiz.length; i++) {
        this.questions = this.settings[i].q;
        this.o1 = this.settings[i].o1;
        this.o2 = this.settings[i].o2;
        this.o3 = this.settings[i].o3;
        this.o4 = this.settings[i].o4;
        this.creerHTML();
      }
      this.setVisible();
    }
    creerHTML() {
      let linebreak = document.createElement("br");
      let div = document.createElement("div");
      div.classList.add("question");
      let strong = document.createElement("strong");
      let q = document.createElement("label");
      q.innerText = this.questions;
      document.body.appendChild(div);
      div.appendChild(strong);
      strong.appendChild(q);
      if (this.o1 !== null) {
        let o1 = document.createElement("input");
        o1.setAttribute("type", "radio");
        o1.setAttribute("name", "question" + i);
        o1.setAttribute("value", 1);
        let label1 = document.createElement("label");
        label1.innerText = this.o1;
        div.appendChild(document.createElement("br"));
        div.appendChild(o1);
        div.appendChild(label1);
        o1.addEventListener("click", () => this.change(1));
      }
      if (this.o2 !== null) {
        let o2 = document.createElement("input");
        o2.setAttribute("type", "radio");
        o2.setAttribute("name", "question" + i);
        o2.setAttribute("value", 2);
        let label2 = document.createElement("label");
        label2.innerText = this.o2;
        div.appendChild(document.createElement("br"));
        div.appendChild(o2);
        div.appendChild(label2);
        o2.addEventListener("click", () => this.change(2));
      }
      if (this.o3 != null) {
        let o3 = document.createElement("input");
        o3.setAttribute("type", "radio");
        o3.setAttribute("name", "question" + i);
        o3.setAttribute("value", 3);
        let label3 = document.createElement("label");
        label3.innerText = this.o3;
        div.appendChild(document.createElement("br"));
        div.appendChild(o3);
        div.appendChild(label3);
        o3.addEventListener("click", () => this.change(3));
      }
      if (this.o4 != null) {
        let o4 = document.createElement("input");
        o4.setAttribute("type", "radio");
        o4.setAttribute("name", "question" + i);
        o4.setAttribute("value", 4);
        let label4 = document.createElement("label");
        label4.innerText = this.o4;
        div.appendChild(document.createElement("br"));
        div.appendChild(o4);
        div.appendChild(label4);
        o4.addEventListener("click", () => this.change(4));
      }
    }
    setVisible() {
      const questions = document.querySelectorAll(".question");
      questions.forEach(function (question, index, array) {
        question.classList.remove("is-visible");
      });
      questions[this.index].classList.add("is-visible");
    }
    change(choixReponse) {
      this.answer = this.settings[this.index].r;
      if (choixReponse == this.answer) {
        this.score++;
        console.log("Bonne Réponse : pointage " + this.score);
      } else {
        console.log("Mauvaise Réponse : pointage " + this.score);
      }
      if (this.index < 8) {
        this.index++;
        this.setVisible();
      }
    }
  }
  new Quiz(tableauQuiz);
  
