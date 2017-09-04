angular.module("myApp").controller("myCtrl", function($scope) {
  $scope.people = people;
  $scope.removeUser = function(ind){
    $scope.people.splice(ind, 1)
  }
})

var people = [{
    "first_name": "Kirsteni",
    "last_name": "Dunseath",
    "email": "kdunseath0@hubpages.com",
    "gender": "Female",
    "img_url": "https://robohash.org/odioconsequaturomnis.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Nessi",
    "last_name": "Picken",
    "email": "npicken1@yahoo.com",
    "gender": "Female",
  },
  {
    "first_name": "Clo",
    "last_name": "Batecok",
    "email": "cbatecok2@cbsnews.com",
    "gender": "Female",
    "img_url": "https://robohash.org/nihilhicmolestiae.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Lacey",
    "last_name": "Parlett",
    "email": "lparlett3@fema.gov",
    "gender": "Female",
    "img_url": "https://robohash.org/officiisetreprehenderit.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Roseann",
    "last_name": "Ansteys",
    "email": "ransteys4@miibeian.gov.cn",
    "gender": "Female",
    "img_url": "https://robohash.org/sedblanditiisquo.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Carlynne",
    "last_name": "Gingles",
    "email": "cgingles5@merriam-webster.com",
    "gender": "Female",
    "img_url": "https://robohash.org/eiusdistinctioat.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Adiana",
    "last_name": "Karet",
    "email": "akaret6@squarespace.com",
    "gender": "Female",
    "img_url": "https://robohash.org/aspernaturmaioresquasi.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Leigh",
    "last_name": "Dodswell",
    "email": "ldodswell7@archive.org",
    "gender": "Female",
    "img_url": "https://robohash.org/optioeaiure.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Katalin",
    "last_name": "Chattell",
    "email": "kchattell8@buzzfeed.com",
    "gender": "Female",
    "img_url": "https://robohash.org/utnihilsequi.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Fae",
    "last_name": "Bester",
    "email": "fbester9@arizona.edu",
    "gender": "Female",
    "img_url": "https://robohash.org/molestiasvelneque.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Crawford",
    "last_name": "Gauntlett",
    "email": "cgauntletta@google.com.br",
    "gender": "Male",
    "img_url": "https://robohash.org/fugitvoluptasautem.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Aubrey",
    "last_name": "Ruckman",
    "email": "aruckmanb@cisco.com",
    "gender": "Female",
    "img_url": "https://robohash.org/doloremquostotam.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Allin",
    "last_name": "Burch",
    "email": "aburchc@globo.com",
    "gender": "Male",
    "img_url": "https://robohash.org/oditetillum.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Jillie",
    "last_name": "Lampet",
    "email": "jlampetd@google.de",
    "gender": "Female",
    "img_url": "https://robohash.org/enimsedvoluptas.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Davie",
    "last_name": "Uc",
    "email": "duce@eepurl.com",
    "gender": "Male",
    "img_url": "https://robohash.org/minuscorporissit.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Leshia",
    "last_name": "Dieton",
    "email": "ldietonf@4shared.com",
    "gender": "Female",
    "img_url": "https://robohash.org/fugiatnemoquam.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Corney",
    "last_name": "Cecely",
    "email": "ccecelyg@nps.gov",
    "gender": "Male",
    "img_url": "https://robohash.org/utnullasit.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Myra",
    "last_name": "Everex",
    "email": "meverexh@meetup.com",
    "gender": "Female",
    "img_url": "https://robohash.org/earumaspernaturculpa.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Gherardo",
    "last_name": "Deards",
    "email": "gdeardsi@ustream.tv",
    "gender": "Male",
    "img_url": "https://robohash.org/corporissintvelit.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Redford",
    "last_name": "Baert",
    "email": "rbaertj@vistaprint.com",
    "gender": "Male",
    "img_url": "https://robohash.org/velitquoharum.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Adolphus",
    "gender": "Male",
    "img_url": "https://robohash.org/earumautnon.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Catrina",
    "last_name": "Solland",
    "email": "csollandl@mashable.com",
    "gender": "Female",
    "img_url": "https://robohash.org/suntametaut.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Regina",
    "last_name": "Pilmore",
    "email": "rpilmorem@webnode.com",
    "gender": "Female",
    "img_url": "https://robohash.org/ducimusvoluptateet.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Elizabet",
    "last_name": "Lampen",
    "email": "elampenn@cbc.ca",
    "gender": "Female",
    "img_url": "https://robohash.org/quaeratharumdolorem.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Addison",
    "last_name": "Alentyev",
    "email": "aalentyevo@sbwire.com",
    "gender": "Male",
    "img_url": "https://robohash.org/ipsametharum.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Lucas",
    "last_name": "Dulieu",
    "email": "ldulieup@youku.com",
    "gender": "Male",
    "img_url": "https://robohash.org/etofficiaadipisci.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Jammal",
    "last_name": "Padson",
    "email": "jpadsonq@si.edu",
    "gender": "Male",
    "img_url": "https://robohash.org/nemodelenitiveritatis.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Edita",
    "last_name": "McCroft",
    "email": "emccroftr@pbs.org",
    "gender": "Female",
    "img_url": "https://robohash.org/velitinvel.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Palm",
    "last_name": "Kippin",
    "email": "pkippins@purevolume.com",
    "gender": "Male",
    "img_url": "https://robohash.org/quotemporatemporibus.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Herbie",
    "last_name": "Kiehnlt",
    "email": "hkiehnltt@g.co",
    "gender": "Male",
    "img_url": "https://robohash.org/consequunturvoluptatemodio.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Fabiano",
    "last_name": "Corona",
    "email": "fcoronau@arstechnica.com",
    "gender": "Male",
  },
  {
    "first_name": "Britt",
    "last_name": "Coomber",
    "email": "bcoomberv@blogtalkradio.com",
    "gender": "Male",
  },
  {
    "first_name": "Ingeborg",
    "last_name": "Skillicorn",
    "email": "iskillicornw@ucoz.ru",
    "gender": "Female",
    "img_url": "https://robohash.org/reprehenderitfacerenobis.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Cassandre",
    "last_name": "Plessing",
    "email": "cplessingx@sogou.com",
    "gender": "Female",
    "img_url": "https://robohash.org/eiusvoluptatesomnis.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Nelle",
    "last_name": "Craighead",
    "email": "ncraigheady@china.com.cn",
    "gender": "Female",
    "img_url": "https://robohash.org/cumexercitationeminventore.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Elbertine",
    "last_name": "Eckels",
    "email": "eeckelsz@weather.com",
    "gender": "Female",
    "img_url": "https://robohash.org/rerumdolorempariatur.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Dorthy",
    "last_name": "Genery",
    "email": "dgenery10@statcounter.com",
    "gender": "Female",
    "img_url": "https://robohash.org/ametnumquamquos.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Grover",
    "last_name": "Kordes",
    "email": "gkordes11@vimeo.com",
    "gender": "Male",
    "img_url": "https://robohash.org/facilisutofficiis.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Imogene",
    "last_name": "Kingsnode",
    "email": "ikingsnode12@infoseek.co.jp",
    "gender": "Female",
    "img_url": "https://robohash.org/laboriosambeataeadipisci.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Brittni",
    "last_name": "Athey",
    "email": "bathey13@myspace.com",
    "gender": "Female",
    "img_url": "https://robohash.org/atquereiciendisquia.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Lavinia",
    "last_name": "Pasque",
    "email": "lpasque14@dagondesign.com",
    "gender": "Female",
    "img_url": "https://robohash.org/eumfugiatmolestiae.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Oates",
    "last_name": "Dunbleton",
    "email": "odunbleton15@washington.edu",
    "gender": "Male",
    "img_url": "https://robohash.org/autconsequaturvoluptas.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Breanne",
    "last_name": "Anetts",
    "email": "banetts16@51.la",
    "gender": "Female",
    "img_url": "https://robohash.org/quiamolestiaeat.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Adrien",
    "last_name": "Cossam",
    "email": "acossam17@wikispaces.com",
    "gender": "Male",
    "img_url": "https://robohash.org/impeditnullaab.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Tera",
    "last_name": "Fitchett",
    "email": "tfitchett18@meetup.com",
    "gender": "Female",
    "img_url": "https://robohash.org/utnihilaspernatur.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Derwin",
    "last_name": "D'Ambrosio",
    "email": "ddambrosio19@eepurl.com",
    "gender": "Male",
    "img_url": "https://robohash.org/enimveritatisquasi.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Milo",
    "last_name": "Penman",
    "email": "mpenman1a@fastcompany.com",
    "gender": "Male",
    "img_url": "https://robohash.org/velabquia.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Kimmy",
    "last_name": "Cutmare",
    "email": "kcutmare1b@bbb.org",
    "gender": "Female",
    "img_url": "https://robohash.org/modiquiarem.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Ingemar",
    "last_name": "Havik",
    "email": "ihavik1c@businesswire.com",
    "gender": "Male",
    "img_url": "https://robohash.org/doloreitaquequisquam.jpg?size=50x50&set=set1"
  },
  {
    "first_name": "Derk",
    "last_name": "Pearmine",
    "email": "dpearmine1d@quantcast.com",
    "gender": "Male",
    "img_url": "https://robohash.org/itaqueerroresse.jpg?size=50x50&set=set1"
  }
]
