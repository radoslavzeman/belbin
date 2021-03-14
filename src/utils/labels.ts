type Labels = {
  [key: string]: {
    title: string
    questions: {
      [index: string]: string
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const labels: Labels = {
  q1: {
    title: 'I. Čím, podľa môjho názoru, môžem byť v tíme prospešný/á:',
    questions: {
      q1a: 'Myslím, že si dokážem rýchlo všimnúť nové príležitosti a včas ich využiť.',
      q1b: 'Môžem dobre spolupracovať s veľmi širokým okruhom ľudí.',
      q1c: 'Veľmi ľahko a prirodzene prichádzam na nové myšlienky a nápady.',
      q1d: 'Dokážem vyhecovať ľudí k činnosti. Kedykoľvek zistím, že môžem niečím cenným prispieť k skupinovým cieľom.',
      q1e: 'Moja schopnosť doťahovať veci do konca vyplýva z mojej osobnej výkonnosti.',
      q1f: 'Dokážem čeliť dočasnej neobľúbenosti, ak to nakoniec vedie k dobrým výsledkom.',
      q1g: 'Rýchlo vycítim, čo sa má robiť v situácii, ktorú poznám.',
      q1h: 'Dokážem bez predsudkov a zaujatostí nájsť rozumné dôvody pre zmenu zamerania činnosti.',
    },
  },
  q2: {
    title: 'II. Keby som mal/a nedostatky v tímovej práci, boli by to najskôr:',
    questions: {
      q2a: 'Necítim sa dobre, ak pracovná schôdzka nemá jasnú štruktúru a nie je dobre riadená.',
      q2b:
        'Mám tendenciu byť príliš veľkorysý k ľuďom zastávajúcim opodstatnené stanovisko, ktorému nebola venovaná náležitá pozornosť.',
      q2c: 'Mám tendenciu hovoriť príliš veľa, keď sa skupina dostane k novým myšlienkam.',
      q2d: 'Môj objektívny náhľad mi neumožňuje zdieľať nadšenie ostatných.',
      q2e: 'Niekedy sa javím ako príliš energický a autoritársky, keď je potrebné niečo dorobiť.',
      q2f:
        'Je pre mňa ťažké byť v popredí alebo vystupovať vo vedúcej úlohe, snáď preto, že som príliš citlivý na atmosféru v skupine.',
      q2g: 'Stáva sa mi, že sa tak ponorím do svojich myšlienok, že stratím pojem o tom, čo sa deje.',
      q2h: 'Druhí mi niekedy vyčítajú, že sa príliš starám o podružné detaily a lámem si hlavu nad možnými nezdarmi.',
    },
  },
  q3: {
    title: 'III. Keď spolupracujem na nejakom projekte s inými ľuďmi:',
    questions: {
      q3a: 'Mám schopnosť ľudí ovplyvniť bez toho, aby som ich k niečomu nútil.',
      q3c: 'Som pripravený tlačiť ostatných do činnosti, aby sa na stretnutí nestrácal čas a zreteľ na hlavný cieľ.',
      q3b: 'Moja bdelosť umožňuje predchádzať omylom a chybám z nepozornosti.',
      q3d: 'Dá sa počítať s tým, že prispejem niečím originálnym.',
      q3e: 'Som vždy pripravený hájiť dobrý návrh v spoločnom záujme.',
      q3f: 'Som blázon do nových myšlienok a posledných vývojových noviniek.',
      q3g: 'Verím, že ostatní oceňujú moju schopnosť chladného úsudku.',
      q3h: 'Dá sa na mňa spoľahnúť, že dohliadnem na to, aby sa urobilo, čo je potrebné.',
    },
  },
  q4: {
    title: 'IV. Môj charakteristický prístup ku skupinovej práci je, že:',
    questions: {
      q4a: 'Mám záujem lepšie spoznať svojich kolegov.',
      q4b: 'Nezdráham sa odmietnuť názory druhých a zastávať sám menšinové stanovisko.',
      q4c: 'Obyčajne nájdem celý rad argumentov vyvracajúcich nezmyselné návrhy.',
      q4d: 'Dokážem uviesť veci do chodu, keď treba začať uskutočňovať plán.',
      q4e: 'Mám tendenciu vyhýbať sa obvyklým veciam a prichádzať s niečím nečakaným.',
      q4f: 'Snažím sa vniesť náznak dokonalosti do každej tímovej práce, na ktorej sa podieľam.',
      q4g: 'Dokážem využiť kontakty mimo samotného tímu.',
      q4h: 'Keďže sa zaujímam o všetky stanoviská, bez problémov sa prispôsobím, keď sa musí rozhodnúť.',
    },
  },
  q5: {
    title: 'V. Práca ma teší, pretože:',
    questions: {
      q5a: 'Baví ma analyzovať situácie a zvažovať všetky možné voľby.',
      q5b: 'Zaujíma ma nachádzať praktické riešenia problémov.',
      q5c: 'Rád cítim, že podporujem dobré pracovné vzťahy.',
      q5d: 'Môžem uplatniť silný vplyv na rozhodnutia.',
      q5e: 'Mám príležitosť stretávať sa s ľuďmi, ktorí mi môžu poskytnúť novú skúsenosť.',
      q5f: 'Dokážem zjednotiť názory rôznych ľudí a viesť ich k spoločnej žiaducej činnosti.',
      q5g: 'Cítim sa vo svojom živle, keď sa môžem naplno venovať nejakej úlohe.',
      q5h: 'Rád mám veci, ktoré napínajú moju predstavivosť.',
    },
  },
  q6: {
    title: 'VI. Keby som nečakane dostal/a ťažkú úlohu, ktorú je nutné splniť v obmedzenom čase a s neznámymi ľuďmi:',
    questions: {
      q6a: 'Sadol by som si niekam do kúta, premýšľal ako sa dostať zo slepej uličky a snažil sa ujasniť ďalší postup.',
      q6b:
        'Bol by som ochotný pracovať s človekom, ktorý prejavuje najpozitívnejší prístup, bez ohľadu na to, ako ťažko znesiteľný môže byť.',
      q6c:
        'Hľadal by som spôsob zmenšenia zložitosti úlohy stanovením toho, čím môžu rôzni jednotlivci najlepšie prispieť.',
      q6d: 'Môj prirodzený cit pre povinnosť by pomohol zaistiť, že dodržíme harmonogram.',
      q6e: 'Verím, že by som zostal pokojný a udržal si schopnosť jasne myslieť.',
      q6f: 'Držal by som sa stále účelu navzdory tlakom.',
      q6g: 'Bol by som pripravený ujať sa vedenia, keby som cítil, že sa skupina nehýbe z miesta.',
      q6h: 'Zahájil by som rozhovory a jednania so zámerom stimulovať nové myšlienky a uviesť veci do pohybu.',
    },
  },
  q7: {
    title: 'VII. Vo vzťahu k problémom, v ktorých som zaangažovaný/á pri práci v skupine:',
    questions: {
      q7a: 'Mám sklon prejavovať netrpezlivosť s tými, ktorí zdržujú postup.',
      q7b: 'Ostatní ma môžu kritizovať za to, že som príliš analytický a nie veľmi citlivý.',
      q7c: 'Moja potreba uistiť sa, že práca je urobená dobre, môže byť prekážkou postupu.',
      q7d: 'Ľahko sa začnem nudiť a spolieham sa na niekoho z tímu, že ma vyburcuje.',
      q7e: 'Je pre mňa ťažké začať, pokiaľ cieľ nie je jasný.',
      q7f: 'Niekedy sa mi nedarí vysvetľovať a objasňovať zložité myšlienky, ktoré ma napadajú.',
      q7g: 'Som si vedomý toho, že žiadam od ostatných veci, ktoré sám nedokážem.',
      q7h: 'Váham sa postaviť na odpor, keď sa stretnem so skutočnou opozíciou.',
    },
  },
}
