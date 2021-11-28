import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

function App() {
  const [wallet, setWallet] = useState("");

  const formatWalletAddress = (address) => {
    if(address){
      let newAddress = address.slice(0, 2) + '...' + address.slice(address.length - 3, address.length);
      return newAddress;
    }else{
      return "";
    }
  } 

  useEffect(() => {
    //processing
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      
      // Create a connector
      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });
      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      }
      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        const request = connector._formatRequest({
          method: 'get_accounts',
        });
        connector
          ._sendCallRequest(request)
          .then(result => {
            // Returns the accounts
            let account = result;
            setWallet(account.address);
          })
          .catch(error => {
            // Error returned when rejected
            console.error(error);
          });
      });
      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }
        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }
        // Delete connector
      });
      
    }else{
      // false for not mobile device
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          const account = accounts[0];
          setWallet(account);
        })
      }else{
        window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn');
      }
    }

    //out
    return 0
  }, [wallet])

  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src="https://metaceek.io/Image/file.mp4" type="video/mp4" />
      </video>
      <nav>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-2 col-12">
              <a href="#" className="logo">
                <img src="https://metaceek.io/Image/LOGO.png" alt="" />
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
                <li>
                  <a className="button connect"
                  href="#">{wallet ? formatWalletAddress(wallet) : 'CONNECT'}</a>
                  {/* data-bs-toggle="modal" data-bs-target="#exampleModal" */}
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
            <img src="https://metaceek.io/Icon/speakericon.svg" alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://t.me/Metaceek"
          >
            <img src="https://metaceek.io/Image/1.png" alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://twitter.com/METACEEKK"
          >
            <img src="https://metaceek.io/Image/2.png" alt="" />
          </a>
          <a
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
            href="https://poocoin.app/tokens/0xc79700a4b1017e19a57ba6ebfbd482b7c097fdf7"
          >
            <img src="https://metaceek.io/Image/4.png" alt="" />
          </a>
          {/* <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://www.dextools.io/"><img src="https://metaceek.io/Image/5.png" alt=""></a> */}
          <a
            href="https://bscscan.com/token/0xc79700a4b1017e19a57ba6ebfbd482b7c097fdf7"
            data-aos="zoom-in"
            target="_blank"
            className="a-social aos-init aos-animate"
            aria-current="page"
          >
            <img src="https://metaceek.io/Image/6.png" alt="" />
          </a>
          <a
            href="https://pancakeswap.finance/swap"
            data-aos="zoom-in"
            className="a-social aos-init aos-animate"
            aria-current="page"
          >
            <img src="https://metaceek.io/Icon/pancakeicon.svg" alt="" />
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
              <img src="https://metaceek.io/Image/LOGO TO.svg" alt="" />
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
                <img src="https://metaceek.io/Icon/VR1.svg" alt="" />
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
                <img src="https://metaceek.io/Icon/VR2.svg" alt="" />
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
                <img src="https://metaceek.io/Icon/VR3.svg" alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center card-custom">
              <h1>Stage 4</h1>
              <div className="content">
                <p className="center">Oppen ido launch pad</p>
              </div>
              <div className="footer">
                <img src="https://metaceek.io/Icon/VR4.svg" alt="" />
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
                <div className="col-lg-5 col-4">Game NFT Click To Earn</div>
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
              <img src="https://metaceek.io/Image/Tokenomic.svg" alt="" />
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
              <img src="https://metaceek.io/Icon/jhinavatar.svg" alt="" />
              <h1 className="mt-2 mb-3 text-center">JHIN</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                CO FOUNDER,
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF MARKETING
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src="https://metaceek.io/Icon/sanoavatar.svg" alt="" />
              <h1 className="mt-2 mb-3 text-center">SANO</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF DESIGN &amp;
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                GRAPHIC
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src="https://metaceek.io/Icon/Sorakaavatar.svg" alt="" />
              <h1 className="mt-2 mb-3 text-center">SENA</h1>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                HEAD OF BLOCKCHAIN &amp;
              </p>
              <p className="mb-0 text-center" style={{ fontWeight: 100 }}>
                DEVELOPMENT
              </p>
            </div>
            <div className="col-lg-3 col-6 mb-4">
              <img src="https://metaceek.io/Icon/Felixavatar.svg" alt="" />
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
                href="https://t.me/"><img src="https://metaceek.io/Image/1.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://twitter.com"><img src="https://metaceek.io/Image/2.png" alt=""></a>
            <a data-aos="zoom-in" class="a-social aos-init aos-animate" aria-current="page"><img src="https://metaceek.io/Image/3.png"
                    alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://poocoin.app/"><img src="https://metaceek.io/Image/4.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://www.dextools.io/"><img src="https://metaceek.io/Image/5.png" alt=""></a>
            <a data-aos="zoom-in" target="_blank" class="a-social aos-init aos-animate" aria-current="page"
                href="https://bscscan.com/"><img src="https://metaceek.io/Image/6.png" alt=""></a>
            <a data-aos="zoom-in" class="a-social aos-init aos-animate" aria-current="page"><img src="https://metaceek.io/Image/7.png"
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
