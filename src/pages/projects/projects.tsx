import React from 'react';
import './projects.css';
import ProjectsItem from './ProjectsItem';

import githubLogo from '../../images/socialmedia-github.svg';
import appStoreBadge from '../../images/app-store-badge-black.svg';

import ipaKeyboardIcon from './images/ipa-keyboard-icon.webp';
import checkSplitterIcon from './images/check-splitter-icon.webp';
import dynamicDungeonIcon from './images/dynamic-dungeon-icon.webp';

function Projects() {
  return (
    <div>
      <header className="local-nav">
        <h1 className="nav-aligned-width-wrapper">Coding Projects</h1>
      </header>
      <main id="main-content" lang="en">
        <div className="main-width-wrapper">
          <section>
            <h2 className="text-fancy">What's New</h2>
            <div className="projects-grid">
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3><span className="text-fancy">Vince14Genius</span>:Portfolio</h3>
                  <p>This website.</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <a className="project-primary-link project-link-button" href="/">
                  <p>Home page</p>
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/vince14genius.github.io">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span>Web</span>
                  </span>
                  <span className="language-info-tags">
                    <span>TypeScript</span>
                    <span>HTML/CSS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>React</span>
                  <span>npm</span>
                </p>
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
            </div>
          </section>
          <section className="text-hello nav-aligned-width-wrapper">
            <hr className="standard-hr" />
          </section>
          <section>
            <h2 className="text-fancy">Actively work in progress</h2>
            <div className="projects-grid">
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
            </div>
          </section>
          <section className="text-hello nav-aligned-width-wrapper">
            <hr className="standard-hr" />
          </section>
          <section>
            <h2 className="text-fancy">Actively maintained</h2>
            <div className="projects-grid">
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>IPA Keyboard</h3>
                  <p>iOS keyboard extension for typing IPA symbols</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={ipaKeyboardIcon} />
                <a className="project-primary-link app-store-download-badge" href="https://apps.apple.com/app/ipa-phonetic-keyboard/id1440241497">
                  <img alt="AppStore" src={appStoreBadge} />
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/IPA-Keyboard-iOS">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span>App</span>
                  </span>
                  <span className="language-info-tags">
                    <span>Swift</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>iOS</span>
                  <span>UIKit</span>
                  <span>SwiftUI</span>
                </p>
              </section>
              <section className="projects-grid-item">
              </section>
            </div>
          </section>
          <section className="text-hello nav-aligned-width-wrapper">
            <hr className="standard-hr" />
          </section>
          <section>
            <h2 className="text-fancy">Past Projects</h2>
            <div className="projects-grid">
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Check Splitter OCR</h3>
                  <p>Bill splitting app using text-recognition (OCR) to read receipts</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={checkSplitterIcon} />
                <a className="project-primary-link app-store-download-badge" href="https://apps.apple.com/app/check-splitter-divide/id1586694735">
                  <img alt="AppStore" src={appStoreBadge} />
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/Check-Splitter-OCR">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span>App</span>
                  </span>
                  <span className="language-info-tags">
                    <span>Swift</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>iOS</span>
                  <span>macOS</span>
                  <span>SwiftUI</span>
                  <span>AI/ML</span>
                  <span>Computer Vision</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Dynamic Dungeon</h3>
                  <p>2D scrolling maze game where you survive and collect points</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={dynamicDungeonIcon} />
                <a className="project-primary-link app-store-download-badge" href="https://apps.apple.com/app/dynamic-dungeon/id6449023174">
                  <img alt="AppStore" src={appStoreBadge} />
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/Dynamic-Dungeon">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span>Game</span>
                    <span>WWDC 17</span>
                  </span>
                  <span className="language-info-tags">
                    <span>Swift</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>iOS</span>
                  <span>macOS</span>
                  <span>SpriteKit</span>
                  <span>WWDC</span>
                </p>
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
              <section className="projects-grid-item">
              </section>
            </div>
          </section>
          <section className="text-hello nav-aligned-width-wrapper">
            <hr className="standard-hr" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Projects;