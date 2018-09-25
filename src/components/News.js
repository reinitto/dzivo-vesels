import React from "react";
import "./News.css";
import img22s from "../img/22s.jpg";
import img11 from "../img/11s.jpg";
import monitor from "../img/monitor.jpg";
import img3s from "../img/3s.jpg";
import img12 from "../img/12s.jpg";
import nr3 from "../img/nr_31.jpg";
import img24s from "../img/24s.jpg";
import img13 from "../img/13s.jpg";
import img15 from "../img/15s.jpg";
import img16 from "../img/16s.jpg";

export default () => {
  return (
    <div className="container-fluid">
      <div className=" row">
        <div className="col-md-10 col-md-offset-1">
          <section className="publicaciones-blog-home">
            <div>
              <div className="row-page row">
                <div className="col-page col-sm-8 col-md-6">
                  <a href="/Article1" className="black fondo-publicacion-home">
                    <div className="img-publicacion-principal-home">
                      <img className="" src={img22s} alt="" />
                    </div>
                    <div className="contenido-publicacion-principal-home">
                      <h3>Uzsākam treniņus - kas notiek ar svaru ?</h3>
                      <p>
                        Kas par svaru pieaug sākumā – vai tie ir muskuļi? Bieži
                        vien iesācējiem ir neliels svara pieaugums pirmajās 2 -
                        3 nedēļās, līdz pat 2 kilogramiem. Vairumā tas ir
                        noderīgais svara pieaugums, kurš, turpinot nodarbības
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 col-md-3 ">
                  <a href="/Article2" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img3s} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Atsauksmes</h3>
                      <p>
                        Sveiks, Normund!
                        <br />
                        Nosūtu Jums jau sen solītās fotogrāfijas, kā arī gribēju
                        pateikt paldies par atbalstu manu mērķu sasniegšanā (-40
                        kg)
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 col-md-3 ">
                  <a href="/Article3" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img12} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Par dūšīgiem vīriem !</h3>
                      <p>
                        Dūšīgs! Tā sakām par kāda vīrieša varēšanu, darbaspējām
                        un saņemšanos. Sakām – dūšīgs dažreiz arī par lielu
                        vēdera apkārtmēru, lai nebūtu jāsaka
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 ">
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
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="hidden-sm col-page col-sm-4 ">
                  <a href="/Article5" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img24s} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Tievēšana kā rotaļa</h3>
                      <p>
                        Tievēšana būs kā rotaļa, viegli sasniegsiet iecerēto,
                        jutīsiet enerģijas pieplūdumu, ja jūs ievērosiet dažus
                        vienkāršus, bet svarīgus nosacījumus. Pirmkārt
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="hidden-sm col-page col-sm-4 ">
                  <a href="/Article6" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img13} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Vienas vasaras veiksmes stāsts</h3>
                      <p>
                        Pagājušogad jūnija sākumā pie manis ar lūgumu pēc
                        palīdzības tikt galā ar liekajiem kilogramiem pieteicās
                        Inita
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 ">
                  <a href="/Article7" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img15} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Kā paātrināt vielmaiņu ?</h3>
                      <p>
                        Medicīnā lieto terminu Metabolais sindroms, lai
                        raksturotu pacienta palēnināto vielmaiņu, kuras viena no
                        izpausmēm ir pieņemšanās svarā. Bet, turpinoties svara
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 ">
                  <a href="/Forma" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={img11} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Kā viegli būt formā ?</h3>
                      <p>
                        Būt labā fiziskajā formā! Kā pie tās tikt? Nemitīgi kāds
                        Stokholmas brīnums piedāvā nomest 8 kilogramus dažu
                        dienu laikā, lasām kā ar sešiem vingrinājumiem iegūt
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
                <div className="col-page col-sm-4 ">
                  <a href="/About" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={nr3} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Par mani</h3>
                      <p>
                        Mana pieredze un zināšanas ir veidojušās profesionālajā
                        sportā, augstskolā, maģistratūrā, trenējot izlases
                        sportistus un tad atgriežot sevi dzīvē pēc smagas
                        saslimšanas - varat tām uzticēties.
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>

                <div className="col-page col-sm-4 ">
                  <a href="/Monitors" className="fondo-publicacion-home">
                    <div className="img-publicacion-home">
                      <img className="img-responsive" src={monitor} alt="" />
                    </div>
                    <div className="contenido-publicacion-home">
                      <h3>Veselības monitors</h3>
                      <p>
                        Izmantojot Veselības monitoru* iespējams sekot kā mainās
                        ķermeņa svars, apkārtmēri, muskuļu masa, tauki un ūdens
                        daudzums. Sportistiem, treneriem tas uzskatāmi sniedz
                        informāciju
                        <span>...</span>
                      </p>
                    </div>
                    <div className="mascara-enlace-blog-home">
                      <span>Lasīt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
