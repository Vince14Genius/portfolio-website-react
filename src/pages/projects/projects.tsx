import React from 'react';
import './projects.css';
import ProjectsItem from './ProjectsItem';

import githubLogo from '../../images/socialmedia-github.svg';
import appStoreBadge from '../../images/app-store-badge-black.svg';
import profileIcon from '../../images/profile-thumbnail.jpg';

import ipaKeyboardIcon from './images/ipa-keyboard-icon.webp';
import checkSplitterIcon from './images/check-splitter-icon.webp';
import dynamicDungeonIcon from './images/dynamic-dungeon-icon.webp';
import tilesOfArenasIcon from './images/tiles-of-arenas-icon.webp';
import finderZenIcon from './images/finder-zen-icon.png';
import finderZen2Icon from './images/finder-zen-2-icon.png';
import appFlightIcon from './images/app-flight-icon.png';
import solidsARIcon from './images/solids-ar-icon.webp';
import finderZenARIcon from './images/finder-zen-ar-icon.png';

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
                <img className="project-icon website-icon" src={profileIcon} />
                {/* <div className="project-icon placeholder-icon" /> */}
                <a className="project-primary-link project-link-button" href="/">
                  <p>Home</p>
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/vince14genius.github.io">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Website</span>
                    <span>New Redesign!</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>Web</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>HTML/CSS</span>
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>npm</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Random Picker</h3>
                  <p>Has a cool scrolling wheel animation</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <a className="project-github-link" href="https://github.com/Vince14Genius/Random-Picker-SwiftUI">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">App</span>
                    <span>New Feature!</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>iOS</span>
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                </p>
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
                    <span className="project-type-header">App</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>iOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>UIKit</span>
                  <span>SwiftUI</span>
                  <span>Unicode</span>
                </p>
              </section>
            </div>
          </section>
          <section className="text-hello nav-aligned-width-wrapper">
            <hr className="standard-hr" />
          </section>
          <section>
            <h2 className="text-fancy">Work in progress</h2>
            <div className="projects-grid">
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Solids AR</h3>
                  <p>???</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={solidsARIcon} />
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>???</h3>
                  <p>???</p>
                </div>
                <div className="project-icon placeholder-icon" />
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>???</h3>
                  <p>???</p>
                </div>
                <div className="project-icon placeholder-icon" />
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
                    <span className="project-type-header">App</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>iOS</span>
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>AI/ML</span>
                  <span>Computer Vision</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Tiles of Arenas</h3>
                  <p>Board-game style turn-based multiplayer strategy game</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={tilesOfArenasIcon} />
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Game</span>
                    <span>WWDC 23</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>iOS</span>
                    <span>macOS</span>
                    <span>Web</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SwiftUI</span>
                  <span>Game Design</span>
                  <span>JavaScript</span>
                  <span>WWDC Accepted</span>
                </p>
                <a className="project-github-link" href="https://github.com/Vince14Genius/Tiles-of-Arenas-SwiftUI">
                  <img alt="GitHub" src={githubLogo} />
                </a>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>jsa-lt-qr-code-generator</h3>
                  <p>Used for UCSD JSA's Language Table event 2022-2023</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <a className="project-primary-link project-link-button" href="https://vince14genius.github.io/jsa-lt-qr-code-generator/">
                  <p>Open</p>
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/jsa-lt-qr-code-generator">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Web Tool</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>Web</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>HTML/CSS</span>
                  <span>JavaScript</span>
                  <span>GitHub Copilot</span>
                  <span>AI pair-programming</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>NeoPixel Wotagei Glowsticks</h3>
                  <p>NeoPixelで出来たヲタ芸用のペンライト</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Hardware</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>IRL</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Python</span>
                  <span>CircuitPython</span>
                  <span>Arduino</span>
                  <span>Electrical Engineering</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Wotagei x Rhythm Game Simulator</h3>
                  <p>-</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <a className="project-github-link" href="https://github.com/Vince14Genius/WWDC20-Wotagei-x-Music-Game">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Experience</span>
                    <span>WWDC 20</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>Swift Playgrounds</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SpriteKit</span>
                  <span>Visual Design</span>
                  <span>VFX Design</span>
                  <span>Computer Simulation</span>
                  <span>WWDC Accepted</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Finder Zen AR</h3>
                  <p>-</p>
                </div>
                <img className="project-icon ios-app-icon" alt="app-icon" src={finderZenARIcon} />
                <a className="project-github-link" href="https://github.com/Vince14Genius/WWDC19-Finder-Zen-AR">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Game</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>Swift Playgrounds</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>ARKit</span>
                  <span>SceneKit</span>
                  <span>Game Design</span>
                  <span>Augmented Reality</span>
                  <span>WWDC Rejected</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Simple 3D Renderer using p5.js</h3>
                  <p>Before I learned linear algebra & graphics programming</p>
                </div>
                <div className="project-icon placeholder-icon" />
                <a className="project-primary-link project-link-button" href="https://vince14genius.github.io/Simple-3D-Renderer-using-p5.js/">
                  <p>Open</p>
                </a>
                <a className="project-github-link" href="https://github.com/Vince14Genius/Simple-3D-Renderer-using-p5.js">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Experience</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>Web</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>JavaScript</span>
                  <span>p5.js</span>
                  <span>Vector Mathematics</span>
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
                    <span className="project-type-header">Game</span>
                    <span>WWDC 17</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>iOS</span>
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SpriteKit</span>
                  <span>Game Design</span>
                  <span>WWDC Accepted</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>App Flight</h3>
                  <p>Dodge obstacles and collect AirDrops</p>
                </div>
                <img className="project-icon" alt="app-icon" src={appFlightIcon} />
                <a className="project-github-link" href="https://github.com/Vince14Genius/App-Flight">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Game</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SpriteKit</span>
                  <span>Game Design</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Finder Zen 2</h3>
                  <p>4 mini games in 1 story line</p>
                </div>
                <img className="project-icon" alt="app-icon" src={finderZen2Icon} />
                <a className="project-github-link" href="https://github.com/Vince14Genius/Finder-Zen-2">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Game</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SpriteKit</span>
                  <span>Game Design</span>
                </p>
              </section>
              <section className="projects-grid-item">
                <div className="project-title-description">
                  <h3>Finder Zen</h3>
                  <p>poppin colorful bubbles</p>
                </div>
                <img className="project-icon" alt="app-icon" src={finderZenIcon} />
                <a className="project-github-link" href="https://github.com/Vince14Genius/Finder-Zen">
                  <img alt="GitHub" src={githubLogo} />
                </a>
                <p className="project-item-info-bar">
                  <span className="highlighted-info-tags">
                    <span className="project-type-header">Game</span>
                  </span>
                  <span className="platform-info-tags">
                    <span>macOS</span>
                  </span>
                </p>
                <p className="project-item-tags">
                  <span>Swift</span>
                  <span>SpriteKit</span>
                  <span>Game Design</span>
                </p>
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