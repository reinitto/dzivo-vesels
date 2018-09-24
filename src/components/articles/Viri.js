import React from "react";
import img12 from "../../img/12.jpg";
import ArticleLayout from "./ArticleLayout";

const headerStyle = {
  textAlign: "center"
};

export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Par dūšīgiem vīriem! </h1>

      <img src={img12} className="img-responsive" alt="" />
      <p>
        Dūšīgs! Tā sakām par kāda vīrieša varēšanu, darbaspējām un saņemšanos.
        Sakām – dūšīgs dažreiz arī par lielu vēdera apkārtmēru, lai nebūtu
        jāsaka ka resns. Kāds var apvainoties.
      </p>
      <p>
        Šoruden gribu paslavēt dūšīgos vīrus. Divi, kas saņēmās, atnāca pie
        manis augusta otrajā pusē, pēc mēneša, ar savu gribasspēku un varēšanu
        jau ir atbrīvojušies ( kopā skaitot) no 15 kilogramiem liekā svara un 15
        vēdera apkārtmēra centimetriem. Septembra sākumā vēl viens dūšīgs vīrs
        uzsāka ceļu uz „darba tulznas” samazināšanu. Vai šoruden saskatāma jauna
        tendence - vīrieši sadūšojušies?
      </p>
      <p>
        Darbos un ģimenes pienākumos aizņemts vīrs no marta līdz septembrim, ir
        ticis vaļā no 20 liekajiem kilogramiem. Prieks redzams jau pa gabalu –
        viņa auguma aprisēs un starojošajā sejas izteiksmē.
      </p>
      <p>
        Slavēju šos vīriešus, pirmkārt jau par drosmi atzīties sev, ka ir
        problēma ar lieko svaru, un par to, ka ir dūša nākt pēc padoma. Slavēju
        par apņēmību un varēšanu turpināt iesākto – lūk tas ir vīrišķīgi!
        Patiešām dūšīgi vīri!
      </p>
      <p>
        Alvja (vārds mainīts) gadījums ir īpašs ar to, ka viņš jau trīs un
        vairāk gadus regulāri 2 – 3 reizes nedēļa apmeklēja atlētikas zāli, un
        ir īsts atlēts, bet nekā tomēr nedevās rokā māka tikt vaļā no spēcīgā
        vēdera un pazodes.
      </p>
      <p>
        Uzmērījām Alvja pamata vielmaiņas rādītājus – noskaidrojām cik tiešām
        uztura kaloriju nepieciešams šim stiprajam augumam un pie šī skaitļa
        turoties, ievērojot biežas ēdienreizes, palīgā ņemot arī Dikāna diētu,
        regulāri sekojot un uzmērot progresu, tas nu ir izdevies – vēders un
        pazode ir prom! Sejas krāsa mainījusies – tā staro! Alvis turpina
        samazināt liekos kilogramus, un spēcīgā muskulatūra aizvien labāk kļūst
        redzama.
      </p>
      <p>
        Sekojošos attēlos redzams kā Alvis no februāra mēneša ir atbrīvojies no{" "}
        <strong>19 kilogramiem</strong> , jostasvieta kļuvusi slaidāka par
        <strong>17 centimetriem</strong> , un progress pārējos rādītājos.{" "}
      </p>
    </ArticleLayout>
  );
};
