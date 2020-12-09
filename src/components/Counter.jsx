import React, { Component } from "react";
import "../styles/styles.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container wrapper display-flex">
            <div className="logo">
              <img src={require("../media/logo.svg")} alt="Logo Fylo" />
            </div>
            <nav>
              <ul className="display-flex">
                <li>
                  <a href={"#"}>Features</a>
                </li>
                <li>
                  <a href={"#"}>Team</a>
                </li>
                <li>
                  <a href={"#"}>Sign In</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="banner wrapper">
          <div className="container display-flex">
            <div className="txt">
              <h1>
                All your files in one secure location, accessible anywhere.
              </h1>
              <p>
                Fylo stores your most important files in one secure location.
                Access them wherever you need, share and collaborate with
                friends, family, and co-workers.
              </p>

              <form action="#">
                <input type="email" placeholder="Enter your email.." required />
                <button type="submit" value="email">
                  Get Started
                </button>
              </form>
            </div>
            <img
              src={require("../media/illustration-1.svg")}
              alt="illustration-1"
            />
          </div>
        </section>

        <div className="wave">
          <img src={require("../media/bg-curve-desktop.svg")} alt="wave" />
        </div>

        <section className="productive">
          <div className="container wrapper display-flex">
            <div className="txt">
              <h2>Stay productive, wherever you are</h2>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>

              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="arrow display-flex">
                <a href="#">See how Fylo works</a>
                <img src={require("../media/icon-arrow.svg")} alt="" />
              </div>
              <div className="testimony">
                <div className="txt">
                  <img src={require("../media/icon-quotes.svg")} alt="" />
                  <p>
                    Fylo has improved our team productivity by an order of
                    magnitude. Since making the switch our team has become a
                    well-oiled collaboration machine.
                  </p>
                  <div className="user display-flex">
                    <img
                      src={require("../media/avatar-testimonial.jpg")}
                      alt="tesnimonio"
                    />
                    <div className="txt">
                      <h4>Kyle Burton</h4>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={require("../media/illustration-2.svg")}
              alt="illustration-2"
            />
          </div>
        </section>

        <section className="Get">
          <div className="container wrapper display-flex">
            <div className="txt">
              <h2>Get early acces today</h2>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
            </div>

            <div className="boletin">
              <form action="#">
                <input type="email" placeholder="Enter your email.." required />
                <button type="submit" value="email">
                  Get Started For Free
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="logo wrapper">
            <img
              className="badanga"
              src={require("../media/logo-footer.svg")}
              alt="Logo Flyo"
            />
          </div>

          <div className="container wrapper display-flex">
            <div className="column">
              <ul>
                <li>
                  <img src={require("../media/icon-phone.svg")} alt="phone" />
                  <a href="#">Phone: 753-102-637-2</a>
                </li>
                <li>
                  <img
                    src={require("../media/icon-email.svg")}
                    alt="mail"
                    className="email"
                  />
                  <a href="mailto:pavilion410@gmail.com">
                    pavilion410@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Jobs</p>
                </li>
                <li>
                  <p>Press</p>
                </li>
                <li>
                  <p>Blog</p>
                </li>
              </ul>
            </div>

            <div className="column">
              <ul>
                <li>
                  <p>Contact Us</p>
                </li>
                <li>
                  <p>Terms</p>
                </li>
                <li>
                  <p>Privacy</p>
                </li>
              </ul>
            </div>

            <div className="column">
              <ul className="redes display-flex">
                <li>
                  <i className="icon-facebook"></i>
                </li>
                <li>
                  <i className="icon-twitter"></i>
                </li>
                <li>
                  <i className="icon-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.github.com/beloshh">badanga ishak</a>.
        </p>
      </div>
    );
  }
}
export default Counter;
