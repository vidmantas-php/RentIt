import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./PageRules.css";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedSecondary, setExpandedSecondary] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeSecondary = (panel) => (event, isExpanded) => {
    setExpandedSecondary(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className="p__h1__center">
        <h1>Naudojimosi taisyklės</h1>
      </div>
      <div className="accordion__page__margin">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>
              Bendrosios nuostatos
            </Typography>
            {/* <Typography className={classes.secondaryHeading}>
              I am an accordion
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Accordion
                expanded={expandedSecondary === "panelSavokos"}
                onChange={handleChangeSecondary("panelSavokos")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    1. Sąvokos
                  </Typography>
                  {/* <Typography className={classes.secondaryHeading}>
              I am an accordion
            </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* <h5>1. Sąvokos</h5> */}
                    <p>
                      <strong>1.1 Platforma</strong> – tai internetinė svetainė,
                      pasiekiama internetiniu adresu www.dalinuosi.lt, kurioje
                      asmenys gali pateikti ir išsinuomoti daiktus pagal
                      pateiktas skelbimuose sąlygas laikydamiesi Platformos
                      taisyklių.
                    </p>
                    <p>
                      {" "}
                      <strong>1.2 Nuomotojas</strong> – asmuo, kuris
                      laikydamasis Platformos taisyklių siūlo kitiems asmenims
                      išsinuomoti tam tikrus jo turimus daiktus (dėdamas daiktų
                      nuomos skelbimus su konkrečiomis nuomos sąlygomis) bei
                      nuomoja daiktus asmenims, pareiškusiems norą išsinuomoti
                      Nuomotojo daiktą pagal paskelbtas sąlygas, jeigu
                      pastarieji atitinka tam tikrus reikalavimus.
                    </p>
                    <p>
                      <strong>1.3 Nuomininkas</strong> – asmuo, kuris
                      laikydamasis Platformos taisyklių nuomojasi daiktus,
                      pateiktus Nuomotojų Platformoje. Aiškumo tikslais
                      nurodoma, kad Nuomininkas gali būti ir Nuomotoju (pvz.,
                      jei ne tik deda skelbimus, kurių pagrindu nuomoja daiktus,
                      bet taip pat ir nuomojasi daiktus iš kitų asmenų,
                      pateikusių daiktų nuomos skelbimus), tačiau vieno
                      konkretaus daikto nuomos atžvilgiu jis yra tik Nuomininkas
                      arba tik Nuomotojas.
                    </p>
                    <p>
                      <strong>1.4 Vartotojai</strong> – tai sąvoka naudojama
                      aiškumo tikslais, kai turimi omenyje Platformoje
                      prisiregistravę asmenys.
                    </p>
                    <p>
                      <strong>1.5 Taisyklių šalys</strong> – tai sąvoka
                      naudojama aiškumo tikslais, kai turimi omenyje tiek
                      Valdytojas, tiek Nuomotojai ir Nuomininkai kartu.
                    </p>
                    <p>
                      <strong>1.6 Taisyklės</strong> – tai šios naudojimosi
                      Platforma taisyklės ir sąlygos, kurios apibrėžia
                      Platformos teikiamus funkcionalumus, suteikiant sąlygas
                      Vartotojams (tik tuo atveju, kai sutinkama laikytis
                      Platformos Taisyklių) naudojantis Platforma išnuomoti arba
                      išsinuomoti daiktus. Taisyklėmis yra reguliuojami
                      santykiai:
                      <p>
                        1.6.1 Tarp Nuomotojo ir Valdytojo: Nuomotojui: a) dedant
                        savo atitinkamų daiktų skelbimus ir siūlant tretiesiems
                        asmenims išsinuomoti šiuos daiktus naudojantis
                        Platforma; b) Nuomotojui atsakant į potencialių daiktų
                        Nuomininkų paklausimus; c) Nuomotojui pateikiant ir
                        išnuomojant daiktus Nuomininkams; d) Nuomotojui gaunant
                        atlyginimą už daiktų nuomą nustatyta tvarka; e)
                        Nuomotojui priimant iš Nuomininko grąžinamą daiktą;
                      </p>{" "}
                      <p>
                        1.6.2 Tarp Nuomininko ir Valdytojo: Nuomininkui: a)
                        teikiant paklausimus Nuomotojams; b) rezervuojant daiktą
                        bei atliekant atitinkamus mokėjimus už daikto nuomą; c)
                        sudarant daikto nuomos sutartis su Nuomotoju; d)
                        Nuomininkui grąžinant išsinuomotus daiktus Nuomotojui.
                      </p>
                    </p>
                    <p>
                      {" "}
                      <strong>1.7 Valdytojas</strong> – tai Platformos skiltyje
                      Kontaktai nurodytas juridinis asmuo, administruojantis
                      Platformą laikydamasis nustatytų Taisyklių konkrečių
                      Vartotojų atžvilgiu.
                    </p>
                    <p>
                      {" "}
                      <strong>1.8 Duomenys</strong> – asmens duomenys, tokie
                      kaip vardas, pavardė, elektroninio pašto adresas ir kiti,
                      nurodomi registracijos Platformoje metu bei vėliau
                      pateikti Platformoje esančioje asmens paskyroje.
                    </p>
                    <p>
                      {" "}
                      <strong>1.9 Lankytojas</strong> – tai asmuo, kuris nėra
                      atlikęs Svetainėje registracijos, įskaitant atvejus, kai
                      registracijos procedūra yra pradėta, tačiau nebaigta.
                    </p>
                    <p>
                      <strong>1.10 Daiktai</strong> – Nuomotojo siūlomi
                      Platformos Lankytojams daiktai nurodyti Nuomotojo
                      skelbimuose.
                    </p>
                    <p>
                      {" "}
                      <strong>1.11 LR</strong> – Lietuvos Respublika;
                    </p>
                    <p>
                      <strong>1.12 Komisinis mokestis</strong> – mokestis, kuris
                      yra mokamas Valdytojui už naudojimąsi Platforma, kurio
                      dydis priklauso nuo nuomojamo daikto sandorio vertės,
                      banko mokesčių ir Vartotojo reitingo Platformoje.
                    </p>
                    <p>
                      {" "}
                      <strong>1.13 Sutartis</strong> – Daikto nuomos sutartis,
                      kuri vadovaujantis Taisyklėmis, sudaryta tarp Nuomotojo ir
                      Nuomininko.
                    </p>
                    <p>
                      {" "}
                      <strong>1.14 Sandorio ataskaita (Deal sheet)</strong> –
                      nuomos sutarties esminių sąlygų santrumpa.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedSecondary === "panelTaisykles"}
                onChange={handleChangeSecondary("panelTaisykles")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    2. Taisyklių galiojimas ir keitimas
                  </Typography>
                  {/* <Typography className={classes.secondaryHeading}>
              I am an accordion
            </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* <h5>1. Sąvokos</h5> */}
                    <p>
                      2.1 Šios Taisyklės susistemina informaciją, susijusią su
                      veikla Platformoje, pateikiant atitinkamas nuorodas į
                      detalesnės informacijos vietas, t. y. Taisykles sudaro
                      informacija, pateikta šiose Taisyklėse, bei informacija,
                      prieinama per aktyvias nuorodas.
                    </p>
                    <p>
                      {" "}
                      2.2 Taisyklių įsigaliojimo momentas: Lankytojo sutikimu ir
                      įsipareigojimu laikytis Taisyklių laikomas momentas, kai
                      Lankytojas pažymi varnele „Aš perskaičiau, sutinku ir
                      įsipareigoju laikytis Taisyklių“ (arba kitokio turinio
                      sakinį, jeigu pateikiamas kitoks sakinys, nei nurodytas
                      šiame punkte). Naudojimosi Platforma taisykles galima
                      perskaityti paspaudus ant minėto sakinio arba jo dalies
                      Lankytojui atliekant registraciją, t. y. kuriant savo
                      asmeninę paskyrą Platformoje.
                    </p>
                    <p>
                      2.3 Taisyklių galiojimo apimtis: aiškumo tikslais
                      nurodoma, kad nėra galimos situacijos, kai Lankytojas
                      sutinka ir įsipareigoja laikytis Taisyklių su tam tikromis
                      išimtimis. Lankytojui turint pastabų arba norint elgtis
                      kitokiu būdu nei tas, kuris nurodytas Taisyklėse, yra
                      reikalaujama gauti išankstinį Valdytojo rašytinį sutikimą
                      arba sulaukti, kol bus atitinkamai pakeistos Taisyklės.
                    </p>
                    <p>
                      2.4 Taisyklių pakeitimų – papildymų įsigaliojimai: visi
                      Taisyklių pakeitimai – papildymai įsigalioja nuo jų
                      paskelbimo momento Platformoje, išskyrus atvejus, kai
                      Platformoje aiškiai ir nedviprasmiškai nurodyta vėlesnė
                      Taisyklių pakeitimų – papildymų įsigaliojimo data. Aiškumo
                      tikslais nurodoma, kad Taisyklių pakeitimų – papildymų
                      įsigaliojimo momentas negali būti siejamas su el.
                      pranešimų apie Taisyklių pakeitimus – papildymus gavimo ar
                      jų perskaitymo momentu. Jeigu Vartotojas nesutinka su
                      Taisyklių pakeitimais – papildymais, jis praranda teisę
                      naudotis Platforma ir (ar) joje teikiamomis paslaugomis.
                    </p>
                    <p>
                      2.5 Pažeidęs www.dalinuosi.lt Taisykles, Vartotojas gali
                      būti suspenduotas neribotam laikui. Blokavimas reiškia,
                      kad Vartotojas negalės prisijungti naudodamas savo el.
                      paštą, telefoną, IP adresą ir kitus kontaktinius duomenis.
                      Plačiau apie vartotojų blokavimą skaitykite „Kodėl gavau
                      įspėjimą ar buvau užblokuotas“.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedSecondary === "panelNaudojimasisPlatforma"}
                onChange={handleChangeSecondary("panelNaudojimasisPlatforma")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>
                    3. Naudojimasis Platforma, nuomos etapai
                  </Typography>
                  {/* <Typography className={classes.secondaryHeading}>
              I am an accordion
            </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* <h5>1. Sąvokos</h5> */}
                    <p>
                      <strong>
                        3.1 Procesas, susijęs su daikto nuoma susideda iš tokių
                        etapų:
                      </strong>
                      <p>
                        {" "}
                        1. Registracija;
                        <br />
                        2. Skelbimo paskelbimas ir peržiūra;
                        <br />
                        3. Komunikavimas;
                        <br />
                        4. Daikto rezervacija;
                        <br />
                        5. Sutarties sudarymas;
                        <br />
                        6. Daikto nuomininkui perdavimas;
                        <br />
                        7. Daikto nuoma;
                        <br />
                        8. Daikto grąžinimas nuomininkui;
                        <br />
                        9. Atsiskaitymas su Nuomotoju;
                      </p>
                      Toliau šioje Taisyklių dalyje pateikiama informacija yra
                      suskirstyta į etapus, nurodytus šių Taisyklių 3.1 punkte:
                    </p>
                    <p>
                      <strong>1. Registracija:</strong>
                      <p>
                        1.1. Nuomoti daiktus Platformoje gali tik registruoti
                        pilnamečiai Lankytojai, kurie atlieka registraciją
                        Platformoje pateikdami registracijai būtinus Duomenis
                        bei tampa Vartotojais. Detalesnė informacija dėl
                        registracijos Platformoje yra pateikiama „Kaip veikia
                        nuomos platforma?“.
                      </p>
                      <p>
                        1.2. Dėl Platformoje pateikiamų duomenų panaudojimo bei
                        apsaugos detalesnė informacija pateikiama Platformos DUK
                        skiltyje „Dalinuosi.lt privatumo politika“.
                      </p>
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Nuomininkui</Typography>
            {/* <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Daikto savininkui
            </Typography>
            {/* <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>
              Kaip veikia nuomos platforma?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
