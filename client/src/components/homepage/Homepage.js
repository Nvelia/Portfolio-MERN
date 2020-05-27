import React from "react";
import Header from "../../containers/partials/Header";
import FlashMessage from "./../../containers/partials/FlashMessage";

const Homepage = () => {
  return (
    <div>
      <Header />
      <FlashMessage />
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-xl-4 shapes">
            <div className="triangle">
              <div className="empty" />
            </div>
            <div className="circle">
              <div className="empty" />
            </div>
          </div>
          <div className="col-xl-8 introduction">
            <h3 className="mb-5">Présentation</h3>
            <div className="my-4">
              <strong>Issu d'une formation de technico-commercial</strong>, j'ai
              travaillé dans une boutique de téléphonie pendant 2ans avant de
              devenir technicien smartphone et informatique au sein de cette
              même boutique pour la même durée. J'ai eu la liberté de développer
              et mettre en pratique les compétences de mon choix permettant
              notamment l'introduction de la personnalisation complète d'un
              smartphone (choix de couleur, texture etc) pour les clients.
            </div>
            <div className="my-4">
              Passioné de technologie et de divertissement numérique depuis
              toujours,{" "}
              <strong>
                j'ai décidé de me former il y a deux ans dans le développemeent
                web au sein de la formation diplomante Développeur Web Junior
                chez OpenClassrooms.com.
              </strong>
              <br />
              J'ai pu apprendre dans un premier temps les bases grâce à l'HTML,
              le CSS, JavaScript, PHP et SQL.
              <br />
              <strong>
                Autodidacte, j'ai ensuite approfondi ces connaissances en
                découvrant et expérimentant des outils et bibliothèques
                javascript
              </strong>{" "}
              tels que jQuery, ReactJS, Node.JS{" "}
              <strong>et des Framework</strong> comme Bootstrap et Symfony 4.
            </div>
            <div className="my-4">
              <strong>
                Je cherche désormais à renforcer mes connaissances suscitées
                mais plus particulièrement autour de Javascript et ses
                bibliothèques ainsi que PHP à travers le Framework Symfony.
              </strong>{" "}
              Pour ce faire, mon objectif aujourd'hui est la mise à profit de
              mes connaissances au sein d'une entreprise afin de développer et
              partager mes connaissances tout en continuant de me former de mon
              côté.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
