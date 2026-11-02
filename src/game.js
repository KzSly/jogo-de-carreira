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
  facil:{label:"Fácil 🟢",desc:"Mais evolução, menos lesões, propostas melhores",growMult:1.35,injMult:.45,offerBonus:6},
  normal:{label:"Normal ⚽",desc:"Experiência padrão, fiel à realidade",growMult:1,injMult:1,offerBonus:0},
  dificil:{label:"Difícil 🔴",desc:"Evolução lenta, mais lesões, concorrência dura",growMult:.72,injMult:1.7,offerBonus:-5}
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
function simM(a,b){const d=Math.max(-15,Math.min(15,a+2.2-b))/9;return[pois(Math.max(.16,1.38+d*.62)),pois(Math.max(.16,1.16-d*.62))]}
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
const $=document.getElementById("a"),show=h=>{$.innerHTML=h;scrollTo(0,0)};
let S=null;
function sv(){try{localStorage.setItem("cf1",JSON.stringify(S))}catch(e){}}
function bind(x){return x&&(T.find(t=>t.n==x.n&&t.c==x.c)||x)}
function home(){let sv_="";try{sv_=localStorage.getItem("cf1")}catch(e){}
const birthOpts=[];for(let y=2005;y<=2016;y++)birthOpts.push(`<option value=${y}${y==2010?" selected":""}>${y} (começa com ${2027-y} anos)</option>`);
show(`<h1>⚽ Carreira de Futebol</h1>
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
${sv_?`<button class="b o" onclick=resume()>Continuar carreira salva</button>`:""}`)}
function pickDiff(k){const h=document.getElementById('dif');if(!h)return;h.value=k;
document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('on'));
const btn=document.getElementById('diff-'+k);if(btn)btn.classList.add('on')}
function resume(){try{S=JSON.parse(localStorage.getItem("cf1"));S.team=bind(S.team);S.parent=bind(S.parent);season()}catch(e){home()}}
function start(){const nat=document.getElementById("na").value,birth=+document.getElementById("by").value,diff=document.getElementById("dif").value||"normal";
S={name:document.getElementById("nm").value||"Craque",pos:document.getElementById("ps").value,num:+document.getElementById("nu").value||10,nat,age:2027-birth,birth,diff,ovr:50,year:2027,hist:[],titles:[],tr:{},left:5,parent:null,gain:3,ratio:.5,peak:50,out:0,sk:null,idol:null,idolSk:null};
idolPick()}
function hd(){const t=S.team,o=Math.round(S.ovr),base=S.age<16;
return`<div class="card ph">
<div class=ph-top>
<div class=ph-id><div class=ph-nm>${S.name} <span class=ph-num>#${S.num}</span></div><div class=m>${S.pos} · ${S.nat} · ${S.age} anos</div></div>
<div class="ovr ${o>=85?"o5":o>=75?"o4":o>=65?"o3":"o2"}"><b>${o}</b><span>NÍVEL</span></div>
</div>
<div class=ph-club><div><b>${t.n}</b><div class=m>${t.lg} · ${t.c}</div></div><div style="text-align:right"><span class=s>${st(t.avg)}</span><div class=m>força ${t.avg}</div></div></div>
<div class=chips>${base?'<span class="chip y">🧒 Categoria de base</span>':""}${S.parent?'<span class="chip">🔁 Emprestado</span>':""}${S.idol?`<span class=chip>🌟 ${S.idol}</span>`:""}${S.skn?`<span class="chip g">⭐ ${S.skn}</span>`:""}${S.out>0?'<span class="chip r">🩹 Lesionado</span>':""}</div>
</div>`}
function season(){sv();const L=S.left,TN=TS();
show(`<h1>Temporada ${S.year}</h1>${hd()}
<h2>Treinos <span class=m>(${L} de 5 restantes${S.age<=29?" · +50% jovem":""})</span></h2>
<div class=g>${Object.keys(TN).map(k=>`<button class="b o trn${S.tr[k]?" has":""}" ${L?"":"disabled"} onclick="tr('${k}')">${TN[k]}${k==S.sk?" ⭐":""}${k==S.idolSk?" 🌟":""}${S.tr[k]?`<em>×${S.tr[k]}</em>`:""}</button>`).join("")}<button class="b o" onclick="S.tr={};S.left=5;season()">↺ Zerar</button></div>
<p class=m>⭐ ${S.skn||"-"}: bônus gigante em ${TN[S.sk]||"-"}. 🌟 ${S.idol||"-"}: +25% em ${TN[S.idolSk]||"-"}. Físico ajuda após os 30 e reduz lesões; Inteligência dá mais minutos.</p>
${S.comps&&S.comps.length?`<button class="b o" onclick="openTbl('season',0)">📊 Tabelas de ${S.compY}</button>`:""}
<button class=b onclick=go()>▶ Simular temporada</button>`)}
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
if(ig){const W=[0,1,4,10,38,76][ig],l2=Math.min(38-lost,W);lost+=l2;S.out+=W-l2;if(ig==4)ijd=R(3,6);if(ig==5)ijd=R(6,10);L.push(`🩹 Lesão grau ${ig}: ${["","1 semana","1 mês","1 trimestre","1 ano","2 anos"][ig]} sem jogar${ig>3?" e queda de nível":""}`)}}
let gm=Math.round(ratio*36*(38-lost)/38);const rg=ratio*(38-lost)/38;
const CP=[];const myAvg=t.avg+eff;
// liga — pontos corridos completo
let lgPool=T.filter(x=>x.c==t.c&&x.d==t.d);if(!lgPool.includes(t))lgPool=[t,...lgPool];
let rows=lgPool.map(x=>row(x.n,x===t?myAvg:x.avg,x===t));
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
let b=a<=17?2.6:a<=20?2.4:a<=24?1.8:a<=29?.8:a<=34?-.5:-(.7+(a-35)*.35);
if(b>0)b*=Math.max(.3,Math.min(1.2,(99-S.ovr)/45));
let gr=(b+(a>=35?trg*.5:trg)+(rg-.5)*(a<=29?1.5:.5)+G()*.6*(tr.int?.6:1))*dfm;if(a>=35)gr=Math.min(gr,-.2);if(gr>0&&a>=30)gr*=.6;if(gr>0)gr*=S.ovr<80?1:S.ovr<90?1-(S.ovr-80)*.07:Math.max(.08,.3-(S.ovr-90)*.04);
gr-=ijd;const o0=S.ovr;S.ovr=Math.max(40,Math.min(99,S.ovr+gr));S.gain=gr+ijd;S.ratio=ratio;S.peak=Math.max(S.peak,S.ovr);
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
<h2>Seu desempenho</h2><div class=card><div class=li>${S.line}</div><div class=li>Nível ${S.dl}</div></div>
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
show(`<h1>${E[i][0]}</h1><div class=card>${o[0]}: ${d>=0?"seu nível subiu":"seu nível caiu"} ${Math.abs(d).toFixed(1)}.<br>Nível atual: <b>${Math.round(S.ovr)}</b></div><button class=b onclick=offers()>Ver propostas</button>`)}
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
show(`<h1>🏁 Fim de carreira</h1><div class=card><b>${S.name}</b> #${S.num} · ${S.pos} · ${S.nat}<br>Encerrou aos ${S.age} anos (${S.hist.length} temporadas)<br>Nível final ${Math.round(S.ovr)} · pico ${Math.round(S.peak)}</div>
<h2>Estatísticas</h2><div class=card>Jogos: <b>${J}</b><br>${S.pos=="Goleiro"?`Jogos sem sofrer gol: <b>${C}</b>`:`Gols: <b>${Gl}</b> · Assistências: <b>${A}</b>`}<br>Títulos: <b>${S.titles.length}</b><br>Lesões: <b>${I}</b></div>
<h2>🏆 Títulos</h2><div class=card>${nt.length?nt.map(n=>`<div class=r><span style="display:flex;align-items:center;gap:8px"><img src="${tImg(n)}" width=44 height=44 alt="">${n}</span><b>${tt[n]}× <span class=m>${S.titles.filter(t=>t.n==n).map(t=>t.y).join(", ")}</span></b></div>`).join(""):"Nenhum título conquistado."}</div>
<h2>⭐ Prêmios individuais</h2><div class=card>${Object.keys(aa).length?Object.keys(aa).map(n=>`<div class=r><span style="display:flex;align-items:center;gap:8px"><img src="${tImg(n)}" width=44 height=44 alt="">${n}</span><b>${aa[n].length}× <span class=m>${aa[n].join(", ")}</span></b></div>`).join(""):"Nenhum prêmio individual."}</div><h2>Times</h2><div class="card sc"><table><tr><th>Time</th><th>Anos</th><th>J</th><th>${S.pos=="Goleiro"?"SG":"G/A"}</th></tr>${Object.keys(sp).map(k=>{const s=sp[k];return`<tr><td>${k}</td><td>${s.y[0]}${s.y.length>1?"–"+s.y[s.y.length-1]:""}</td><td>${s.g}</td><td>${S.pos=="Goleiro"?s.cs:s.go+"/"+s.as}</td></tr>`}).join("")}</table></div>
<button class=b onclick=home()>Nova carreira</button>`)}
home();
// ========================================
// CORREÇÃO DOS BOTÕES NO VITE
// ========================================

// Disponibiliza as funções para os onclick="" do HTML.
Object.assign(window, {
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
  T
});

// Disponibiliza a variável S globalmente.
Object.defineProperty(window, "S", {
  configurable: true,

  get: () => S,

  set: value => {
    S = value;
  }
});