(()=>{"use strict";var e={922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=class{node;constructor(e,t="div",r="",n=""){const s=document.createElement(t);s.className=r,s.textContent=n,e&&e.append(s),this.node=s}destroy(){this.node.remove()}}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=[{quest:"Какого числа мы с тобой познакомились?",answer:["9 сентября","10 сентября","11 сентября","10 октября","11 ноября"],trueAnswer:2},{quest:"Закончи фразу: -Я давно жду любви. -Обычно вы этого не говорите. ...",answer:["Я знаю","Очень хорошо, Джеймс","Сколько зим","Мне некому","Очень хорошо"],trueAnswer:3},{quest:"Какого размера у меня нога?",answer:["44","46","45","43","47"],trueAnswer:1},{quest:"Какой у меня рост?",answer:["198","199","200","201","202"],trueAnswer:2},{quest:"Какая часть твоего тела мне нравится больше всего?",answer:["Волосы","Ноги","Руки","Попа","Всё"],trueAnswer:4},{quest:"Что такое циклы в нашем понимании?",answer:["Циклы в JS","Циклы в природе","Циклы в жизни","Open Media","Нет правильного ответа"],trueAnswer:3},{quest:"Чья теория об эффекте бабочки?",answer:["Теория Хаоса","Теория Вердинкта","Теория бабочки","Теория Верне","Нет правильного ответа"],trueAnswer:0},{quest:"Кто такой Меч зари?",answer:["Гвардеец","Рыцарь","Бандит","Мужчина","Женщина"],trueAnswer:1},{quest:"Кого мне убить?",answer:["Мужчину","Женщину","Женщину","Мужчину","Нет правильного ответа"],trueAnswer:4},{quest:"Как мне больше всего нравится тебя называть?",answer:["Звёздочка","Солнышко","Звёздочка или солнышко","Зайка","Милая"],trueAnswer:2},{quest:"Когда был удалён диалог?",answer:["22 октября","11 сентября","23 ноября","14 декабря","Нет правильного ответа"],trueAnswer:2},{quest:"Сколько мне лет?",answer:["22","23","24","25","26"],trueAnswer:2},{quest:"Мой любимый напиток?",answer:["Coca-Cola","Яблочный сок","Piwo","Wiski","Sprite"],trueAnswer:0},{quest:"На сколько процентов мы разоблачены?",answer:["50%","70%","80%","95%","100%"],trueAnswer:3},{quest:"Как зовут моего кота?",answer:["Барсик","Миллер","Дымок","Тоша","Пушок"],trueAnswer:3},{quest:"Как зовут мой цветок?",answer:["Никак","Зелень","Цветок","Миллер","Листок"],trueAnswer:3},{quest:"Сколько пар вязаных носков у меня?",answer:["0","1","2","3","Нет правильного ответа"],trueAnswer:2},{quest:"Какой язык программирования я изучаю?",answer:["Javascript","Typescipt","Python","Java","JS/TS"],trueAnswer:4},{quest:"Почему мы с тобой начали общаться?",answer:["Никто не знает","Только богу известно","Что-то неизвестное","Кто знает как должно быть","Нет правильного ответа"],trueAnswer:0},{quest:"Насколько я дорожу тобой?",answer:["Сильно","Средне","Слабо","Очень сильно","Нет правильного ответа"],trueAnswer:3}],t={quest:[],counter:0};function n(){const r=document.querySelector(".quest_text"),s=document.querySelectorAll(".quest_answer"),o=document.querySelector(".quest_count");let u=function(){let e=Math.floor(20*Math.random());if(!t.quest.includes(e))return t.quest.push(e),e;for(let e=0;e<20;e++)if(!t.quest.includes(e))return t.quest.push(e),e}();r.textContent=e[u].quest,Array.from(s).forEach(((r,s)=>{r.textContent=e[u].answer[s],r.onclick=()=>{s===e[u].trueAnswer?(document.querySelectorAll(".quest_answer").forEach((e=>{e.style.background="green"})),setTimeout((()=>{if(document.querySelectorAll(".quest_answer").forEach((e=>{e.style.background="aqua"})),t.counter+=1,o.textContent=`${t.counter} / 20`,t.counter>=20){const e=document.querySelector(".wrapper"),t=document.createElement("div");return t.classList="game_end",t.textContent="https://ibb.co/3d8BjVD",void e.append(t)}n()}),500)):(document.querySelectorAll(".quest_answer").forEach((e=>{e.style.background="red"})),setTimeout((()=>{location.reload()}),1e3))}}))}const{default:s}=r(922);class o extends s{constructor(e){super(e,"div","quest");const t=new s(this.node,"div","quest_inner",""),r=new s(t.node,"div","quest_inner_text");new s(r.node,"p","quest_text","text"),new s(r.node,"p","quest_text quest_count","0 / 20");for(let e=0;e<5;e++)new s(t.node,"div","quest_answer","answer");n(),new s(this.node,"p","audio_text","Прослушай аудио перед началом");const o=new s(this.node,"audio","audio");new s(o.node,"source").node.setAttribute("src","./mus.mp3"),o.node.setAttribute("controls","controls")}}const u=new class{constructor(e=!0){this.type=e}encrypt(e,t){if(!e||!t)throw new Error("Incorrect arguments!");let r=e.split("").map(((e,t)=>" "===e?t:0)).filter((e=>e)),n=[],s=e.split(" ").join("");for(let e=0,r=0;e<s.length;e++,r++){const o=97;let u=s[e].toLowerCase().charCodeAt();r>t.length-1&&(r=0);let a=t[e]?t[e].toLowerCase().charCodeAt():t[r].toLowerCase().charCodeAt();u>=o&&u<=122?n.push([o-u<0?u-o:o-u,o-a<0?a-o:o-a]):n.push([s[e]])}n=n.map((e=>e[0]+e[1]<26?String.fromCharCode(String(e[0]+e[1]+97)):"number"==typeof e[0]?String.fromCharCode(String(e[0]+e[1]-26+97)):e[0]));for(let e=0;e<r.length;e++)n.splice(r[e],0," ");return this.type?n.join("").toUpperCase():n.reverse().join("").toUpperCase()}decrypt(e,t){if(!e||!t)throw new Error("Incorrect arguments!");let r=e.split("").map(((e,t)=>" "===e?t:0)).filter((e=>e)),n=[],s=e.split(" ").join("").toLowerCase();for(let e=0,r=0;e<s.length;e++,r++){const o=97;let u=s[e].toLowerCase().charCodeAt();r>t.length-1&&(r=0);let a=t[e]?t[e].toLowerCase().charCodeAt():t[r].toLowerCase().charCodeAt();u>=o&&u<=122?n.push([o-u<0?u-o:o-u,o-a<0?a-o:o-a]):n.push([s[e]])}n=n.map((e=>e[0]-e[1]>=0?String.fromCharCode(String(e[0]-e[1]+97)):"number"==typeof e[0]?String.fromCharCode(String(e[0]+26-e[1]+97)):e[0]));for(let e=0;e<r.length;e++)n.splice(r[e],0," ");return this.type?n.join("").toUpperCase():n.reverse().join("").toUpperCase()}}("");var a=r(922);class c extends a.default{constructor(e){super(e,"div","stars"),new a.default(this.node,"div","stars1"),new a.default(this.node,"div","stars2"),new a.default(this.node,"div","stars3")}}const d=document.querySelector(".pas_inp");document.querySelector(".pas_btn").addEventListener("click",(()=>{d.value===u.decrypt("YUQSFSPIBGZEXDULHWMJVSDWN","ITSASECRETPASSWORDMAAAN")?(document.querySelector(".pas").style.background="green",setTimeout((()=>{document.querySelector(".pas").remove(),new o(document.querySelector(".wrapper"),"div","quest"),new c(document.querySelector(".wrapper"))}),1e3)):(document.querySelector(".pas").style.background="red",setTimeout((()=>{document.querySelector(".pas").style.background="none"}),1e3))}))})()})();