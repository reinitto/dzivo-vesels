import React from "react";
import "./Article6.css";
import img13 from "../../img/13.jpg";
import graph1 from "../../img/graph11.jpg";
import graph2 from "../../img/graph21.jpg";
import graph3 from "../../img/graph31.jpg";

import ArticleLayout from "./ArticleLayout";

const headerStyle = {
  textAlign: "center"
};

const imgStyle2 = {
  justifyContent: "space-around",
  marginBottom: "10px"
};
export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Vienas vasaras veiksmes stāsts</h1>

      <img src={img13} className="img-responsive" alt="" />

      <p>
        Pagājušogad jūnija sākumā pie manis ar lūgumu pēc palīdzības tikt galā
        ar liekajiem kilogramiem pieteicās Inita ( vārds mainīts). Jaunā
        sieviete ( 33 ) strādājot atbildīgā darbā bija sākusi pieņemties svarā,
        bet kad bija jāpaliek mājās ar bērniņu, kam sašūpojās veselība , liekais
        svars turpināja pieaugt, spēki samazināties, pašsajūta pasliktināties.
        Svars bija pieaudzis līdz 93 kilogramiem , kaut vēl piecus gadus atpakaļ
        tas bija ap 60 kilogramu.
      </p>
      <p>
        Kopīgi izvērtējot Initas iespējas, sastādījām programmu, kas
        septembrī,atskatoties uz paveikto, ir bijusi veiksmīga - 14 kilogrami 3
        mēnešu laikā, apkārtmēri samazinājušies - izteiktāk augšstilbi par 10
        centimetriem un viduklis par 7 centimetriem.Inita turpinās iesākto
        programmu, lai pēc jaunā gada uz svariem jau redzētu skaitli kas sākas
        6... J
      </p>
      <p>
        Initas programmu sastādījām, atbilstoši viņas iespējām : vingrojumi
        mājās ik dienu vai pārdienu pa 30 minūtēm, kombinējot tos ar aktīvu
        pastaigu vai nūjošanu 30 – 40 minūšu garumā. Protams, svarīga programmas
        sastāvdaļa ir uztura kontrole. Atbilstoši noteiktajam pamata vielmaiņas
        rādītājam, pie šī Kcal skaitļa jāpieturas, apetītes mazināšanai ieturot
        5 – 6 maltītes dienā un lietojot pietiekami ar olbaltumvielām bagātus
        produktus.
      </p>
      <p>
        Uzstādījums no manas puses bija tas, ka nedrīkstam zaudēt vērtīgo
        muskuļu masu un kristies svarā ne vairāk kā pa pus kilogramam nedēļā,
        lai organisms nejustu spēku izsīkumu un straujais svara zaudējums
        neizraisītu veselības traucējumus.
      </p>
      <p>
        Inita ļoti uzcītīgi pildīja programmu. Ik pa divām – trīs nedēļām
        iegriezās pie manis, lai ar Veselības monitoru varētu novērtēt progresu,
        pārjautāt par to kā iekļaut programmā vēl citas aktivitātes.
      </p>
      <p>
        Sekojošajos attēlos jūs varat redzēt kā pa nedēļām realizējusies šovasar
        Initas iecere uzsākt atbrīvošanos no liekajiem kilogramiem, uzlabot
        figūru, atgriezt spēkus un vairot dzīvesprieku.
      </p>
      <div className="container no-show" style={imgStyle2}>
        <img src={graph1} alt="" />
        <img src={graph2} alt="" />
        <img src={graph3} alt="" />
      </div>
    </ArticleLayout>
  );
};
