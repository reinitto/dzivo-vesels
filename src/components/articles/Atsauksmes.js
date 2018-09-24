import React from "react";
import "../News.css";
import arta1 from "../../img/arta1.jpg";
import arta2 from "../../img/arta2.jpg";
import arta3 from "../../img/arta31.jpg";
import arta4 from "../../img/arta4.jpg";
import raimonds from "../../img/raimonds.JPG";
import ArticleLayout from "./ArticleLayout";

const boldFont = {
  fontWeight: "bold"
};

const headerStyle = {
  textAlign: "center"
};

const imgStyle = {
  justifyContent: "space-around",
  display: "flex",
  marginBottom: "10px"
};

export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Atsauksmes</h1>
      <h2>Atsauksme</h2>
      <div className="container-fluid " style={imgStyle}>
        <img src={arta1} style={{ maxHeight: "200px" }} alt="" />
        <img src={arta2} style={{ maxHeight: "200px" }} alt="" />
        <img src={arta3} style={{ maxHeight: "200px" }} alt="" />
        <img src={arta4} style={{ maxHeight: "200px" }} alt="" />
      </div>
      <p>Sveiks, Normund!</p>
      <p>
        Nosūtu Jums jau sen solītās fotogrāfijas, kā arī gribēju pateikt paldies
        par atbalstu manu mērķu sasniegšanā <strong>(-40 kg) </strong> .
      </p>
      <p>
        Nu jau ir pagājis labs laiciņš kopš man jāiztiek bez Jūsu palīdzības,
        bet es turpinu ievērot Jūsu rekomendācijas, skaitu kalorijas un cenšos
        ēst veselīgi. Turpinu staigāt vismaz stundu dienā un izpildīt Jūsu
        ieteiktos vingrojumus. Pavisam nav sarežģīti, kaut gan, par vingrošanu
        pati brīnos, jo, ja pirms pāris gadiem man kāds būtu teicis, ka gadu
        garumā es regulāri pievērsīšos fiziskajām aktivitātēm un, ka man tas
        varētu pat patikt, noteikti neticētu.. Varu palielīties, ka esmu gandrīz
        aizmirsusi par astmas lēkmēm, tās maini īpaši vairs nesatrauc, kaut gan
        ārsts apgalvoja, ka šo slimību izārstēt nav iespējams. Droši vien
        palīdzēja staigāšana. Agrāk kaut ko tādu biju lasījusi, bet domāju, ka
        tā ir teorija, ko izgudrojuši cilvēki, kas paši necenšas neko darīt, lai
        uzlabotu savu veselību.
      </p>
      <p>
        Žēl, ka Jūs vairs nebraucat uz mūsu pusi, jo mazliet pietrūkst tā
        procesu kontrole, ko nodrošināja Jūsu svariņi vai ķermeņa analizators
        (īsti nezinu kā tas saucās), kā arī Jūsu psiholoģiskais atbalsts un
        sapratne.
      </p>
      <p>Pielikumā pievienoju fotogrāfijas: Before&after.</p>
      <p style={boldFont}>Cerībā uz turpmāku sadarbību,</p>
      <p style={boldFont}>
        Arta
        <h2>Atsauksme</h2>
      </p>
      <p>
        Sadarbību ar N.Rozenšteinu vērtēju kā ļoti veiksmīgu, jo tās rezultātā
        īsā (nepilna gada) laikā būtiski uzlabot gan savu izskatu, gan
        pašsajūtu. Vienīgais mīnuss- nācās nomainīt garderobi, iepērkot par
        dažiem izmēriem mazākas drēbes.
      </p>
      <p>
        Paškontrolei un motivācijas uzturēšanai ļoti palīdzēja, ka konsultāciju
        laikā uzskatāmi varēja sekot līdzi progresam- cik tauciņi sadeguši, cik
        muskuļi pieauguši. Ja bija sanācis “nohaltūrēt” ar vingrošanu, tauki
        attiecīgi kusa lēnāk. Konsultācijas bija ļoti aptverošas- saņēmu
        informāciju gan par uzturu, gan fizisko slodzi. Man pašai bija
        iepriekšējā pieredze kaloriju skaitīšanā, bet konsultācijas to padarīja
        vieglāku un sistemātiskāku. Ar laiku, izmantojot konsultācijās iegūtās
        zināšanas, kā arī, izdarot secinājumus no svaru rādījumiem, sāku pati
        eksperimentēt ar uzturu un vingrojumiem, atrodot sev “zelta vidusceļu”
        starp fizisko slodzi un diētu (manam organismam kaut kā nepatika lielais
        olbaltumvielu pārsvars uzturā, tāpēc nācās domāt kompromisus). Tas ļāva
        tievēšanas procesu padarīt patīkamāku un, var teikt, rutinētāku (labā
        nozīmē), jo vingrinājumi un kvalitatīvs/veselīgs uzturs kļuva tikpat
        pašsaprotami, kā, piemēram, zobu tīrīšana.
      </p>
      <p>
        Par cik vispār atteicos no treknas pārtikas, paretam uznāca nespēka
        sajūta, tāpēc veicu asins analīzes. Toreiz mani patiešām pārsteidza
        ģimenes ārstes teiktais, ka tik labus rādījumus viņai reti sanāk redzēt.
      </p>
      <p>
        Ņemot vērā minēto, varu tikai ieteikt sadarbību ar N.Rozenšteinu- darbs
        ir pamatīgs, bet, ja iztur pirmās pāris nedēļas, vēlāk ir daudz vieglāk,
        jo konsultācijās pieejamie mērījumi un profesionālie padomi rezultātu
        patiešām garantē.
      </p>
      <p style={boldFont}>
        Piezīme : Santa ( 32 g) ½ gada laikā atbrīvojās no 20 kg liekā svara,
        skaisti no 93 uz 73 kg
      </p>

      <h2>Atsauksme</h2>

      <p>
        2014. gada oktobrī griezos pie Normunda Rozenšteina pēc palīdzības, lai
        nomestu lieko svaru. Mans svars 2014. gada oktobrī bija{" "}
        <strong>126 kg </strong> , Normunds visu ļoti saprotami izstāstīja kas
        jādara un kāpēc, lai samazinātu svaru . Regulāri ar viņu konsultējoties,
        mans svars gada laikā samazinājās par 21 kg un 2015. gada oktobrī tas
        bija <strong>105 kg</strong> . Pateicoties Normundam, man šo svara
        nomešanas periodu izdevās pārdzīvot bez lieka stresa.
      </p>
      <p style={boldFont}>
        Piezīme : Artis 45 g ( 12 mēnešos no 126 kg uz 105kg )
      </p>

      <h2>Atsauksme</h2>

      <p>
        Sen meklēju treneri, kurš ne tikai būtu ieguvis zināšanas LSPA, bet būtu
        ar lielu dzīves un sporta pieredzi.
      </p>
      <p>
        Man svarīgi bija iegūt sportisku kermeni un lielu gribas spēku, nevis
        nefunkcionējošus "aplīšus" viscaur kermenim.
      </p>
      <p>
        Normunds man 3mēnešos palīdzēja sakārtot gan fizisko, gan garīgo spēku.
      </p>
      <p style={boldFont}>
        Visiem, kuri grib kļūt par ATLETIEM, iesaku Normudu Rozeinšteinu.
      </p>
      <p style={boldFont}>Raimonds Andersons</p>
      <p style={boldFont}>Sporta dejās - ceļā uz Pasaules Top 50 </p>
      <div className="container-fluid " style={imgStyle}>
        <img src={raimonds} style={{ maxHeight: "200px" }} alt="" />
      </div>
    </ArticleLayout>
  );
};
