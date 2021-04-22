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
  let modal = document.querySelector(".modalQuiz");
  let tlMauvais =  gsap.timeline().
  fromTo(
    ".neutre",
    { opacity: 0, },
    { opacity: 1, ease: "none", duration: 0.2,})
    .fromTo(
      ".neutre",
      { rotationY: 0, },
    { duration: 1.3, rotationY: 720, ease: "none" },)
  .fromTo(
    ".mauvais",
    {
      rotationY: 0,
      opacity: 0, 
    },
    { rotationY: 720, 
     duration: 1.3,
     opacity: 1, 
     ease: "none" },"<")
  .fromTo(
    ".imgMauvais",
    {
      height: 0,
    },
    {
      height: 200,
      duration: 0.5,
    }, )
  .fromTo(
    ".texteMauvais",
    {
      fontSize: 0
    },
    {
      fontSize: 40,
      duration: 0.5
    }, "<")
  .fromTo(
    ".quizMauvais",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.1,
    }, "=+0.5"
  );
  tlMauvais.pause();
  let tlBonne =  gsap.timeline()
.fromTo(
   ".originale", { 
     opacity: 0,
  },
    {
     opacity: 1,
     duration: 0.2,
     ease: "none",
    }
)
  .fromTo(
   ".originale", { 
     rotation: 0,
  },
    {
     duration: 1.3, 
     rotation: 720,
     ease: "none",
    }
  )
  .fromTo(
   ".bonne",{
      opacity: 0,
      rotation: 0,
   },
    {
     opacity: 1,
     duration: 1.3,
     rotation: 720,
     ease: "none",
    
  }, "<")
  .fromTo(
   ".bonneImg",{
     height: 0,
   },
    {
     duration: 0.5,
     height: 250,
     ease: "bounce.out",
  })
  .fromTo(
   ".txtBonne",{
     fontSize: 0,
   },
    {
     duration: 0.5,
     fontSize: 40,
     ease: "bounce.out",
  }, "<")

  .fromTo(
   ".quizBonne",{ 
     opacity: 1,
   },
    {
     duration: 0.1,
     opacity: 0,
   }, "=+0.5");
  
tlBonne.pause();
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
      let div = document.createElement("div");
      div.classList.add("question");
      let strong = document.createElement("strong");
      let q = document.createElement("label");
      q.innerText = this.questions;
      modal.appendChild(div);
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
      questions.forEach(function (question) {
        question.classList.remove("is-visible");
      });
      questions[this.index].classList.add("is-visible");
     
      
    }
    change(choixReponse) {
      const questions = document.querySelectorAll(".question");
      this.answer = this.settings[this.index].r;
      if (choixReponse == this.answer) {
        this.goodAnswer();  
      } else {
        this.wrongAnswer();
      }
      if (this.index <= 6) {
        ++this.index;
        this.setVisible();
      }else{
        questions[this.index].classList.remove("is-visible");
        let divModal = document.createElement("div");
        let strongModal = document.createElement("strong");
        let pointage = document.createElement("label");
        let score = document.createElement("p");
        divModal.style.textAlign = "center"; 
        score.style.fontSize = "40px";
        pointage.innerText = "Pointage:";
        score.innerText = this.score + "/8";
        modal.appendChild(divModal);
        divModal.appendChild(pointage);
        strongModal.appendChild(score);
        pointage.appendChild(document.createElement("br"));
        pointage.appendChild(strongModal);
      }
    }
  goodAnswer(){
    this.score++;
    tlBonne.play(0);
  }
  wrongAnswer(){
    tlMauvais.play(0);
  }
  }
  new Quiz(tableauQuiz);
  

