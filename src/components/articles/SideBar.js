import React from "react";
import "../News.css";
import img3 from "../../img/3.jpg";

import img12 from "../../img/12.jpg";
import img17 from "../../img/17m.jpg";
import img16 from "../../img/16m.jpg";
export default () => {
  return (
    <div>
      <section className="publicaciones-blog-home">
        <div>
          <div className="row-page row">
            <div
              className="col-md-12 "
              style={{
                marginTop: "10px",
                borderRight: "none"
              }}
            >
              <a href="/Article2" className="fondo-publicacion-home">
                <div className="img-publicacion-home">
                  <img className="img-responsive" src={img3} alt="" />
                </div>
                <div className="contenido-publicacion-home">
                  <h3>Atsauksmes</h3>
                  <p>
                    Sveiks, Normund!
                    <br />
                    Nosūtu Jums jau sen solītās fotogrāfijas, kā arī gribēju
                    pateikt paldies par atbalstu manu mērķu sasniegšanā (-40
                    kg).
                    <br />
                    Nu jau ir pagājis labs laiciņš kopš man jāiztiek bez Jūsu
                    palīdzības, bet es turpinu ievērot Jūsu
                    <span>...</span>
                  </p>
                </div>
                <div className="mascara-enlace-blog-home">
                  <span>Lasit</span>
                </div>
              </a>
            </div>
            <div className="col-md-12">
              <a href="/Article3" className="fondo-publicacion-home">
                <div className="img-publicacion-home">
                  <img className="img-responsive" src={img12} alt="" />
                </div>
                <div className="contenido-publicacion-home">
                  <h3>Par dūšīgiem vīriem !</h3>
                  <p>
                    Dūšīgs! Tā sakām par kāda vīrieša varēšanu, darbaspējām un
                    saņemšanos. Sakām – dūšīgs dažreiz arī par lielu vēdera
                    apkārtmēru, lai nebūtu jāsaka ka resns. Kāds var
                    apvainoties. Šoruden gribu paslavēt dūšīgos vīrus. Divi, kas
                    saņēmās, atnāca pie manis
                    <span>...</span>
                  </p>
                </div>
                <div className="mascara-enlace-blog-home">
                  <span>Lasit</span>
                </div>
              </a>
            </div>
            <div className="col-md-12">
              <a href="/Article4" className="fondo-publicacion-home">
                <div className="img-publicacion-home">
                  <img className="img-responsive" src={img16} alt="" />
                </div>
                <div className="contenido-publicacion-home">
                  <h3>Tikai ar prieku !</h3>
                  <p>
                    Fiziskās nodarbības, kā zināms, veicina laimes hormonu –
                    endorfīnu izdalīšanos, samazina trauksmes līmeni, vairo
                    darba spējas un nostiprina veselību. Tad kādēļ tomēr mēs
                    nestāvam garā rindā pēc šiem labumiem, un
                    <span>...</span>
                  </p>
                </div>
                <div className="mascara-enlace-blog-home">
                  <span>Lasit</span>
                </div>
              </a>
            </div>
            <div className="hidden-sm col-md-12">
              <a href="/Article5" className="fondo-publicacion-home">
                <div className="img-publicacion-home">
                  <img className="img-responsive" src={img17} alt="" />
                </div>
                <div className="contenido-publicacion-home">
                  <h3>Tievēšana kā rotaļa</h3>
                  <p>
                    Tievēšana būs kā rotaļa, viegli sasniegsiet iecerēto,
                    jutīsiet enerģijas pieplūdumu, ja jūs ievērosiet dažus
                    vienkāršus, bet svarīgus nosacījumus. Pirmkārt - pārlieku
                    neiespringsiet ar domu par tievēšanu. Otrkārt
                    <span>...</span>
                  </p>
                </div>
                <div className="mascara-enlace-blog-home">
                  <span>Lasit</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
