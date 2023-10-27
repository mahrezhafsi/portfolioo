import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {  
  project:  Project[] =[
    {id: 1, name: "sie web angular springboot", pictures: ["../../assets/w10.png","../../assets/w11.png","../../assets/w12.png"], projectLink: "https://github.com/mahrezhafsi", summary: "Projet d'intégration(angular ,springboot):", description: "Un projet  utilisant Angular pour le frontend et Spring Boot pour le backend pour la création d'un système d'authentification, de connexion (login), et d'inscription (signup) d'utilisateurs est un excellent point de départ pour de nombreuses applications web", tags: [Tag.ANGULAR,Tag.JAVASCRIPT,Tag.SPRINGBOOT,Tag.JAVA]},
    {id: 0, name: "site web ", pictures: ["../../assets/w7.png","../../assets/w9.png","../../assets/w8.png"], projectLink: "https://github.com/mahrezhafsi", summary: "Stage de perfectionnement chez la société  SEBN(gestion de stock):", description: "La création d'un site web avec Angular pour la gestion de stock au sein de la société SEBN serait un projet majeur pour améliorer l'efficacité et la précision de la gestion des stocks", tags: [Tag.ANGULAR ,Tag.TYPESCRIPT]},

    {id: 2, name: "site web portfolio", pictures: ["../../assets/w16.png","../../assets/w17.png","../../assets/w18.png"], projectLink: "https://github.com/mahrezhafsi", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Creating a web portfolio with Angular is an excellent way to showcase your skills, projects, and accomplishments as a developer or any other professional.The Angular Web Portfolio is a personal website that serves as a dynamic showcase of your work, skills, and achievements. It is designed to impress potential employers, clients, or collaborators with your capabilities and creativity. ", tags: [Tag.ANGULAR,Tag.TYPESCRIPT]},
    {id: 3, name: "Mobile App chat (angular,springboot)", pictures: ["../../assets/w13.png","../../assets/w14.png","../../assets/w15.png"], projectLink: "https://github.com/mahrezhafsi", summary: "Stage de PFe avec la societe Holistic winter (chat app):", description: "Le développement d'une application de chat (ChatApp) en utilisant Flutter pour la partie mobile et Spring Boot pour la partie backend est un projet passionnant.  ChatApp est une application de messagerie instantanée qui permet aux utilisateurs de s'inscrire, de se connecter, de publier des messages, d'envoyer des invitations à d'autres utilisateurs, et de discuter en temps réel", tags: [Tag.FLUTTER,Tag.SPRINGBOOT,Tag.JAVA]},

    {id: 4, name: "Mobile App", pictures: ["../../assets/w1.png","../../assets/w2.png","../../assets/w3.png"], projectLink: "https://github.com/mahrezhafsi", summary: "mini projet avec flutter-firebase(gestion des utilisateurs):", description: "Un mini-projet de gestion des utilisateurs avec Flutter et Firebase peut être une excellente façon d'apprendre à intégrer Firebase dans une application mobile et de gérer les opérations courantes liées aux utilisateurs.", tags: [Tag.FLUTTER,Tag.FIREBASE,]},
    {id: 5, name: "Mobile App", pictures: ["../../assets/w4.png","../../assets/w5.png","../../assets/w6.png"], projectLink: "https://github.com/mahrezhafsi", summary: "mini projet avec java(projet d'integration)", description: "Un mini-projet  en Java peut être un excellent moyen de mettre en pratique vos compétences en développement logiciel, de comprendre les concepts d'intégration de systèmes, et de créer une application qui rassemble différentes composantes pour résoudre un problème spécifique.", tags: [Tag.FLUTTER,  Tag.SPRINGBOOT,Tag.JAVA ]},
  ];

  constructor() { }
  GetProjects(){
    return this.project;
  }
  GetProjectById(id:number) : Project{
    let project  = this.project.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError(`there is no project that matches the id: ${id}`);
    }
    return project;
  }
  GetProjectByFilter(filterTags:Tag[]){
    let filteredProjects: Project[]=[];
    this.project.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll =false;
        }
      });
      if ( foundAll){
        filteredProjects.push(project);
      }
      
    });
    return filteredProjects;
  }
}
