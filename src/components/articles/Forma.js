import React from "react";
import img11 from "../../img/11.jpg";
import img1 from "../../img/1.jpg";
import img6 from "../../img/6.jpg";
import img20 from "../../img/20.jpg";
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
const imgStyle2 = {
  justifyContent: "space-around",
  marginBottom: "10px"
};
export default () => {
  return (
    <ArticleLayout>
      <h1 style={headerStyle}>Kā viegli būt formā ?</h1>
      <img src={img11} className="img-responsive" alt="" />
      <p>
        Būt labā fiziskajā formā! Kā pie tās tikt? Nemitīgi kāds Stokholmas
        brīnums piedāvā nomest 8 kilogramus dažu dienu laikā, lasām kā ar sešiem
        vingrinājumiem iegūt tvirtu vidukli. Nupat skan aicinājumi uz augstas
        intensitātes treniņiem. Dzirdam apsvērumus par 3 vai 4 litru ūdens
        dzeršanas nepieciešamību, neēšanu pēc sešiem, pārtikas piedevu
        brīnumaino spēku vai sporta uzturu. Kam uzticēties? Kā ar mazākām
        raizēm, par prieku sev, un varbūt nelielu skaudību apkārtējiem būt labā
        formā?
      </p>{" "}
      <p>
        Teikšu skaidri, un arī jūs to droši vien jau zināt, ka svarīgākās šeit
        ir tikai divas lietas - kustības un uzturs. Kustībām jāsniedz prieks,
        tām jābūt iedarbīgām. Uzturam jābūt pietiekamam. Un te nu grēkojam -
        nekādas kustības nespēs atsvērt pārmērīgu kaloriju uzņemšanu. 300
        kaloriju dienā par daudz var dot pat 15 kilogramus liekā svara gada
        laikā!
      </p>{" "}
      <p>
        Bet ir laimīgie, kas svarā nepieņemas ēdot pat ļoti iespaidīgas
        maltītes. Tie pārsvarā ir jauni cilvēki, puiši un meitenes līdz 25 - 30,
        un muskuļoti vīrieši. To nosaka augstais testosterona līmenis viņu
        asinīs, kas ir raksturīgs jauniešiem un tiem, kuri nodarbojas ar spēka
        vingrinājumiem.
      </p>{" "}
      <p>
        Lūk, arī solītais padoms - spēka vingrinājumi ir visefektīvākie fiziskās
        formas uzlabošanai ! Pareizi pielietoti, tie dod pat pieckāršu efektu!
        Visiem! Sievietēm un vīriešiem jebkurā vecumā!
      </p>
      <div className="container-fluid " style={imgStyle}>
        <img src={img1} style={{ maxHeight: "400px" }} alt="" />
      </div>
      <p>
        {" "}
        <strong>Pirmkārt</strong>
        jau ar kaloriju patēriņu - treniņa laikā sadeg kalorijas, un to
        paaugstināta degšana turpinās arī vēl tik ilgi kamēr muskuļi atjaunojas,
        vēl arī otrajā un trešajā dienā. Pāris mēnešu laikā, pēc paveiktiem 10 –
        12 spēka treniņiem, jūsu jau pieaugusī muskuļu masa dedzinās kalorijas
        arī tad, kad gulēsiet miegā, paaugstinātās pamata vielmaiņas rezultātā,
        jo muskuļu audi patērē līdz pat 17 reizēm vairāk kaloriju kā citi audi.
      </p>{" "}
      <p>
        <strong>Otrkārt</strong>- pieaugot muskuļiem, veidojas tīkamas ķermeņa
        formas, kas, iespējams, ir gājušas mazumā, jo sākot no 35 – 40 gadu
        vecumu zaudējam ik 10 gadus pa 5 kilogramiem muskuļu, kuru vietā nāk
        taukaudi, ja kustību nav bijis pietiekami.
      </p>{" "}
      <p>
        <strong>Trešais</strong>
        devums ir traumatisma un muguras sāpju mazināšanās. Muskuļi taču satur
        mūs kopā! Mugurkauls bez muskuļu atsaitēm, kas to padara par elastīgu
        atsperi ar gudriem izliekumiem, pārvēršas par sāpošu kaulu čupiņu...
      </p>{" "}
      <p>
        <strong>Ceturtais</strong>
        ieguvums ir darbaspēju pieaugums, mazāk nogurstam ikdienā. Šo spēku
        pieaugumu nodrošina glikogēna rezervju veidošanās muskuļos. Glikogēnam
        šķeļoties, asinīs nonāk glikoze. Muskuļi kļūst par mūsu papildus bākām,
        bet netrenētam cilvēkam jāiztiek tikai ar glikogēna krājumiem aknās.
      </p>{" "}
      <p>
        <strong>Piektais</strong>, ļoti nozīmīgais pienesums ir testosterona
        līmeņa paaugstināšanās asinīs. Tas ir dzīvesprieks, temperaments,
        libido, mirdzums acīs un vēl citi, jaunības gadiem raksturīgi ieguvumi.
      </p>{" "}
      <p>Skan taču vilinoši, vai ne?</p>{" "}
      <h2>Kādi tad spēka vingrinājumi der?</h2>
      <img src={img6} className="img-responsive" alt="" />
      <p>
        <strong>1.</strong>
        Vingrinājumi, kurus varat atkārtot no 10 līdz 15 reizēm.
      </p>{" "}
      <p>
        Nebūs vēlamā efekta no tādām kustībām, kuras varat atkārtot 30 un vairāk
        reizes, jo tad slodze ir par mazu, lai muskuļos veidotos mikroplīsumiņi,
        kas smadzenēm dod signālu par nepieciešamās ķēdes reakcijas
        iedarbināšanu audu atjaunošanai (muskuļu reģenerācijai), hormonu
        ieplūšanai un vielmaiņas paātrināšanai.
      </p>{" "}
      <p>
        Nogurums muskuļos („piekačātā” sajūta) vēl nenozīmē, ka muskuļos ir
        izsaukta reakcija to augšanai. Šī sajūta parasti ir vienkārši uzkrātās
        pienskābes signāls vielmaiņai, ka nepieciešama to utilizēt.
      </p>{" "}
      <p>
        <strong>2.</strong> Vingrinājumi, kas aptver iespējami vairāk muskuļu
        grupu vienlaicīgi.
      </p>{" "}
      <p>
        Visefektīvākie spēka vingrinājumi būs dažādi pietupieni ar apsmagojomu,
        smagumu atcelšana no zemes, to pacelšana virs galvas, pievilšanās pie
        stieņa un tamlīdzīgi. Iesācējiem šie un citi īpaši efektīvie
        vingrinājumi ir piemeklējami un izpildāmi tikai kvalificēta speciālista
        vadībā, jo nepareiza to izpilde var izrādīties traumatiska.
      </p>{" "}
      <p>
        <strong>3</strong>. Simetriska secīgu vingrinājumu izvēle un apļa
        treniņa metode.
      </p>{" "}
      <p>
        Simetriska izvēle nozīmē to ka pēc pievilcēju muskuļu darba, dodam
        slodzi iztaisnotājiem muskuļiem, pēc darba vēdera muskulatūrai
        noslogojam muguras muskuļus un pēc ķermeņa augšdaļas muskulatūras
        pievēršamies kāju un sēžas muskulatūrai.
      </p>{" "}
      <p>
        Apļa treniņa metode nozīmē, ka izvēloties 5 līdz 10 simetriskus spēka
        vingrinājumus, katram vingrinājumam veltām vienu piegājienu ar 10 – 12
        atkārtojumiem. Starp vingrinājumiem ieturam 1 – 1,5 minūšu pauzīti līdz
        jūtam ka varam ķeries pie nākamā vingrinājuma. Izpildot visus
        vingrinājumus, varam atkārtot apli arī otro un trešo reizi atkarībā no
        sagatavotības.
      </p>{" "}
      <p>
        Simetriska secīgu vingrinājumu izvēle un apļa treniņa metode ļauj
        paveikt līdz 30% lielāku darbu divās treniņu dienās, iepretim paņēmienam
        kad vingrinājumus atkārto vairākus piegājienus pēc kārtas, un trenē
        muskuļu grupas atsevišķās dienās. Otrajā gadījumā, lai paveiktu līdzīgu
        darbu ir vajadzīgas jau četras treniņu dienas nedēļā un papildus
        ieguldījumi atjaunošanās stimulācijai.
      </p>{" "}
      <h2>Kā saņemt visus labumus ko sola spēka vingrinājumi?</h2>
      <img src={img20} className="img-responsive" alt="" />
      <p>
        Visvieglāk to izdarīt ir pāris reizes nedēļā apmeklējot trenažieru zāli.
        Plānojiet trīs treniņus pa pusotrai stundai. Ja vienu treniņu gadās
        izlaist – ar diviem arī būs diezgan. Stundu veltiet spēka
        vingrinājumiem, 20 minūtes soļošanai vai skriešanai ar pulsu robežās no
        120 līdz 140 sitieniem minūtē un tad vēl 10 minūtes stiepšanās
        vingrinājumiem. Ar to jāpietiek. Bez pietiekamas kardio slodzes un
        stiepšanās vingrinājumiem spēka treniņa iedarbības efekts būs krietni
        samazināts, bet ja izpildīsiet visu programmu būsiet lieliskā formā!
      </p>{" "}
      <p>
        Ak vai, gandrīz vai piemirsu. Paskaitiet cik kaloriju dienā uzņemat ar
        ēdienu. Ja to regulāri būs par daudz, tad rezultātu varat lasīt trešajā
        rindkopā raksta sākumā.
      </p>
    </ArticleLayout>
  );
};
