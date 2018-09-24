import React from "react";
import img10 from "../img/22m.jpg";
import img3 from "../img/3m.jpg";
import img12 from "../img/12m.jpg";
import img13 from "../img/13m.jpg";
import img16 from "../img/16m.jpg";
import img17m from "../img/17m.jpg";

import "./Carousel.css";
var Carousel = require("react-bootstrap").Carousel;

export default () => {
  return (
    <div>
      <div className="container-fluid no-show">
        <div className="row">
          <div className="col-md-offset-1 col-md-10  ">
            <Carousel>
              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img10} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Kas notiek ar svaru?</h1>

                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Kas par svaru pieaug sākumā – vai tie ir muskuļi?
                          Bieži vien iesācējiem ir neliels svara pieaugums
                          pirmajās 2 - 3 nedēļās, līdz pat 2 kilogramiem.
                          Vairumā tas ir noderīgais svara pieaugums, kurš,
                          turpinot nodarbības, pazudīs...
                        </p>
                        <a
                          href="/Article1"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img3} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Atsauksmes</h1>
                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Sveiks, Normund!
                          <br />
                          Nosūtu Jums jau sen solītās fotogrāfijas, kā arī
                          gribēju pateikt paldies par atbalstu manu mērķu
                          sasniegšanā (-40 kg).
                          <br />
                          Nu jau ir pagājis labs laiciņš kopš man jāiztiek bez
                          Jūsu palīdzības, bet es turpinu ievērot Jūsu
                          rekomendācijas, skaitu kalorijas un cenšos ēst
                          veselīgi. Turpinu...
                        </p>{" "}
                        <a
                          href="/Article2"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img12} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Par dūšīgiem vīriem</h1>

                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Dūšīgs! Tā sakām par kāda vīrieša varēšanu,
                          darbaspējām un saņemšanos. Sakām – dūšīgs dažreiz arī
                          par lielu vēdera apkārtmēru, lai nebūtu jāsaka ka
                          resns. Kāds var apvainoties. Šoruden gribu paslavēt
                          dūšīgos vīrus. Divi, kas saņēmās, atnāca pie manis
                          augusta otrajā pusē, pēc mēneša...
                        </p>
                        <a
                          href="/Article3"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img16} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Tikai ar prieku</h1>{" "}
                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Fiziskās nodarbības, kā zināms, veicina laimes hormonu
                          – endorfīnu izdalīšanos, samazina trauksmes līmeni,
                          vairo darba spējas un nostiprina veselību. Tad kādēļ
                          tomēr mēs nestāvam garā rindā pēc šiem labumiem, un
                          pat tās iespējas, kas ir par brīvu, paliek...
                        </p>
                        <a
                          href="/Article4"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>{" "}
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img17m} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Tievēšana kā rotaļa </h1>

                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Tievēšana būs kā rotaļa, viegli sasniegsiet iecerēto,
                          jutīsiet enerģijas pieplūdumu, ja jūs ievērosiet dažus
                          vienkāršus, bet svarīgus nosacījumus. Pirmkārt -
                          pārlieku neiespringsiet ar domu par tievēšanu. Otrkārt
                          – cienīsiet sevi un atlicināsit sev 60 minūtes dienā.
                          Treškārt - apgūsiet spēles noteikumus pamazām un
                          sāksiet ar mazumiņu. Šai rotaļai ir arī sava rutīna -
                          uzņemto kaloriju skaitīšana, kas var aizņemt no sākumā
                          pat 20 minūtes dienā...
                        </p>
                        <a
                          href="/Article5"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img width="auto" height="auto" alt="900x500" src={img13} />
                <div className="absolute-div">
                  <Carousel.Caption>
                    <div className="col-md-8 col-sm-12 ">
                      <h1>Vienas vasaras veiksmes stāsts</h1>

                      <div className="col-xs-6 col-sm-6">
                        <p>
                          Pagājušogad jūnija sākumā pie manis ar lūgumu pēc
                          palīdzības tikt galā ar liekajiem kilogramiem
                          pieteicās Inita ( vārds mainīts). Jaunā sieviete ( 33
                          ) strādājot atbildīgā darbā bija sākusi pieņemties
                          svarā, bet kad bija jāpaliek mājās ar bērniņu, kam
                          sašūpojās veselība , liekais svars turpināja pieaugt,
                          spēki samazināties, pašsajūta pasliktināties. Svars
                          bija pieaudzis līdz 93 kilogramiem...
                        </p>
                        <a
                          href="/Article6"
                          type="button"
                          className=" carousel-button"
                        >
                          Lasit Talak
                        </a>
                      </div>
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
