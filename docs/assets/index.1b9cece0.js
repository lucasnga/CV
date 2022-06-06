import{r as e,a}from"./vendor.defc3aea.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const n=new URL(e,location),c=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,l)=>{const r=new URL(e,n);if(self[a].moduleMap[r])return t(self[a].moduleMap[r]);const o=new Blob([`import * as m from '${r}';`,`${a}.moduleMap['${r}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){l(new Error(`Failed to import: ${e}`)),c(s)},onload(){t(self[a].moduleMap[r]),c(s)}});document.head.appendChild(s)})),self[a].moduleMap={}}}("/CV/assets/");const t="★",n="☆";function c({name:a,value:c,range:l=5}){return e.createElement("div",{className:"row skill pb-1"},e.createElement("div",{className:"col text-end ps-0"},e.createElement("span",{className:"skill-name"},a)),e.createElement("div",{className:"col-3 text-end ps-0"},e.createElement("span",{className:"skill-score"},Array(l).fill(t).fill(n,c).join(""))))}const l=[{value:3,name:"HTML / CSS / SCSS"},{value:3,name:"Javascript / TypeScript"},{value:3,name:"Git"},{value:3,name:"React (redux / router)"},{value:2,name:"VueJS (vuex / router)"},{value:4,name:"REST API / axios / fetch"},{value:2,name:"Testing (Jest / Cypress)"},{value:2,name:"Scrum / Kanban (Jira / Assembla)"},{value:4,name:"Linux (Fedora / Debian)"},{value:3,name:"Docker / Vagant"},{value:3,name:"yarn / npm / parcel"},{value:2,name:"Python / Bash (Scripting) "},{value:3,name:"MySQL / PostreSQL"},{value:2,name:"MongoDB / Redis"},{value:4,name:"babel / webpack / gulp"},{value:3,name:"lodash / ramda"},{value:1,name:"Design patterns"},{value:2,name:"Node JS / NestJS / express"},{value:4,name:"Bootstrap / Material-UI"},{value:2,name:"Elasticsearch"},{value:1,name:"React Native / Expo"},{value:2,name:"Magento 2 - Frontend (KnockoutJS / jQuery)"}],r=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"row"},e.createElement("h3",{className:"section-head text-end"},"SKILLS")),l.map((a=>e.createElement(c,{key:a.name,name:a.name,value:a.value}))));function o({date:a,func:t,company:n}){return e.createElement("div",{className:"row course"},e.createElement("div",{className:"col-4 course-info"},e.createElement("div",{className:"date"},a)),e.createElement("div",{className:"col course-info"},e.createElement("div",{className:"function"},t),e.createElement("div",{className:"company"},n)))}const s=[{date:"September 2016",func:"JavaScript",company:"ROOTSHER"},{date:"February 2020",func:"DevMeeting Blockchain",company:"360codelab by Daniel Kmak"},{date:"April 2020",func:"React Native Workshop",company:"DevMeetings by Sebastian Mysakowski"}],m=()=>e.createElement(e.Fragment,null,e.createElement("h3",{className:"section-head"},"COURSES"),e.createElement("div",{className:"col section-content"},s.map((a=>e.createElement(o,{key:a.date,date:a.date,func:a.func,company:a.company})))));function i({date:a,func:t,company:n,place:c}){return e.createElement("div",{className:"row activity"},e.createElement("div",{className:"col-6 activity-info"},e.createElement("div",{className:"date"},a),e.createElement("div",{className:"place"},c)),e.createElement("div",{className:"col-6 activity-info"},e.createElement("div",{className:"function"},t),e.createElement("div",{className:"company"},n)))}const d=[{date:"September 2003 – June 2009",func:"Social Instructor",company:"Youth Palace",place:"Warsaw"}],u=()=>e.createElement(e.Fragment,null,e.createElement("h3",{className:"section-head"},"EXTRA-CURRICULAR ACTIVITIES"),e.createElement("div",{className:"col section-content"},d.map((({date:a,place:t,func:n,company:c})=>e.createElement(i,{key:c,date:a,place:t,func:n,company:c})))));function p({date:a,place:t,func:n,company:c,details:l}){return e.createElement("div",{className:"row experience"},e.createElement("div",{className:"col-6 experience-info"},e.createElement("div",{className:"date"},a),e.createElement("div",{className:"place"},t)),e.createElement("div",{className:"col-6 experience-info"},e.createElement("div",{className:"function"},n),e.createElement("div",{className:"company"},c)),e.createElement("div",{className:"col-12"},e.createElement("ul",null,null==l?void 0:l.map(((a,t)=>e.createElement("li",{key:t},a))))))}const E=[{date:"Feb 2019 – Apr 2020",func:"Junior Frontend Developer",company:"ORBA Sp.z o.o.",place:"Warsaw",details:["Modyfikacja widoków sklepu internetowego Magento, VueStoreFront","Praca z wieloma frameworkami: React, Vue oraz KnockoutJS","Tworzenie aplikacji SPA w JS z React dla Magento","Praca z systemem kontroli wersji GIT, oprogramowaniem do zarządzania projektem Ansible oraz Jira, w wielu dynamicznych zespołach"]},{date:"Oct 2017 – Dec 2017",func:"Frontend developer",company:"Perspektywy Press",place:"Warsaw",details:["Opracowywanie widoków (HTML + SCSS + PS)","Praca z systemem CMS Joomla"]},{date:"Sep 2016 – Sep 2017",func:"Junior Frontend Developer",company:"ROOTSHER",place:"Warsaw",details:["opracowywanie widoków oraz tworzenie landing pages (HTML, CSS, React)","Praca z systemem CMS Wordpress, frameworkiem NextJS, React"]},{date:"Dec 2008 – Dec 2009",func:"Helpdesk",company:"eFuzja",place:"Warsaw",details:["Konf. oprogramowania, sprzętu, urządzeń sieciowych dla klientów","Konfiguracja sieciowych urządzeń aktywnych, konserwacja oraz układanie okablowania sieciowego"]},{date:"Apr 2005 – Mar 2012",func:"Administrator sieci",company:"Mlekomat Sp.Jawna",place:"Karczew",details:["Konfiguracja sprzętu sieciowego w firmie oraz urządzeń zdalnych","Zarządzanie serwerem usług sieciowych SMTP, POP3, SAMBA, RD (Linux)","Tworzenie i zarządzanie środowiskiem pracy w firmie, konfiguracja sprzętu komputerowego oraz rozwiązywanie problemów z oprogramowaniem"]}],v=()=>e.createElement(e.Fragment,null,e.createElement("h3",{className:"section-head"},"WORK EXPERIENCE"),e.createElement("div",{className:"col section-content"},E.map((({date:a,place:t,func:n,company:c,details:l})=>e.createElement(p,{key:c,date:a,place:t,func:n,company:c,details:l}))))),w=[{name:"English",value:3},{name:"Polish",value:6}],N=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"row"},e.createElement("h3",{className:"section-head pt-2 text-end"},"LANGUAGES")),w.map((({name:a,value:t})=>e.createElement(c,{key:a,name:a,value:t,range:6})))),y=[{date:"2006 – 2010",place:"Warszawa",company:"Wyższa Szkoła Technologii Informatycznych w Warszawie",func:"Inżynier"}],f=()=>{var a,t,n,c;return e.createElement(e.Fragment,null,e.createElement("h3",{className:"section-head"},"EDUCATION"),e.createElement("div",{className:"col section-content"},e.createElement("div",{className:"row education"},e.createElement("div",{className:"col-4 education-info"},e.createElement("div",{className:"date"},null==(a=y[0])?void 0:a.date),e.createElement("div",{className:"place"},null==(t=y[0])?void 0:t.place)),e.createElement("div",{className:"col education-info"},e.createElement("div",{className:"company"},null==(n=y[0])?void 0:n.company),e.createElement("div",{className:"func"},null==(c=y[0])?void 0:c.func)))))},z=()=>e.createElement(e.Fragment,null,e.createElement("div",{className:"col-9 header"},e.createElement("div",{className:"row nameRole"},e.createElement("div",{className:"col-7 name"},e.createElement("h1",null," Łukasz Anuszkiewicz")),e.createElement("div",{className:"col-5 text-center possession"},e.createElement("h4",{className:"accent"},"Frontend Developer"))),e.createElement("div",{className:"row infoBox"},e.createElement("div",{className:"col-6"},e.createElement("div",{className:"row info-row"},e.createElement("div",{className:"col-4"},e.createElement("span",{className:"info-row-head"},"Living in")),e.createElement("div",{className:"col-6"},e.createElement("div",{className:"info-row-value"},"Warsaw"))),e.createElement("div",{className:"row info-row"},e.createElement("div",{className:"col-4"},e.createElement("span",{className:"info-row-head"},"Email")),e.createElement("div",{className:"col-6"},e.createElement("span",{className:"info-row-value"},"lucasnga.official@gmail.com"))),e.createElement("div",{className:"row info-row"},e.createElement("div",{className:"col-4"},e.createElement("span",{className:"info-row-head"},"Links")),e.createElement("div",{className:"col-6"},e.createElement("span",{className:"info-row-value"},e.createElement("a",{href:"https://www.linkedin.com/in/lukasz-anuszkiewicz"},"LinkedIn")),", ",e.createElement("span",{className:"info-row-value"},e.createElement("a",{href:"https://github.com/lucasnga"},"Github"))))),e.createElement("div",{className:"col-6"},e.createElement("div",{className:"row info-row"},e.createElement("div",{className:"col-4"},e.createElement("span",{className:"info-row-head"},"Phone")),e.createElement("div",{className:"col-6"},e.createElement("span",{className:"info-row-value"}," 509-232-926"))),e.createElement("div",{className:"row info-row"},e.createElement("div",{className:"col-4"},e.createElement("span",{className:"info-row-head"},"Date / Place of birth")),e.createElement("div",{className:"col-6"},e.createElement("span",{className:"info-row-value"},"1984-09-26 Warsaw")))))),e.createElement("div",{className:"col-3 pe-0 avatarBox"},e.createElement("div",{className:"avatar"}))),h=()=>e.createElement(e.Fragment,null,e.createElement("h3",{className:"section-head"}),e.createElement("div",{className:"col px-1",style:{color:"rgba(0,0,0, 0.4)"}},e.createElement("h6",{className:"rodo"},"Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).")));function k(){return e.createElement("div",{className:"App"},e.createElement("div",{className:"row headSection"},e.createElement(z,null)),e.createElement("div",{className:"row section"},e.createElement(f,null)),e.createElement("div",{className:"row section justify-content-between"},e.createElement("div",{className:"col-8"},e.createElement(v,null),e.createElement("div",{className:"row section"},e.createElement(u,null))),e.createElement("div",{className:"col-4"},e.createElement(r,null),e.createElement(N,null))),e.createElement("div",{className:"row section",style:{pageBreakAfter:"always"}},e.createElement(m,null)),e.createElement("div",{className:"row section fixed"},e.createElement(h,null)))}a.render(e.createElement(e.StrictMode,null,e.createElement(k,null)),document.getElementById("root"));