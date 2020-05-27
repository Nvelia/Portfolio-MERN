import React, { Component } from "react";
import VizSensor from "react-visibility-sensor";
import { connect } from "react-redux";

import Menu from "./partials/Menu";
import { setComponentsVisibility } from "../actions/componentVisibilityActions";
import { setModalState } from "../actions/modalActions";

class Homepage extends Component {
  state = {
    homePageOnScreen: false,
    animationLaunched: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.homePageOnScreen && !this.state.animationLaunched) {
      this.setState({
        animationLaunched: true,
      });
    }
    if (
      prevState.homePageOnScreen !== this.state.homePageOnScreen &&
      this.state.homePageOnScreen === true
    ) {
      this.props.setComponentsVisibility(
        "homepage",
        this.props.homePageOnScreen
      );
    }

    if (prevProps.modal !== this.props.modal && this.props.modal.opened) {
      this.props.fullpageApi.setAllowScrolling(false);
    } else {
      this.props.fullpageApi.setAllowScrolling(true);
    }
  }

  render() {
    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({ homePageOnScreen: isVisible });
        }}
      >
        <div className="full-height section">
          <div className="homepage">
            {this.state.animationLaunched && (
              <Menu page="homepage" fullpageApi={this.props.fullpageApi} />
            )}
            <div className="homepage-titles-container">
              <div className="homepage-titles-and-bar">
                <div className="homepage-titles">
                  <h1>
                    <span className="homepage-titles-name">
                      Nicolas <span className="colored-word">VELIA</span>
                    </span>
                    <br />
                    <span className="homepage-titles-job">
                      <span className="colored-word">Développeur</span> Web
                    </span>
                  </h1>
                  <button
                    onClick={() => this.props.setModalState(true)}
                    className="contact-btn"
                  >
                    Me contacter
                  </button>
                </div>
                <div className="animated-bar" />
              </div>
            </div>

            <div className="homepage-introduction-container">
              <div className="homepage-introduction">
                <div>
                  <strong>Issu d'une formation de technico-commercial</strong>,
                  j'ai travaillé dans une boutique de téléphonie pendant 2ans
                  avant de devenir technicien smartphone et informatique au sein
                  de cette même boutique pour la même durée. J'ai eu la liberté
                  de développer et mettre en pratique les compétences de mon
                  choix permettant notamment l'introduction de la
                  personnalisation complète d'un smartphone (choix de couleur,
                  texture etc) pour les clients.
                </div>
                <div>
                  Passioné de technologie et de divertissement numérique depuis
                  toujours,{" "}
                  <strong>
                    j'ai décidé de me former il y a deux ans dans le
                    développemeent web au sein de la formation diplomante
                    Développeur Web Junior chez OpenClassrooms.com.
                  </strong>
                  <br />
                  J'ai pu apprendre dans un premier temps les bases grâce à
                  l'HTML, le CSS, JavaScript, PHP et SQL.
                  <br />
                  <strong>
                    Autodidacte, j'ai ensuite approfondi ces connaissances en
                    découvrant et expérimentant des outils et bibliothèques
                    javascript
                  </strong>{" "}
                  tels que jQuery, ReactJS, Node.JS{" "}
                  <strong>et des Framework</strong> comme Bootstrap et Symfony
                  4.
                </div>
                <div>
                  <strong>
                    Je cherche désormais à renforcer mes connaissances suscitées
                    mais plus particulièrement autour de Javascript et ses
                    bibliothèques ainsi que PHP à travers le Framework Symfony.
                  </strong>{" "}
                  Pour ce faire, mon objectif aujourd'hui est la mise à profit
                  de mes connaissances au sein d'une entreprise afin de
                  développer et partager mes connaissances tout en continuant de
                  me former de mon côté.
                </div>
                <button
                  onClick={() => this.props.fullpageApi.moveTo(3)}
                  className="about-btn"
                >
                  Plus de détails
                </button>
              </div>
            </div>

            <div className="arrows-scroll arrows-scroll-enter arrows-homepage">
              <span className="arrow first">&gt;</span>
              <span className="arrow second">&gt;</span>
            </div>
          </div>
        </div>
      </VizSensor>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = { setComponentsVisibility, setModalState };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
