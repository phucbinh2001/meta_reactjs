import "./App.css";
import feli from "./Icon/Felixavatar.svg";
import jhinavatar from "./Icon/jhinavatar.svg";
import pancakeswap from "./Icon/pancakeicon.svg";
import sanoavatar from "./Icon/sanoavatar.svg";
import Sorakaavatar from "./Icon/Sorakaavatar.svg";
import speakerIcon from "./Icon/speakericon.svg";
import VR1 from "./Icon/VR1.svg";
import VR2 from "./Icon/VR2.svg";
import VR3 from "./Icon/VR3.svg";
import VR4 from "./Icon/VR4.svg";
import icon1 from "./Image/1.png";
import icon2 from "./Image/2.png";
import icon4 from "./Image/4.png";
import icon6 from "./Image/6.png";
import videoBg from "./Image/file.mp4";
import logoTo from "./Image/LOGO TO.svg";
import logo from "./Image/LOGO.png";
import Tokenomic from "./Image/Tokenomic.svg";

function App() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={videoBg} type="video/mp4" />
      </video>
      <nav>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-2 col-12">
              <a href="#" className="logo">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="menu col-lg-10 col-12 d-flex justify-content-end">
              <ul>
                <li>
                  <a className="button" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="button" href="#ROADMAP">
                    ROADMAP
                  </a>
                </li>
                <li>
                  <a className="button" href="#TOKENOMICS">
                    TOKENOMICS
                  </a>
                </li>
                <li>
                  <a
                    className="button"
                    target="_blank"
                    href="https://game.metaceek.io/"
                  >
                    GAME NFT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                WalletConnect
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">...</div>
          </div>
        </div>
      </div>
      <div className="nav-social">
        <ul className="social">
          <a
            href="https://t.me/metaceek_chanel"
            data-aos="zoom-in"
            className="a-social aos-init aos-animate"
            aria-current="page"
          >
            <img src={speakerIcon} alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://t.me/Metaceek"
          >
            <img src={icon1} alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://twitter.com/MetaCeek_BSC"
          >
            <img src={icon2} alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://poocoin.app/tokens/0xed80297e48e9f033d24b4cf00992de7267dc8810"
          >
            <img src={icon4} alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            class="a-social aos-init aos-animate"
            aria-current="page"
            href="https://bscscan.com/token/0xed80297e48e9f033d24b4cf00992de7267dc8810"
          >
            <img src={icon6} />
          </a>

          <a
            href="https://pancakeswap.finance/swap"
            data-aos="zoom-in"
            className="a-social aos-init aos-animate"
            aria-current="page"
          >
            <img src={pancakeswap} alt="" />
          </a>
        </ul>
      </div>
      <section className="p-5">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-lg-7 d-flex justify-content-center"
              style={{ flexDirection: "column", justifyContent: "flex-start" }}
            >
              <p>
                Welcome to Metaceek Metaverse <br />
                place that absolutely put you into an adventure where
                explorations and becoming a moneymaker are existed by game
                oracle structure or auto reward Ceek function for the ones who
                obtains Metaceek.
              </p>
              <a
                href="https://t.me/Airdrop_metaceek_bot"
                target="_blank"
                className="button"
              >
                JOIN AIRDROP
              </a>
            </div>
            <div className="col-12 col-lg-5">
              <img src={logoTo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5" id="ROADMAP">
        <div className="container">
          <h2 className="title mb-5">ROADMAP</h2>
          <div className="row">
            <div className="col-12 col-lg-3 text-center card-custom">
              <h1>Stage 1</h1>
              <div className="content">
                <p className="center">
                  Metaceek Launching <br />
                  CMC, CGK listing <br />
                  10,000 holders
                </p>
              </div>
              <div className="footer">
                <img src={VR1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center card-custom">
              <h1>Stage 2</h1>
              <div className="content">
                <p className="center">
                  Game NFT click to <br />
                  earn oracle{" "}
                </p>
              </div>
              <div className="footer">
                <img src={VR2} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center card-custom">
              <h1>Stage 3</h1>
              <div className="content">
                <p className="center">
                  NFT launch ,make Place. <br />
                  Cex listing{" "}
                </p>
              </div>
              <div className="footer">
                <img src={VR3} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center card-custom">
              <h1>Stage 4</h1>
              <div className="content">
                <p className="center">Oppen ido launch pad</p>
              </div>
              <div className="footer">
                <img src={VR4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5" id="TOKENOMICS">
        <div className="container">
          <h2 className="title mb-5 title-custom">TOKENOMICS</h2>
          <div className="row">
            <div
              className="col-lg-6 col-12 d-flex align-items-center justify-content-center table-custom"
              style={{ flexDirection: "column" }}
            >
              <div className="row w-100">
                <div className="col-lg-5 col-4">List on Pancake Swap</div>
                <div className="col-lg-2 col-4">30.0%</div>
                <div className="col-lg-5 col-4">3.000.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">IDO WhiteList</div>
                <div className="col-lg-2 col-4">5.0%</div>
                <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Pre-sale</div>
                <div className="col-lg-2 col-4">18.0%</div>
                <div className="col-lg-5 col-4">1.500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Aridrop</div>
                <div className="col-lg-2 col-4">2.0%</div>
                <div className="col-lg-5 col-4">200.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Burn</div>
                <div className="col-lg-2 col-4">15.0%</div>
                <div className="col-lg-5 col-4">1.500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Cex listings</div>
                <div className="col-lg-2 col-4">20.0%</div>
                <div className="col-lg-5 col-4">2.000.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Development Team</div>
                <div className="col-lg-2 col-4">5.0%</div>
                <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Marketing</div>
                <div className="col-lg-2 col-4">5.0%</div>
                <div className="col-lg-5 col-4">500.000.000 MetaCeek</div>
              </div>
              <div className="row w-100">
                <div className="col-lg-5 col-4">Total </div>
                <div className="col-lg-2 col-4">100.0%</div>
                <div className="col-lg-5 col-4">10.000.000.000 MetaCeek</div>
              </div>
            </div>
            <div className="col-lg-6 col-12 chart">
              <img width="100%" src={Tokenomic} alt="" />
            </div>
          </div>
          <h3 className="text-center" style={{ color: "#38ffff" }}>
            BUY AND SELL 10% SLIPPAGE
          </h3>
        </div>
      </section>
      <section id="member">
        <div className="container p-5">
          <h2 className="title mb-5">TEAM</h2>
          <div className="row">
            <div className="col-lg-3 col-6 mb-4">
              <img src={jhinavatar} alt="" />
              <h1 className="mt-2 mb-3 text-center">JHIN</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                CO FOUNDER,
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF MARKETING
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src={sanoavatar} alt="" />
              <h1 className="mt-2 mb-3 text-center">SANO</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF DESIGN &amp;
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                GRAPHIC
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src={Sorakaavatar} alt="" />
              <h1 className="mt-2 mb-3 text-center">SENA</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF BLOCKCHAIN &amp;
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                DEVELOPMENT
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src={feli} alt="" />
              <h1 className="mt-2 mb-3 text-center">FELIX</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                CEO, FOUNDER
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact p-5">
        <div className="container">
          <h2 className="title">HAVE QUESTIONS?</h2>
          <div className="row">
            <div className="col-6">
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First Name*"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Last Name*"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone*"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-2">
                <textarea
                  className="form-control"
                  placeholder="Leave us a message"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-12 mt-2 pull-right">
              <a href="#" className="button pull-right">
                SUBMIT
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="nav-social mt-0">
        <ul class="social mt-0">
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://t.me/"><img src={ require('./Image/1.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://twitter.com"><img src={ require('./Image/2.png" alt=""></a>
            <a data-aos="zoom-in" class="a-social aos-init aos-animate" aria-current="page"><img src={ require('./Image/3.png"
                    alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://poocoin.app/"><img src={ require('./Image/4.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://www.dextools.io/"><img src={ require('./Image/5.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://bscscan.com/"><img src={ require('./Image/6.png" alt=""></a>
            <a data-aos="zoom-in" class="a-social aos-init aos-animate" aria-current="page"><img src={ require('./Image/7.png"
                    alt=""></a>
        </ul>
    </div> */}
      <footer className="p-3">
        <p className="text-center" style={{ color: "#38ffff7a" }}>
          Please note: there are always risks associated with smart contracts.
          Please use at your own risk. MetaCeek Token is not a registered
          broker, analyst or investment advisor. Everything provided on this
          website is purely for guidance and informational purposes. All
          information contained herein should be independently verified and
          confirmed. We do not accept any liability for any loss or damage
          caused by reliance on such information or services. Please be aware of
          the risks involved in any transaction made on any financial market.
          Don't trade with money you can't afford to lose.
        </p>
        <p className="text-center mb-0" style={{ color: "#38ffff" }}>
          ©2021 Metaceek.io
        </p>
      </footer>
    </div>
  );
}

export default App;
