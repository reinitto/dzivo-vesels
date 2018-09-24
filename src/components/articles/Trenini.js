import React from "react";
import img21 from "../../img/21m.jpg";
import ArticleLayout from "./ArticleLayout";

const headerStyle = {
  textAlign: "center"
};
const boldFont = {
  fontWeight: "bold"
};
export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Treniņu kursi</h1>

      <img src={img21} className="img-responsive" alt="" />
      <h2>Labas fiziskās sagatavotības kurss</h2>
      <p>
        Individuālas nodarbības Sertificēta fiziskās sagatavotības trenera
        Mag.paed. Normunda Rozenšteina vadībā Plānojot uzsākt ko jaunu - noderēs
        arī papildus fiziskā sagatavotība. Spēks, izturība un veiklība ļaus
        krietnāk izbaudīt aktivitātes un pasargās no traumām.
      </p>
      <p style={boldFont}>NORISE:</p>
      <p>
        1) <strong>Sākuma konsultācijā </strong>( 70 min) ar diagnostiku* - tiks
        apzināti sasniedzamie mērķi, termiņi, problemātika un ieskicēts treniņu
        saturs un grafiks. Ja nepieciešams, uztura korekcijas ieteikumi.
      </p>
      <p>
        2) <strong>5 ievada treniņi </strong> ( pa 70 min) trenažieru zālē –
        Sirds asinsvadu sistēmas nostiprināšana, saišu un locītavu kustīguma
        nodrošināšana, muskuļu spēka un izturības paaugstināšana – tas ir labas
        fiziskās sagatavotības pamats. Individuāli piemērosim slodzes un
        vingrinājumus.
      </p>
      <p>
        3) <strong> 2 atkārtotas konsultācijas</strong> (katru otro nedēļu) ar
        diagnostiku - tiks rūpīgi sekots organisma rādītāju izmaiņām, saņemsiet
        padomus un ieteikumus, ja nepieciešams - plānu korekciju.
      </p>
      <p>
        4) <strong>Patstāvīgi treniņi trenažieru zālē</strong> – kuros
        izpildīsiet ievada treniņos apgūto, trenera sastādītu programmu Kursa
        noslēgumā iepriecināsiet sevi ar panākumiem. Mēneša laikā var būtiski
        uzlabot fizisko sagatavotību. Kursa 1 mēneša maksa ir 140 EUR un tajā
        ietilpst :
      </p>
      <p style={boldFont}>1) Sākuma konsultācija ar diagnostiku</p>
      <p style={boldFont}>2) Treniņu satura un grafika izveidošana</p>
      <p style={boldFont}>3) 5 Ievada treniņi Normunda vadībā</p>
      <p style={boldFont}>4) Patstāvīgi treniņi pēc vajadzības</p>
      <p style={boldFont}>5) Divas atkārtotās konsultācijas ar diagnostiku</p>
      <p style={boldFont}>6) Mēneša abonements VINGRUMA kluba apmeklēšanai</p>
      <p>
        ⃰Diagnostikā tiek izmantoti bioimpedances svari Tanita 420 MA un
        datorprogramma „Health monitor”. Tiek noteikts jūsu vielmaiņas ātrums,
        metaboliskais vecums; uzmērīti svars, tauku, muskuļu un ūdens daudzums
        organismā, ķermeņa apkārtmēri. Izdrukas ar pielīdzinājumu statistikai
        normai, parāda iespējas, riskus un progresu.
      </p>
      <p style={boldFont}>
        Pieteikšanās uz treniņu kursu ( jautājumi ) : Tel : 27841853
      </p>
      <p style={boldFont}>Normunds Tel : 22003383</p>
      <p style={boldFont}>
        {" "}
        Vingruma klubs E pasts : fitnesakonsultants@inbox.lv
      </p>
    </ArticleLayout>
  );
};
