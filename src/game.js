import{supabase,hasAuth}from'./supabase.js';
const R=(a,b)=>a+Math.random()*(b-a),P=a=>a[Math.floor(Math.random()*a.length)],G=()=>(Math.random()+Math.random()+Math.random()-1.5)*2,sh=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const NS="Brasil:SA:88,Argentina:SA:90,Uruguai:SA:79,Colômbia:SA:78,Chile:SA:68,Equador:SA:70,Paraguai:SA:66,Peru:SA:64,Venezuela:SA:60,Bolívia:SA:58,França:EU:90,Espanha:EU:88,Inglaterra:EU:87,Alemanha:EU:84,Portugal:EU:85,Itália:EU:83,Holanda:EU:83,Bélgica:EU:80,Croácia:EU:78,Turquia:EU:74,Escócia:EU:68,Suíça:EU:73,Áustria:EU:74,Dinamarca:EU:75,Noruega:EU:73,Suécia:EU:71,Grécia:EU:70,Polônia:EU:72,Sérvia:EU:73,Ucrânia:EU:72,República Tcheca:EU:71,México:NA:75,EUA:NA:74,Canadá:NA:70,Costa Rica:NA:64,Panamá:NA:63,Jamaica:NA:63,Japão:AS:75,Coreia do Sul:AS:74,Arábia Saudita:AS:68,Austrália:AS:66,Catar:AS:66,Irã:AS:72,Emirados Árabes:AS:64,Uzbequistão:AS:63,Marrocos:AF:76,Egito:AF:68,Tunísia:AF:66,Nigéria:AF:70,África do Sul:AF:62,Argélia:AF:72,Senegal:AF:76,Gana:AF:70,Camarões:AF:72,Costa do Marfim:AF:74,Mali:AF:70";
const N={};NS.split(",").forEach(s=>{const[a,c,v]=s.split(":");N[a]={c,v:+v}});
const D=`Inglaterra;Premier League;1;Man City:90,Arsenal:89,Liverpool:89,Chelsea:84,Man United:82,Tottenham:82,Newcastle:81,Aston Villa:80,West Ham:77,Brighton:77,Nottingham Forest:77,Crystal Palace:76,Bournemouth:76,Fulham:75,Brentford:74,Everton:73,Leeds:72,Wolves:71,Burnley:69,Ipswich:68
Inglaterra;Championship;2;Southampton:71,Leicester:70,Sheffield United:67,Sunderland:66,Norwich:65,West Brom:65,Watford:64,Middlesbrough:64,Coventry:63,Bristol City:61,Blackburn:60,Stoke City:60,Swansea:60,Preston:59,Millwall:58,QPR:58,Cardiff:58,Hull City:57,Derby:57,Plymouth:55
Espanha;La Liga;1;Real Madrid:91,Barcelona:90,Atlético de Madrid:86,Real Sociedad:80,Athletic Bilbao:80,Villarreal:79,Sevilla:78,Betis:77,Valencia:76,Girona:75,Celta:73,Osasuna:72,Rayo Vallecano:71,Mallorca:70,Getafe:70,Alavés:68,Espanyol:68,Las Palmas:67,Leganés:65,Valladolid:64
Espanha;Segunda División;2;Levante:66,Almería:65,Granada:64,Elche:63,Racing Santander:62,Deportivo:62,Zaragoza:61,Sporting Gijón:61,Eibar:60,Oviedo:60,Huesca:58,Málaga:58,Burgos:57,Mirandés:57,Albacete:56,Córdoba:56,Cartagena:55,Castellón:55,Tenerife:55,Racing Ferrol:54
Alemanha;Bundesliga;1;Bayern:90,Leverkusen:87,Dortmund:84,RB Leipzig:84,Eintracht:79,Stuttgart:79,Wolfsburg:75,Union Berlin:74,Freiburg:74,Borussia M'gladbach:73,Mainz:72,Werder Bremen:72,Hoffenheim:71,Augsburg:70,Heidenheim:67,St. Pauli:66,Bochum:65,Holstein Kiel:64
Alemanha;2. Bundesliga;2;Köln:68,Hamburgo:67,Schalke 04:66,Hertha:65,Düsseldorf:63,Hannover:62,Paderborn:61,Darmstadt:61,Magdeburg:60,Nürnberg:60,Karlsruhe:60,Elversberg:59,Greuther Fürth:58,Kaiserslautern:58,Braunschweig:56,Münster:55,Ulm:54,Regensburg:53
Itália;Serie A;1;Inter:88,Napoli:85,Milan:85,Juventus:85,Atalanta:83,Roma:82,Lazio:80,Fiorentina:78,Bologna:76,Torino:73,Udinese:71,Genoa:70,Como:70,Verona:68,Cagliari:68,Lecce:67,Parma:67,Empoli:66,Monza:66,Venezia:64
Itália;Serie B;2;Sassuolo:68,Palermo:66,Sampdoria:65,Pisa:63,Cremonese:62,Spezia:62,Salernitana:61,Catanzaro:60,Frosinone:60,Brescia:58,Modena:58,Cesena:58,Bari:58,Südtirol:56,Reggiana:56,Juve Stabia:55,Cittadella:54,Mantova:54,Carrarese:53,Cosenza:53
França;Ligue 1;1;PSG:89,Monaco:80,Marseille:80,Lyon:79,Lille:78,Nice:76,Lens:76,Rennes:76,Brest:72,Toulouse:71,Strasbourg:71,Nantes:70,Reims:70,Montpellier:68,Auxerre:67,Lorient:66,Angers:65,Le Havre:65
França;Ligue 2;2;Saint-Étienne:66,Metz:63,Clermont:60,Bordeaux:58,Guingamp:58,Amiens:58,Troyes:58,Caen:57,Grenoble:57,Bastia:56,Ajaccio:56,Dunkerque:56,Pau:55,Rodez:55,Laval:55,Annecy:55,Red Star:54,Martigues:53
Portugal;Primeira Liga;1;Sporting:83,Benfica:82,Porto:82,Braga:77,Vitória SC:70,Famalicão:66,Moreirense:64,Santa Clara:63,Rio Ave:63,Estoril:63,Arouca:63,Gil Vicente:63,Boavista:61,Casa Pia:61,Estrela Amadora:60,Nacional:60,AVS:58,Farense:58
Portugal;Liga Portugal 2;2;Tondela:58,Chaves:57,Académica:57,Marítimo:57,Paços de Ferreira:57,Vizela:56,Feirense:55,Benfica B:55,Porto B:55,Penafiel:54,Alverca:54,Torreense:54,União de Leiria:53,Leixões:52,Mafra:52,Felgueiras:51
Holanda;Eredivisie;1;PSV:80,Ajax:80,Feyenoord:79,AZ:73,Twente:70,Utrecht:66,NEC:64,Heerenveen:63,Sparta Rotterdam:62,Go Ahead Eagles:62,Groningen:61,Fortuna Sittard:60,PEC Zwolle:59,Heracles:58,Willem II:57,NAC Breda:57,Almere City:56,RKC Waalwijk:56
Holanda;Eerste Divisie;2;Volendam:57,Excelsior:56,Cambuur:55,Emmen:54,De Graafschap:54,Roda JC:53,Jong Ajax:52,Jong PSV:52,VVV-Venlo:51,Den Bosch:51,FC Eindhoven:51,Dordrecht:50
Bélgica;Pro League;1;Club Brugge:75,Anderlecht:72,Union SG:71,Genk:70,Antwerp:69,Gent:68,Cercle Brugge:64,Standard:64,Mechelen:62,Charleroi:61,OH Leuven:59,Westerlo:59,STVV:58,Kortrijk:56,Dender:54,Beerschot:53
Turquia;Süper Lig;1;Galatasaray:77,Fenerbahçe:77,Beşiktaş:74,Trabzonspor:68,Başakşehir:67,Adana Demirspor:62,Sivasspor:61,Alanyaspor:61,Konyaspor:60,Antalyaspor:60,Samsunspor:60,Göztepe:59,Kasımpaşa:58,Rizespor:58,Gaziantep FK:58,Kayserispor:57,Hatayspor:56,Eyüpspor:56
Escócia;Premiership;1;Celtic:70,Rangers:68,Hearts:60,Hibernian:57,Aberdeen:56,Dundee United:54,Motherwell:54,Kilmarnock:54,St Mirren:53,Dundee FC:52,Ross County:51,St Johnstone:50
Suíça;Super League;1;Young Boys:70,Basel:68,Servette:65,Lugano:64,St. Gallen:63,Zürich:62,Luzern:60,Sion:58,Lausanne:58,Grasshopper:57,Winterthur:55,Yverdon:54
Áustria;Bundesliga Austríaca;1;Red Bull Salzburg:72,Sturm Graz:69,LASK:65,Rapid Viena:64,Austria Viena:63,Wolfsberger:61,Hartberg:58,Austria Klagenfurt:57,Blau-Weiß Linz:55,Altach:55,Tirol:56,Grazer AK:54
Dinamarca;Superliga;1;Copenhague:70,Midtjylland:69,Brøndby:65,Nordsjælland:63,Silkeborg:61,AGF:60,Randers:58,Viborg:57,Sønderjyske:55,Lyngby:55,Vejle:54,AaB:56
Noruega;Eliteserien;1;Bodø/Glimt:69,Molde:66,Brann:63,Rosenborg:62,Viking:62,Lillestrøm:59,Tromsø:57,Sarpsborg 08:56,Strømsgodset:55,Haugesund:55,Fredrikstad:54,KFUM Oslo:52,Kristiansund:53,HamKam:52
Suécia;Allsvenskan;1;Malmö FF:67,AIK:63,Djurgården:65,Häcken:63,Elfsborg:62,Hammarby:62,IFK Göteborg:59,IFK Norrköping:58,Mjällby:57,Sirius:55,Brommapojkarna:54,Halmstad:54,Värnamo:53,Västerås:52
Grécia;Super League;1;Olympiacos:70,PAOK:68,AEK:67,Panathinaikos:66,Aris:62,Volos:56,OFI:55,Atromitos:55,Lamia:53,Panetolikos:53,Levadiakos:52,Asteras:54
Polônia;Ekstraklasa;1;Legia Varsóvia:66,Lech Poznań:66,Raków:65,Jagiellonia:64,Pogoń Szczecin:62,Cracovia:60,Górnik Zabrze:58,Widzew Łódź:58,Śląsk Wrocław:57,Piast Gliwice:56,Motor Lublin:54,Radomiak:54,Korona Kielce:53,Zagłębie:55
Croácia;HNL;1;Dinamo Zagreb:70,Hajduk Split:66,Rijeka:65,Osijek:61,Varaždin:57,Slaven Belupo:55,Lokomotiva:55,Istra 1961:54,Gorica:54,Šibenik:52
Sérvia;SuperLiga;1;Estrela Vermelha:71,Partizan:66,Vojvodina:61,TSC Bačka:59,Čukarički:58,Radnički Niš:56,Spartak Subotica:55,Javor:52,Mladost:52,Napredak:52
Ucrânia;Premier League Ucraniana;1;Shakhtar:70,Dínamo Kiev:69,Zorya:60,Dnipro-1:60,Kryvbas:58,Oleksandriya:57,Vorskla:56,Rukh Lviv:54,Kolos:55,LNZ Cherkasy:53
República Tcheca;Chance Liga;1;Slavia Praga:69,Sparta Praga:69,Viktoria Plzeň:66,Baník Ostrava:60,Slovácko:58,Mladá Boleslav:57,Jablonec:57,Teplice:55,Hradec Králové:55,Bohemians:55,Dukla:53,Karviná:52
Brasil;Brasileirão Série A;1;Flamengo:86,Palmeiras:86,Botafogo:82,Fluminense:81,Corinthians:81,São Paulo:81,Atlético-MG:80,Grêmio:79,Internacional:79,Cruzeiro:78,Bahia:77,Fortaleza:76,Athletico-PR:76,Vasco:75,Santos:75,Bragantino:74,Juventude:71,Mirassol:71,Criciúma:69,Cuiabá:66
Brasil;Brasileirão Série B;2;Goiás:72,Ceará:68,Coritiba:66,Sport:66,Vitória:65,América-MG:64,Chapecoense:62,Novorizontino:62,CRB:60,Avaí:60,Ponte Preta:59,Guarani:58,Paysandu:58,Operário-PR:57,Remo:57,Amazonas:56,Botafogo-SP:56,Ferroviária:54,Volta Redonda:54,Athletic-MG:53
Argentina;Liga Profesional;1;River Plate:82,Boca Juniors:82,Racing:76,Estudiantes:73,Independiente:72,Vélez:72,Talleres:72,San Lorenzo:70,Argentinos Juniors:69,Lanús:69,Rosario Central:69,Defensa y Justicia:68,Huracán:67,Newell's:67,Godoy Cruz:65,Banfield:64,Gimnasia LP:64,Instituto:63,Tigre:63,Platense:62
Argentina;Primera Nacional;2;Colón:58,San Martín SJ:57,Chacarita:55,Gimnasia Mendoza:55,Quilmes:54,Ferro:54,Deportivo Morón:53,All Boys:53,Atlanta:52,Almirante Brown:52,Temperley:52,Estudiantes BA:51
Uruguai;Primera División;1;Peñarol:70,Nacional:70,Defensor Sporting:60,Liverpool FC:60,Montevideo City:58,Danubio:55,Racing Montevideo:54,Cerro Largo:54,Wanderers:54,River Plate Montevideo:53,Boston River:53,Progreso:52,Plaza Colonia:52,Miramar Misiones:51,Juventud:51,Cerro:50
Colômbia;Liga BetPlay;1;Atlético Nacional:70,Millonarios:66,Junior:64,América de Cali:63,Deportivo Cali:62,Independiente Medellín:62,Tolima:62,Santa Fe:61,Once Caldas:58,Bucaramanga:58,Águilas Doradas:56,Pereira:56,La Equidad:54,Envigado:54,Alianza:53,Patriotas:52
Chile;Primera División;1;Colo-Colo:68,Universidad de Chile:64,Universidad Católica:64,Huachipato:58,Cobresal:57,Palestino:57,Unión Española:56,O'Higgins:55,Audax Italiano:55,Everton de Viña:54,Coquimbo Unido:54,Ñublense:54,Unión La Calera:53,Deportes Iquique:52,Cobreloa:51,Limache:49
Equador;Liga Pro;1;LDU Quito:68,Independiente del Valle:67,Barcelona SC:65,Emelec:62,Aucas:58,Universidad Católica EC:56,Delfín:55,Orense:54,El Nacional:54,Macará:53,Técnico Universitario:52,Mushuc Runa:51,Libertad:50,Cumbayá:49
Paraguai;Primera División;1;Olimpia:64,Cerro Porteño:63,Libertad:63,Guaraní:59,Nacional Asunción:56,Sportivo Luqueño:53,Sportivo Trinidense:52,Sportivo Ameliano:52,General Caballero:51,Tacuary:51,2 de Mayo:50,Recoleta:49
Peru;Liga 1;1;Universitario:62,Alianza Lima:61,Sporting Cristal:61,Melgar:57,Cienciano:55,Cusco FC:54,Sport Huancayo:53,ADT:52,Atlético Grau:52,Alianza Atlético:51,Los Chankas:49,Sport Boys:50
EUA;MLS;1;Inter Miami:73,LAFC:72,Columbus Crew:69,LA Galaxy:68,Cincinnati:68,Seattle Sounders:67,NYCFC:66,Philadelphia Union:66,Atlanta United:65,Orlando City:65,NY Red Bulls:64,Vancouver Whitecaps:64,Portland Timbers:63,Minnesota United:63,Real Salt Lake:63,Austin FC:62,Nashville SC:62,Houston Dynamo:62
EUA;USL Championship;2;Louisville City:52,Sacramento Republic:51,Phoenix Rising:53,Indy Eleven:50,San Antonio FC:51,Colorado Springs:50,Tampa Bay Rowdies:52,Birmingham Legion:50,Detroit City:51,Pittsburgh Riverhounds:50,Charleston Battery:52,Rhode Island FC:49
México;Liga MX;1;América:77,Tigres:76,Monterrey:76,Chivas:73,Cruz Azul:73,Pachuca:71,Pumas:70,Toluca:70,León:69,Santos Laguna:66,Atlas:65,Tijuana:64,Necaxa:63,San Luis:63,Juárez:61,Puebla:61,Querétaro:60,Mazatlán:60
México;Liga de Expansión;2;Tapatío:52,Celaya:50,Atlante:52,Dorados:51,Tampico Madero:50,Cancún FC:50,Venados:51,Correcaminos:49,Tlaxcala:49,Mineros:51,Leones Negros:50,Oaxaca:49
Arábia Saudita;Saudi Pro League;1;Al-Hilal:76,Al-Nassr:74,Al-Ittihad:73,Al-Ahli:72,Al-Shabab:67,Al-Ettifaq:65,Al-Taawoun:63,Al-Fateh:62,Al-Qadsiah:61,Al-Khaleej:60,Al-Fayha:60,Damac:58,Al-Riyadh:58,Al-Wehda:58,Al-Raed:56,Al-Orobah:55,Al-Kholood:55,Al-Hazem:54
Catar;Stars League;1;Al-Sadd:64,Al-Duhail:63,Al-Rayyan:60,Al-Gharafa:60,Al-Arabi:57,Al-Wakrah:56,Umm Salal:54,Qatar SC:53,Al-Shamal:51,Al-Ahli Doha:52,Al-Khor:51,Muaither:50
Emirados Árabes;UAE Pro League;1;Al Ain:62,Shabab Al Ahli:61,Al Wasl:59,Sharjah:59,Al Jazira:58,Al Wahda:57,Al Nasr:55,Bani Yas:53,Khor Fakkan:51,Ajman:51,Kalba:50,Dibba:49
Japão;J1 League;1;Vissel Kobe:70,Kawasaki Frontale:68,Yokohama Marinos:68,Urawa Reds:68,Sanfrecce Hiroshima:67,Kashima Antlers:66,Gamba Osaka:64,Cerezo Osaka:64,FC Tokyo:63,Nagoya Grampus:63,Kashiwa Reysol:61,Avispa Fukuoka:60,Albirex Niigata:58,Kyoto Sanga:58,Sagan Tosu:57,Shonan Bellmare:57,Consadole Sapporo:56,Júbilo Iwata:56
Japão;J2 League;2;Vegalta Sendai:53,Montedio Yamagata:52,Ventforet Kofu:53,JEF United:54,Oita Trinita:53,Tokyo Verdy:55,Roasso Kumamoto:51,Fujieda MYFC:50,Mito HollyHock:51,Iwaki FC:51,Blaublitz Akita:50,Renofa Yamaguchi:50
Coreia do Sul;K League 1;1;Ulsan HD:66,Jeonbuk:65,Pohang Steelers:63,FC Seoul:62,Gwangju FC:61,Gangwon FC:59,Suwon FC:58,Daejeon Hana:58,Jeju United:57,Incheon United:56,Daegu FC:56,Gimcheon Sangmu:55
Austrália;A-League;1;Sydney FC:58,Central Coast:58,Melbourne City:57,Melbourne Victory:57,Western Sydney:56,Adelaide United:55,Wellington Phoenix:55,Brisbane Roar:53,Macarthur FC:53,Western United:53,Perth Glory:52,Newcastle Jets:51
Egito;Premier League Egípcia;1;Al Ahly:70,Pyramids FC:64,Zamalek:62,Al Masry:58,Future FC:56,Ismaily:55,Ceramica Cleopatra:55,ENPPI:54,Smouha:53,Pharco:53,ZED FC:52,National Bank:52,Tala'ea El Gaish:52,El Gouna:52,Modern Future:51,Baladiyat:51
Marrocos;Botola Pro;1;Wydad:64,Raja Casablanca:63,RS Berkane:63,FAR Rabat:60,FUS Rabat:57,MA Tétouan:55,Difaâ El Jadidi:55,Olympique Safi:54,Hassania Agadir:54,Maghreb Fès:54,Chabab Mohammédia:53,Ittihad Tanger:53,Renaissance Zemamra:52,Union Touarga:52,COD Meknès:51,Olympique Dcheira:50
Tunísia;Ligue Pro;1;Espérance:62,Étoile du Sahel:58,Club Africain:58,CS Sfaxien:57,US Monastir:56,Stade Tunisien:55,Olympique Béja:53,CA Bizertin:53,US Ben Guerdane:53,ES Métlaoui:52,JS Omrane:51,AS Soliman:51,AS Gabès:50,EGS Gafsa:50
Argélia;Ligue 1 Argelina;1;CR Belouizdad:60,MC Alger:59,JS Kabylie:58,ES Sétif:57,USM Alger:57,MC Oran:55,Paradou AC:54,ASO Chlef:53,JS Saoura:54,USM Khenchela:52,NC Magra:51,Olympique Akbou:50
África do Sul;Betway Premiership;1;Mamelodi Sundowns:65,Orlando Pirates:60,Stellenbosch:58,Kaizer Chiefs:58,SuperSport United:57,Sekhukhune:55,AmaZulu:55,Cape Town City:54,Golden Arrows:54,Polokwane City:53,TS Galaxy:53,Chippa United:52,Richards Bay:52,Royal AM:52,Marumo Gallants:51,Magesi:50`;
const T=[];D.split("\n").forEach(l=>{const[c,lg,d,ts]=l.split(";");ts.split(",").forEach(x=>{const[n,a]=x.split(":");T.push({n,avg:+a,c,lg,d:+d,k:N[c]?N[c].c:"EU"})})});
const CN={SA:["Libertadores","Sul-Americana"],EU:["Champions League","Liga Europa"],NA:["Concacaf Champions Cup","Leagues Cup"],AS:["AFC Champions League","AFC Champions League 2"],AF:["CAF Champions League","Copa da CAF"]};
const CT={SA:"Copa América",EU:"Eurocopa",NA:"Copa Ouro",AS:"Copa da Ásia",AF:"Copa Africana de Nações"};
const POS=["Goleiro","Zagueiro","Lateral","Volante","Meia","Ponta","Atacante"];
const DIFF={
  facil:{label:"Fácil 🟢",desc:"Mais evolução, menos lesões, propostas melhores",growMult:1.2,injMult:.5,offerBonus:5,mgPen:0,mgInj:.4,inc:1.1,mkt:.85,fire:.12},
  normal:{label:"Normal ⚽",desc:"Desafiador: evolução mais lenta, adversários fortes e lesões frequentes",growMult:1,injMult:1.3,offerBonus:-2,mgPen:2.5,mgInj:.9,inc:.9,mkt:1.15,fire:.34},
  dificil:{label:"Difícil 🔴",desc:"Brutal: evolução lenta, muitas lesões, adversários de elite",growMult:.82,injMult:2,offerBonus:-6,mgPen:5,mgInj:1.6,inc:.75,mkt:1.4,fire:.5}
};
const IDOLS={
  Goleiro:[
    {n:"Alisson Becker",sk:"ref",pais:"🇧🇷",desc:"Reflexos sobrenaturais e segurança nas saídas"},
    {n:"Thibaut Courtois",sk:"pon",pais:"🇧🇪",desc:"Ponte impressionante e leitura de jogo"},
    {n:"Manuel Neuer",sk:"pes",pais:"🇩🇪",desc:"Goleiro-libero, jogo com os pés excepcional"},
    {n:"Gianluigi Buffon",sk:"man",pais:"🇮🇹",desc:"Manejo impecável, maior goleiro da história"},
    {n:"Iker Casillas",sk:"pen",pais:"🇪🇸",desc:"Mãos mágicas nos pênaltis"},
    {n:"Ederson",sk:"pes",pais:"🇧🇷",desc:"Distribuição precisa, pés de meia-campista"}
  ],
  Zagueiro:[
    {n:"Virgil van Dijk",sk:"aer",pais:"🇳🇱",desc:"Dominância aérea e liderança na defesa"},
    {n:"Marquinhos",sk:"int",pais:"🇧🇷",desc:"Leitura de jogo e inteligência tática"},
    {n:"Sergio Ramos",sk:"chu",pais:"🇪🇸",desc:"Gol em momentos decisivos, guerreiro nato"},
    {n:"Thiago Silva",sk:"def",pais:"🇧🇷",desc:"Posicionamento perfeito e consistência"},
    {n:"Rúben Dias",sk:"fis",pais:"🇵🇹",desc:"Físico avassalador e presença intimidadora"},
    {n:"Paolo Maldini",sk:"vel",pais:"🇮🇹",desc:"Velocidade e elegância na marcação"}
  ],
  Lateral:[
    {n:"Trent Alexander-Arnold",sk:"pas",pais:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",desc:"Passe de craque e visão de jogo revolucionária"},
    {n:"Theo Hernández",sk:"vel",pais:"🇫🇷",desc:"Velocidade explosiva nas subidas"},
    {n:"Cafu",sk:"fis",pais:"🇧🇷",desc:"Motor incansável, resistência lendária"},
    {n:"Roberto Carlos",sk:"chu",pais:"🇧🇷",desc:"Chute poderoso e cobranças de falta históricas"},
    {n:"Dani Carvajal",sk:"def",pais:"🇪🇸",desc:"Equilíbrio perfeito entre atacar e defender"},
    {n:"João Cancelo",sk:"dri",pais:"🇵🇹",desc:"Drible e condução fora do comum para um lateral"}
  ],
  Volante:[
    {n:"Rodri",sk:"int",pais:"🇪🇸",desc:"Dono do meio-campo, inteligência tática suprema"},
    {n:"Casemiro",sk:"def",pais:"🇧🇷",desc:"Muralha defensiva, corte e desarme"},
    {n:"Sergio Busquets",sk:"pas",pais:"🇪🇸",desc:"Passe milimétrico e posicionamento único"},
    {n:"Patrick Vieira",sk:"fis",pais:"🇫🇷",desc:"Força física e presença dominante"},
    {n:"N'Golo Kanté",sk:"vel",pais:"🇫🇷",desc:"Onipresente, velocidade e recuperação de bola"},
    {n:"Xabi Alonso",sk:"pas",pais:"🇪🇸",desc:"Passe longo preciso e visão de futuro"}
  ],
  Meia:[
    {n:"Kevin De Bruyne",sk:"pas",pais:"🇧🇪",desc:"O melhor passador da geração atual"},
    {n:"Luka Modrić",sk:"dri",pais:"🇭🇷",desc:"Drible e condução que hipnotiza adversários"},
    {n:"Zinedine Zidane",sk:"con",pais:"🇫🇷",desc:"Condução mágica, elegância incomparável"},
    {n:"Ronaldinho Gaúcho",sk:"dri",pais:"🇧🇷",desc:"Magia pura no drible e na criatividade"},
    {n:"Andrés Iniesta",sk:"int",pais:"🇪🇸",desc:"Inteligência tática e visão de jogo únicas"},
    {n:"Bruno Fernandes",sk:"chu",pais:"🇵🇹",desc:"Finalização de meia, gol e assistência"}
  ],
  Ponta:[
    {n:"Mohamed Salah",sk:"vel",pais:"🇪🇬",desc:"Velocidade e eficiência devastadoras"},
    {n:"Vinícius Jr.",sk:"dri",pais:"🇧🇷",desc:"Drible explosivo e imprevisível"},
    {n:"Neymar Jr.",sk:"dri",pais:"🇧🇷",desc:"Habilidade técnica e drible excêntrico"},
    {n:"Arjen Robben",sk:"con",pais:"🇳🇱",desc:"Condução e corte para dentro irresistível"},
    {n:"Kylian Mbappé",sk:"vel",pais:"🇫🇷",desc:"Velocidade sobre-humana e frieza na finalização"},
    {n:"Ribéry",sk:"con",pais:"🇫🇷",desc:"Condução frenética e personalidade inigualável"}
  ],
  Atacante:[
    {n:"Cristiano Ronaldo",sk:"fis",pais:"🇵🇹",desc:"Físico atlético e determinação inabalável"},
    {n:"Lionel Messi",sk:"dri",pais:"🇦🇷",desc:"Drible genial, o maior de todos os tempos"},
    {n:"Erling Haaland",sk:"fis",pais:"🇳🇴",desc:"Físico avassalador e instinto de área"},
    {n:"Ronaldo Fenômeno",sk:"vel",pais:"🇧🇷",desc:"Velocidade e drible combinados com finalização"},
    {n:"Romário",sk:"int",pais:"🇧🇷",desc:"Inteligência de área, gol com o mínimo de esforço"},
    {n:"Thierry Henry",sk:"vel",pais:"🇫🇷",desc:"Velocidade e elegância na finalização"}
  ]
};
const RT={Goleiro:[0,0],Zagueiro:[.06,.03],Lateral:[.06,.2],Volante:[.08,.12],Meia:[.25,.35],Ponta:[.38,.3],Atacante:[.55,.2]};
const TL={def:"Defesa",vel:"Velocidade",int:"Inteligência",fis:"Físico",aer:"Jogo aéreo",chu:"Chute",pas:"Passe",dri:"Drible",con:"Condução"},TG={man:"Manejo",sai:"Saída do gol",ref:"Reflexo",pes:"Jogo com os pés",pen:"Pênalti",pon:"Ponte",arr:"Arremate"};
const SKL={"Bombardeiro":"chu","Homem Avião":"aer","Agilidade Máxima":"con","Gênio":"int","Mago":"dri","Titan":"fis","Tiki-Taka":"pas","Explosivo":"vel","Muralha":"def"},SKG={"Aranha Negra":"man","Herói":"pen","Apavorador":"sai","Veloz":"ref","Voador":"pon","Tacada":"arr","Barreira de Pé":"pes"};
const TS=()=>S.pos=="Goleiro"?TG:TL;
const GM={SA:"#2fcf7a",EU:"#3b82f6",NA:"#e53935",AS:"#ab47bc",AF:"#ff9800"},IC={};
function tk(n){const Go=["#f5c542","#9a6f0a"],Sv=["#dfe5ea","#7b8791"];
if(n=="Chuteira de Ouro")return["boot",Go];if(n=="Bola de Ouro")return["ball",Go];if(n=="The Best")return["best",Go];if(n=="Luva de Ouro")return["glove",Go];if(n=="Rei da América")return["crown",Go];
if(n=="Mundial de Clubes"||n=="Copa do Mundo (Seleção)")return["globe",Go];
if(n.includes("(Seleção)"))return["big",[...Go,"#e53935"]];
if(n.startsWith("Copa de "))return["cup",Sv];if(n.startsWith("Acesso"))return["medal",Sv];
for(const k in CN)if(CN[k].includes(n))return["big",[...Go,GM[k]]];return["cup",Go]}
function tImg(n){const[t,c]=tk(n),k=t+c.join();if(IC[k])return IC[k];const cv=document.createElement("canvas");cv.width=cv.height=96;const x=cv.getContext("2d"),g=x.createLinearGradient(0,0,96,0);g.addColorStop(0,c[1]);g.addColorStop(.5,c[0]);g.addColorStop(1,c[1]);x.fillStyle=g;x.strokeStyle=c[1];x.lineWidth=5;x.lineJoin="round";
const base=()=>{x.fillStyle="#3a2a10";x.fillRect(24,80,48,10)},P7=7;
if(t=="cup"||t=="big"){x.beginPath();x.arc(24,30,11,Math.PI/2,Math.PI*1.5);x.stroke();x.beginPath();x.arc(72,30,11,-Math.PI/2,Math.PI/2);x.stroke();x.beginPath();x.moveTo(24,10);x.lineTo(72,10);x.quadraticCurveTo(72,60,48,62);x.quadraticCurveTo(24,60,24,10);x.fill();x.fillRect(43,60,10,18);x.fillRect(28,76,40,12);
if(c[2]){x.fillStyle=c[2];x.beginPath();x.arc(48,34,7,0,P7);x.fill()}x.strokeStyle="rgba(255,255,255,.6)";x.lineWidth=3;x.beginPath();x.moveTo(33,16);x.quadraticCurveTo(33,44,41,54);x.stroke()}
else if(t=="globe"){x.beginPath();x.arc(48,32,22,0,P7);x.fill();x.beginPath();x.moveTo(34,50);x.quadraticCurveTo(44,62,40,76);x.lineTo(56,76);x.quadraticCurveTo(52,62,62,50);x.fill();x.fillRect(32,76,32,12);x.fillStyle="#1b8a4a";x.fillRect(32,80,32,4);x.strokeStyle=c[1];x.lineWidth=2;x.beginPath();x.moveTo(26,32);x.quadraticCurveTo(48,44,70,32);x.moveTo(48,10);x.quadraticCurveTo(36,32,48,54);x.stroke()}
else if(t=="boot"){x.beginPath();x.moveTo(22,18);x.lineTo(46,18);x.lineTo(48,44);x.quadraticCurveTo(76,46,80,62);x.lineTo(80,70);x.lineTo(18,70);x.closePath();x.fill();x.fillStyle=c[1];[24,38,52,66].forEach(v=>x.fillRect(v,70,8,8));base()}
else if(t=="ball"){x.beginPath();x.arc(48,42,30,0,P7);x.fill();x.fillStyle=c[1];x.beginPath();for(let i=0;i<5;i++){const a=i*1.2566-1.5708;x.lineTo(48+11*Math.cos(a),42+11*Math.sin(a))}x.fill();x.lineWidth=2;x.beginPath();for(let i=0;i<5;i++){const a=i*1.2566-1.5708;x.moveTo(48+11*Math.cos(a),42+11*Math.sin(a));x.lineTo(48+30*Math.cos(a),42+30*Math.sin(a))}x.stroke();base()}
else if(t=="glove"){x.beginPath();x.roundRect(28,38,40,36,10);x.fill();[0,1,2,3].forEach(i=>{x.beginPath();x.roundRect(28+i*10.5,i==1||i==2?8:14,8,34,4);x.fill()});x.save();x.translate(26,56);x.rotate(-.7);x.beginPath();x.roundRect(-4,-18,9,26,4);x.fill();x.restore();x.fillStyle=c[1];x.fillRect(30,66,36,8);base()}
else if(t=="crown"){x.beginPath();x.moveTo(22,60);x.lineTo(18,22);x.lineTo(34,38);x.lineTo(48,16);x.lineTo(62,38);x.lineTo(78,22);x.lineTo(74,60);x.closePath();x.fill();x.fillRect(22,60,52,12);x.fillStyle="#e53935";x.beginPath();x.arc(48,38,5,0,P7);x.fill();base()}
else if(t=="best"){x.beginPath();x.arc(48,20,9,0,P7);x.fill();x.beginPath();x.moveTo(30,6);x.lineTo(40,34);x.lineTo(36,70);x.lineTo(60,70);x.lineTo(56,34);x.lineTo(66,6);x.lineTo(58,6);x.lineTo(48,26);x.lineTo(38,6);x.closePath();x.fill();base()}
else{x.fillStyle="#c62828";x.fillRect(36,6,10,30);x.fillStyle="#1565c0";x.fillRect(50,6,10,30);x.fillStyle=g;x.beginPath();x.arc(48,60,24,0,P7);x.fill();x.fillStyle=c[1];x.beginPath();x.arc(48,60,14,0,P7);x.fill()}
return IC[k]=cv.toDataURL("image/png")}
const tw=n=>`<div class=r style="justify-content:flex-start;gap:10px"><img src="${tImg(n)}" width=56 height=56 alt=""><b>${n}</b></div>`;
function idolPick(){const TN=TS();const list=IDOLS[S.pos]||[];
show(`<h1>Escolha seu ídolo</h1><p class=m>${S.pos} · ${S.nat} · nascimento ${S.birth} · <b>${DIFF[S.diff]?.label||S.diff}</b></p>
<p class=m>Seu ídolo é inspiração — dá bônus permanente de +25% de crescimento na habilidade dele.</p>
${list.map(id=>`<div class=card style="cursor:pointer" onclick="idolSet('${id.n.replace(/'/g,"\\'")}','${id.sk}')">
<div class=r><b style="font-size:16px">${id.pais} ${id.n}</b><span class=m style="font-size:20px">→</span></div>
<div class=m style="margin:4px 0">${id.desc}</div>
<div style="margin-top:8px;font-size:11px;color:var(--accent)">Bônus: +25% treino em <b>${TN[id.sk]||id.sk}</b></div>
</div>`).join("")}`)}
function idolSet(nome,sk){S.idol=nome;S.idolSk=sk;skPick()}
function skPick(){const K=S.pos=="Goleiro"?SKG:SKL,TN=TS();show(`<h1>Super habilidade</h1><p class=m>Sua identidade como jogador: dá bônus gigante de treino em uma habilidade.</p>${Object.keys(K).map(n=>`<button class=b onclick="skSet('${n}')">⭐ ${n}<br><small>Bônus gigante em ${TN[K[n]]}</small></button>`).join("")}`)}
function skSet(n){const K=S.pos=="Goleiro"?SKG:SKL;S.sk=K[n];S.skn=n;const h=sh(T.filter(t=>t.c==S.nat)),o=sh(T),r=[];while(r.length<5){const x=(h.length&&Math.random()>.08)?h.pop():o.pop();if(!r.includes(x))r.push(x)}S.offs=r;show(`<h1>Escolha seu primeiro time</h1><p class=m>Super habilidade: ⭐ ${n}</p>${r.map((x,i)=>card(x,i,"s","Começar aqui")).join("")}`)}
const E=[["Festa até tarde","Amigos te chamam para a balada.",[["Ir à festa",-.6,.5],["Ficar em casa",.2,.2]]],["Treino extra","O técnico oferece treinos individuais.",[["Aceitar",.6,.4],["Recusar",0,.1]]],["Lesão leve","Você sentiu a coxa no treino.",[["Tratar até o fim",-.1,.1],["Voltar rápido",-.6,1.2]]],["Nutrição","O clube sugere um nutricionista.",[["Contratar",.4,.2],["Ignorar",0,.1]]],["Polêmica com o técnico","Você discutiu no vestiário.",[["Pedir desculpas",0,.2],["Bancar a posição",-.5,.6]]],["Mídia e patrocínio","Marcas querem você em campanhas.",[["Aceitar tudo",-.3,.3],["Recusar",.2,.2]]],["Estudar vídeos","Analistas oferecem análise de jogos.",[["Estudar",.4,.3],["Descansar",.1,.1]]],["Mentoria","Um craque veterano oferece conselhos.",[["Ouvir com atenção",.5,.4],["Seguir seu caminho",0,.2]]]];
const st=a=>{const s=a<60?1:a<65?2:a<75?3:a<85?4:5;return"★".repeat(s)+"☆".repeat(5-s)};
// ===== motor de simulação de partidas =====
function pois(l){let k=0,p=1,L=Math.exp(-l);do{k++;p*=Math.random()}while(p>L);return k-1}
function simM(a,b){const d=Math.max(-2.5,Math.min(2.5,(a-b)/10)),c=pois(.02);let x=pois(1.32*Math.exp(.37*d+.05))+c,y=pois(1*Math.exp(-.37*d-.05))+c;if(Math.abs(x-y)==1&&x+y<=3&&Math.random()<.05){x>y?y++:x++}return[x,y]}
const row=(n,avg,me)=>({n,avg,me:!!me,j:0,v:0,e:0,d:0,gp:0,gc:0,pts:0});
const rec=(A,B,ga,gb)=>{A.j++;B.j++;A.gp+=ga;A.gc+=gb;B.gp+=gb;B.gc+=ga;if(ga>gb){A.v++;B.d++;A.pts+=3}else if(gb>ga){B.v++;A.d++;B.pts+=3}else{A.e++;B.e++;A.pts++;B.pts++}};
const cmpR=(a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp||a.n.localeCompare(b.n);
function roundRobin(rows,dbl){for(let i=0;i<rows.length;i++)for(let j=0;j<rows.length;j++){if(i===j)continue;if(!dbl&&j<i)continue;const[ga,gb]=simM(rows[i].avg,rows[j].avg);rec(rows[i],rows[j],ga,gb)}rows.sort(cmpR);return rows}
const GEN=["Atlético Regional","Deportivo Unión","Clube Municipal","Sporting Local","União Esportiva","Racing Regional","Olímpico FC","Nacional B","Juventude FC","Central FC","Rápido FC","Estrela FC"];
function fill(list,n,lo,hi,pre){let i=0;while(list.length<n){list.push({n:pre?pre+" "+(i+1):GEN[i%GEN.length],avg:R(lo,hi)});i++}return list}
const knSize=n=>n>=18?16:n>=10?8:4;
const KN={16:["Oitavas de final","Quartas de final","Semifinal","Final"],8:["Quartas de final","Semifinal","Final"],4:["Semifinal","Final"]};
function knock(me,opps,n){const names=KN[n]||KN[8];
let alive=sh([{n:me.n,avg:me.avg,me:1},...opps.slice(0,n-1).map(o=>({n:o.n,avg:o.avg}))]);
const path=[];let res="";
for(const rn of names){const nx=[];let out=0;
for(let i=0;i<alive.length;i+=2){const A=alive[i],B=alive[i+1];if(!B){nx.push(A);continue}
const[ga,gb]=simM(A.avg,B.avg);let pen=0,w;
if(ga===gb){pen=1;w=Math.random()*(A.avg+4)>Math.random()*(B.avg+4)?A:B}else w=ga>gb?A:B;
nx.push(w);
if(A.me||B.me){const oth=A.me?B:A,sc=A.me?`${ga}-${gb}`:`${gb}-${ga}`;path.push({r:rn,opp:oth.n,sc,pen,ok:w.me?1:0});if(!w.me){out=1;res=rn==="Final"?"Vice-campeão":"Eliminado — "+rn}}}
alive=nx;if(out)break}
if(!res)res="Campeão";return{path,res,champ:res==="Campeão"}}
function groupStage(me,opps){const rows=[row(me.n,me.avg,1),...opps.slice(0,3).map(o=>row(o.n,o.avg))];roundRobin(rows,1);return{rows,pos:rows.findIndex(r=>r.me)+1}}
const $=document.getElementById("a"),show=h=>{const na=window._na;window._na=0;$.classList.toggle("noanim",!!na);$.innerHTML=h;scrollTo(0,0);if(!na){$.classList.remove("pg-in");void $.offsetWidth;$.classList.add("pg-in")}};
let S=null;
function sv(){try{localStorage.setItem("cf1",JSON.stringify(S))}catch(e){}}
function bind(x){return x&&(T.find(t=>t.n==x.n&&t.c==x.c)||x)}
function careerForm(){
const birthOpts=[];for(let y=2005;y<=2016;y++)birthOpts.push(`<option value=${y}${y==2010?" selected":""}>${y} (começa com ${2027-y} anos)</option>`);
show(`<h1>Criar jogador</h1>
<div class=card>
<label>Nome do jogador</label><input id=nm placeholder="Seu nome">
<label>Posição</label><select id=ps>${POS.map(p=>`<option>${p}</option>`)}</select>
<label>Número da camisa</label><input id=nu type=number min=1 max=99 value=10>
<label>Nacionalidade</label><select id=na>${Object.keys(N).map(n=>`<option>${n}</option>`)}</select>
<label>Ano de nascimento</label><select id=by>${birthOpts.join("")}</select>
</div>
<h2>Modo de dificuldade</h2>
<div id=diff-pick style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px">
${Object.entries(DIFF).map(([k,v])=>`<button class="b o diff-btn${k=="normal"?" on":""}" id="diff-${k}" onclick="pickDiff('${k}')"><span class=d-ico>${v.label.split(" ")[1]||""}</span><b>${v.label.split(" ")[0]}</b><span class=d-txt>${v.desc}</span></button>`).join("")}
</div>
<input type=hidden id=dif value=normal>
<button class=b onclick=start() style="margin-top:16px">▶ Criar jogador</button>
<button class="b o" onclick=home()>← Voltar ao menu</button>`)}
function pickDiff(k){const h=document.getElementById('dif');if(!h)return;h.value=k;
document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('on'));
const btn=document.getElementById('diff-'+k);if(btn)btn.classList.add('on')}
function resume(){try{S=JSON.parse(localStorage.getItem("cf1"));S.team=bind(S.team);S.parent=bind(S.parent);season()}catch(e){home()}}
function start(){const nat=document.getElementById("na").value,birth=+document.getElementById("by").value,diff=document.getElementById("dif").value||"normal";
S={name:document.getElementById("nm").value||"Craque",pos:document.getElementById("ps").value,num:+document.getElementById("nu").value||10,nat,age:2027-birth,birth,diff,ovr:50,year:2027,hist:[],titles:[],tr:{},left:5,parent:null,gain:3,ratio:.5,peak:50,out:0,sk:null,idol:null,idolSk:null};
{const ag=S.age,ov=ag<=13?44:ag<=15?47:ag<=17?50:ag<=19?55:60,po={facil:3,normal:0,dificil:-3}[diff]||0;S.ovr=ov;S.peak=ov;S.pot=Math.max(ov+12,Math.min(93,Math.round(74+po+G()*6.5)))}
idolPick()}
function hd(){const t=S.team,o=Math.round(S.ovr),base=S.age<16;
return`<div class="card ph">
<div class=ph-top>
<div class=ph-id><div class=ph-nm>${S.name} <span class=ph-num>#${S.num}</span></div><div class=m>${S.pos} · ${S.nat} · ${S.age} anos</div></div>
<div class="ovr ${o>=85?"o5":o>=75?"o4":o>=65?"o3":"o2"}"><b>${o}</b><span>OVR</span></div>
</div>
<div class=ph-club><div><b>${t.n}</b><div class=m>${t.lg} · ${t.c}</div></div><div style="text-align:right"><span class=s>${st(t.avg)}</span><div class=m>força ${t.avg}</div></div></div>
<div class=chips>${base?'<span class="chip y">🧒 Categoria de base</span>':""}${S.parent?'<span class="chip">🔁 Emprestado</span>':""}${S.idol?`<span class=chip>🌟 ${S.idol}</span>`:""}${S.skn?`<span class="chip g">⭐ ${S.skn}</span>`:""}${S.out>0?'<span class="chip r">🩹 Lesionado</span>':""}</div>
</div>`}
function season(){sv();const L=S.left,TN=TS(),hs=S.hist||[],tot=hs.reduce((o,h)=>({j:o.j+(h.g||0),g:o.g+(h.go||0),a:o.a+(h.as||0),c:o.c+(h.cs||0)}),{j:0,g:0,a:0,c:0}),oo=Math.round(S.ovr);
show(`<h1>Temporada ${S.year}</h1>${hd()}
<div class=kpis>
<div class=lu-t><span>OVR</span><b class="lu-big ${ovrTier(oo)}">${oo}</b><div class=lu-bar><i style="width:${Math.max(4,Math.min(100,(oo-40)*100/55))}%"></i></div><em>${oo>=85?"Craque mundial":oo>=75?"Estrela":oo>=65?"Titular":"Promessa"}</em></div>
<div class=lu-t><span>Idade</span><b class=lu-big>${S.age}</b><em>${S.age<=21?"em formação":S.age<=29?"auge físico":S.age<=33?"experiente":"fim de carreira"}</em></div>
<div class=lu-t><span>Títulos</span><b class=lu-big>${S.titles.length}</b><em>${hs.length} temporadas jogadas</em></div>
<div class=lu-t><span>${S.pos=="Goleiro"?"Jogos sem sofrer gol":"Gols / assist."}</span><b class=lu-big>${S.pos=="Goleiro"?tot.c:tot.g+" / "+tot.a}</b><em>${tot.j} jogos na carreira</em></div>
</div>
${hs.length>1?`<h2>Evolução</h2><div class=card><div class=r><b>OVR ao longo da carreira</b><span class=m>${hs[0].ov} → ${hs[hs.length-1].ov}</span></div><div class=spark>${hs.slice(-14).map(h=>`<div><i style="height:${Math.max(8,Math.min(100,(h.ov-40)*100/55))}%"></i><small>${String(h.y).slice(2)}</small></div>`).join("")}</div></div>`:""}
<h2>Treinos <span class=m>(${L} de 5 restantes${S.age<=29?" · +50% jovem":""})</span></h2>
<div class=g>${Object.keys(TN).map(k=>`<button class="b o trn${S.tr[k]?" has":""}" ${L?"":"disabled"} onclick="tr('${k}')">${TN[k]}${k==S.sk?" ⭐":""}${k==S.idolSk?" 🌟":""}${S.tr[k]?`<em>×${S.tr[k]}</em>`:""}</button>`).join("")}<button class="b o" onclick="S.tr={};S.left=5;season()">↺ Zerar</button></div>
<p class=m>⭐ ${S.skn||"-"}: bônus gigante em ${TN[S.sk]||"-"}. 🌟 ${S.idol||"-"}: +25% em ${TN[S.idolSk]||"-"}. Físico ajuda após os 30 e reduz lesões; Inteligência dá mais minutos.</p>
${S.comps&&S.comps.length?`<button class="b o" onclick="openTbl('season',0)">📊 Tabelas de ${S.compY}</button>`:""}
<button class=b onclick=go()>▶ Simular temporada</button>
${saveCareerBtn("player")}`)}
function tr(k){if(S.left>0){S.tr[k]=(S.tr[k]||0)+1;S.left--}season()}
function rk(r){return r==1?"Campeão":r==2?"Vice":r<=4?"Semifinal":r<=8?"Quartas":r<=16?"Oitavas":"Fase de grupos"}
function comp(me,opp,nz){const m=me+G()*nz;return 1+opp.filter(o=>o+G()*nz>m).length}
function go(){const t=S.team,a=S.age,y=S.year,tr=S.tr,L=[],H=[];
const eff=Math.max(-3,Math.min(3,(S.ovr-t.avg)*.12));
const dfm=DIFF[S.diff]?.growMult||1;
let trg=0;for(const k in tr){let v=R(.2,.5)*(a<=29?1.8:.6);if(k=="fis"&&a>=30)v+=.2;if(k==S.sk)v*=1.8;if(k==S.idolSk)v*=1.25;trg+=v*tr[k]}
let ratio=Math.max(.05,Math.min(1,.55+(S.ovr-t.avg)*.04+G()*.1+(tr.int||0)*.03));if(a<17)ratio=Math.min(ratio,.6);
if(!S.out)S.out=0;let lost=0,ig=0,ijd=0;if(S.out>0){lost=Math.min(38,S.out);S.out-=lost;L.push("🩹 Ainda em recuperação de lesão grave")}
if(lost<38){const injM=DIFF[S.diff]?.injMult||1;const f=(a>=31?1.3:1)*(1-.04*(tr.fis||0))/injM,rr=Math.random()/f;ig=rr<.0025?5:rr<.0075?4:rr<.0195?3:rr<.0695?2:rr<.1495?1:0;
if(ig){const W=[0,1,4,10,38,76][ig],l2=Math.min(38-lost,W);lost+=l2;S.out+=W-l2;if(ig==4)ijd=R(3,6);if(ig==5)ijd=R(6,10);L.push(`🩹 Lesão grau ${ig}: ${["","1 semana","1 mês","1 trimestre","1 ano","2 anos"][ig]} sem jogar${ig>3?" e queda de OVR":""}`)}}
let gm=Math.round(ratio*36*(38-lost)/38);const rg=ratio*(38-lost)/38;
const CP=[];const myAvg=t.avg+eff;
// liga — pontos corridos completo
let lgPool=T.filter(x=>x.c==t.c&&x.d==t.d);if(!lgPool.includes(t))lgPool=[t,...lgPool];
let rows=lgPool.map(x=>row(x.n,x===t?myAvg:x.avg+G()*1.4,x===t));
if(rows.length<8){const mn=Math.min(...rows.map(r=>r.avg));fill([],8-rows.length,mn-7,mn).forEach(f=>rows.push(row(f.n,f.avg)))}
roundRobin(rows,1);
const pos=rows.findIndex(r=>r.me)+1,nT=rows.length,relZ=Math.max(nT-3,nT-3),proZ=2;let lg=t.lg;
L.push(`${lg}: ${pos}º lugar — ${rows[pos-1].pts} pts (${rows[pos-1].v}V ${rows[pos-1].e}E ${rows[pos-1].d}D)`);
if(pos==1)H.push(lg);
CP.push({k:"lg",name:lg,sub:`${t.c} · ${nT} times`,rows,pos,relZ,proZ,d:t.d});
const d2=T.find(x=>x.c==t.c&&x.d==2),d1=T.find(x=>x.c==t.c&&x.d==1);
if(t.d==2&&pos<=2&&d1){L.push("⬆ Acesso à "+d1.lg+"!");H.push("Acesso à "+d1.lg);t.d=1;t.lg=d1.lg;t.avg+=5}
else if(t.d==1&&pos>relZ&&d2){L.push("⬇ Rebaixado para "+d2.lg);t.d=2;t.lg=d2.lg;t.avg-=5}
// copa nacional — mata-mata
const cupName="Copa de "+t.c;
let cupO=sh(T.filter(x=>x.c==t.c&&x!==t)).map(x=>({n:x.n,avg:x.avg}));fill(cupO,15,48,62);
const cup=knock({n:t.n,avg:myAvg},cupO,16);
L.push(`${cupName}: ${cup.res}`);if(cup.champ)H.push(cupName);
CP.push({k:"ko",name:cupName,sub:"Mata-mata · 16 times",path:cup.path,res:cup.res});
// continental
const cf=CN[t.k];let won=0;
if(cf&&t.d==1){const major=pos<=4&&t.avg>=68,minor=!major&&pos<=8&&t.avg>=58;
if(major||minor){const nm=cf[major?0:1],boost=major?0:6;
let pl=sh(T.filter(x=>x.k==t.k&&x.d==1&&x!==t)).map(x=>({n:x.n,avg:x.avg-boost}));
const kn=knSize(pl.length);fill(pl,kn+2,58,75);
const me2={n:t.n,avg:myAvg+boost};
const grp=groupStage(me2,pl.slice(0,3));
let res,path=[];
if(grp.pos<=2){const ko=knock(me2,pl.slice(3),kn);res=ko.res;path=ko.path;if(ko.champ){H.push(nm);if(major)won=1}}
else res="Eliminado — Fase de grupos";
L.push(`${nm}: ${res}`);gm+=Math.round(ratio*8);
CP.push({k:"ko",name:nm,sub:`Fase de grupos + mata-mata · ${kn+4} clubes`,group:grp,path,res})}}
if(won){let o=[];for(let i=0;i<7;i++)o.push({n:"Campeão "+["Sul-Americano","Europeu","Africano","Asiático","da Oceania","Norte-Americano","Anfitrião"][i],avg:R(t.k=="EU"?74:64,t.k=="EU"?90:80)});
const mc=knock({n:t.n,avg:myAvg},o,8);L.push("Mundial de Clubes: "+mc.res);if(mc.champ)H.push("Mundial de Clubes");
CP.push({k:"ko",name:"Mundial de Clubes",sub:"8 campeões continentais",path:mc.path,res:mc.res})}
// seleção
const nn=N[S.nat];
if(a>=18&&lost<20&&nn&&S.ovr>=nn.v-12+R(-3,3)){
const mk=(nome,pool)=>{const me2={n:S.nat,avg:nn.v+(S.ovr-nn.v)*.2};
let opps=sh(pool).map(k=>({n:k,avg:N[k].v}));
const kn=knSize(opps.length);fill(opps,kn+2,55,72,"Seleção Convidada");
const grp=groupStage(me2,opps.slice(0,3));let res,path=[];
if(grp.pos<=2){const ko=knock(me2,opps.slice(3),kn);res=ko.res;path=ko.path;if(ko.champ)H.push(nome+" (Seleção)")}
else res="Eliminado — Fase de grupos";
L.push(`🇺🇳 ${nome} (${S.nat}): ${res}`);
CP.push({k:"ko",name:nome+" — "+S.nat,sub:`Seleção nacional · ${kn+4} seleções`,group:grp,path,res})};
if(y%2==0)mk(CT[nn.c],Object.keys(N).filter(k=>N[k].c==nn.c&&k!=S.nat));
if(y%4==2)mk("Copa do Mundo",Object.keys(N).filter(k=>k!=S.nat))}
// stats
const q=Math.min(1.6,.4+(S.ovr-45)/40),rt=RT[S.pos];let g=0,as=0,cs=0;
if(S.pos=="Goleiro")cs=Math.round(gm*.3*q*R(.7,1.3));else{g=Math.round(gm*rt[0]*q*R(.6,1.4));as=Math.round(gm*rt[1]*q*R(.6,1.4))}
// evolução
if(S.pot==null)S.pot=Math.max(S.ovr+4,Math.min(92,Math.round(S.ovr+Math.max(0,28-a)*1.1)));
const rt0=a<=17?.19:a<=22?.21:a<=25?.15:a<=28?.08:0,pe=S.pot+trg*.5+(S.sk?2:0)+(S.idol?1:0);
let gr=Math.max(0,pe-S.ovr)*rt0*(1+trg*.05)*dfm+(ratio-.55)*(a<=29?1.2:.4)+G()*.6*(a<=29?1:.5)*(tr.int?.7:1);
if(a<=29&&S.ovr>pe)gr=Math.min(gr,.3);
gr+=a<=29?0:(a<=31?-.3:a<=34?-.9:-(1.5+(a-35)*.4))+(a>29?trg*.12:0);
if(a>=35)gr=Math.min(gr,-.2);
gr-=ijd;const o0=S.ovr;S.ovr=Math.max(40,Math.min(97,S.ovr+gr));S.gain=gr+ijd;S.ratio=ratio;S.peak=Math.max(S.peak,S.ovr);
H.forEach(n=>S.titles.push({y,n}));
const AW=[];if(gm>=15){if(S.pos!="Goleiro"&&g>R(17,30))AW.push("Chuteira de Ouro");if(S.pos=="Goleiro"&&cs>R(11,16))AW.push("Luva de Ouro")}
if(gm>=22){const lw=t.avg>=80?1:t.avg>=70?.75:.5,pf={Atacante:1,Ponta:1.15,Meia:1.35,Lateral:1.9,Volante:2.4,Zagueiro:3.2}[S.pos]||1,mj=Object.values(CN).map(v=>v[0]);
const tw_=n=>n=="Copa do Mundo (Seleção)"?14:n.includes("(Seleção)")?6:n=="Mundial de Clubes"?8*lw:mj.includes(n)?12*lw:Object.values(CN).some(v=>v[1]==n)?4*lw:n.startsWith("Copa de ")?3*lw:n.startsWith("Acesso")?0:8*lw;
const sc=(S.pos=="Goleiro"?cs*1.1:(g+as*.7)*pf)+H.reduce((s,n)=>s+tw_(n),0)+(pos<=3?(4-pos)*1.5*lw:0);
if(sc>R(42,66))AW.push("Bola de Ouro");if(sc>R(40,62))AW.push("The Best");if((t.k=="SA"||t.k=="NA")&&sc>R(30,56))AW.push("Rei da América")}
S.aw=S.aw||[];AW.forEach(n=>S.aw.push({y,n}));
S.hist.push({y,a,t:t.n,lg,g:gm,go:g,as,cs,ov:Math.round(S.ovr),th:H.length,loan:!!S.parent,ij:ig});
S.lastL=L;S.lastH=H;S.lastA=AW;S.comps=CP;S.compY=y;S.line=`Jogos ${gm} · ${S.pos=="Goleiro"?cs+" jogos sem sofrer gol":g+" gols · "+as+" assistências"}`;S.dl=`${Math.round(o0)} → ${Math.round(S.ovr)} (${gr>=0?"+":""}${gr.toFixed(1)})`;
S.cele=[...H.map(n=>({n,t:"title"})),...AW.map(n=>({n,t:"award"}))];
sv();return S.cele.length?cele(0):summ()}
function cele(i){const list=S.cele||[];i=+i;
if(i>=list.length)return summ();
const c=list[i],[,col]=tk(c.n),multi=list.length>1;
show(`<div class=cele style="--c1:${col[0]};--c2:${col[1]}">
<div class=cele-bg></div><div class=cele-rays></div>
<div class=cele-in>
<div class=cele-kind>${c.t=="award"?"⭐ Prêmio individual":"🏆 Título conquistado"}</div>
<img class=cele-img src="${tImg(c.n)}" alt="">
<div class=cele-name>${c.n}</div>
<div class=cele-sub>${c.t=="award"?S.name:S.team.n} · ${S.compY}</div>
${multi?`<div class=cele-dots>${list.map((_,j)=>`<span class="${j==i?"on":""}"></span>`).join("")}</div>`:""}
<button class="b cele-btn" onclick="cele(${i+1})">${i+1<list.length?`Próximo (${i+2}/${list.length})`:"Continuar"}</button>
</div></div>`)}
function summ(){const L=S.lastL||[],H=S.lastH||[],AW=S.lastA||[];
show(`<h1>Resumo ${S.compY}</h1>${hd()}
<div class=card><h2 style="margin-top:0">Campanha</h2>${L.map(x=>`<div class=li>${x}</div>`).join("")}</div>
<button class="b o" onclick="openTbl('summ',0)">📊 Ver tabelas e chaveamentos</button>
${H.length?`<h2>🏆 Títulos</h2>${H.map(tw).join("")}`:""}
${AW.length?`<h2>⭐ Prêmios individuais</h2>${AW.map(tw).join("")}`:""}
<h2>Seu desempenho</h2><div class=card><div class=li>${S.line}</div><div class=li>OVR ${S.dl}</div></div>
<button class=b onclick=evt()>Continuar</button>`)}
function openTbl(from,k){S.tblFrom=from;tbl(k)}
function tbl(k){const C=S.comps||[];k=+k||0;
if(!C.length)return show(`<h1>Tabelas</h1><div class=card>Nenhuma competição simulada ainda. Jogue uma temporada primeiro.</div><button class=b onclick="${S.tblFrom=="season"?"season":"summ"}()">Voltar</button>`);
if(k>=C.length)k=0;const c=C[k];
const tabs=`<div class=tabs>${C.map((x,i)=>`<button class="tab${i==k?" on":""}" onclick="tbl(${i})">${x.name}</button>`).join("")}</div>`;
const SH={"Oitavas de final":"Oitavas","Quartas de final":"Quartas"};
let body="";
if(c.k=="lg"){body=zTable(c.rows,c)+`<div class=legend><span><i class=zc></i>Continental</span><span><i class=zr></i>Rebaixamento</span></div>`}
else{
if(c.group)body+=`<h2>Fase de grupos</h2>`+zTable(c.group.rows,{})+`<div class=m style="margin:6px 2px">${c.group.pos<=2?"✅ Classificado em "+c.group.pos+"º":"❌ Eliminado em "+c.group.pos+"º"}</div>`;
body+=`<h2>Mata-mata</h2><div class=card>${c.path&&c.path.length?c.path.map(p=>`<div class="ko-r${p.ok?"":" out"}"><span class=ko-n>${SH[p.r]||p.r}</span><span class=ko-o>${p.opp}</span><span class=ko-s>${p.sc}${p.pen?" <small>pên</small>":""}</span><span class=ko-i>${p.ok?"✅":"❌"}</span></div>`).join(""):`<div class=m>Não disputou o mata-mata.</div>`}</div>`}
show(`<h1>📊 Tabelas ${S.compY||""}</h1>${tabs}
<div class=card style="padding:13px 15px"><div class=r><b>${c.name}</b><span class="badge ${c.res=="Campeão"?"gold":""}">${c.res||(c.pos+"º lugar")}</span></div><div class=m>${c.sub||""}</div></div>
${body}
<button class=b onclick="${S.tblFrom=="season"?"season":"summ"}()">← Voltar</button>`)}
function zTable(rows,c){const n=rows.length;
return`<div class="card sc" style="padding:6px 4px"><table class=std><tr><th>#</th><th>Time</th><th>P</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th></tr>
${rows.map((r,i)=>{const p=i+1;let z="";
if(c.relZ!==undefined){if(c.d==1){if(p<=4)z="zc";else if(p>c.relZ)z="zr"}else{if(p<=c.proZ)z="zc";else if(p>c.relZ)z="zr"}}
else{if(p<=2)z="zc"}
return`<tr class="${r.me?"me":""}"><td class="pz ${z}">${p}</td><td>${r.n}</td><td><b>${r.pts}</b></td><td>${r.j}</td><td>${r.v}</td><td>${r.e}</td><td>${r.d}</td><td>${r.gp-r.gc>0?"+":""}${r.gp-r.gc}</td></tr>`}).join("")}
</table></div>`}
function evt(){const i=Math.floor(Math.random()*E.length),e=E[i];
show(`<h1>${e[0]}</h1><div class=card>${e[1]}</div>${e[2].map((o,j)=>`<button class=b onclick="evo(${i},${j})">${o[0]}</button>`).join("")}`)}
function evo(i,j){const o=E[i][2][j],d=o[1]+G()*o[2];S.ovr=Math.max(40,Math.min(99,S.ovr+d));
show(`<h1>${E[i][0]}</h1><div class=card>${o[0]}: ${d>=0?"seu OVR subiu":"seu OVR caiu"} ${Math.abs(d).toFixed(1)}.<br>OVR atual: <b>${Math.round(S.ovr)}</b></div><button class=b onclick=offers()>Ver propostas</button>`)}
function card(x,i,tp,lab){const f=x.c!=S.nat;return`<div class=card><div class=r><b>${x.n}</b><span class=s>${st(x.avg)}</span></div><div class=m>${x.lg} · ${x.c}${f?" 🌍":""} · média ${x.avg}</div><button class=b onclick="pick(${i},'${tp}')">${lab}</button></div>`}
function offers(){if(S.age+1>=41)return end();
if(S.age+1<16){const t=S.team;return show(`<h1>Fim da temporada ${S.year}</h1>${hd()}<div class=card><h2 style="margin-top:0">🧒 Categoria de base</h2><div>Você tem ${S.age} anos e segue na base do <b>${t.n}</b>. Só é possível assinar com outro clube a partir dos <b>16 anos</b>.</div><div class=m style="margin-top:8px">Primeiras propostas no fim da temporada ${S.year+(15-S.age)}, quando você tiver 15 anos.</div></div><button class=b onclick="pick(-2,'stay')">▶ Seguir na base (${S.age+1} anos em ${S.year+1})</button>`)}
const ob=DIFF[S.diff]?.offerBonus||0;let base=T.filter(x=>x!==S.team&&Math.abs(x.avg-(S.ovr+ob))<=9);if(base.length<5)base=T.filter(x=>x!==S.team).sort((p,q)=>Math.abs(p.avg-S.ovr)-Math.abs(q.avg-S.ovr)).slice(0,12);
S.offs=sh(base).slice(0,5);
S.loans=(S.age<=21&&(S.gain<2.5||S.ratio<.35)&&!S.parent)?sh(T.filter(x=>x!==S.team&&x.avg<S.team.avg&&x.avg>S.ovr-12&&x.avg<S.ovr+3)).slice(0,3):[];
let h=`<h1>Fim da temporada ${S.year}</h1>${hd()}`;
if(S.parent)h+=`<h2>Fim do empréstimo</h2>`+card(S.parent,-1,"back","Voltar ao clube");
h+=`<h2>Contrato atual</h2><button class="b o" onclick="pick(-2,'stay')">Ficar no ${S.team.n}</button><h2>5 propostas</h2>`+S.offs.map((x,i)=>card(x,i,"o","Assinar")).join("");
if(S.loans.length)h+=`<h2>Empréstimo <span class=m>(você não está evoluindo)</span></h2>`+S.loans.map((x,i)=>card(x,i,"l","Ser emprestado")).join("");
if(S.age>=34)h+=`<button class="b o" onclick=end()>🏁 Aposentar-se</button>`;
show(h)}
function pick(i,tp){if(tp=="s"){S.team=S.offs[i];return season()}if(tp=="o"){S.team=S.offs[i];S.parent=null}else if(tp=="l"){S.parent=S.team;S.team=S.loans[i]}else if(tp=="back"){S.team=S.parent;S.parent=null}
S.age++;S.year++;S.tr={};S.left=5;if(S.age>=41)return end();season()}
function end(){try{localStorage.removeItem("cf1")}catch(e){}
const tt={},sp={};S.titles.forEach(t=>tt[t.n]=(tt[t.n]||0)+1);
let J=0,Gl=0,A=0,C=0,I=0;S.hist.forEach(h=>{I+=h.ij?1:0;J+=h.g;Gl+=h.go;A+=h.as;C+=h.cs;const s=sp[h.t]=sp[h.t]||{y:[],g:0,go:0,as:0,cs:0};s.y.push(h.y);s.g+=h.g;s.go+=h.go;s.as+=h.as;s.cs+=h.cs});
const nt=Object.keys(tt).sort((a,b)=>tt[b]-tt[a]),aa={};(S.aw||[]).forEach(t=>aa[t.n]=(aa[t.n]||[]).concat(t.y));
show(`<h1>🏁 Fim de carreira</h1><div class=card><b>${S.name}</b> #${S.num} · ${S.pos} · ${S.nat}<br>Encerrou aos ${S.age} anos (${S.hist.length} temporadas)<br>OVR final ${Math.round(S.ovr)} · pico ${Math.round(S.peak)}</div>
<h2>Estatísticas</h2><div class=card>Jogos: <b>${J}</b><br>${S.pos=="Goleiro"?`Jogos sem sofrer gol: <b>${C}</b>`:`Gols: <b>${Gl}</b> · Assistências: <b>${A}</b>`}<br>Títulos: <b>${S.titles.length}</b><br>Lesões: <b>${I}</b></div>
<h2>🏆 Títulos</h2><div class=card>${nt.length?nt.map(n=>`<div class=r><span style="display:flex;align-items:center;gap:8px"><img src="${tImg(n)}" width=44 height=44 alt="">${n}</span><b>${tt[n]}× <span class=m>${S.titles.filter(t=>t.n==n).map(t=>t.y).join(", ")}</span></b></div>`).join(""):"Nenhum título conquistado."}</div>
<h2>⭐ Prêmios individuais</h2><div class=card>${Object.keys(aa).length?Object.keys(aa).map(n=>`<div class=r><span style="display:flex;align-items:center;gap:8px"><img src="${tImg(n)}" width=44 height=44 alt="">${n}</span><b>${aa[n].length}× <span class=m>${aa[n].join(", ")}</span></b></div>`).join(""):"Nenhum prêmio individual."}</div><h2>Times</h2><div class="card sc"><table><tr><th>Time</th><th>Anos</th><th>J</th><th>${S.pos=="Goleiro"?"SG":"G/A"}</th></tr>${Object.keys(sp).map(k=>{const s=sp[k];return`<tr><td>${k}</td><td>${s.y[0]}${s.y.length>1?"–"+s.y[s.y.length-1]:""}</td><td>${s.g}</td><td>${S.pos=="Goleiro"?s.cs:s.go+"/"+s.as}</td></tr>`}).join("")}</table></div>
<button class=b onclick=careerForm()>Nova carreira</button><button class="b o" onclick=home()>← Menu inicial</button>`)}
// ===== MENU INICIAL =====
const hasSave=()=>{try{return!!localStorage.getItem("cf1")}catch(e){return false}};
function home(){const nLg=new Set(T.map(t=>t.lg)).size,nNat=Object.keys(N).length;
show(`<div class=hero><div class=hero-ball>⚽</div><div class=hero-tag>Simulador de futebol</div><h1 class=hero-h>Carreira de Futebol</h1><p class=hero-p>Viva a vida de um jogador de futebol, da base até a aposentadoria, ou sente no banco e comande um clube do Brasileirão como técnico.</p></div>
<div class="card acct">${AU?`<div class=r><div><div class=m>Logado como</div><b>${AU.email}</b></div><button class="b o" onclick=profileScreen() style="width:auto;margin:0">👤 Minha conta</button></div>`:`<div class=r><div><b>Jogar é sempre de graça</b><div class=m>Faça login só se quiser salvar suas carreiras na nuvem</div></div><button class="b o" onclick=authScreen() style="width:auto;margin:0">🔑 Entrar</button></div>`}</div>
<h2>Escolha o modo</h2>
<button class=mode onclick=careerForm()><span class=mode-ico>🏆</span><span class=mode-body><span class=mode-t>Modo Carreira Jogador</span><span class=mode-d>Crie seu jogador, escolha um ídolo e viva até 25 temporadas: treinos, lesões, transferências, títulos e prêmios individuais.</span></span><span class=mode-go>→</span></button>
${hasSave()?`<button class="b o" onclick=resume()>▶ Continuar carreira de jogador salva</button>`:""}
<button class=mode onclick=mgSetup()><span class=mode-ico>📋</span><span class=mode-body><span class=mode-t>Modo Carreira Técnico <em class=new>NOVO</em></span><span class=mode-d>Crie seu próprio clube ou assuma um time da Série A do Brasileirão: defina reforços, escolha a tática da temporada e dispute Brasileirão, Copa do Brasil e Libertadores.</span></span><span class=mode-go>→</span></button>
${hasSaveMg()?`<button class="b o" onclick=mgResume()>▶ Continuar carreira de técnico salva</button>`:""}
<h2>Conheça o jogo <span class=m>(arraste para o lado)</span></h2>
<div class=cs onscroll="csDot(this)">
<div class=cs-s><span class=cs-i>🏆</span><b>Carreira de jogador</b><p>Comece aos 14 anos na base, escolha um ídolo e uma super habilidade e evolua por até 25 temporadas. Treine atributos, gerencie lesões, receba propostas de clubes do mundo todo e dispute ligas, copas nacionais, torneios continentais e a Copa do Mundo.</p></div>
<div class=cs-s><span class=cs-i>📋</span><b>Carreira de técnico</b><p>Assuma um clube da Série A ou funde o seu do zero na Série B. Monte o elenco no mercado, invista na base, escolha a tática e a formação, e cumpra os objetivos da diretoria para não ser demitido.</p></div>
<div class=cs-s><span class=cs-i>🧠</span><b>Escalação e entrosamento</b><p>Arraste ou toque nas posições do campo para escalar seus 11 titulares. Jogadores fora de posição perdem rendimento e o entrosamento cresce com as temporadas no clube: a química do time muda a força real em campo.</p></div>
<div class=cs-s><span class=cs-i>⚙️</span><b>Simulação realista</b><p>Cada jogo usa um modelo estatístico de gols calibrado com números do futebol real: mando de campo, empates, zebras e campanhas de pontos corridos com campeões na casa dos 75–80 pontos. Rivais oscilam de forma de ano a ano.</p></div>
<div class=cs-s><span class=cs-i>🌍</span><b>Competições</b><p>${nLg} campeonatos de ${nNat} países, Copa do Brasil, Libertadores, Sul-Americana, Champions League e mais. Tabelas completas e chaveamentos de mata-mata disponíveis no fim de cada temporada.</p></div>
<div class=cs-s><span class=cs-i>🎚️</span><b>Três dificuldades</b><p>No Normal os adversários são fortes, lesões são frequentes e o mercado é caro. No Difícil a evolução é lenta e a diretoria perde a paciência rápido. No Fácil você evolui mais rápido e sofre menos.</p></div>
</div><div class=cs-dots id=cs-dots><i class=on></i><i></i><i></i><i></i><i></i><i></i></div>
<h2>O que é este site</h2>
<div class=card><p style="margin:0 0 10px">Um simulador de futebol feito para jogar no navegador, de graça e sem cadastro. Cada temporada é simulada partida a partida, com tabelas de pontos corridos, chaveamentos de mata-mata e muita emoção nas decisões.</p>
<p style="margin:0 0 12px">Aqui você vive os dois lados do futebol: o da quadra, como atleta que sonha em ser o melhor do mundo, e o do banco, como treinador que precisa equilibrar elenco, orçamento, pressão da diretoria e a ambição da torcida. Nenhuma temporada é igual à outra, porque lesões, transferências, forma dos rivais e a sorte das decisões mudam o rumo de cada carreira.</p>
<div class=kpis style="margin:0 0 12px"><div class=lu-t><span>Seleções</span><b class=lu-big>${nNat}</b></div><div class=lu-t><span>Campeonatos</span><b class=lu-big>${nLg}</b></div><div class=lu-t><span>Clubes</span><b class=lu-big>${T.length}</b></div><div class=lu-t><span>Dificuldades</span><b class=lu-big>3</b></div></div>
<div class=chips style="padding:0"><span class=chip>Funciona no celular</span><span class=chip>Sem anúncios</span><span class=chip>Salva automático</span><span class=chip>Jogo grátis</span></div>
<p class=m style="margin:12px 0 0">Seu progresso é salvo automaticamente neste navegador. Crie uma conta de graça se quiser guardar carreiras na nuvem e acessá-las de qualquer aparelho.</p></div>
<h2>Backup e ajuda</h2>
<div class=card><div class=m style="margin-bottom:9px">Salve sua carreira em um arquivo ou restaure uma anterior.</div><div class=g><button class="b o" onclick="dlSave('pl')">💾 Exportar jogador</button><button class="b o" onclick="dlSave('mg')">💾 Exportar técnico</button><label class="b o fl">📂 Importar carreira<input type=file accept=".json,application/json" hidden onchange="impSave(this)"></label></div><button class="b o" onclick=tutOpen(0)>❓ Como jogar (tutorial do modo técnico)</button></div>
<h2>Autores</h2>
<div class="card authors"><div class=author><span class=av>S</span><div><b>Slyvok</b><div class=m>Idealização e desenvolvimento</div></div></div><div class=author><span class=av>Z</span><div><b>Zacz</b><div class=m>Idealização e desenvolvimento</div></div></div><div class=author><span class=av>G</span><div><b>Gabz</b><div class=m>Idealização</div></div></div></div>
<div class=made>Feito por <b>Slyvok</b>, <b>Zacz</b> e <b>Gabz</b></div>
<div class=copy>© ${new Date().getFullYear()} SlyProductions. Todos os direitos reservados.</div>`)}

// ===== MODO CARREIRA TÉCNICO =====
let M=null,MT={};
const MGT={of:["🔥 Ofensiva","Joga pra frente: mais força ofensiva, mas vacila atrás.",2.6],eq:["⚖️ Equilibrada","Sem extremos. Joga com o elenco que tem.",0],de:["🛡️ Defensiva","Prioriza não tomar gol, perde poder de ataque.",-1.4]};
// ---- elenco: nomes, geração, força por formação, salário, mercado ----
const FN_BR="Lucas,Gabriel,Matheus,João,Pedro,Rafael,Bruno,Felipe,Thiago,Diego,Rodrigo,Gustavo,Vitor,Caio,Daniel,Eduardo,Marcos,Paulo,André,Carlos,Igor,Leandro,Renato,Fábio,Alex,Wesley,Jonathan,Everton,Douglas,Anderson,Washington,Robson,Elias,Jefferson,Maicon,Nathan,Kaique,Yuri,Breno,Emerson".split(",");
const SN_BR="Silva,Santos,Oliveira,Souza,Pereira,Costa,Rodrigues,Almeida,Nascimento,Lima,Araújo,Fernandes,Carvalho,Gomes,Martins,Rocha,Ribeiro,Alves,Monteiro,Cardoso,Teixeira,Moreira,Barros,Freitas,Correia,Dias,Castro,Campos,Pinto,Vieira".split(",");
const NICK_SUF=["inho","ão","zinho","ito","uca"];
function genName(){if(Math.random()<.35)return P(FN_BR)+P(NICK_SUF);return`${P(FN_BR)} ${P(SN_BR)}`}
const SQUAD_SLOTS=[["Goleiro",3],["Zagueiro",4],["Lateral",4],["Volante",3],["Meia",4],["Ponta",3],["Atacante",3]];
// Elencos reais (temporada 2025) dos clubes da Série A — pesquisados, nomes de jogadores de verdade.
// Cada entrada é [nome, posição, idade aproximada]. Clubes fora desta lista usam elenco gerado.
const REAL_SQUADS={
"Flamengo":[["Agustín Rossi","Goleiro",30],["Matheus Cunha","Goleiro",24],["Guillermo Varela","Lateral",32],["Léo Ortiz","Zagueiro",30],["Léo Pereira","Zagueiro",29],["Erick Pulgar","Volante",31],["Ayrton Lucas","Lateral",27],["Luiz Araújo","Ponta",28],["Pedro","Atacante",28],["Giorgian De Arrascaeta","Meia",30],["Danilo","Volante",23],["Jorge Carrascal","Meia",26],["Samuel Lino","Ponta",25],["Nicolás De La Cruz","Meia",28],["Gonzalo Plata","Ponta",24],["Jorginho","Volante",33],["Emerson Royal","Lateral",26],["Alex Sandro","Lateral",34],["Bruno Henrique","Ponta",34],["Saúl Ñíguez","Meia",30],["João Victor","Zagueiro",25],["Andrew","Lateral",21]],
"Palmeiras":[["Carlos Miguel","Goleiro",27],["Marcelo Lomba","Goleiro",38],["Bruno Fuchs","Zagueiro",25],["Gustavo Gómez","Zagueiro",34],["Murilo","Zagueiro",28],["Agustín Giay","Lateral",23],["Khellven","Lateral",24],["Joaquín Piquerez","Lateral",27],["Jefté","Lateral",21],["Marlon Freitas","Volante",28],["Felipe Anderson","Ponta",32],["Andreas Pereira","Meia",29],["Maurício","Meia",21],["Lucas Evangelista","Meia",29],["Paulinho","Ponta",25],["Vitor Roque","Atacante",21],["Flaco López","Atacante",23]],
"Botafogo":[["Warleson","Goleiro",26],["Arthur Chaves","Zagueiro",21],["Mateo Ponte","Lateral",22],["Nahuel Ferraresi","Zagueiro",27],["Cristian Medina","Meia",23],["Júnior Santos","Atacante",31],["Danilo","Volante",24],["Tiquinho Soares","Atacante",32],["Álvaro Montoro","Meia",24],["Matheus Martins","Ponta",23],["Gabriel Batista","Ponta",20],["Alex Telles","Lateral",32],["Jordan Barrera","Meia",20],["Arthur Cabral","Atacante",27],["Fernando Marçal","Lateral",33],["Hakim Ziyech","Meia",32],["Allan","Volante",33],["Kaio Pantaleão","Zagueiro",20],["Gabriel Justino","Zagueiro",20],["Danilo Barbosa","Volante",26],["Domingos Andrade","Zagueiro",22],["Vitinho","Ponta",30]],
"Fluminense":[["Fábio","Goleiro",44],["Samuel Xavier","Lateral",30],["Thiago Silva","Zagueiro",41],["Ignácio","Zagueiro",24],["Renê","Lateral",33],["Martinelli","Volante",24],["John Kennedy","Atacante",23],["Paulo Henrique Ganso","Meia",36],["Jefferson Savarino","Ponta",28],["Germán Cano","Atacante",37],["Nonato","Meia",27],["Agustín Canobbio","Ponta",27],["Marcelo Freytes","Zagueiro",23],["Guga","Lateral",26],["Lucho Acosta","Meia",31],["Hércules","Volante",23],["Otávio","Lateral",21]],
"Corinthians":[["Hugo Souza","Goleiro",26],["Matheuzinho","Lateral",25],["Gabriel Paulista","Zagueiro",34],["João Pedro","Zagueiro",20],["Ramalho","Zagueiro",28],["Breno Bidon","Volante",20],["Rodrigo Garro","Meia",27],["Yuri Alberto","Atacante",24],["Memphis Depay","Atacante",31],["Vitinho","Ponta",29],["Gustavo Henrique","Zagueiro",33],["Raniele","Volante",28],["Pedro Raul","Atacante",29],["André Carrillo","Ponta",34],["Nicolás Angileri","Lateral",29],["Allan","Volante",34],["Charles","Volante",25],["Jesse Lingard","Meia",32]],
"São Paulo":[["Rafael","Goleiro",34],["Carlos Coronel","Goleiro",26],["João Pedro","Goleiro",22],["Rafael Tolói","Zagueiro",35],["Arboleda","Zagueiro",30],["Domingos Duarte","Zagueiro",29],["Sabino","Zagueiro",27],["Isac","Zagueiro",21],["Aurélio Buta","Lateral",27],["Iago Borduchi","Lateral",24],["Wendell","Lateral",32],["Pedro Lima","Lateral",20],["Lucas Ramon","Lateral",23],["Marcos Antônio","Volante",25],["Pablo Maia","Volante",23],["Danielzinho","Volante",31],["Newton","Volante",20],["Cauly","Meia",30],["Pedro Ferreira","Meia",19],["Lucas Moura","Ponta",33],["Tetê","Ponta",25],["André Silva","Ponta",24],["Luciano","Atacante",32],["Jonathan Calleri","Atacante",31],["Ferreira","Atacante",24]],
"Atlético-MG":[["Everson","Goleiro",33],["Natanael","Lateral",22],["Léo Duarte","Zagueiro",30],["Ruan Tressoldi","Zagueiro",25],["Renan Lodi","Lateral",27],["Alexsander","Lateral",22],["Fred","Atacante",40],["Maycon","Volante",28],["Cassierra","Atacante",29],["Gustavo Scarpa","Meia",30],["Bernard","Ponta",32],["Lyanco","Zagueiro",28],["Vitor Hugo","Zagueiro",29],["Kevin Castaño","Meia",25],["Igor Gomes","Meia",26],["Reinier","Meia",24],["Alan Franco","Volante",27],["Preciado","Lateral",28],["Alan Minda","Ponta",22],["Cuello","Ponta",24],["Dudu","Ponta",33],["Vitão","Zagueiro",26]],
"Grêmio":[["Weverton","Goleiro",37],["Gabriel Grando","Goleiro",29],["Marcos Rocha","Lateral",37],["Caio Paulista","Lateral",29],["Marlon","Lateral",28],["Kannemann","Zagueiro",34],["Wagner Leonardo","Zagueiro",26],["Balbuena","Zagueiro",33],["Wallace","Zagueiro",24],["Dodi","Volante",25],["Villasanti","Volante",27],["Danilo Barbosa","Volante",29],["Noriega","Volante",24],["Riquelme","Meia",24],["Krovinović","Meia",29],["Roger","Meia",24],["Braithwaite","Atacante",35],["Carlos Vinícius","Atacante",31],["Pavón","Ponta",28],["Jovane Cabral","Ponta",27],["Amuzu","Ponta",26],["Tetê","Ponta",25]],
"Internacional":[["Sergio Rochet","Goleiro",30],["Anthoni","Goleiro",23],["Guillermo Maripán","Zagueiro",32],["Félix Torres","Zagueiro",28],["Juninho","Zagueiro",27],["Gabriel Mercado","Zagueiro",37],["Bruno Gomes","Lateral",24],["Braian Aguirre","Lateral",24],["Matheus Bahia","Lateral",27],["Bernabei","Lateral",25],["Thiago Maia","Volante",28],["Bruno Henrique","Volante",25],["Ronaldo","Volante",22],["Richard","Volante",24],["Alan Patrick","Meia",34],["Paulinho","Meia",28],["Calebe","Meia",22],["Johan Carbonero","Ponta",23],["Vitinho","Ponta",29],["Alerrandro","Atacante",25],["Antonio Sanabria","Atacante",29],["Kayky","Ponta",22]],
"Cruzeiro":[["Cássio","Goleiro",38],["Kauã Moraes","Goleiro",20],["Fabrício Bruno","Zagueiro",29],["Zé Lucas","Zagueiro",23],["Léo Aragão","Zagueiro",20],["João Marcelo","Zagueiro",25],["Villarreal","Zagueiro",24],["Fagner","Lateral",36],["William","Lateral",25],["Viña","Lateral",27],["Felipe Morais","Lateral",25],["Lucas Silva","Volante",33],["Matheus Henrique","Volante",27],["Otávio","Meia",25],["Matheus Pereira","Meia",29],["Villalba","Meia",27],["Arroyo","Meia",24],["Gerson","Ponta",29],["Gabriel Pec","Ponta",25],["Rojas","Ponta",29],["Sinisterra","Ponta",27],["Marquinhos","Atacante",24],["Kaio Jorge","Atacante",24],["Wanderson","Atacante",23]],
"Bahia":[["Danilo Fernandes","Goleiro",36],["Marcos Felipe","Goleiro",29],["Denis Júnior","Goleiro",24],["Kanu","Zagueiro",28],["Vitor Hugo","Zagueiro",34],["David Duarte","Zagueiro",31],["Marcos Victor","Zagueiro",27],["Gabriel Xavier","Zagueiro",24],["Gilberto","Lateral",32],["Santiago Arias","Lateral",33],["Luciano Juba","Lateral",27],["Iago","Lateral",28],["Jean Lucas","Volante",27],["Caio Alexandre","Volante",25],["Rezende","Volante",30],["Cauly","Meia",29],["Éverton Ribeiro","Meia",36],["Yago Felipe","Meia",29],["Michel Araújo","Meia",26],["Nicolás Acevedo","Meia",27],["Erick Pulga","Ponta",24],["Kayky","Ponta",22],["Ademir","Atacante",30],["Everaldo","Atacante",34],["Willian José","Atacante",33]],
"Fortaleza":[["João Ricardo","Goleiro",37],["Brenno","Goleiro",29],["Magrão","Goleiro",25],["Tinga","Zagueiro",32],["Titi","Zagueiro",37],["Benjamín Kuscevic","Zagueiro",29],["David Luiz","Zagueiro",38],["Gastón Ávila","Zagueiro",23],["Bruno Pacheco","Lateral",27],["Diogo Barbosa","Lateral",33],["Felipe Jonatan","Lateral",26],["Eros Mancuso","Lateral",28],["Pol Fernández","Volante",33],["Zé Welison","Volante",32],["Matheus Rossetto","Volante",28],["Tomás Pochettino","Meia",25],["Calebe","Meia",26],["Yago Pikachu","Meia",30],["Pedro Augusto","Meia",24],["Emmanuel Martínez","Ponta",31],["Dylan Borrero","Ponta",24],["Breno Lopes","Ponta",29],["Juan Martín Lucero","Atacante",29],["Marinho","Atacante",35],["Moisés","Atacante",29],["Renato Kayzer","Atacante",27]],
"Athletico-PR":[["Matheus Soares","Goleiro",26],["Mycael","Goleiro",23],["Santos","Goleiro",28],["Aguirre","Zagueiro",27],["Arthur Dias","Zagueiro",26],["Carlos Terán","Zagueiro",25],["Léo","Zagueiro",29],["Benavídez","Lateral",24],["Esquivel","Lateral",27],["Léo Derik","Lateral",22],["Madson","Lateral",32],["Élan Ricardo","Volante",24],["Felipinho","Volante",25],["Raul","Volante",23],["Patrick","Meia",28],["Zapelli","Meia",26],["João Cruz","Meia",23],["Giuliano","Meia",36],["Kevin Velasco","Ponta",23],["Leozinho","Ponta",27],["Mendoza","Ponta",29],["Julimar","Atacante",24],["Luiz Fernando","Atacante",29],["Viveros","Atacante",26]],
"Vasco":[["Léo Jardim","Goleiro",30],["Daniel Fuzato","Goleiro",28],["Allan Vitor","Goleiro",21],["José Luis Rodríguez","Zagueiro",28],["Mauricio Lemos","Zagueiro",30],["Robert Renan","Zagueiro",22],["Carlos Cuesta","Zagueiro",26],["Lucas Piton","Lateral",25],["Victor Luis","Lateral",32],["Paulo Henrique","Lateral",29],["Lucas Freitas","Lateral",24],["Tchê Tchê","Volante",33],["Jair","Volante",31],["Hugo Moura","Volante",27],["Mateus Carvalho","Volante",23],["Matheus França","Meia",21],["Philippe Coutinho","Meia",33],["Paulinho","Meia",28],["Thiago Mendes","Meia",33],["Nuno Moreira","Ponta",26],["Benjamín Garré","Ponta",25],["Jean Meneses","Ponta",32],["Adson","Ponta",25],["David","Atacante",30],["Andrés Gómez","Atacante",23],["Pablo Vegetti","Atacante",37],["Paixão","Atacante",21]],
"Santos":[["Diógenes","Goleiro",24],["Gabriel Brazão","Goleiro",25],["João Pedro","Goleiro",17],["Mayke","Zagueiro",33],["João Basso","Zagueiro",28],["Luan Peres","Zagueiro",31],["Zé Ivaldo","Zagueiro",28],["Adonis Frías","Zagueiro",27],["Igor Vinícius","Lateral",28],["Alexis Duarte","Lateral",25],["Gonzalo Escobar","Lateral",28],["João Schmidt","Volante",32],["Zé Rafael","Volante",32],["Tomás Rincón","Volante",37],["Willian Arão","Volante",33],["Neymar","Meia",33],["Thaciano","Meia",30],["Álvaro Barreal","Meia",25],["Benjamín Rollheiser","Meia",25],["Victor Hugo","Ponta",21],["Billal Brahimi","Ponta",25],["Guilherme","Atacante",30],["Tiquinho Soares","Atacante",34],["Lautaro Díaz","Atacante",27],["Gustavo Caballero","Atacante",24]],
"Bragantino":[["Cleiton","Goleiro",31],["Fabrício","Goleiro",26],["Fernando Costa","Goleiro",23],["Guzmán Rodríguez","Zagueiro",27],["Eduardo Santos","Zagueiro",24],["Alix Vinicius","Zagueiro",22],["Gustavo Marques","Zagueiro",25],["Juninho Capixaba","Lateral",29],["Vanderlan","Lateral",25],["Agustín Sant'Anna","Lateral",23],["Andrés Hurtado","Lateral",24],["Fabinho","Volante",28],["Gabriel","Volante",24],["Matheus Fernandes","Volante",26],["Ramires","Meia",38],["Jhon Jhon","Meia",26],["Gustavo Neves","Meia",23],["Praxedes","Meia",27],["Vinicinho","Ponta",29],["Lucas Barbosa","Ponta",22],["Mosquera","Ponta",24],["Eduardo Sasha","Atacante",32],["Pitta","Atacante",30],["Thiago Borbas","Atacante",24]],
"Juventude":[["Jandrei","Goleiro",30],["Pedro Rocha","Goleiro",24],["Zé Henrique","Goleiro",22],["Titi","Zagueiro",28],["Messias","Zagueiro",26],["Schaffer","Zagueiro",23],["Rodrigo Sam","Zagueiro",29],["Raí Ramos","Lateral",24],["Wadson","Lateral",29],["Diogo Barbosa","Lateral",33],["Alan Ruschel","Lateral",36],["Luan Martins","Volante",24],["Lucas Mineiro","Volante",27],["Davi Goes","Volante",22],["Paulo Roberto","Meia",25],["Leo Índio","Meia",23],["Raí Silva","Meia",26],["Luiz Henrique","Meia",24],["Manuel Castro","Ponta",23],["Allanzinho","Ponta",21],["João Scatolin","Ponta",20],["Alan Kardec","Atacante",37],["Marcos Paulo","Atacante",24],["Fábio Lima","Atacante",27]],
"Mirassol":[["Alex Muralha","Goleiro",35],["Walter","Goleiro",28],["Thomazzela","Goleiro",24],["Alan Empereur","Zagueiro",30],["João Victor","Zagueiro",26],["Carlos Eduardo","Zagueiro",23],["David Braz","Zagueiro",37],["Victor Luis","Lateral",31],["Lucas Ramon","Lateral",24],["Eduardo","Lateral",26],["Reinaldo","Volante",34],["Neto Moura","Volante",25],["Fernandinho","Volante",27],["Chico Kim","Meia",23],["Bruno Santos","Meia",25],["Negueba","Ponta",32],["André Luis","Ponta",28],["Léo Gamalho","Atacante",34]],
"Criciúma":[["Alisson","Goleiro",28],["Rodrigo","Goleiro",24],["Hiago","Goleiro",22],["Castán","Zagueiro",35],["Léo Mana","Zagueiro",24],["Eduardo","Zagueiro",26],["Marcelo Hermes","Zagueiro",23],["Airton","Lateral",30],["César Martins","Lateral",32],["Ruan","Lateral",24],["Jean","Lateral",27],["Gui Lobo","Volante",23],["J. Carlos","Volante",25],["Thiaguinho","Volante",28],["Otero","Meia",30],["Fellipe Mateus","Meia",23],["Nicolas","Meia",25],["Octávio","Meia",27],["Romarinho","Ponta",33],["Marcinho","Ponta",25],["Waguininho","Ponta",29],["Yuri Tanque","Atacante",33],["Jhonata Robert","Atacante",25],["Pedro Santos","Atacante",27]],
};
// Escala de valores em R$ milhões, calibrada para lembrar o mercado real:
// jogador fraco ~R$1-3M, titular mediano ~R$15-35M, craque ~R$80-150M, estrela máxima ~R$200M+.
function feeBase(ovr){return Math.pow(1.115,ovr-45)}
function feeOf(p){const f=p.age<=20?.75:p.age<=23?1:p.age<=27?1.15:p.age<=30?.9:p.age<=33?.55:.25;return Math.max(1,Math.round(feeBase(p.ovr)*f))}
function wageOf(p){const f=p.age<=20?.6:p.age<=23?.85:p.age<=29?1:p.age<=33?.85:.55;return Math.max(1,Math.round(feeBase(p.ovr)*f*.11))}
function genPlayer(pos,baseAvg,id,ageLo,ageHi){const age=Math.round(Math.max(ageLo||17,Math.min(ageHi||37,24+G()*5)));
const ovr=Math.round(Math.max(45,Math.min(93,baseAvg+G()*9)));
const p={id,n:genName(),pos,age,ovr};p.wage=wageOf(p);return p}
function genRealPlayer(name,pos,age,baseAvg,id){const ovr=Math.round(Math.max(45,Math.min(96,baseAvg+G()*9)));
const p={id,n:name,pos,age,ovr};p.wage=wageOf(p);return p}
const rct=a=>(a.forEach(p=>{p.ct=1+Math.floor(Math.random()*4)}),a);
function genSquad(baseAvg,clubName){const real=REAL_SQUADS[clubName];
if(real){let id=1;return rct(real.map(r=>genRealPlayer(r[0],r[1],r[2],baseAvg,id++)))}
let id=1;const squad=[];
SQUAD_SLOTS.forEach(([pos,n])=>{for(let i=0;i<n;i++)squad.push(genPlayer(pos,baseAvg,id++))});
return rct(squad)}
const FORMATIONS={"4-3-3":{Goleiro:1,Zagueiro:2,Lateral:2,Volante:1,Meia:2,Ponta:2,Atacante:1},"4-4-2":{Goleiro:1,Zagueiro:2,Lateral:2,Volante:2,Meia:0,Ponta:2,Atacante:2},"3-5-2":{Goleiro:1,Zagueiro:3,Lateral:2,Volante:2,Meia:1,Ponta:0,Atacante:2},"4-2-3-1":{Goleiro:1,Zagueiro:2,Lateral:2,Volante:2,Meia:1,Ponta:2,Atacante:1}};
function squadStrength(squad,formation){const need=FORMATIONS[formation]||FORMATIONS["4-3-3"];let total=0,count=0;
Object.entries(need).forEach(([pos,n])=>{if(n<=0)return;const pool=squad.filter(p=>p.pos==pos).sort((a,b)=>b.ovr-a.ovr);
for(let i=0;i<n;i++){total+=pool[i]?pool[i].ovr:40;count++}});
return count?total/count:50}
function ageSquad(squad,baseAvg){let nid=Math.max(1,...squad.map(p=>p.id))+1;
squad.forEach(p=>{p.age++;p.yrs=(p.yrs??2)+1;p.out=Math.max(0,(p.out||0)-1);p.ct=(p.ct??2)-1;const b=p.age<=20?2.2:p.age<=23?1.6:p.age<=28?.4:p.age<=31?-.3:-(1+(p.age-31)*.5);
p.ovr=Math.max(40,Math.min(94,Math.round(p.ovr+b+G()*1.2)));if(p.pot&&p.age<=24)p.ovr=Math.min(94,Math.round(p.ovr+(p.pot-p.ovr)*.25));p.wage=wageOf(p)});
const kept=squad.filter(p=>p.ct>0&&!(p.age>35&&Math.random()<.4));
SQUAD_SLOTS.forEach(([pos,n])=>{let have=kept.filter(p=>p.pos==pos).length;
while(have<n){const np=genPlayer(pos,baseAvg-4,nid++,17,20);np.yrs=0;np.ct=3;kept.push(np);have++}});
return kept}
function genMarket(baseAvg){const list=[];for(let i=0;i<8;i++){const pos=P(POS.filter(p=>p!="Goleiro"||Math.random()<.3));
const p=genPlayer(pos,baseAvg+R(-14,12),9000+i,18,33);p.price=Math.round(feeOf(p)*(DIFF[M.diff]?.mkt||1));p.yrs=0;p.ct=3+Math.floor(Math.random()*3);list.push(p)}return list}
const hasSaveMg=()=>{try{return!!localStorage.getItem("cf2")}catch(e){return false}};
function mgSv(){try{localStorage.setItem("cf2",JSON.stringify(M))}catch(e){}}
function mgBindClub(){if(!M.club)return;
if(M.own){let t=T.find(x=>x.n==M.club.n&&x.c=="Brasil");if(!t){t=M.club;T.push(t)}M.club=t}
else{const t=T.find(x=>x.n==M.club.n&&x.c==M.club.c);if(t)M.club=t}}
function mgResume(){try{M=JSON.parse(localStorage.getItem("cf2"));rct(M.squad.filter(p=>p.ct==null));mgBindClub();M.fired?mgSumm():mgSeason()}catch(e){home()}}
function mgSetup(){
show(`<h1>Carreira Técnico</h1><p class=m>Assuma o comando: crie seu próprio clube do zero ou pegue um time pronto da Série A do Brasileirão.</p>
<div class=card><label>Nome do técnico</label><input id=mgnm placeholder="Seu nome"></div>
<h2>Dificuldade</h2>
<div class=dg>${Object.entries(DIFF).map(([k,v])=>`<button class="b o diff-btn${k=="normal"?" on":""}" id="diff-${k}" onclick="pickDiff('${k}')"><span class=d-ico>${v.label.split(" ")[1]||""}</span><b>${v.label.split(" ")[0]}</b><span class=d-txt>${v.desc}</span></button>`).join("")}</div>
<input type=hidden id=dif value=normal>
<h2>Como começar</h2>
<button class=mode onclick=mgToCreate()><span class=mode-ico>🆕</span><span class=mode-body><span class=mode-t>Criar meu clube</span><span class=mode-d>Funda um time do zero, começando na Série B. Sem pressão da diretoria: o clube é seu, ninguém te demite.</span></span><span class=mode-go>→</span></button>
<button class=mode onclick=mgToPick()><span class=mode-ico>🏟️</span><span class=mode-body><span class=mode-t>Assumir um clube da Série A</span><span class=mode-d>Escolha um time pronto do Brasileirão. Resultados ruins colocam seu cargo em risco.</span></span><span class=mode-go>→</span></button>
<button class="b o" onclick=home()>← Voltar ao menu</button>`)}
function mgReadTmp(){MT.coach=document.getElementById("mgnm").value||"Técnico";MT.diff=document.getElementById("dif").value||"normal"}
function mgToCreate(){mgReadTmp();
show(`<h1>Fundar clube</h1><p class=m>Seu clube nasce na <b>Brasileirão Série B</b>, com um elenco modesto. Suba na base, contrate reforços e conquiste o acesso.</p>
<div class=card><label>Nome do clube</label><input id=mgcn placeholder="Ex: Atlético Vitória"></div>
<button class=b onclick=mgCreateGo()>▶ Fundar e assumir o comando</button><button class="b o" onclick=mgSetup()>← Voltar</button>`)}
function mgCreateGo(){const nm=(document.getElementById("mgcn").value||"Meu Clube").trim();
let n=nm,i=2;while(T.some(t=>t.n==n&&t.c=="Brasil"))n=nm+" "+i++;
const club={n,avg:Math.round(R(50,56)),lg:"Brasileirão Série B",c:"Brasil",d:2,k:"SA"};T.push(club);
mgStart(club,true)}
function mgToPick(){mgReadTmp();
const list=T.filter(t=>t.c=="Brasil"&&t.d==1).sort((a,b)=>b.avg-a.avg);
show(`<h1>Escolha seu clube</h1><p class=m>Times da Brasileirão Série A disponíveis.</p>${list.map((x,i)=>`<div class=card><div class=r><b>${x.n}</b><span class=s>${st(x.avg)}</span></div><div class=m>${x.lg} · força ${x.avg}</div><button class=b onclick="mgPickGo(${i})">Assumir o comando</button></div>`).join("")}<button class="b o" onclick=mgSetup()>← Voltar</button>`);
window._mgList=list}
function mgPickGo(i){mgStart(window._mgList[i],false)}
function mgFindClub(){const list=T.filter(t=>t.c=="Brasil"&&t.d==1&&t!==M.club).sort((a,b)=>b.avg-a.avg);
show(`<h1>Procurar novo clube</h1><p class=m>Times da Brasileirão Série A disponíveis.</p>${list.map((x,i)=>`<div class=card><div class=r><b>${x.n}</b><span class=s>${st(x.avg)}</span></div><div class=m>${x.lg} · força ${x.avg}</div><button class=b onclick="mgTakeClub(${i})">Assumir o comando</button></div>`).join("")}<button class="b o" onclick=mgSumm()>← Voltar</button>`);
window._mgList=list}
function mgTakeClub(i){const club=window._mgList[i];
M.club=club;M.own=false;M.fired=false;M.budget=Math.max(10,Math.round((club.avg-45)*2.3));M.left=5;M.inv={};
M.squad=genSquad(club.avg,club.n);M.formation="4-3-3";M.market=null;mgSv();mgSeason()}
function mgStart(club,own){
M={coach:MT.coach||"Técnico",diff:MT.diff||"normal",year:2027,club,own:!!own,budget:Math.max(10,Math.round((club.avg-45)*2.3)),rep:50,seasons:0,titles:[],hist:[],left:5,inv:{},base:0,tac:"eq",fired:false,comps:null,compY:null,cele:null,
squad:genSquad(club.avg,club.n),formation:"4-3-3",market:null};
mgSv();mgSeason();if(!tutSeen())tutOpen(0)}
function mgObjective(){const t=M.club;
if(t.d==2)return"Conseguir o acesso à Série A (ficar entre os 4 primeiros)";
if(t.avg>=82)return"Brigar pelo título do Brasileirão";
if(t.avg>=72)return"Classificação para a Libertadores";
if(t.avg>=62)return"Terminar no meio da tabela, sem sustos";
return"Escapar do rebaixamento"}
function mgHd(){const t=M.club,o=Math.round(t.avg);
return`<div class="card ph"><div class=ph-top><div class=ph-id><div class=ph-nm>${M.coach}</div><div class=m>Técnico · ${t.n} · ${M.year}</div></div><div class="ovr ${o>=85?"o5":o>=75?"o4":o>=65?"o3":"o2"}"><b>${o}</b><span>FORÇA</span></div></div><div class=ph-club><div><b>${t.n}</b><div class=m>${t.lg} · Brasil</div></div><div style="text-align:right"><span class=s>${st(t.avg)}</span><div class=m>orçamento R$ ${M.budget}M</div></div></div><div class=chips>${M.own?'<span class="chip g">🆕 Clube próprio</span>':'<span class=chip>🏟️ Clube contratado</span>'}<span class=chip>⭐ reputação ${Math.round(M.rep)}</span></div></div>`}
// ===== LINEUP BUILDER =====
const FZONES=[
  {id:'gk', lb:'Goleiro',  x:50,y:88,pos:'Goleiro'},
  {id:'lbt',lb:'Lateral E',x:9, y:70,pos:'Lateral'},
  {id:'cbl',lb:'Zagueiro', x:30,y:73,pos:'Zagueiro'},
  {id:'cbc',lb:'Zagueiro', x:50,y:76,pos:'Zagueiro'},
  {id:'cbr',lb:'Zagueiro', x:70,y:73,pos:'Zagueiro'},
  {id:'rbt',lb:'Lateral D',x:91,y:70,pos:'Lateral'},
  {id:'lwb',lb:'Ala E',    x:9, y:54,pos:'Lateral'},
  {id:'rwb',lb:'Ala D',    x:91,y:54,pos:'Lateral'},
  {id:'dml',lb:'Volante',  x:31,y:56,pos:'Volante'},
  {id:'dmc',lb:'Volante',  x:50,y:58,pos:'Volante'},
  {id:'dmr',lb:'Volante',  x:69,y:56,pos:'Volante'},
  {id:'cml',lb:'Meia',     x:30,y:41,pos:'Meia'},
  {id:'cmr',lb:'Meia',     x:70,y:41,pos:'Meia'},
  {id:'aml',lb:'Meia E',   x:16,y:35,pos:'Meia'},
  {id:'amc',lb:'Meia',     x:50,y:34,pos:'Meia'},
  {id:'amr',lb:'Meia D',   x:84,y:35,pos:'Meia'},
  {id:'wl', lb:'Ponta E',  x:11,y:16,pos:'Ponta'},
  {id:'wr', lb:'Ponta D',  x:89,y:16,pos:'Ponta'},
  {id:'sl', lb:'Atacante', x:37,y:13,pos:'Atacante'},
  {id:'st', lb:'Atacante', x:50,y:12,pos:'Atacante'},
  {id:'sr', lb:'Atacante', x:63,y:13,pos:'Atacante'},
];
const FPRESET={
  "4-3-3":["gk","lbt","cbl","cbr","rbt","dmc","cml","cmr","wl","st","wr"],
  "4-4-2":["gk","lbt","cbl","cbr","rbt","dml","dmr","wl","wr","sl","sr"],
  "3-5-2":["gk","cbl","cbc","cbr","lwb","rwb","dml","dmr","amc","sl","sr"],
  "4-2-3-1":["gk","lbt","cbl","cbr","rbt","dml","dmr","amc","wl","wr","st"],
};
const luSlots=()=>M.slots&&M.slots.length==11&&M.slots.includes("gk")?M.slots:(FPRESET[M.formation]||FPRESET["4-3-3"]);
const slotForm=ids=>{const c=p=>ids.filter(i=>FZONES.find(z=>z.id==i).pos==p).length;return`${c("Zagueiro")+c("Lateral")}-${c("Volante")+c("Meia")}-${c("Ponta")+c("Atacante")}`};
let _luEdit=false,_luDraft=[];
const PCOL={Goleiro:'#f59e0b',Lateral:'#38bdf8',Zagueiro:'#60a5fa',Volante:'#34d399',Meia:'#a78bfa',Ponta:'#f472b6',Atacante:'#f87171'};
const COMPAT={Goleiro:{},Zagueiro:{Lateral:.7,Volante:.7},Lateral:{Zagueiro:.7,Ponta:.65,Volante:.6},Volante:{Zagueiro:.7,Meia:.8,Lateral:.6},Meia:{Volante:.8,Ponta:.75,Atacante:.75},Ponta:{Meia:.75,Atacante:.8,Lateral:.65},Atacante:{Ponta:.8,Meia:.75}};
const luFit=(p,z)=>p.pos==z.pos?1:(p.pos=='Goleiro'||z.pos=='Goleiro')?.15:((COMPAT[z.pos]||{})[p.pos]||.35);
const luTen=p=>Math.min(1,.55+(p.yrs??2)*.15);
const luChem=(p,z)=>Math.round(100*(.6*luFit(p,z)+.4*luTen(p)));
const chemLb=c=>c>=85?'Excelente':c>=72?'Bom':c>=58?'Regular':'Baixo';
const chemCol=c=>c>=85?'#31df83':c>=72?'#a3e635':c>=58?'#f4c95d':'#f87171';
const ovrTier=o=>o>=85?'t5':o>=75?'t4':o>=65?'t3':'t2';
const shortN=n=>{const a=n.split(' ');return a.length>1?a[0][0]+'. '+a.slice(1).join(' '):n};
let _luSel=null,_luPick=null,_luAll=false;
function luStats(){
  const lu=M.lineup||{},rows=[];
  FZONES.forEach(z=>{const p=lu[z.id]!=null?M.squad.find(x=>x.id==lu[z.id]):null;if(!p)return;
    const fit=luFit(p,z);rows.push({z,p,fit,chem:luChem(p,z),eff:p.ovr-(1-fit)*14})});
  const n=rows.length;
  if(!n)return{n:0,ready:false,ovr:0,base:0,chem:0,def:0,mid:0,att:0,age:'0',form:'—',pen:0,hasGk:false,oop:0,rows};
  const cnt=pos=>rows.filter(r=>r.z.pos==pos).length;
  const line=ps=>{const r=rows.filter(x=>ps.includes(x.z.pos));return r.length?Math.round(r.reduce((s,x)=>s+x.eff,0)/r.length):0};
  const d=cnt('Zagueiro')+cnt('Lateral'),m=cnt('Volante')+cnt('Meia'),a=cnt('Ponta')+cnt('Atacante');
  let pen=0;if(n==11){if(d<3)pen+=8;if(a<1)pen+=8;if(m<1)pen+=5;if(d>6)pen+=4}
  const chem=Math.max(0,Math.round(rows.reduce((s,x)=>s+x.chem,0)/n-pen));
  const base=rows.reduce((s,x)=>s+x.eff,0)/n;
  const hasGk=rows.some(r=>r.z.pos=='Goleiro'&&r.p.pos=='Goleiro');
  return{n,ready:n==11&&hasGk,ovr:Math.round(base+(chem-75)*.1),base:Math.round(base),chem,def:line(['Goleiro','Zagueiro','Lateral']),mid:line(['Volante','Meia']),att:line(['Ponta','Atacante']),age:(rows.reduce((s,x)=>s+x.p.age,0)/n).toFixed(1),form:`${d}-${m}-${a}`,pen,hasGk,oop:rows.filter(r=>r.fit<1).length,rows}}
function mgTeamOvr(){const s=luStats();if(s.ready)return s.ovr;return Math.round(squadStrength(M.squad.filter(p=>!p.out),M.formation))}
function cleanLineup(){if(!M.lineup)return;const ids=new Set(M.squad.filter(p=>!p.out).map(p=>p.id));const sl=luSlots();Object.keys(M.lineup).forEach(z=>{if(!ids.has(M.lineup[z])||!sl.includes(z))delete M.lineup[z]})}
function luAutoFill(){
  M.lineup={};
  const act=luSlots().map(id=>FZONES.find(z=>z.id==id)),used=new Set(),ok=p=>!p.out&&!used.has(p.id);
  POS.forEach(pos=>{const pl=M.squad.filter(p=>p.pos==pos&&ok(p)).sort((a,b)=>b.ovr-a.ovr);
    act.filter(z=>z.pos==pos).forEach((z,i)=>{if(pl[i]){M.lineup[z.id]=pl[i].id;used.add(pl[i].id)}})});
  act.filter(z=>!M.lineup[z.id]).forEach(z=>{
    const c=M.squad.filter(p=>ok(p)&&(z.pos=="Goleiro")==(p.pos=="Goleiro")).sort((a,b)=>(b.ovr-(1-luFit(b,z))*14)-(a.ovr-(1-luFit(a,z))*14))[0];
    if(c){M.lineup[z.id]=c.id;used.add(c.id)}})}
function luEditT(){_luPick=null;_luSel=null;if(_luEdit){_luEdit=false}else{_luEdit=true;_luDraft=[...luSlots()]}_renderLu()}
function luToggle(id){const i=_luDraft.indexOf(id);
  if(i>=0){if(id=="gk"){alert("O goleiro é obrigatório.");return}_luDraft.splice(i,1)}
  else{if(_luDraft.length>=11){alert("Máximo de 11 posições. Desative uma antes de ativar outra.");return}_luDraft.push(id)}
  _renderLu()}
function luEditDone(){
  if(_luDraft.length!=11){alert(`Escolha exatamente 11 posições (agora: ${_luDraft.length}).`);return}
  if(!_luDraft.includes("gk")){alert("O goleiro é obrigatório.");return}
  M.slots=[..._luDraft];M.formation="Personalizada";_luEdit=false;cleanLineup();mgSv();_renderLu()}
function mgLineupEdit(){mgLineup();luEditT()}
function mgLineup(){cleanLineup();if(!M.lineup)M.lineup={};if(!Object.keys(M.lineup).length)luAutoFill();_luEdit=false;_luSel=null;_luPick=null;_luAll=false;_renderLu()}
function luSheet(){
  const z=FZONES.find(x=>x.id==_luPick);if(!z)return'';
  const cur=M.lineup[z.id],at={};Object.entries(M.lineup).forEach(([k,v])=>at[v]=k);
  const list=M.squad.filter(p=>!p.out&&(_luAll||p.pos==z.pos)).sort((a,b)=>(a.pos==z.pos?0:1)-(b.pos==z.pos?0:1)||b.ovr-a.ovr);
  const rows=list.map(p=>{const fit=luFit(p,z),ch=luChem(p,z),loss=Math.round((1-fit)*14),here=cur==p.id,zz=at[p.id]&&FZONES.find(q=>q.id==at[p.id]);
    const tag=here?'<span class="lu-tag on">neste lugar</span>':zz?`<span class=lu-tag>em campo · ${zz.lb}</span>`:'<span class="lu-tag bn">banco</span>';
    return`<button class="lu-r${here?' cur':''}" onclick="luChoose(${p.id})"><span class="lu-ov ${ovrTier(p.ovr-loss)}">${p.ovr-loss}</span><span class=lu-rb><b>${p.n}</b><small>${p.pos} · ${p.age} anos · ${p.yrs??2} temp. no clube</small><small>${tag}${loss?` <span class=lu-bad>fora de posição −${loss} OVR</span>`:''}</small></span><span class=lu-rc><b style="color:${chemCol(ch)}">${ch}%</b><small>entrosamento</small></span></button>`}).join('');
  return`<div class=lu-back onclick="if(event.target===this)luClose()"><div class=lu-sheet>
<div class=lu-sh><div><h3>Escolher ${z.lb}</h3><p>${_luAll?`Mostrando todo o elenco (${list.length})`:`Jogadores de ${z.pos} do seu elenco (${list.length})`} · toque em um para escalar</p></div><button class=lu-x onclick=luClose()>✕</button></div>
<div class=lu-acts><button class=lu-lnk onclick=luAllT()>${_luAll?'Só '+z.pos:'Ver todos os jogadores'}</button>${cur?'<button class="lu-lnk red" onclick=luRemove()>Remover do campo</button>':''}</div>
${rows||`<div class=lu-empty>Você não tem jogadores de ${z.pos}. Toque em “Ver todos os jogadores” para improvisar alguém (perde OVR e entrosamento).</div>`}
</div></div>`}
function _renderLu(){
  const lu=M.lineup||{},s=luStats(),onF=new Set(Object.values(lu).filter(Boolean));
  const hurt=M.squad.filter(p=>p.out);const bench=M.squad.filter(p=>!onF.has(p.id)&&!p.out).sort((a,b)=>POS.indexOf(a.pos)-POS.indexOf(b.pos)||b.ovr-a.ovr);
  const rowOf=Object.fromEntries(s.rows.map(r=>[r.z.id,r]));
  const slots=_luEdit?_luDraft:luSlots();
  const fz=FZONES.filter(z=>_luEdit||slots.includes(z.id)).map(z=>{
    if(_luEdit){const on=slots.includes(z.id);return`<div class="fz fz-ed${on?' fz-edon':''}" style="left:${z.x}%;top:${z.y}%;--zc:${PCOL[z.pos]}" onclick="luToggle('${z.id}')"><div class="fz-c fz-e">${on?'✓':'+'}</div><div class=fz-p>${z.lb}</div></div>`}
    const r=rowOf[z.id],act=_luPick==z.id,pos=`style="left:${z.x}%;top:${z.y}%;--zc:${PCOL[z.pos]}"`;
    const ev=`ondragover="luOv(event)" ondrop="luDp(event,'${z.id}')" onclick="luZC('${z.id}')"`;
    if(r){const fc=r.fit>=1?'#31df83':r.fit>=.65?'#f4c95d':'#f87171';
      return`<div class="fz fz-on${act?' fz-act':''}" style="left:${z.x}%;top:${z.y}%;--zc:${PCOL[z.pos]};--fc:${fc}" draggable="true" ondragstart="luDS(event,${r.p.id},'${z.id}')" ${ev}><div class="fz-c ${ovrTier(Math.round(r.eff))}"><b>${Math.round(r.eff)}</b><i class=fz-fit></i></div><div class=fz-n>${shortN(r.p.n)}</div><div class=fz-p>${z.lb}</div></div>`}
    return`<div class="fz${act?' fz-act':''}${_luSel!=null?' fz-hl':''}" ${pos} ${ev}><div class="fz-c fz-e"><b>+</b></div><div class=fz-p>${z.lb}</div></div>`}).join('');
  const bp=bench.map(p=>`<div class="lu-r lu-b${_luSel==p.id?' cur':''}" draggable="true" ondragstart="luDS(event,${p.id},null)" onclick="luPC(${p.id})"><span class="lu-ov ${ovrTier(p.ovr)}">${p.ovr}</span><span class=lu-rb><b>${p.n}</b><small>${p.pos} · ${p.age} anos · ${p.yrs??2} temp. no clube</small></span><span class=lu-pos style="color:${PCOL[p.pos]}">${p.pos.slice(0,3).toUpperCase()}</span></div>`).join('');
  const bar=v=>`<div class=lu-bar><i style="width:${Math.max(4,Math.min(100,(v-40)*100/55))}%"></i></div>`;
  const warns=[];
  if(s.n&&!s.hasGk)warns.push('Coloque um goleiro no gol (obrigatório).');
  if(s.oop)warns.push(`${s.oop} jogador(es) fora da posição natural — perdem OVR e entrosamento.`);
  if(s.n==11&&s.pen)warns.push('Formação desequilibrada: o time perde entrosamento por falta de defensores, meio ou ataque.');
  const rec=s.rows.filter(r=>(r.p.yrs??2)<1).length;if(rec)warns.push(`${rec} jogador(es) recém-chegado(s): entrosamento sobe a cada temporada no clube.`);
  const chip=s.ready?'<span class="chip g">✅ 11/11 · pronto</span>':s.n&&!s.hasGk?'<span class="chip r">⚠️ sem goleiro</span>':`<span class=chip>${s.n}/11 em campo</span>`;
  const y=window.scrollY;window._na=1;
  show(`<h1>Escalação</h1><p class=m>${M.club.n} · defina seus 11 titulares e a formação que quiser.</p>
${_luEdit?`<div class=lu-hint><b>✏️ Formação personalizada:</b> toque nas posições do campo para ativar (✓) ou desativar. Escolha exatamente 11, com goleiro. Ativas: <b>${_luDraft.length}/11</b> · formação ${slotForm(_luDraft)}</div>`:`<div class=lu-hint><b>👆 Como escalar:</b> toque em uma posição do campo para ver os jogadores daquela posição e escolher quem joga. Você também pode arrastar jogadores do banco para o campo.</div>`}
<div class=lu-stats>
<div class=lu-t><span>Força em campo</span><b class="lu-big ${ovrTier(s.ovr)}">${s.n?s.ovr:'—'}</b><em>OVR médio ${s.n?s.base:'—'}</em></div>
<div class=lu-t><span>Entrosamento</span><b class=lu-big style="color:${s.n?chemCol(s.chem):'inherit'}">${s.n?s.chem+'%':'—'}</b><div class=lu-bar><i style="width:${s.chem}%;background:${chemCol(s.chem)}"></i></div><em>${s.n?chemLb(s.chem):'—'}</em></div>
<div class=lu-t><span>Formação</span><b class=lu-big>${s.form}</b><em>idade média ${s.age}</em></div>
</div>
<div class=lu-lines><div><span>DEFESA</span><b>${s.def||'—'}</b>${bar(s.def)}</div><div><span>MEIO</span><b>${s.mid||'—'}</b>${bar(s.mid)}</div><div><span>ATAQUE</span><b>${s.att||'—'}</b>${bar(s.att)}</div></div>
<div class=lu-bt>${_luEdit?`<b>Editar formação</b><span class=lu-sp></span><button class=lu-lnk onclick=luEditDone()>✅ Concluir formação</button><button class="lu-lnk red" onclick=luEditT()>✕ Cancelar</button>`:`<b>Time titular</b>${chip}<span class=lu-sp></span><button class=lu-lnk onclick=luEditT()>✏️ Formação personalizada</button><button class=lu-lnk onclick=mgLineupAuto()>⚡ Melhor time</button><button class="lu-lnk red" onclick="M.lineup={};_luSel=null;_renderLu()">🗑 Limpar</button>`}</div>
<div id=lu-field>
<svg class=lu-svg viewBox="0 0 100 132" preserveAspectRatio="none"><g fill="none" stroke="rgba(255,255,255,.35)" stroke-width=".5"><rect x="3" y="3" width="94" height="126"/><line x1="3" y1="66" x2="97" y2="66"/><circle cx="50" cy="66" r="10"/><rect x="22" y="3" width="56" height="20"/><rect x="36" y="3" width="28" height="8"/><rect x="22" y="109" width="56" height="20"/><rect x="36" y="121" width="28" height="8"/><path d="M40 23 A10 10 0 0 0 60 23"/><path d="M40 109 A10 10 0 0 1 60 109"/></g><circle cx="50" cy="66" r=".9" fill="rgba(255,255,255,.5)"/></svg>
${fz}</div>
${hurt.length?`<div class=lu-warn>🩹 Lesionados (indisponíveis): ${hurt.map(p=>p.n+" ("+p.pos+")").join(", ")}</div>`:""}
${warns.length?`<div class=lu-warn>${warns.map(w=>`<div>⚠ ${w}</div>`).join('')}</div>`:''}
<div class=lu-bh><b>Banco de reservas</b><span class=m>${bench.length} jogadores${_luSel!=null?' · toque numa posição do campo para colocar o selecionado':''}</span></div>
<div id=lu-bench>${bp||'<div class=m style="padding:8px">Todos escalados!</div>'}</div>
<button class=b onclick=mgLineupSave()>✅ Confirmar escalação</button>
<button class="b o" onclick=mgSeason()>← Voltar</button>${luSheet()}`);
  scrollTo({top:y,behavior:'instant'})}
function luDS(e,pid,from){e.dataTransfer.setData('text',JSON.stringify({pid,from}));e.dataTransfer.effectAllowed='move'}
function luOv(e){e.preventDefault();e.dataTransfer.dropEffect='move'}
function luDp(e,zid){e.preventDefault();try{const{pid,from}=JSON.parse(e.dataTransfer.getData('text'));luPlace(pid,from,zid)}catch(x){}}
function luZC(zid){if(_luSel!=null){luPlace(_luSel,null,zid);return}_luPick=zid;_luAll=false;_renderLu()}
function luPC(pid){_luSel=(_luSel==pid)?null:pid;_renderLu()}
function luClose(){_luPick=null;_renderLu()}
function luAllT(){_luAll=!_luAll;_renderLu()}
function luRemove(){delete M.lineup[_luPick];_luPick=null;mgSv();_renderLu()}
function luChoose(pid){const to=_luPick;_luPick=null;const from=Object.keys(M.lineup).find(k=>M.lineup[k]==pid)||null;luPlace(pid,from,to)}
function luPlace(pid,from,to){
  const ex=M.lineup[to];
  if(!from&&ex==null&&Object.values(M.lineup).filter(Boolean).length>=11){alert('Máximo de 11 jogadores em campo. Remova ou troque alguém.');return}
  if(from)delete M.lineup[from];
  if(ex!=null&&from)M.lineup[from]=ex;
  M.lineup[to]=pid;_luSel=null;
  mgSv();_renderLu()}
function mgLineupAuto(){luAutoFill();mgSv();_renderLu()}
function mgLineupSave(){
  const s=luStats();
  if(s.n<11){alert('Coloque 11 jogadores em campo antes de confirmar!');return}
  if(!s.hasGk){alert('É obrigatório ter um goleiro no gol!');return}
  mgSv();mgSeason()}
function mgWageBill(){return M.squad.reduce((s,p)=>s+p.wage,0)}
function mgFin(){const dd=DIFF[M.diff]||DIFF.normal,w=mgWageBill(),t=M.club;
const inc=Math.round(w*.8*dd.inc)+Math.round((w*.1+Math.max(0,M.rep-15)*.6+(t.d==1?10:4))*dd.inc);return{w,inc,net:inc-w}}
function mgPower(ovr){const t=M.club,dd=DIFF[M.diff]||DIFF.normal;
const pool=T.filter(x=>x.c=="Brasil"&&x.d==t.d&&x!==t).map(x=>({n:x.n,v:x.avg}));
pool.push({n:t.n,v:ovr+MGT[M.tac][2]-dd.mgPen,me:1});return pool.sort((a,b)=>b.v-a.v)}
function mgSeason(){mgSv();{const n0=Object.keys(M.lineup||{}).length;cleanLineup();if(M.lineup&&Object.keys(M.lineup).length<n0)luAutoFill()}const L=M.left,ovr=mgTeamOvr(),lus=luStats(),fin=mgFin(),pw=mgPower(ovr),exp=M.squad.filter(p=>(p.ct??2)<=1).length,rv=mgDerbyRival(),hurtC=M.squad.filter(p=>p.out).length;
const myRk=pw.findIndex(x=>x.me)+1,top=pw.slice(0,6),show7=myRk>6?[...top,pw[myRk-1]]:top,mx=pw[0].v,mn=pw[pw.length-1].v;
const stars=[...M.squad].sort((a,b)=>b.ovr-a.ovr).slice(0,5);
const conf=Math.max(5,Math.min(100,Math.round(M.rep*.8+(M.verdict=="bom"?12:M.verdict=="ruim"?-12:0)+10)));
const tier=ovr>=85?"o5":ovr>=75?"o4":ovr>=65?"o3":"o2";
const proj=myRk<=1?"Favorito ao título":myRk<=4?"Briga por vaga continental":myRk>=pw.length-3?"Zona de rebaixamento":"Meio de tabela";
show(`<h1>Temporada ${M.year}</h1>${mgHd()}
<div class=kpis>
<div class=lu-t><span>Força em campo</span><b class="lu-big ${ovrTier(ovr)}">${ovr}</b><em>${lus.ready?"escalação definida":"escalação automática"}</em></div>
<div class=lu-t><span>Entrosamento</span><b class=lu-big style="color:${lus.ready?chemCol(lus.chem):"inherit"}">${lus.ready?lus.chem+"%":"—"}</b><div class=lu-bar><i style="width:${lus.ready?lus.chem:0}%;background:${chemCol(lus.chem)}"></i></div><em>${lus.ready?chemLb(lus.chem):"defina o time"}</em></div>
<div class=lu-t><span>Orçamento</span><b class=lu-big>R$ ${M.budget}M</b><em>${M.left} ações restantes</em></div>
<div class=lu-t><span>Reputação</span><b class=lu-big>${Math.round(M.rep)}</b><div class=lu-bar><i style="width:${M.rep}%"></i></div><em>${M.titles.length} títulos na carreira</em></div>
</div>
<div class=dash2>
<div class=card><div class=r><b>🎯 Diretoria</b><span class=badge>${M.own?"Clube próprio":"Contrato"}</span></div><div style="margin:8px 0 4px">${mgObjective()}</div>
<div class=m>Confiança da diretoria</div><div class=lu-bar style="margin-top:5px"><i style="width:${conf}%;background:${conf>=60?"var(--accent)":conf>=35?"#f4c95d":"#f87171"}"></i></div><div class=m style="margin-top:4px">${conf}% · ${proj}</div></div>
<div class=card><div class=r><b>💰 Finanças</b><span class="badge ${fin.net>=0?"gold":""}">${fin.net>=0?"+":""}R$ ${fin.net}M/temp.</span></div>
<div class=frow><span>Folha salarial</span><b>R$ ${fin.w}M</b></div><div class=frow><span>Receita estimada</span><b>R$ ${fin.inc}M</b></div><div class=frow><span>Caixa</span><b>R$ ${M.budget}M</b></div><div class=frow><span>Elenco</span><b>${M.squad.length} jogadores</b></div></div>
</div>
<h2>Panorama da liga <span class=m>(força projetada)</span></h2>
<div class=card style="padding:6px 16px">${show7.map(x=>{const i=pw.indexOf(x)+1;return`<div class="pr${x.me?" me":""}"><span class=pr-i>${i}</span><span class=pr-n>${x.n}${x.me?" <em>você</em>":""}</span><span class=pr-b><i style="width:${Math.max(6,(x.v-mn+3)*100/(mx-mn+3))}%"></i></span><b>${Math.round(x.v)}</b></div>`}).join("")}</div>
<h2>Destaques do elenco</h2>
<div class=card style="padding:10px 14px">${stars.map(p=>`<div class=sr><span class="lu-ov ${ovrTier(p.ovr)}">${p.ovr}</span><span class=lu-rb><b>${p.n}</b><small>${p.pos} · ${p.age} anos · salário R$ ${p.wage}M</small></span><span class=lu-pos style="color:${PCOL[p.pos]}">${p.pos.slice(0,3).toUpperCase()}</span></div>`).join("")}</div>
${M.hist.length?`<h2>Trajetória</h2><div class=hist>${M.hist.slice(-6).map(h=>`<div class=hs><span>${h.y}</span><b>${h.pos}º</b><small>${h.club}${h.titles?" · 🏆"+h.titles:""}</small></div>`).join("")}</div>`:""}
${mgCharts()}
<h2>Pré-temporada <span class=m>(${L} de 5 ações restantes)</span></h2>
<div class=g>
<button class="b o" onclick=mgLineup()>📋 Escalar time<br><small>${lus.ready?"Entrosamento "+lus.chem+"% · "+lus.form:"escolha seus 11 titulares"}</small></button>
<button class="b o" onclick=mgSquad()>👥 Ver elenco completo<br><small>${M.squad.length} jogadores${hurtC?" · "+hurtC+" lesionado(s)":""}</small></button>
<button class="b o" onclick=mgContracts()>📄 Contratos<br><small>${exp?exp+" vencendo esta temporada":"nenhum vencendo"}</small></button>
<button class="b o" onclick=mgAcademy()>🌱 Academia de base<br><small>promessas para o elenco</small></button>
<button class="b o" onclick=mgDerby()>⚔️ Clássico ao vivo<br><small>${M.derby?"disputado: "+M.derby.sc:"contra "+rv.n+" · moral"}</small></button>
<button class="b o" onclick=tutOpen(0)>❓ Como jogar</button>
<button class="b o" ${L?"":"disabled"} onclick=mgMarket()>💰 Mercado de transferências<br><small>contratar jogadores</small></button>
<button class="b o" ${L?"":"disabled"} onclick="mgInv('base')">🌱 Investir na base${M.inv.base?" ×"+M.inv.base:""}<br><small>barato, melhora a base a longo prazo</small></button>
<button class="b o" onclick="M.left=5;M.inv={};mgSeason()">↺ Zerar ações</button>
</div>
<h2>Formação</h2>
<div class=dg>${Object.keys(FORMATIONS).map(k=>`<button class="b o diff-btn${M.formation==k?" on":""}" onclick="mgFormation('${k}')"><b>${k}</b></button>`).join("")}<button class="b o diff-btn${M.formation=="Personalizada"?" on":""}" onclick=mgLineupEdit()><b>✏️ ${M.formation=="Personalizada"?"Personalizada "+slotForm(luSlots()):"Personalizar"}</b></button></div>
<h2>Estilo tático da temporada</h2>
<div class=dg>${Object.entries(MGT).map(([k,v])=>`<button class="b o diff-btn${M.tac==k?" on":""}" onclick="mgTac('${k}')"><b>${v[0]}</b><span class=d-txt>${v[1]}</span></button>`).join("")}</div>
${M.comps?`<button class="b o" onclick="mgOpenTbl('season',0)">📊 Tabelas de ${M.compY}</button>`:""}
<button class=b onclick=mgGo()>▶ Simular temporada</button>
${saveCareerBtn("manager")}`)}
function mgInv(k){if(M.left<=0)return;const c=M.inv[k]||0;
if(k=="base"){if(M.budget<6)return;M.budget-=6;M.base++}
M.inv[k]=c+1;M.left--;mgSeason()}
function mgTac(k){M.tac=k;mgSeason()}
function mgFormation(k){M.formation=k;M.slots=null;luAutoFill();mgSeason()}
function mgPlayerCard(p){return`<div class=card style="padding:11px 15px"><div class=r><b>${p.n}</b><span class=s>${st(p.ovr)}</span></div><div class=m>${p.ovr} OVR · ${p.age} anos · salário R$ ${p.wage}M · contrato até ${M.year+(p.ct??2)-1}${p.out?" · 🩹 lesionado":""}</div><button class="b o" ${M.left?"":"disabled"} onclick="mgSellPlayer(${p.id})" style="margin-top:8px">💸 Negociar saída (R$ ${Math.round(feeOf(p)*.7)}M)</button></div>`}
function mgPosGroup(pos){const players=M.squad.filter(p=>p.pos==pos).sort((a,b)=>b.ovr-a.ovr);
if(!players.length)return"";
return`<h2>${pos} <span class=m>(${players.length})</span></h2>${players.map(mgPlayerCard).join("")}`}
function mgSquad(){
show(`<h1>Elenco</h1>${mgHd()}
${POS.map(mgPosGroup).join("")}
<button class="b o" onclick=mgSeason()>← Voltar</button>`)}
function mgSellPlayer(id){if(M.left<=0)return;const p=M.squad.find(x=>x.id==id);if(!p)return;
if(!confirm(`Negociar a saída de ${p.n} por R$ ${Math.round(feeOf(p)*.7)}M?`))return;
M.budget+=Math.round(feeOf(p)*.7);M.squad=M.squad.filter(x=>x.id!=id);if(M.lineup&&M.lineup[Object.keys(M.lineup).find(z=>M.lineup[z]==id)])cleanLineup();M.left--;mgSquad()}
function mgMarket(){if(!M.market)M.market=genMarket(M.club.avg);
show(`<h1>Mercado de transferências</h1>${mgHd()}<p class=m>Orçamento disponível: R$ ${M.budget}M · ${M.left} ações restantes</p>
${M.market.map(p=>`<div class=card><div class=r><b>${p.n}</b><span class=s>${st(p.ovr)}</span></div><div class=m>${p.pos} · ${p.ovr} OVR · ${p.age} anos · salário R$ ${p.wage}M</div><button class=b ${M.left&&M.budget>=p.price?"":"disabled"} onclick="mgBuyPlayer(${p.id})">💰 Contratar por R$ ${p.price}M</button></div>`).join("")}
<button class="b o" ${M.left?"":"disabled"} onclick=mgRefreshMarket()>🔄 Atualizar mercado (gasta 1 ação)</button>
<button class="b o" onclick=mgSeason()>← Voltar</button>`)}
function mgBuyPlayer(id){if(M.left<=0)return;const p=M.market.find(x=>x.id==id);if(!p||M.budget<p.price)return;
M.budget-=p.price;const{price,...clean}=p;M.squad.push(clean);M.market=M.market.filter(x=>x.id!=id);M.left--;mgMarket()}
function mgRefreshMarket(){if(M.left<=0)return;M.market=genMarket(M.club.avg);M.left--;mgMarket()}
function mgGo(){const t=M.club,y=M.year,L=[],H=[];
t.avg=mgTeamOvr();
const dd=DIFF[M.diff]||DIFF.normal,inj=pois(dd.mgInj||0);let injLoss=0;const hurtN=[];
{const x0=luStats().rows.map(r=>r.p),pool=sh(x0.length?x0:M.squad.slice(0,11));for(let i=0;i<inj&&i<pool.length;i++){const p=pool[i],gv=Math.random()<.35;injLoss+=Math.max(.5,(p.ovr-60)/14)*R(.6,1.1);if(gv)p.out=2;hurtN.push(`${p.n} (${p.ovr})${gv?" — grave, fora da próxima temporada":""}`)}}
const dv=M.derby?(M.derby.res=="V"?1.2:M.derby.res=="E"?.2:-.8):0;
const tv=MGT[M.tac][2],simAvg=t.avg+tv-(dd.mgPen||0)-injLoss+dv;
const CP=[];
let lgPool=T.filter(x=>x.c=="Brasil"&&x.d==t.d);if(!lgPool.includes(t))lgPool=[t,...lgPool];
let rows=lgPool.map(x=>row(x.n,x===t?simAvg:x.avg+G()*1.4,x===t));
if(rows.length<8){const mn=Math.min(...rows.map(r=>r.avg));fill([],8-rows.length,mn-7,mn).forEach(f=>rows.push(row(f.n,f.avg)))}
roundRobin(rows,1);
const pos=rows.findIndex(r=>r.me)+1,nT=rows.length,relZ=nT-4,proZ=4;let lg=t.lg;
L.push(`${lg}: ${pos}º lugar — ${rows[pos-1].pts} pts (${rows[pos-1].v}V ${rows[pos-1].e}E ${rows[pos-1].d}D)`);
if(pos==1)H.push(lg);
CP.push({k:"lg",name:lg,sub:`Brasil · ${nT} times`,rows,pos,relZ,proZ,d:t.d});
const d2=T.find(x=>x.c=="Brasil"&&x.d==2&&x!==t),d1=T.find(x=>x.c=="Brasil"&&x.d==1&&x!==t);
if(t.d==2&&pos<=proZ&&d1){L.push("⬆ Acesso à Brasileirão Série A!");H.push("Acesso à Brasileirão Série A");t.d=1;t.lg=d1.lg;t.avg+=5}
else if(t.d==1&&pos>relZ&&d2){L.push("⬇ Rebaixado para a Brasileirão Série B");t.d=2;t.lg=d2.lg;t.avg-=5}
const cupName="Copa do Brasil";
let cupO=sh(T.filter(x=>x.c=="Brasil"&&x!==t)).map(x=>({n:x.n,avg:x.avg}));fill(cupO,15,48,62);
const cup=knock({n:t.n,avg:simAvg},cupO,16);
L.push(`${cupName}: ${cup.res}`);if(cup.champ)H.push(cupName);
CP.push({k:"ko",name:cupName,sub:"Mata-mata · 16 times",path:cup.path,res:cup.res});
let won=0;
if(t.d==1){const major=pos<=4&&t.avg>=68,minor=!major&&pos<=8&&t.avg>=58;
if(major||minor){const nm=major?"Libertadores":"Sul-Americana",boost=major?0:6;
let pl=sh(T.filter(x=>x.k=="SA"&&x.d==1&&x!==t)).map(x=>({n:x.n,avg:x.avg-boost}));fill(pl,21,58,75);
const me2={n:t.n,avg:simAvg+boost};
const grp=groupStage(me2,pl.slice(0,3));let res,path=[];
if(grp.pos<=2){const ko=knock(me2,pl.slice(3),16);res=ko.res;path=ko.path;if(ko.champ){H.push(nm);if(major)won=1}}
else res="Eliminado — Fase de grupos";
L.push(`${nm}: ${res}`);CP.push({k:"ko",name:nm,sub:"Fase de grupos + mata-mata · 20 clubes",group:grp,path,res})}}
const wages=mgWageBill();
const matchIncome=Math.round((Math.round(wages*.8)+(pos==1?22:0)+(pos<=4&&t.d==1?10:0))*(dd.inc||1));
const sponsor=Math.round((wages*.1+Math.max(0,M.rep-15)*.6+(t.d==1?10:4))*(dd.inc||1));
if(inj)L.push(`🚑 Lesões: ${hurtN.join("; ")} (−${injLoss.toFixed(1)} de força)`);
if(M.derby)L.push(`⚔️ Clássico contra ${M.derby.opp}: ${M.derby.sc} (${{V:"vitória",E:"empate",D:"derrota"}[M.derby.res]})`);
const lv=M.squad.filter(p=>(p.ct??2)<=1);if(lv.length)L.push(`📄 Contrato encerrado (saíram de graça): ${lv.map(p=>p.n).join(", ")}`);
M.budget+=matchIncome+sponsor-wages;
if(M.budget<0)L.push("⚠️ Clube no vermelho: a diretoria exige cortes");
L.push(`💰 Receita: R$ ${matchIncome+sponsor}M (jogos R$ ${matchIncome}M + patrocínio R$ ${sponsor}M) · Salários: -R$ ${wages}M`);
let verdict="ok",fired=false;
const failTier=t.d==2?(pos>8):(t.avg>=82?pos>6:t.avg>=72?pos>10:t.avg>=62?pos>relZ+3:pos>relZ);
if(failTier){M.rep-=R(8,16);verdict="ruim";
if(!M.own){const diffRisk=(dd.fire||.34)+(M.budget<0?.15:0);if(Math.random()<diffRisk+((pos>relZ&&t.d==1)?.25:0))fired=true}}
else{M.rep=Math.min(100,M.rep+R(3,9)+H.length*4);verdict="bom"}
if(M.derby)M.rep+=M.derby.res=="V"?2:M.derby.res=="D"?-2:0;
M.rep=Math.max(5,Math.min(100,M.rep));
H.forEach(n=>M.titles.push({y,n}));
M.hist.push({y,club:t.n,lg,pos,d:t.d,titles:H.length,own:M.own,pts:rows[pos-1].pts,bud:M.budget,rep:Math.round(M.rep)});
M.lastL=L;M.lastH=H;M.comps=CP;M.compY=y;M.verdict=verdict;M.fired=fired;
T.forEach(x=>{if(x===t)return;x.b0=x.b0??x.avg;x.avg=Math.round(Math.max(x.b0-6,Math.min(x.b0+6,x.avg+G()*1.2+(x.b0-x.avg)*.15)))});M.squad=ageSquad(M.squad,t.avg+M.base*.6);M.market=null;M.youth=null;M.derby=null;M.rival=null;
M.cele=H.map(n=>({n}));M.year++;M.seasons++;M.left=5;M.inv={};mgSv();
return M.cele.length?mgCele(0):mgSumm()}
function mgCele(i){const list=M.cele||[];i=+i;if(i>=list.length)return mgSumm();
const c=list[i],[,col]=tk(c.n),multi=list.length>1;
show(`<div class=cele style="--c1:${col[0]};--c2:${col[1]}"><div class=cele-bg></div><div class=cele-rays></div><div class=cele-in>
<div class=cele-kind>🏆 Título conquistado</div><img class=cele-img src="${tImg(c.n)}" alt=""><div class=cele-name>${c.n}</div>
<div class=cele-sub>${M.club.n} · ${M.compY}</div>
${multi?`<div class=cele-dots>${list.map((_,j)=>`<span class="${j==i?"on":""}"></span>`).join("")}</div>`:""}
<button class="b cele-btn" onclick="mgCele(${i+1})">${i+1<list.length?`Próximo (${i+2}/${list.length})`:"Continuar"}</button>
</div></div>`)}
function mgSumm(){const L=M.lastL||[],H=M.lastH||[];
show(`<h1>Fim de temporada ${M.compY}</h1>${mgHd()}
<div class=card><h2 style="margin-top:0">Campanha</h2>${L.map(x=>`<div class=li>${x}</div>`).join("")}</div>
${H.length?`<h2>🏆 Títulos</h2>${H.map(tw).join("")}`:""}
${(M.comps||[]).map(c=>`<h2>${c.k=="lg"?"📊":"🏟️"} ${c.name}</h2>${mgCompHd(c)}${mgCompBody(c)}`).join("")}
<button class="b o" onclick="mgOpenTbl('summ',0)">📊 Abrir tabelas em tela cheia</button>
<div class=card><div class=r><b>Veredito da diretoria</b><span class="badge ${M.verdict=="bom"?"gold":""}">${M.fired?"Demitido":M.verdict=="bom"?"Satisfeita":"Insatisfeita"}</span></div>${M.fired?`<div class=m style="margin-top:6px">Os resultados não foram suficientes e a diretoria decidiu pela sua saída.</div>`:""}</div>
${M.fired?`<button class=b onclick=mgFindClub()>🔎 Procurar novo clube</button>`:`<button class=b onclick=mgSeason()>▶ Próxima temporada</button>`}
<button class="b o" onclick=mgEnd()>🏁 Encerrar carreira técnica</button>`)}
function mgCompHd(c){return`<div class=card style="padding:13px 15px"><div class=r><b>${c.k=="lg"?"Posição final":"Seu resultado"}</b><span class="badge ${c.res=="Campeão"||c.pos==1?"gold":""}">${c.res||(c.pos+"º lugar")}</span></div><div class=m>${c.sub||""}</div></div>`}
function mgCompBody(c){const SH={"Oitavas de final":"Oitavas","Quartas de final":"Quartas"};
let body="";
if(c.k=="lg")body=zTable(c.rows,c)+`<div class=legend><span><i class=zc></i>${c.d==1?"Continental":"Acesso"}</span><span><i class=zr></i>${c.d==1?"Rebaixamento":"Nada"}</span></div>`;
else{if(c.group)body+=`<h2>Fase de grupos</h2>`+zTable(c.group.rows,{})+`<div class=m style="margin:6px 2px">${c.group.pos<=2?"✅ Classificado em "+c.group.pos+"º":"❌ Eliminado em "+c.group.pos+"º"}</div>`;
body+=`<h2>Mata-mata</h2><div class=card>${c.path&&c.path.length?c.path.map(p=>`<div class="ko-r${p.ok?"":" out"}"><span class=ko-n>${SH[p.r]||p.r}</span><span class=ko-o>${p.opp}</span><span class=ko-s>${p.sc}${p.pen?" <small>pên</small>":""}</span><span class=ko-i>${p.ok?"✅":"❌"}</span></div>`).join(""):`<div class=m>Não disputou o mata-mata.</div>`}</div>`}
return body}
function mgOpenTbl(from,k){M.tblFrom=from;mgTbl(k)}
function mgTbl(k){const C=M.comps||[];k=+k||0;if(k>=C.length)k=0;const c=C[k];
const tabs=`<div class=tabs>${C.map((x,i)=>`<button class="tab${i==k?" on":""}" onclick="mgTbl(${i})">${x.name}</button>`).join("")}</div>`;
const body=mgCompBody(c);
show(`<h1>📊 Tabelas ${M.compY||""}</h1>${tabs}
${mgCompHd(c)}
${body}
<button class=b onclick="M.tblFrom=='season'?mgSeason():mgSumm()">← Voltar</button>`)}
function mgEnd(){try{localStorage.removeItem("cf2")}catch(e){}
const tt={};M.titles.forEach(t=>tt[t.n]=(tt[t.n]||0)+1);
const nt=Object.keys(tt).sort((a,b)=>tt[b]-tt[a]);
const clubs=[...new Set(M.hist.map(h=>h.club))];
const promo=M.hist.filter((h,i)=>i>0&&h.d==1&&M.hist[i-1].d==2).length,releg=M.hist.filter((h,i)=>i>0&&h.d==2&&M.hist[i-1].d==1).length;
show(`<h1>🏁 Fim de carreira técnica</h1><div class=card><b>${M.coach}</b><br>${M.seasons} temporadas no comando · reputação final ${Math.round(M.rep)}<br>Clubes dirigidos: ${clubs.join(", ")}</div>
<h2>Estatísticas</h2><div class=card>Acessos conquistados: <b>${promo}</b><br>Rebaixamentos sofridos: <b>${releg}</b><br>Títulos: <b>${M.titles.length}</b></div>
<h2>🏆 Títulos</h2><div class=card>${nt.length?nt.map(n=>`<div class=r><span style="display:flex;align-items:center;gap:8px"><img src="${tImg(n)}" width=44 height=44 alt="">${n}</span><b>${tt[n]}× <span class=m>${M.titles.filter(t=>t.n==n).map(t=>t.y).join(", ")}</span></b></div>`).join(""):"Nenhum título conquistado."}</div>
${mgCharts()}
<button class=b onclick=mgSetup()>Nova carreira técnica</button><button class="b o" onclick=home()>← Menu inicial</button>`)}
// ===== CONTA, LOGIN E CARREIRAS NA NUVEM =====
let AU=null;
let _ab=0;
const cdLeft=k=>{try{return Math.max(0,Math.ceil((+localStorage.getItem("cf_cd_"+k)-Date.now())/1000))}catch(e){return 0}};
const cdSet=(k,sec)=>{try{localStorage.setItem("cf_cd_"+k,String(Date.now()+sec*1000))}catch(e){}};
const isRate=e=>!!e&&(e.status==429||/rate limit|too many|over_/i.test((e.message||"")+(e.code||"")));
function authTick(k,label){const b=document.getElementById("abtn");if(!b)return;const sec=cdLeft(k);b.disabled=sec>0||!!_ab;b.textContent=sec>0?`Aguarde ${sec}s…`:label;if(sec>0)setTimeout(()=>authTick(k,label),1000)}
function authMsg(error){const m=(error&&error.message)||"";
if(isRate(error))return"O servidor limitou os envios (limite de e-mails por hora). Aguarde alguns minutos antes de tentar de novo. Se você já criou a conta antes, tente entrar.";
if(m.includes("Invalid login"))return"E-mail ou senha incorretos.";
if(m.includes("already registered")||m.includes("already exists")||m.includes("User already"))return"Esse e-mail já tem conta. Tenta entrar em vez de criar.";
if(m.includes("Password should be")||m.includes("at least 6"))return"Senha muito curta (mínimo 6 caracteres).";
if(m.includes("rate limit"))return"Muitas tentativas seguidas. Espera um minuto e tenta de novo.";
if(m.includes("not confirmed"))return"Confirma seu e-mail antes de entrar: a gente mandou um link quando você criou a conta.";
return m||"Algo deu errado, tenta de novo."}
function authScreen(tab){tab=tab||"login";
if(!hasAuth)return show(`<h1>Conta</h1><div class=card><p>O login ainda não foi configurado neste site. Volte mais tarde.</p></div><button class="b o" onclick=home()>← Voltar</button>`);
show(`<h1>${tab=="login"?"Entrar":"Criar conta"}</h1>
<div class=tabs><button class="tab${tab=="login"?" on":""}" onclick="authScreen('login')">Entrar</button><button class="tab${tab=="signup"?" on":""}" onclick="authScreen('signup')">Criar conta</button></div>
<div class=card><label>E-mail</label><input id=aem type=email placeholder="voce@email.com" autocomplete=email><label>Senha</label><input id=apw type=password placeholder="••••••••" autocomplete="${tab=="login"?"current-password":"new-password"}"><div id=aerr class=m style="color:#ff8a85"></div></div>
<button class=b id=abtn onclick="${tab=="login"?"authLogin()":"authSignup()"}">${tab=="login"?"▶ Entrar":"▶ Criar conta"}</button>
${tab=="login"?`<button class="b o" onclick=authForgot()>Esqueci minha senha</button>`:""}
<button class="b o" onclick=home()>← Voltar ao menu</button>`);authTick(tab,tab=="login"?"▶ Entrar":"▶ Criar conta")}
async function authLogin(){if(_ab||cdLeft("login"))return;const email=document.getElementById("aem").value.trim(),pw=document.getElementById("apw").value,el=document.getElementById("aerr");
if(!email||!pw){el.textContent="Preencha e-mail e senha.";return}
_ab=1;authTick("login","▶ Entrar");let r;try{r=await supabase.auth.signInWithPassword({email,password:pw})}catch(e){r={error:e}}finally{_ab=0}
if(r.error){if(isRate(r.error))cdSet("login",30);const e2=document.getElementById("aerr");if(e2)e2.textContent=authMsg(r.error);authTick("login","▶ Entrar");return}
profileScreen()}
async function authSignup(){if(_ab||cdLeft("signup"))return;const email=document.getElementById("aem").value.trim(),pw=document.getElementById("apw").value,el=document.getElementById("aerr");
if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){el.textContent="Digite um e-mail válido.";return}
if(pw.length<6){el.textContent="A senha precisa ter pelo menos 6 caracteres.";return}
_ab=1;authTick("signup","▶ Criar conta");let r;try{r=await supabase.auth.signUp({email,password:pw,options:{emailRedirectTo:location.href}})}catch(e){r={error:e}}finally{_ab=0}
if(r.error){if(isRate(r.error))cdSet("signup",90);const e2=document.getElementById("aerr");if(e2)e2.textContent=authMsg(r.error);authTick("signup","▶ Criar conta");return}
if(r.data&&r.data.user&&r.data.user.identities&&r.data.user.identities.length===0){el.textContent="Esse e-mail já tem conta. Tente entrar em vez de criar.";authTick("signup","▶ Criar conta");return}
cdSet("signup",60);
show(`<h1>Quase lá</h1><div class=card><p>Mandamos um e-mail de confirmação pra <b>${email}</b>. Clica no link pra ativar a conta — depois é só entrar normalmente.</p></div><button class=b onclick=home()>← Voltar ao menu</button>`)}
function authForgot(){show(`<h1>Recuperar senha</h1><div class=card><label>E-mail da conta</label><input id=aem2 type=email placeholder="voce@email.com"><div id=aerr2 class=m style="color:#ff8a85"></div></div><button class=b onclick=authForgotSend()>▶ Enviar link de recuperação</button><button class="b o" onclick="authScreen('login')">← Voltar</button>`)}
async function authForgotSend(){const email=document.getElementById("aem2").value.trim();
const{error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});
if(error){const el=document.getElementById("aerr2");if(el)el.textContent=authMsg(error);return}
show(`<h1>E-mail enviado</h1><div class=card><p>Se existir uma conta com <b>${email}</b>, mandamos um link pra redefinir a senha.</p></div><button class=b onclick=home()>← Voltar ao menu</button>`)}
function authNewPassword(){show(`<h1>Nova senha</h1><p class=m>Você clicou num link de recuperação de senha. Defina a nova senha abaixo.</p><div class=card><label>Nova senha</label><input id=anp type=password placeholder="••••••••" autocomplete=new-password><div id=aerr3 class=m style="color:#ff8a85"></div></div><button class=b onclick=authNewPasswordSave()>▶ Salvar nova senha</button>`)}
async function authNewPasswordSave(){const pw=document.getElementById("anp").value;
if(pw.length<6){const el=document.getElementById("aerr3");if(el)el.textContent="Mínimo 6 caracteres.";return}
const{error}=await supabase.auth.updateUser({password:pw});
if(error){const el=document.getElementById("aerr3");if(el)el.textContent=authMsg(error);return}
show(`<h1>Senha atualizada</h1><div class=card><p>Sua senha foi alterada com sucesso.</p></div><button class=b onclick=profileScreen()>Ir pro meu perfil</button>`)}
async function authLogout(){await supabase.auth.signOut();AU=null;home()}
async function profileScreen(){if(!hasAuth)return authScreen();if(!AU)return authScreen();
show(`<h1>Minha conta</h1><div class=card><div class=m>Logado como</div><b>${AU.email}</b></div><h2>Suas carreiras</h2><div class=card><div class=m>Carregando…</div></div><button class="b o" onclick=authLogout()>Sair da conta</button><button class="b o" onclick=home()>← Menu inicial</button>`);
const{data,error}=await supabase.from("careers").select("*").order("updated_at",{ascending:false});
profileRender(data,error)}
function profileRender(data,error){let body;
if(error)body=`<div class=card><div class=m style="color:#ff8a85">Não deu pra carregar: ${error.message}</div></div>`;
else if(!data.length)body=`<div class=card><div class=m>Você ainda não salvou nenhuma carreira. Jogue e use o botão "💾 Salvar carreira" durante a partida.</div></div>`;
else body=data.map(c=>`<div class=card><div class=r><b>${c.name}</b><span class=chip>${c.mode=="player"?"⚽ Jogador":"📋 Técnico"}</span></div><div class=m>Salvo em ${new Date(c.updated_at).toLocaleDateString("pt-BR")}</div><button class=b onclick="loadCareer('${c.id}')">▶ Carregar</button><button class="b o" onclick="deleteCareer('${c.id}')">🗑 Apagar</button></div>`).join("");
show(`<h1>Minha conta</h1><div class=card><div class=m>Logado como</div><b>${AU.email}</b></div><h2>Suas carreiras</h2>${body}<button class="b o" onclick=authLogout()>Sair da conta</button><button class="b o" onclick=home()>← Menu inicial</button>`)}
async function loadCareer(id){const{data,error}=await supabase.from("careers").select("*").eq("id",id).single();
if(error||!data)return alert("Não foi possível carregar essa carreira.");
if(data.mode=="player"){S=data.data;S.team=bind(S.team);S.parent=bind(S.parent);S._saveId=id;season()}
else{M=data.data;mgBindClub();M._saveId=id;M.fired?mgSumm():mgSeason()}}
async function deleteCareer(id){if(!confirm("Apagar esta carreira salva? Não dá pra desfazer."))return;
await supabase.from("careers").delete().eq("id",id);
profileScreen()}
function saveCareerBtn(kind){if(!hasAuth)return"";
return AU?`<button class="b o" onclick="promptSave('${kind}')">💾 Salvar carreira</button>`:`<button class="b o" onclick=authScreen()>🔑 Entrar pra salvar na nuvem</button>`}
function promptSave(kind){const def=kind=="player"?`${S.name} ${S.year}`:`${M.coach} - ${M.club.n}`;
show(`<h1>Salvar carreira</h1><div class=card><label>Nome da carreira salva</label><input id=svname value="${def.replace(/"/g,"&quot;")}"></div><div id=sverr class=m style="color:#ff8a85"></div><button class=b onclick="doSave('${kind}')">▶ Salvar</button><button class="b o" onclick="${kind=="player"?"season()":"mgSeason()"}">← Cancelar</button>`)}
async function doSave(kind){const name=(document.getElementById("svname").value||"Minha carreira").trim();
const payload=kind=="player"?S:M,id=payload._saveId,clean={...payload};delete clean._saveId;
let res;
if(id)res=await supabase.from("careers").update({name,data:clean}).eq("id",id).select().single();
else res=await supabase.from("careers").insert({user_id:AU.id,mode:kind,name,data:clean}).select().single();
if(res.error){const el=document.getElementById("sverr");if(el)el.textContent=res.error.message;return}
payload._saveId=res.data.id;
show(`<h1>Salvo!</h1><div class=card><p>Carreira salva como <b>${name}</b>.</p></div><button class=b onclick="${kind=="player"?"season()":"mgSeason()"}">▶ Continuar jogando</button><button class="b o" onclick=profileScreen()>👤 Ver meu perfil</button>`)}
function authInit(){if(!hasAuth)return Promise.resolve();
return supabase.auth.getSession().then(({data:{session}})=>{AU=session?session.user:null;
supabase.auth.onAuthStateChange((event,session)=>{AU=session?session.user:null;if(event=="PASSWORD_RECOVERY")authNewPassword()})})}
authInit().then(home);
// ========================================
// CORREÇÃO DOS BOTÕES NO VITE
// ========================================

// Disponibiliza as funções para os onclick="" do HTML.
// ===== EXTRAS: contratos, academia, clássico ao vivo, gráficos, tutorial, backup =====
function mgContracts(){
  const list=[...M.squad].sort((a,b)=>(a.ct??2)-(b.ct??2)||b.ovr-a.ovr);
  show(`<h1>Contratos</h1><p class=m>Quem está no último ano sai de graça ao fim da temporada se não renovar. Renovar custa luvas de 1,5× o salário e dá +3 anos (salário +10%).</p>
<div class=card style="padding:6px 14px">${list.map(p=>{const ct=p.ct??2,cost=Math.max(1,Math.round(p.wage*1.5));
return`<div class=sr><span class="lu-ov ${ovrTier(p.ovr)}">${p.ovr}</span><span class=lu-rb><b>${p.n}</b><small>${p.pos} · ${p.age} anos · R$ ${p.wage}M · ${ct<=1?`<u style="color:#fca5a5">último ano</u>`:`até ${M.year+ct-1}`}${p.out?" · 🩹 lesionado":""}</small></span><button class="lu-lnk" ${M.budget<cost?"disabled":""} onclick="mgRenew(${p.id})">Renovar · R$ ${cost}M</button></div>`}).join("")}</div>
<button class="b o" onclick=mgSeason()>← Voltar</button>`)}
function mgRenew(id){const p=M.squad.find(x=>x.id==id);if(!p)return;const cost=Math.max(1,Math.round(p.wage*1.5));
  if(M.budget<cost){alert(`Orçamento insuficiente: luvas de R$ ${cost}M`);return}
  M.budget-=cost;p.ct=(p.ct??2)+3;p.wage=Math.round(p.wage*1.1)+1;mgSv();mgContracts()}
function genYouth(){const q=M.base||0,out=[];
  for(let i=0;i<4;i++){const pos=P(POS.filter(x=>x!="Goleiro"||Math.random()<.25)),ovr=Math.round(R(44,56)+q*1.2+G()*2),pot=Math.min(92,Math.round(ovr+R(10,26)+q*1.5));
    out.push({id:7000+i,n:genName(),pos,age:16+Math.floor(Math.random()*3),ovr,pot,yrs:0,ct:4,wage:1})}return out}
function mgAcademy(){if(!M.youth)M.youth=genYouth();
  show(`<h1>Academia de base</h1><p class=m>Nível da base: <b>${M.base||0}</b> (investir na base melhora a qualidade das promessas). Promova jovens para o elenco: eles evoluem rápido até o potencial.</p>
${M.youth.length?M.youth.map(p=>`<div class=card><div class=r><b>${p.n}</b><span class=s>${st(p.pot)}</span></div><div class=m>${p.pos} · ${p.age} anos · OVR ${p.ovr} · potencial ~${p.pot}</div><div class=lu-bar style="margin:8px 0"><i style="width:${Math.max(5,Math.min(100,p.pot-35))}%;background:linear-gradient(90deg,#178a53,var(--gold))"></i></div><button class=b ${M.squad.length>=32?"disabled":""} onclick="mgPromote(${p.id})">⬆ Promover ao elenco</button></div>`).join(""):`<div class=card><div class=m>Nenhuma promessa disponível agora. Novos garotos chegam na próxima temporada.</div></div>`}
<button class="b o" ${M.left?"":"disabled"} onclick=mgYouthRefresh()>🔍 Observar nova leva (gasta 1 ação)</button>
<button class="b o" onclick=mgSeason()>← Voltar</button>`)}
function mgPromote(id){const p=(M.youth||[]).find(x=>x.id==id);if(!p||M.squad.length>=32)return;
  M.youth=M.youth.filter(x=>x.id!=id);M.squad.push({...p,id:Math.max(1,...M.squad.map(x=>x.id))+1});mgSv();mgAcademy()}
function mgYouthRefresh(){if(M.left<=0)return;M.youth=genYouth();M.left--;mgAcademy()}
// ---- clássico ao vivo ----
let _lv=null;
function mgDerbyRival(){const t=M.club;if(M.rival){const r=T.find(x=>x.n==M.rival);if(r)return r}
  const pool=T.filter(x=>x.c=="Brasil"&&x.d==t.d&&x!==t).sort((a,b)=>Math.abs(a.avg-t.avg)-Math.abs(b.avg-t.avg)).slice(0,6);
  const r=P(pool.length?pool:T.filter(x=>x!==t));M.rival=r.n;return r}
function mgDerby(){if(M.derby){mgSeason();return}
  const r=mgDerbyRival();_lv={opp:r.n,oa:r.avg,ma:mgTeamOvr()+MGT[M.tac][2]-((DIFF[M.diff]||DIFF.normal).mgPen||0)/2,min:0,gh:0,ga:0,log:[],tac:M.tac,subs:0,hurt:0,red:0,rr:0,end:0};
  _lv.log.push("⏱ Bola rolando! "+M.club.n+" x "+r.n);lvRender()}
function lvLam(){const v=_lv,d=Math.max(-2.5,Math.min(2.5,(v.ma-v.oa)/10));let h=1.32*Math.exp(.37*d+.05),a=Math.exp(-.37*d-.05);
  const tm={of:[1.18,1.12],eq:[1,1],de:[.84,.8]}[v.tac];h*=tm[0];a*=tm[1];
  if(v.min>=60)h*=1-Math.max(0,.1-.03*v.subs);
  h*=1-.06*v.hurt;if(v.red){h*=.7;a*=1.2}if(v.rr){h*=1.25;a*=.7}return[h,a]}
function lvScorer(){const W={Atacante:5,Ponta:3,Meia:2,Volante:1,Lateral:1,Zagueiro:.7,Goleiro:0},rs=luStats().rows,pl=rs.length?rs.map(r=>r.p):M.squad.slice(0,11);
  const ws=pl.map(p=>W[p.pos]||1),tot=ws.reduce((a,b)=>a+b,0);let x=Math.random()*tot;for(let i=0;i<pl.length;i++){x-=ws[i];if(x<=0)return pl[i]}return pl[0]}
function lvStep(to){const v=_lv;
  for(let m=v.min+1;m<=to;m++){v.min=m;const[h,a]=lvLam(),r=Math.random();
    if(r<h/90){v.gh++;v.log.push(`${m}' ⚽ GOL! ${lvScorer().n} marca para o ${M.club.n} (${v.gh}x${v.ga})`)}
    else if(r<(h+a)/90){v.ga++;v.log.push(`${m}' ⚽ Gol do ${v.opp}... (${v.gh}x${v.ga})`)}
    else{const q=Math.random();
      if(q<.012)v.log.push(`${m}' 🧤 Grande defesa do goleiro!`);
      else if(q<.02)v.log.push(`${m}' 🟨 Cartão amarelo na partida.`);
      else if(q<.0225&&!v.red){v.red=1;v.log.push(`${m}' 🟥 EXPULSÃO! ${M.club.n} fica com um a menos.`)}
      else if(q<.025&&!v.rr){v.rr=1;v.log.push(`${m}' 🟥 ${v.opp} tem jogador expulso!`)}
      else if(q<.0275&&v.hurt<2){v.hurt++;v.log.push(`${m}' 🩹 Titular sente lesão. Considere uma substituição.`)}}}
  if(v.min>=90){v.end=1;v.log.push(`90' 🏁 Fim de jogo: ${v.gh}x${v.ga}`)}}
function lvGo(){const v=_lv;lvStep(v.min<45?45:v.min<70?70:90);lvRender()}
function lvSkip(){lvStep(90);lvRender()}
function lvTac(k){_lv.tac=k;_lv.log.push(`🧠 Mudança tática: ${MGT[k][0]}`);lvRender()}
function lvSub(){const v=_lv;if(v.subs>=3)return;const rs=luStats().rows.filter(r=>r.p.pos!="Goleiro");if(!rs.length)return;
  const on=new Set(Object.values(M.lineup||{})),cand=rs.map(r=>({r,b:M.squad.filter(p=>!on.has(p.id)&&!p.out&&p.pos==r.p.pos&&!(v.used||[]).includes(p.id)).sort((a,b)=>b.ovr-a.ovr)[0]})).filter(x=>x.b);
  if(!cand.length){v.log.push("🔄 Sem reservas disponíveis para essa troca.");lvRender();return}
  const c=P(cand);v.used=[...(v.used||[]),c.b.id];v.subs++;if(v.hurt)v.hurt--;v.log.push(`${v.min}' 🔄 Substituição: ${c.b.n} (${c.b.ovr}) entra no lugar de ${c.r.p.n}`);lvRender()}
function lvFinish(){const v=_lv,res=v.gh>v.ga?"V":v.gh<v.ga?"D":"E";M.derby={opp:v.opp,res,sc:`${v.gh}x${v.ga}`};_lv=null;mgSv();mgSeason()}
function lvRender(){const v=_lv,ph=v.min<45?"Primeiro tempo":v.min<70?"Segundo tempo":v.min<90?"Reta final":"Encerrado",nx=v.min<45?"▶ Ir ao intervalo":v.min<70?"▶ Seguir até os 70'":"▶ Reta final";
  const res=v.gh>v.ga?"Vitória! +1,2 de força na temporada e +2 de reputação":v.gh<v.ga?"Derrota. −0,8 de força na temporada e −2 de reputação":"Empate. Pequeno ganho de moral";
  window._na=1;
  show(`<h1>⚔️ Clássico ao vivo</h1><p class=m>O resultado deste jogo dá moral (ou pressão) ao time pelo restante da temporada.</p>
<div class="card lv-sb"><div class=lv-t><span>${M.club.n}</span><b>${v.gh}</b></div><div class=lv-mid><em>${v.min}'</em><small>${ph}</small></div><div class=lv-t><b>${v.ga}</b><span>${v.opp}</span></div>
<div class=lu-bar style="grid-column:1/-1"><i style="width:${v.min*100/90}%"></i></div></div>
${v.end?`<div class=card><b>${res}</b></div><button class=b onclick=lvFinish()>Continuar</button>`:`<div class=card><div class=m style="margin-bottom:8px">Instruções <span class=m>(trocas ${v.subs}/3)</span></div>
<div class=dg>${Object.entries(MGT).map(([k,x])=>`<button class="b o diff-btn${v.tac==k?" on":""}" onclick="lvTac('${k}')"><b>${x[0]}</b></button>`).join("")}</div>
<div class=g style="margin-top:9px"><button class="b o" ${v.subs>=3?"disabled":""} onclick=lvSub()>🔄 Substituir<br><small>melhor reserva da posição</small></button><button class="b o" onclick=lvSkip()>⏭ Simular até o fim</button></div></div>
<button class=b onclick=lvGo()>${nx}</button>`}
<div class="card lv-log">${[...v.log].reverse().map(x=>`<div class=li>${x}</div>`).join("")}</div>`)}
// ---- gráficos ----
function lineChart(vals,o={}){const w=300,h=120,p=18,n=vals.length;if(!n)return"";
  const mx=Math.max(...vals),mn=Math.min(...vals),rg=(mx-mn)||1,X=i=>n==1?w/2:p+i*(w-2*p)/(n-1),Y=v=>{const t=(v-mn)/rg;return p+(o.inv?t:1-t)*(h-2*p)},c=o.c||"#31df83";
  return`<svg viewBox="0 0 ${w} ${h}" class=lc><polyline fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round" points="${vals.map((v,i)=>X(i)+","+Y(v)).join(" ")}"/>${vals.map((v,i)=>`<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="${c}"/><text x="${X(i)}" y="${Y(v)-8}" text-anchor="middle">${o.f?o.f(v):v}</text>`).join("")}</svg>`}
function mgCharts(){const h=(M.hist||[]).slice(-10);if(h.length<2)return"";
  const yrs=`<div class=lc-x>${h.map(x=>`<span>${String(x.y).slice(2)}</span>`).join("")}</div>`,has=h.every(x=>x.bud!=null);
  return`<h2>Gráficos da carreira</h2><div class=charts><div class=card><b>Posição na liga</b>${lineChart(h.map(x=>x.pos),{inv:1,f:v=>v+"º"})}${yrs}</div>${has?`<div class=card><b>Orçamento (R$ M)</b>${lineChart(h.map(x=>x.bud),{c:"#f4c95d"})}${yrs}</div><div class=card><b>Reputação</b>${lineChart(h.map(x=>x.rep),{c:"#7db4ee"})}${yrs}</div>`:""}</div>`}
// ---- tutorial ----
const TUT=[["📋","Escale seu time","Toque em “Escalar time”, escolha uma posição no campo e selecione o jogador. Fora da posição natural ele rende menos."],["🧠","Entrosamento","Quanto mais temporadas no clube e na posição certa, maior o entrosamento, que aumenta a força real do time."],["💰","Orçamento e contratos","Contrate no mercado, renove contratos que vencem e cuide para a folha salarial não passar da receita."],["🌱","Base, lesões e clássico","Promova jovens da academia, lide com lesões dos titulares e jogue o clássico ao vivo para ganhar moral."]];
const tutSeen=()=>{try{return!!localStorage.getItem("cf_tut")}catch(e){return true}};
function tutOpen(i){i=+i||0;let el=document.getElementById("tut");
  if(i>=TUT.length){try{localStorage.setItem("cf_tut","1")}catch(e){}if(el)el.remove();return}
  if(!el){el=document.createElement("div");el.id="tut";document.body.appendChild(el)}
  const[ic,t,d]=TUT[i];el.innerHTML=`<div class=lu-back style="align-items:center;padding:16px"><div class=tut-box><span class=cs-i>${ic}</span><h3>${t}</h3><p>${d}</p><div class=cs-dots>${TUT.map((_,k)=>`<i class="${k==i?"on":""}"></i>`).join("")}</div><div style="display:flex;gap:8px"><button class="b o" onclick="tutOpen(99)">Pular</button><button class=b onclick="tutOpen(${i+1})">${i+1<TUT.length?"Próximo":"Entendi"}</button></div></div></div>`}
// ---- backup em arquivo ----
function dlSave(kind){const k=kind=="mg"?"cf2":"cf1";let v=null;try{v=localStorage.getItem(k)}catch(e){}
  if(!v){alert("Nenhuma carreira salva nesse modo.");return}
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([v],{type:"application/json"}));a.download=`carreira-${kind=="mg"?"tecnico":"jogador"}-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove()}
function impSave(inp){const f=inp.files&&inp.files[0];if(!f)return;const r=new FileReader();
  r.onload=()=>{try{const d=JSON.parse(r.result),mg=d&&Array.isArray(d.squad)&&d.formation,pl=d&&Array.isArray(d.hist)&&d.pos&&d.team;if(!mg&&!pl)throw 0;
    localStorage.setItem(mg?"cf2":"cf1",JSON.stringify(d));mg?mgResume():resume()}catch(e){alert("Arquivo de carreira inválido.")}};r.readAsText(f)}
function csDot(el){const i=Math.round(el.scrollLeft/(el.firstElementChild.offsetWidth+10));document.querySelectorAll("#cs-dots i").forEach((d,k)=>d.classList.toggle("on",k==i))}
(function(){let sx=0,sy=0,ok=0;const A=document.getElementById("a");
A.addEventListener("touchstart",e=>{const t=e.touches[0];sx=t.clientX;sy=t.clientY;ok=!e.target.closest(".cs,input,select,.sc,#lu-field,.lu-sheet")},{passive:true});
A.addEventListener("touchend",e=>{if(!ok)return;const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;if(Math.abs(dx)<70||Math.abs(dx)<Math.abs(dy)*2)return;const on=A.querySelector(".tab.on");if(!on)return;const nx=dx<0?on.nextElementSibling:on.previousElementSibling;if(nx)nx.click()},{passive:true});
let dn=0,x0=0,l0=0,cs=null;document.addEventListener("pointerdown",e=>{const c=e.target.closest&&e.target.closest(".cs");if(c&&e.pointerType=="mouse"){dn=1;cs=c;x0=e.clientX;l0=c.scrollLeft;c.classList.add("drag")}});
document.addEventListener("pointermove",e=>{if(dn&&cs)cs.scrollLeft=l0-(e.clientX-x0)});
document.addEventListener("pointerup",()=>{if(cs)cs.classList.remove("drag");dn=0;cs=null});
document.addEventListener("keydown",e=>{if(e.key!="ArrowRight"&&e.key!="ArrowLeft")return;if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;const on=A.querySelector(".tab.on");if(!on)return;const nx=e.key=="ArrowRight"?on.nextElementSibling:on.previousElementSibling;if(nx)nx.click()})})();
Object.assign(window, {
  csDot,
  luToggle,luEditT,luEditDone,mgLineupEdit,
  mgContracts,mgRenew,mgAcademy,mgPromote,mgYouthRefresh,mgDerby,lvGo,lvSkip,lvTac,lvSub,lvFinish,tutOpen,dlSave,impSave,
  start,
  resume,
  skSet,
  pick,
  tr,
  go,
  evt,
  evo,
  offers,
  end,
  home,
  season,
  idolPick,
  idolSet,
  pickDiff,
  cele,
  summ,
  tbl,
  openTbl,
  T,
  careerForm,
  mgSetup,
  mgToCreate,
  mgCreateGo,
  mgToPick,
  mgPickGo,
  mgFindClub,
  mgTakeClub,
  mgResume,
  mgSeason,
  mgInv,
  mgTac,
  mgFormation,
  mgSquad,
  mgSellPlayer,
  mgMarket,
  mgBuyPlayer,
  mgRefreshMarket,
  mgGo,
  mgCele,
  mgSumm,
  mgOpenTbl,
  mgTbl,
  mgEnd,
  mgLineup,
  mgLineupAuto,
  mgLineupSave,
  luChoose,
  luClose,
  luAllT,
  luRemove,
  _renderLu,
  luDS,
  luOv,
  luDp,
  luZC,
  luPC,
  luPlace,
  cleanLineup,
  authScreen,
  authLogin,
  authSignup,
  authForgot,
  authForgotSend,
  authNewPassword,
  authNewPasswordSave,
  authLogout,
  profileScreen,
  loadCareer,
  deleteCareer,
  promptSave,
  doSave
});

// Disponibiliza a variável S globalmente.
Object.defineProperty(window, "S", {
  configurable: true,

  get: () => S,

  set: value => {
    S = value;
  }
});
Object.defineProperty(window, "M", {
  configurable: true,
  get: () => M,
  set: value => {
    M = value;
  }
});
Object.defineProperty(window, "AU", {
  configurable: true,
  get: () => AU,
  set: value => {
    AU = value;
  }
});