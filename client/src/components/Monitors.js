import React from "react";
import monitor from "../img/monitor.jpg";
import img9 from "../img/9.jpg";

import ArticleLayout from "./articles/ArticleLayout";
const headerStyle = {
  textAlign: "center"
};
export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Veselības monitors</h1>
      <img src={monitor} className="img-responsive" alt="" />
      <p>
        Izmantojot Veselības monitoru* iespējams sekot kā mainās ķermeņa svars,
        apkārtmēri, muskuļu masa, tauki un ūdens daudzums. Sportistiem,
        treneriem tas uzskatāmi sniedz informāciju par procesiem organismā, un
        dod iespēju novērtēt treniņu un uztura efektivitāti jau treniņu cikla
        laikā, saskatīt tendences un izdarīt iespējamās korekcijas.
      </p>{" "}
      <p>
        Tiem, kuri gatavojas uzsākt nodarbības un / vai ievērot diētu var
        iepriekš novērtēt ķermeņa sastāvu (muskuļu - tauku - ūdens attiecību ),
        auguma proporcijas un kompozīciju. Atbilstoši rezultātiem, speciālists
        var dot ieteikumus par piemērotākajām nodarbībām, slodzēm un uzturu.
      </p>{" "}
      <p>
        Interesenti var uzzināt vai ir, un cik tieši ir lieko tauku, kāda ir
        pamata vielmaiņa un dienā ieteicamo uztura Kcal daudzums, par cik ir
        attīstīta ir muskulatūra, kāds ir metaboliskais vecums un ko darīt lai
        kļūtu jaunāki.
      </p>{" "}
      <p>
        {" "}
        * Veselības monitors ir medicīniski verificētas datorprogrammas un
        bioimpedances svaru (ķermeņa masas analizatora) komplekts. CE93/42/EWG)
        un (93/42/EEC){" "}
      </p>{" "}
      <h2>Ko parāda Veselības monitors:</h2>{" "}
      <strong>1. Ķermeņa struktūru</strong> <p> - kopējo svaru</p>{" "}
      <p> - muskuļu masu ( % no ķermeņa svara un kg. izteiksmē) </p>{" "}
      <p>- kopējo tauku saturu ( % no ķermeņa svara un kg. izteiksmē) </p>{" "}
      <p>- viscerālo tauku līmeni </p>{" "}
      <p>- ūdens daudz. organismā( % no ķermeņa svara un kg. izteiksmē)</p>{" "}
      <h2> 2. Pamata vielmaiņu - Kcal/dienā,</h2>{" "}
      <h2> 3. Metabolisko vecumu</h2>{" "}
      <h2> 4. Ķermeņa apkārtmērus (antropomertriju)</h2> <p> - viduklis</p>{" "}
      <p>- gurni </p> <p>- krūtis</p> <p> - augšdelmi </p> <p>- apakšdelmi</p>{" "}
      <p> - augšstilbi</p> <p> - apakšstilbi</p>{" "}
      <strong>
        Veselības monitora izdruka ar galvenajiem rādītājiem un to dinamiku
        treniņu rezltātā:{" "}
      </strong>{" "}
      <img className="img-responsive" src={img9} alt="" />
      <p>
        Pilna izdruka pieejama{" "}
        <a href="http://www.vatp.lv/sites/default/files/combination_report_ppt.pdf">
          ŠEIT
        </a>{" "}
      </p>{" "}
      <h2> Kā izdara mērījumus, cik tas aizņem laiku? </h2>{" "}
      <p>
        Ķermeņa masas analizators, kad jūs uz tā uzkāpjat, ar audu elektriskās
        pretestība (bioimpedances) mērījumu nosaka ķermeņa svaru un sastāvu. Tad
        nomērot jūsu ķermeņa apkārtmērus un ievadot tos datorprogrammā,
        izveidojas pirmā rezultātu kopa. Tas var aizņemt 15 – 20 minūtes.{" "}
      </p>{" "}
      <h2>Kas biežāk izmanto Veselības monitoru?</h2>{" "}
      <p>
        {" "}
        Sportisti - vieglatlētikā, sporta spēlēs, bodybildingā un citos sporta
        veidos.
      </p>{" "}
      <p>
        Fitnesa nodarbību apmeklētāji. Svara vērotāji un dažādu diētu
        entuziasti.
      </p>{" "}
      <h2> Kad ir svarīgi izdarīt mērījumus? </h2>{" "}
      <p>
        Pirms nodarbību, treniņu cikla vai uztura programmas uzsākšanas. Lai
        koriģētu procesu - ik nedēļu vai ar citu regularitāti,. Noslēdzot
        treniņu ciklu, sezonu vai uztura programmu.
      </p>
    </ArticleLayout>
  );
};
