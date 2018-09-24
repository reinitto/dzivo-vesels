import React from "react";

import ArticleLayout from "./articles/ArticleLayout";
const headerStyle = {
  textAlign: "center"
};
const boldFont = {
  fontWeight: "bold"
};
export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>
        VESELĪBAS VEICINĀŠANAS UN FIZISKĀS SAGATAVOTĪBAS KONSULTĀCIJAS
      </h1>
      <h2>KONSULTĀCIJU SATURĀ :</h2>
      <p>
        <strong>1.FIZISKĀS FORMAS NOVĒRTĒŠANA</strong>
        Veicot diagnostiku*, pārrunās tiks objektīvi novērtēta jūsu fiziskā
        forma.
      </p>
      <p>
        {" "}
        <strong>2. NODARBĪBU UN UZTURA PLĀNA IETEIKUMI</strong>
        Saņemsiet ieteikumus par piemērotākajām nodarbībām ,slodzēm un
        paškontroli. Uztura plāns saturēs aprēķināto jums nepieciešamo uztura
        kaloriju daudzumu un 12 punktu programmu ar ieteikumiem kā pakāpeniski
        ikdienā apgūt ieteikto.
      </p>
      <p>
        <strong>3. CHECK</strong>- sekošana fiziskās formas un ideālā svara
        tapšanai
      </p>
      <p>
        {" "}
        Kā mainās jūsu ķermenis ? Kā dilst tauki ,veidojas muskulatūra, to jau
        pēc pāris nedēļām var uzmērīt ar bioimpedances svariem. Atkārtotajās
        konsultācijas, sekojot rezultātiem un koriģējot plānus pēc vajadzības,
        aizvien stiprināsiet iemaņas un uzlabosiet formu.
      </p>{" "}
      <h2>CENAS :</h2>
      <p>
        <strong>1.Pamata konsultācija</strong>– 60 min, cena = 30 EUR{" "}
      </p>
      <p>
        {" "}
        <strong>2. Pamata konsultācija</strong> + 3 atkārtotas konsultācijas =
        75 EUR{" "}
      </p>
      <p>
        {" "}
        <strong>3.Pamata konsultācija</strong> + 4 atkārtotās konsultācijas = 90
        EUR *
      </p>
      <p>
        Diagnostikā vielmaiņas, ķermeņa sastāva un biometrijas mērījumos tiek
        izmantoti bioimpedances svari Tanita 420 MA un datorprogramma Health
        Monitor.
      </p>
      <p style={boldFont}> Normunds Rozenšteins Tel. +371 27841853 </p>
      <p style={boldFont}>E-pasts: fitnesakonsultants@inbox.lv</p>
    </ArticleLayout>
  );
};
