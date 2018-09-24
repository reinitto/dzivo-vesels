import React from "react";
import img15 from "../../img/15.jpg";
import diagram from "../../img/diagram.JPG";
import ArticleLayout from "./ArticleLayout";

const headerStyle = {
  textAlign: "center"
};

export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Kā paātrināt vielmaiņu?</h1>

      <img src={img15} className="img-responsive" alt="" />

      <p>
        Medicīnā lieto terminu Metabolais sindroms, lai raksturotu pacienta
        palēnināto vielmaiņu, kuras viena no izpausmēm ir pieņemšanās svarā.
        Bet, turpinoties svara pieaugumam, attīstās daudz citas kaites – cukura
        diabēts, sirds mazspēja, infarkta un insulta riski, saasinās muguras un
        locītavu vainas. Bēdīga perspektīva.
      </p>
      <p>
        Lai vielmaiņu paātrinātu un notievētu - kādus tik padomus nenākas
        dzirdēt - par liela daudzuma ūdens dzeršanu, kanēļa vai piparu lietošanu
        un tā tālāk...un tad vēl tas viss notiks nedēļas laikā!
      </p>
      <p>
        Kopš ir pierādīts placebo iedarbības spēks, vismaz uz brīdi, jau tas
        viss arī iedarbosies. Daudzi riskē..., bet, ja gribat patiešām paātrināt
        vielmaiņu, atbrīvoties no liekā svara un uzlabot savu veselību, tad
        tomēr noderēs izpratne par vielmaiņas veidošanos un pierādīti paņēmieni
        tās normalizēšanai.
      </p>
      <h2>Kā veidojas vielmaiņa – enerģijas patēriņš:</h2>

      <img src={diagram} className="img-responsive" alt="" />

      <p>
        Pamata vielmaiņa – dzīvības uzturēšanai – elpošanai, sirdsdarbībai, visu
        šūnu orgānu funkcijām nepieciešamā enerģija. Vidēji tā sastāda ap 65
        -70% no kopējā enerģijas patēriņa
      </p>
      <p>Fiziskās aktivitātes – vidēji 25 – 30% no patēriņa</p>
      <p>Gremošanas process – līdz 10%</p>
      <p>
        Tiktāl par vielmaiņas veidošanās komponentēm, kur skaidri saskatāms, ka
        galvenā loma enerģijas patēriņā ir pamata vielmaiņai. Piemēram, Pamata
        vielmaiņa sievietei vecumā ap 30, ar svaru 70 kg., varētu būt ap 1500
        kcal dienā. Vīriešiem tā ir augstāka. Tāpat tā ir atkarīga no vecuma un
        miesas būves. Ar gadiem vielmaiņa pazeminās, bet savukārt muskuļots
        ķermenis patērēs stipri vairāk enerģijas.
      </p>
      <p>
        Protams, ka kopējā vielmaiņa būs augstāka, sadegs vairāk kaloriju tajā
        dienā, kad veiksiet kādas fiziskās aktivitātēs. Ir pieejamas tabulas, un
        aptuveni varam sarēķināt, ka pusstundas skrējienā patērēsiet 300 kcal,
        grupu nodarbībā 45 minūtēs būs ap 400 kcal un tamlīdzīgi.
      </p>
      <p>
        Tātad lai palielinātu – paātrinātu vielmaiņu par attiecīgajiem skaitļiem
        jāatrod laiks šādām ikdienas nodarbībām.
      </p>
      <p>
        Bet ir vēl viens ļoti iedarbīgs vielmaiņas paātrināšanas veids, kad
        kalorijas sadeg arī miera stāvoklī, pat miegā. Tas ir saistīts ar
        ķermeņa kompozīcijas (sastāva) mainīšanu, jeb vienkāršāk sakot –
        muskulatūras veidošanos.
      </p>
      <p>
        Grams muskuļu šķiedras patērē līdz pat 17 reižu vairāk kaloriju kā grams
        taukaudu. Diemžēl pieaugušie katrus 10 gadus zaudē no 3 līdz 5
        kilogramiem tieši muskuļu, ja viņu ikdienas fiziskā slodze nav
        atbilstoša.
      </p>
      <p>
        Drošs veids, kā pretoties muskuļu samazināšanās tendencei, ir spēka
        treniņi. Pietiks jau ar pāris mērķtiecīgiem treniņiem nedēļā, lai
        muskuļu masa sāktu pamazām palielināties. Vīriešiem ātrāk, sievietēm
        mazliet lēnāk, bet muskuļi augs un nodrošinās paaugstinātu pamata
        vielmaiņu.
      </p>
      <p>
        Pētījumi, piemēram, ( Chambel et all.1994) pierāda, ka sievietei
        pieaugot muskuļu masai par 1,3 kg, vielmaiņas aktivitāte paaugstinās par
        7% un diennakts kaloriju patēriņš pieaug par 15%.
      </p>
      <p>
        Paliekošu paaugstināto vielmaiņu dos tikai pietiekami intensīvi spēka
        vingrinājumi, kurus vienā piegājienā varat izpildīt 10 – 12 reizes, līdz
        piekūstat, un, ja vingrinājuma izpildē tiks iesaistīti pietiekami daudz
        muskuļu, bet piegājienu skaits būs atbilstošs jūsu sagatavotībai.
      </p>
      <p>
        Pēc šādiem treniņiem ir jājūt muskuļu sāpītes vēl otrajā un trešajā
        dienā, kas liecina par jau paaugstināto vielmaiņu, kas notiek muskuļu
        atjaunošanās procesā.
      </p>
      <p>
        Pastaigas, riteņbraukšana, nūjošana, skrējiens, peldēšana un arī lielākā
        daļa grupu nodarbību, tāpat kā vingrinājumi, kurus varat atkārtot vairāk
        nekā 30 reizes, paliekošu paaugstinātu vielmaiņu neveidos, jo tie
        attīsta galvenokārt izturību, un to ietekme uz kaloriju patēriņu beidzas
        drīz vien pēc nodarbībām.
      </p>
    </ArticleLayout>
  );
};
