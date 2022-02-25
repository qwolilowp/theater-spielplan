/*khk 2014-2021*/

/**************************************************************************/
/***************************CONTROL FUNCTIONS / letS **********************/
/**************************************************************************/
//C:\Users\hannes\AppData\Local\Google\Chrome\Application\chrome.exe --allow-file-access-from-files
"use strict";

//"use strong";

//testing
let test = false;
let starttime = Date.now();

//HW spec
let howmanyTHREADS = 4; 
let timeouttimettt = 10000; //ms to wait to save img
//glob data
let schwellePOSNEG = 1.0; //initilaer wert
let picindex = 0; // index to adress example pictures in array, no let delration - to make it global let
let GLD = []; //bilddaten von der gpu
let Rechter = [];
let Linker = [];
let Oberer = [];
let Unterer = [];

// DB
let dbversion = 1;

//input
let picpath = "pic/tbil/";
let thumbpath = "pic/tbil/thumbs/";

let thesrces = [
"168.jpg",
"167.jpg",
"166.jpg",
"165.jpg",
"164.jpg",
"163.jpg",
"162.jpg",
"161.jpg",
"160.jpg",
"159.jpg",
"158.jpg",
"157.jpg",
"156.png",
"155.png",
"154.png",
"153.png",
"152.png",
"151.png",
"150.png",
"149.png",
"148.jpg",
"147.jpg",
"146.jpg",
"145.jpg",
"144.jpg",
"143.png",
"142.jpg",
"141.jpg",
"140.jpg",
"139.jpg",
"138.jpg",
"137.jpg",
"136.jpg",
"124.jpg",
"129.jpg",
"130.jpg",
"131.jpg",
"132.jpg",
"133.jpg",
"134.jpg",
"135.jpg",
"001.jpg",
"002.jpg",
"003.jpg",
"004.jpg",
"005.jpg",
"006.jpg",
"007.jpg",
"008.jpg",
"009.jpg",
"010.jpg",
"011.jpg"
,"012.jpg"
,"013.jpg"
,"014.jpg"
,"015.jpg"
,"016.jpg"
,"017.jpg"
,"018.jpg"
,"019.jpg"
,"020.jpg"
,"021.jpg"
,"022.jpg"
,"023.jpg"
,"024.jpg"
,"025.jpg"
,"026.jpg"
,"027.jpg"
,"028.jpg"
,"029.jpg"
,"030.jpg"
,"031.jpg"
//,"032.jpg"
//,"033.jpg"
//,"034.jpg"
,"035.jpg"
,"036.jpg"
,"037.jpg"
,"038.jpg"
,"039.jpg"
,"040.jpg"
,"041.jpg"
,"042.jpg"
,"043.jpg"
,"044.jpg"
,"045.jpg"
,"046.jpg"
,"047.jpg"
,"048.jpg"
,"049.jpg"
,"050.jpg"
,"051.jpg"
,"052.jpg"
,"053.jpg"
,"054.jpg"
,"055.jpg"
,"056.jpg"
,"057.png"
,"058.png"
,"059.png"
,"060.jpg"
,"061.jpg"
,"062.jpg"
,"063.jpg"
,"064.jpg"
,"065.jpg"
,"066.jpg"
,"067.jpg"
,"068.jpg"
,"069.jpg"
,"070.jpg"
,"071.jpg"
,"072.jpg"
,"073.jpg"
,"074.jpg"
,"075.jpg"
,"076.jpg"
,"077.jpg"
,"078.jpg"
,"079.jpg"
,"080.jpg"
,"081.jpg"
,"082.jpg"
,"086.jpg"
,"087.jpg"
,"088.jpg"
,"089.jpg"
,"090.jpg"
,"091.jpg"
,"092.jpg"
,"093.jpg"
,"094.jpg"
,"095.jpg"
,"096.jpg"
,"097.jpg"
,"098.jpg"
,"099.jpg"
,"100.jpg"
,"101.jpg"
,"102.jpg"
,"104.jpg"
,"105.jpg"
,"106.jpg"
,"107.jpg"
,"108.jpg"
,"109.jpg"
,"110.jpg"
,"111.jpg"
,"112.jpg"
,"113.jpg"
,"114.jpg"
,"115.jpg"
,"116.jpg"
,"117.jpg"
,"118.jpg"
,"119.jpg"
,"120.jpg"
,"121.jpg"
,"122.jpg"
,"123.jpg"
,"125.jpg"
,"126.jpg"
,"127.jpg"
,"128.jpg"];

let theReihenname = [ 
"168Test",
"167Test",
"166Test",
"165Test",
"164Test",
"163Test",
"162Test",
"161Test",
"160Test",
"159Test",
"158Test",
"157Test",
"156Test",
"155Test",
"154Test",
"153Test",
"152Test",
"151Test",
"150Test",
"149Test",
"148Test",
"147Test",
"146Test",
"145Test",
"144Test",
"143Test",
"142Test",
"141Test",
"140Test",
"139Test",
"138Test",
"137Test",
"136Test",
"124Test",
"129Test",
"130Test",
"131Test",
"132Test",
"133Test",
"134Test",
"135Test",
"001Test",
"002Test",
"003Test",
"004Test",
"005Test",
"006Test",
"007Test",
"008Test",
"009Test",
"010Test",
"011Test"
,"012Test"
,"013Test"
,"014Test"
,"015Test"
,"016Test"
,"017Test"
,"018Test"
,"019Test"
,"020Test"
,"021Test"
,"022Test"
,"023Test"
,"024Test"
,"025Test"
,"026Test"
,"027Test"
,"028Test"
,"029Test"
,"030Test"
,"031Test"
//,"032Test"
//,"033Test"
//,"034Test"
,"035Test"
,"036Test"
,"037Test"
,"038Test"
,"039Test"
,"040Test"
,"041Test"
,"042Test"
,"043Test"
,"044Test"
,"045Test"
,"046Test"
,"047Test"
,"048Test"
,"049Test"
,"050Test"
,"051Test"
,"052Test"
,"053Test"
,"054Test"
,"055Test"
,"056Test"
,"057Test"
,"058Test"
,"059Test"
,"060Test"
,"061Test"
,"062Test"
,"063Test"
,"064Test"
,"065Test"
,"066Test"
,"067Test"
,"068Test"
,"069Test"
,"070Test"
,"071Test"
,"072Test"
,"073Test"
,"074Test"
,"075Test"
,"076Test"
,"077Test"
,"078Test"
,"079Test"
,"080Test"
,"081Test"
,"082Test"
,"086Test"
,"087Test"
,"088Test"
,"089Test"
,"090Test"
,"091Test"
,"092Test"
,"093Test"
,"094Test"
,"095Test"
,"096Test"
,"097Test"
,"098Test"
,"099Test"
,"100Test"
,"101Test"
,"102Test"
,"104Test"
,"105Test"
,"106Test"
,"107Test"
,"108Test"
,"109Test"
,"110Test"
,"111Test"
,"112Test"
,"113Test"
,"114Test"
,"115Test"
,"116Test"
,"117Test"
,"118Test"
,"119Test"
,"120Test"
,"121Test"
,"122Test"
,"123Test"
,"125Test"
,"126Test"
,"127Test"
,"128Test"];

let autotest = [
"t1/E3-144r_002k.jpg",
"t1/E3-144r_003k.jpg",
"t1/E3-144r_004k.jpg",
"t1/E3-144r_005k.jpg",
"t1/E3-144r_006k.jpg",
"t1/E3-144r_007k.jpg",
"t1/E3-144r_008k.jpg",
"t1/E3-144r_009k.jpg",
"t1/E3-144rk.jpg",
"t1/E3-144v_002k.jpg",
"t1/E3-144v_003k.jpg",
"t1/E3-144v_004k.jpg",
"t1/E3-144v_005k.jpg",
"t1/E3-144v_006k.jpg",
"t1/E3-144v_007k.jpg",
"t1/E3-144v_008k.jpg",
"t1/E3-144v_009k.jpg",
"t1/E3-144vk.jpg",
"t2/aepinus_bekentnis_1548_0006.jpg",
"t2/aepinus_bekentnis_1548_0007.jpg",
"t2/alberti_pictura_1540_0007.jpg",
"t2/alberti_pictura_1540_0008.jpg",
"t2/alberti_pictura_1540_0009.jpg",
"t2/aventinus_grammatica_1515_0007.jpg",
"t2/aventinus_grammatica_1515_0008.jpg",
"t2/basilius_legendi_1515_0007.jpg",
"t2/basilius_legendi_1515_0008.jpg",
"t2/boeckel_oratio_1589_00021.jpg",
"t2/boeschenstain_gedicht_1520_0002.jpg",
"t2/brenz_abentmal_1550_0043.jpg",
"t2/brenz_abentmal_1550_0158.jpg",
"t2/dorn_uppedat_1507_00017.jpg",
"t2/dorn_uppedat_1507_00032.jpg",
"t2/feyge_epistole_1500_00007.jpg",
"t2/feyge_epistole_1500_00023.jpg",
"t2/heyden_paedono_1548_0007.jpg",
"t2/heyden_paedono_1548_0013.jpg",
"t2/karlstadt_sermon_1523_0006.jpg",
"t2/karlstadt_sermon_1523_0020.jpg",
"t2/kistler_kraeuter_1500_0007.jpg",
"t2/kistler_kraeuter_1500_0021.jpg",
"t2/lucius_epithalamia_1585_00006.jpg",
"t2/lucius_epithalamia_1585_00014.jpg",
"t2/luther_babstum_1526_0010.jpg",
"t2/luther_babstum_1526_0011.jpg",
"t2/nn_historia_1500_0007.jpg",
"t2/nn_historia_1500_0009.jpg",
"t2/oesterreicher_sachsen_1548_0007.jpg",
"t2/oesterreicher_sachsen_1548_0011.jpg",
"t2/osiander_predigt_1553_0007.jpg",
"t2/osiander_predigt_1553_0008.jpg",
"t2/petrarca_psalmi_1506_0010.jpg",
"t2/petrarca_psalmi_1506_0012.jpg",
"t2/pinder_epiphanie_1506_0009.jpg",
"t2/pinder_epiphanie_1506_0010.jpg",
"t2/pistoris_regiment_1506_0009.jpg",
"t2/pistoris_regiment_1506_0010.jpg",
"t2/rhegius_artzney_1529_0007.jpg",
"t2/rhegius_artzney_1529_0014.jpg",
"t2/sachs_drey_1553_0010.jpg",
"t2/sachs_drey_1553_0011.jpg",
"t2/trota_mordtbrenner_1540_0011.jpg",
"t2/trota_mordtbrenner_1540_0013.jpg",
"t2/vespucci_insule_1506_0009.jpg",
"t2/vespucci_insule_1506_0019.jpg",
"t2/witzstat_buchszbaum_1540_0018.jpg",
"t2/witzstat_buchszbaum_1540_0021.jpg",
"t3/Rep_M_03_0010a.jpg",
"t3/Rep_M_03_0010b.jpg",
"t3/Rep_M_03_0011a.jpg",
"t3/Rep_M_03_0011b.jpg",
"t3/Rep_M_03_0012a.jpg",
"t3/Rep_M_03_0012b.jpg",
"t3/Rep_M_03_0013a.jpg",
"t3/Rep_M_03_0013b.jpg",
"t3/Rep_M_03_0014a.jpg",
"t3/Rep_M_03_0014b.jpg",
"t3/Rep_M_03_0015a.jpg",
"t3/Rep_M_03_0015b.jpg",
"t3/Rep_M_03_0016a.jpg",
"t3/Rep_M_03_0016b.jpg",
"t3/Rep_M_03_0017a.jpg",
"t3/Rep_M_03_0017b.jpg",
"t3/Rep_M_03_0018a.jpg",
"t3/Rep_M_03_0018b.jpg",
"t4/AldusManutius10.jpg",
"t4/AldusManutius11.jpg",
"t4/AldusManutius12.jpg",
"t4/AldusManutius13.jpg",
"t4/AldusManutius14.jpg",
"t4/AldusManutius15.jpg",
"t4/AldusManutius16.jpg",
"t4/AldusManutius18.jpg",
"t4/AldusManutius6.jpg",
"t4/AldusManutius7.jpg",
"t4/AldusManutius8.jpg",
"t4/AldusManutius9.jpg",
"t4/DionysiusHalicarnassensis170.jpg",
"t4/DionysiusHalicarnassensis171.jpg",
"t4/DionysiusHalicarnassensis172.jpg",
"t4/DionysiusHalicarnassensis173.jpg",
"t4/DionysiusHalicarnassensis174.jpg",
"t4/DionysiusHalicarnassensis175.jpg",
"t4/DionysiusHalicarnassensis176.jpg",
"t4/DionysiusHalicarnassensis177.jpg",
"t4/DionysiusHalicarnassensis178.jpg",
"t4/DionysiusHalicarnassensis179.jpg",
"t4/DionysiusHalicarnassensis180.jpg",
"t4/GiorgioInteriano10.jpg",
"t4/GiorgioInteriano11.jpg",
"t4/GiorgioInteriano12.jpg",
"t4/GiorgioInteriano13.jpg",
"t4/GiorgioInteriano14.jpg",
"t4/GiorgioInteriano15.jpg",
"t4/GiorgioInteriano16.jpg",
"t4/GiorgioInteriano17.jpg",
"t4/GiorgioInteriano18.jpg",
"t4/GiorgioInteriano19.jpg",
"t4/GiorgioInteriano22.jpg",
"t4/Pindarus350.jpg",
"t4/Pindarus351.jpg",
"t4/Pindarus352.jpg",
"t4/Pindarus353.jpg",
"t4/Pindarus354.jpg",
"t4/Pindarus355.jpg",
"t4/Pindarus356.jpg",
"t4/Pindarus357.jpg",
"t4/Pindarus358.jpg",
"t4/Pindarus359.jpg",
"t4/Pindarus360.jpg",
"t4/SimpliciusCilicius310.jpg",
"t4/SimpliciusCilicius311.jpg",
"t4/SimpliciusCilicius312.jpg",
"t4/SimpliciusCilicius313.jpg",
"t4/SimpliciusCilicius314.jpg",
"t4/SimpliciusCilicius315.jpg",
"t4/SimpliciusCilicius316.jpg",
"t4/SimpliciusCilicius317.jpg",
"t4/SimpliciusCilicius318.jpg",
"t4/SimpliciusCilicius319.jpg",
"t4/SimpliciusCilicius320.jpg",
"t4/TheodorusGaza100.jpg",
"t4/TheodorusGaza101.jpg",
"t4/TheodorusGaza102.jpg",
"t4/TheodorusGaza103.jpg",
"t4/TheodorusGaza104.jpg",
"t4/TheodorusGaza105.jpg",
"t4/TheodorusGaza106.jpg",
"t4/TheodorusGaza141.jpg",
"t4/TheodorusGaza19.jpg",
"t4/TheodorusGaza7.jpg",
"t5/BE_0750_0018.jpg",
"t5/BE_0750_0019.jpg",
"t5/BE_0750_0020.jpg",
"t5/BE_0750_0021.jpg",
"t5/BE_0750_0022.jpg",
"t5/BE_0750_0023.jpg",
"t5/BE_0750_0024.jpg",
"t5/BE_0750_0025.jpg",
"t5/BE_0750_0026.jpg",
"t5/BE_0750_0027.jpg",
"t5/BE_0750_0028.jpg",
"t6/hypnerotomachiapoliphilii17r.jpg",
"t6/hypnerotomachiapoliphilii17v.jpg",
"t6/hypnerotomachiapoliphilii18r.jpg",
"t6/hypnerotomachiapoliphilii18v.jpg",
"t6/hypnerotomachiapoliphilii19r.jpg",
"t6/hypnerotomachiapoliphilii19v.jpg",
"t6/hypnerotomachiapoliphilii20r.jpg",
"t6/hypnerotomachiapoliphilii20v.jpg",
"t6/hypnerotomachiapoliphilii21r.jpg",
"t6/hypnerotomachiapoliphilii21v.jpg",
"t6/hypnerotomachiapoliphilii22r.jpg",
"t6/hypnerotomachiapoliphilii22v.jpg",
"t6/hypnerotomachiapoliphilii23r.jpg",
"t6/hypnerotomachiapoliphilii23v.jpg",
"t6/hypnerotomachiapoliphilii24r.jpg",
"t6/hypnerotomachiapoliphilii24v.jpg",
"t6/comoediaenovem9r.jpg",
"t6/comoediaenovem9v.jpg",
"t6/comoediaenovem10r.jpg",
"t6/comoediaenovem10v.jpg",
"t6/comoediaenovem11r.jpg",
"t6/comoediaenovem11v.jpg",
"t6/comoediaenovem12r.jpg",
"t6/comoediaenovem12v.jpg",
"t6/comoediaenovem13r.jpg",
"t6/comoediaenovem13v.jpg",
"t6/comoediaenovem14r.jpg",
"t6/comoediaenovem14v.jpg",
"t6/comoediaenovem15r.jpg",
"t6/comoediaenovem15v.jpg",
"t6/comoediaenovem16r.jpg",
"t6/comoediaenovem16v.jpg",
"t7/e-codices_csg-0018_072_max.jpg", 
"t7/e-codices_csg-0018_081_max.jpg",  
"t7/e-codices_csg-0018_157_max.jpg",  
"t7/e-codices_csg-0018_158_max.jpg",  
"t7/e-codices_csg-0018_162_max.jpg", 
"t7/e-codices_csg-0018_165_max.jpg",  
"t7/e-codices_csg-0018_169_max.jpg",  
"t7/e-codices_csg-0018_183_max.jpg",  
"t7/e-codices_csg-0018_184_max.jpg",  
"t7/e-codices_csg-0018_185_max.jpg",  
"t7/e-codices_fmb-cb-0055_0117r_max.jpg",
"t7/e-codices_fmb-cb-0055_0124v_max.jpg",
"t7/e-codices_fmb-cb-0055_0125r_max.jpg",
"t7/e-codices_fmb-cb-0055_0129v_max.jpg",
"t7/e-codices_fmb-cb-0055_0140r_max.jpg",
"t7/e-codices_fmb-cb-0055_0140v_max.jpg",
"t7/e-codices_fmb-cb-0055_0146r_max.jpg",
"t7/e-codices_fmb-cb-0055_0148v_max.jpg",
"t7/e-codices_fmb-cb-0055_0158r_max.jpg",
"t7/e-codices_fmb-cb-0055_0158v_max.jpg"
];

let autotestnamen = [
"E3-144r_002k",
"E3-144r_003k",
"E3-144r_004k",
"E3-144r_005k",
"E3-144r_006k",
"E3-144r_007k",
"E3-144r_008k",
"E3-144r_009k",
"E3-144rk",
"E3-144v_002k",
"E3-144v_003k",
"E3-144v_004k",
"E3-144v_005k",
"E3-144v_006k",
"E3-144v_007k",
"E3-144v_008k",
"E3-144v_009k",
"E3-144vk",
"aepinus_bekentnis_1548_0006",
"aepinus_bekentnis_1548_0007",
"alberti_pictura_1540_0007",
"alberti_pictura_1540_0008",
"alberti_pictura_1540_0009",
"aventinus_grammatica_1515_0007",
"aventinus_grammatica_1515_0008",
"basilius_legendi_1515_0007",
"basilius_legendi_1515_0008",
"boeckel_oratio_1589_00021",
"boeschenstain_gedicht_1520_0002",
"brenz_abentmal_1550_0043",
"brenz_abentmal_1550_0158",
"dorn_uppedat_1507_00017",
"dorn_uppedat_1507_00032",
"feyge_epistole_1500_00007",
"feyge_epistole_1500_00023",
"heyden_paedono_1548_0007",
"heyden_paedono_1548_0013",
"karlstadt_sermon_1523_0006",
"karlstadt_sermon_1523_0020",
"kistler_kraeuter_1500_0007",
"kistler_kraeuter_1500_0021",
"lucius_epithalamia_1585_00006",
"lucius_epithalamia_1585_00014",
"luther_babstum_1526_0010",
"luther_babstum_1526_0011",
"nn_historia_1500_0007",
"nn_historia_1500_0009",
"oesterreicher_sachsen_1548_0007",
"oesterreicher_sachsen_1548_0011",
"osiander_predigt_1553_0007",
"osiander_predigt_1553_0008",
"petrarca_psalmi_1506_0010",
"petrarca_psalmi_1506_0012",
"pinder_epiphanie_1506_0009",
"pinder_epiphanie_1506_0010",
"pistoris_regiment_1506_0009",
"pistoris_regiment_1506_0010",
"rhegius_artzney_1529_0007",
"rhegius_artzney_1529_0014",
"sachs_drey_1553_0010",
"sachs_drey_1553_0011",
"trota_mordtbrenner_1540_0011",
"trota_mordtbrenner_1540_0013",
"vespucci_insule_1506_0009",
"vespucci_insule_1506_0019",
"witzstat_buchszbaum_1540_0018",
"witzstat_buchszbaum_1540_0021",
"Rep_M_03_0010a",
"Rep_M_03_0010b",
"Rep_M_03_0011a",
"Rep_M_03_0011b",
"Rep_M_03_0012a",
"Rep_M_03_0012b",
"Rep_M_03_0013a",
"Rep_M_03_0013b",
"Rep_M_03_0014a",
"Rep_M_03_0014b",
"Rep_M_03_0015a",
"Rep_M_03_0015b",
"Rep_M_03_0016a",
"Rep_M_03_0016b",
"Rep_M_03_0017a",
"Rep_M_03_0017b",
"Rep_M_03_0018a",
"Rep_M_03_0018b",
"AldusManutius10",
"AldusManutius11",
"AldusManutius12",
"AldusManutius13",
"AldusManutius14",
"AldusManutius15",
"AldusManutius16",
"AldusManutius18",
"AldusManutius6",
"AldusManutius7",
"AldusManutius8",
"AldusManutius9",
"DionysiusHalicarnassensis170",
"DionysiusHalicarnassensis171",
"DionysiusHalicarnassensis172",
"DionysiusHalicarnassensis173",
"DionysiusHalicarnassensis174",
"DionysiusHalicarnassensis175",
"DionysiusHalicarnassensis176",
"DionysiusHalicarnassensis177",
"DionysiusHalicarnassensis178",
"DionysiusHalicarnassensis179",
"DionysiusHalicarnassensis180",
"GiorgioInteriano10",
"GiorgioInteriano11",
"GiorgioInteriano12",
"GiorgioInteriano13",
"GiorgioInteriano14",
"GiorgioInteriano15",
"GiorgioInteriano16",
"GiorgioInteriano17",
"GiorgioInteriano18",
"GiorgioInteriano19",
"GiorgioInteriano22",
"Pindarus350",
"Pindarus351",
"Pindarus352",
"Pindarus353",
"Pindarus354",
"Pindarus355",
"Pindarus356",
"Pindarus357",
"Pindarus358",
"Pindarus359",
"Pindarus360",
"SimpliciusCilicius310",
"SimpliciusCilicius311",
"SimpliciusCilicius312",
"SimpliciusCilicius313",
"SimpliciusCilicius314",
"SimpliciusCilicius315",
"SimpliciusCilicius316",
"SimpliciusCilicius317",
"SimpliciusCilicius318",
"SimpliciusCilicius319",
"SimpliciusCilicius320",
"TheodorusGaza100",
"TheodorusGaza101",
"TheodorusGaza102",
"TheodorusGaza103",
"TheodorusGaza104",
"TheodorusGaza105",
"TheodorusGaza106",
"TheodorusGaza141",
"TheodorusGaza19",
"TheodorusGaza7",
"EuripidesBE_0750_0018",
"EuripidesBE_0750_0019",
"EuripidesBE_0750_0020",
"EuripidesBE_0750_0021",
"EuripidesBE_0750_0022",
"EuripidesBE_0750_0023",
"EuripidesBE_0750_0024",
"EuripidesBE_0750_0025",
"EuripidesBE_0750_0026",
"EuripidesBE_0750_0027",
"EuripidesBE_0750_0028",
"hypnerotomachiapoliphilii17r",
"hypnerotomachiapoliphilii17v",
"hypnerotomachiapoliphilii18r",
"hypnerotomachiapoliphilii18v",
"hypnerotomachiapoliphilii19r",
"hypnerotomachiapoliphilii19v",
"hypnerotomachiapoliphilii20r",
"hypnerotomachiapoliphilii20v",
"hypnerotomachiapoliphilii21r",
"hypnerotomachiapoliphilii21v",
"hypnerotomachiapoliphilii22r",
"hypnerotomachiapoliphilii22v",
"hypnerotomachiapoliphilii23r",
"hypnerotomachiapoliphilii23v",
"hypnerotomachiapoliphilii24r",
"hypnerotomachiapoliphilii24v",
"comoediaenovem9r",
"comoediaenovem9v",
"comoediaenovem10r",
"comoediaenovem10v",
"comoediaenovem11r",
"comoediaenovem11v",
"comoediaenovem12r",
"comoediaenovem12v",
"comoediaenovem13r",
"comoediaenovem13v",
"comoediaenovem14r",
"comoediaenovem14v",
"comoediaenovem15r",
"comoediaenovem15v",
"comoediaenovem16r",
"comoediaenovem16v",
"e-codices_csg-0018_072_max", 
"e-codices_csg-0018_081_max",  
"e-codices_csg-0018_157_max",  
"e-codices_csg-0018_158_max",  
"e-codices_csg-0018_162_max", 
"e-codices_csg-0018_165_max",  
"e-codices_csg-0018_169_max",  
"e-codices_csg-0018_183_max",  
"e-codices_csg-0018_184_max",  
"e-codices_csg-0018_185_max",  
"e-codices_fmb-cb-0055_0117r_max",
"e-codices_fmb-cb-0055_0124v_max",
"e-codices_fmb-cb-0055_0125r_max",
"e-codices_fmb-cb-0055_0129v_max",
"e-codices_fmb-cb-0055_0140r_max",
"e-codices_fmb-cb-0055_0140v_max",
"e-codices_fmb-cb-0055_0146r_max",
"e-codices_fmb-cb-0055_0148v_max",
"e-codices_fmb-cb-0055_0158r_max",
"e-codices_fmb-cb-0055_0158v_max"
];

/******************************************************************************/
/*******************************DB related*************************************/
/******************************************************************************/
let myindexedDB = window.indexedDB || window.webkitIndexedDB || window.msIndexedDB || window.mozIndexedDB;

let IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
let openCopy = myindexedDB && myindexedDB.open;
 
let IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
 
if (IDBTransaction)
{
    IDBTransaction.READ_WRITE = IDBTransaction.READ_WRITE || 'readwrite';
    IDBTransaction.READ_ONLY = IDBTransaction.READ_ONLY || 'readonly';
}

//db fkt
function createDB( name ){
	//datenbank zur Speicherung der werte auf ode rabrufen
	let dbrequest = myindexedDB.open( name, dbversion );
	
	dbrequest.onupgradeneeded = function( e ){
  		console.log('Datenbank '+name+' angelegt.');
  		let ddbb = e.target.result;
  		if(!ddbb.objectStoreNames.contains('POSNEGSCH')){
    		let store = ddbb.createObjectStore('POSNEGSCH', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle POSNEGSCHW angelegt.", index );
			//speichert POSNEGSCHW für jedes Bild
            store = null;
            index = null;
  		}
		if(!ddbb.objectStoreNames.contains('HRO')){
    		let store = ddbb.createObjectStore('HRO', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle HRO angelegt.", index );
			//speichert Mittelwert und Array des oberen Randes
            store = null;
            index = null;
  		}
		if(!ddbb.objectStoreNames.contains('HRU')){
    		let store = ddbb.createObjectStore('HRU', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle HRU angelegt.", index );
			//speichert Mittelwert und Array des unteren Randes
            store = null;
            index = null;
  		}
		if(!ddbb.objectStoreNames.contains('VRL')){
    		let store = ddbb.createObjectStore('VRL', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle VRL angelegt.", index );
			//speichert Mittelwert und Array des linken Randes
            store = null;
            index = null;
  		}
		if(!ddbb.objectStoreNames.contains('VRR')){
    		let store = ddbb.createObjectStore('VRR', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle VRR angelegt.", index );
			//speichert Mittelwert und Array des rechten Randes
            store = null;
            index = null;
  		}
        if(!ddbb.objectStoreNames.contains('THRESH')){
    		let store = ddbb.createObjectStore('THRESH', {keyPath: 'bname', autoIncrement: true});
			let index = store.createIndex("bnameIndex", "bname", { "unique": true, multiEntry: false });
			console.log( "Tabelle THRESH angelegt.", index );
			
            store = null;
            index = null;
  		}
        dbrequest = null;
        ddbb = null;
	};

	dbrequest.onsuccess = function( e ){
		console.log('Datenbank '+name+' geöffnet.');
        dbrequest = null;
	}

	dbrequest.onerror = function( e ){
		console.log('Datenbank '+name+' FEHLER ' + e);
        dbrequest = null;
	}
}

function delDB( n ){
	console.log("n ", n);
	let request = myindexedDB.deleteDatabase( theReihenname[ n ] );
	
    request.onsuccess = function(e) { console.log("Drop db "+theReihenname[ n ]); if( n < theReihenname.length){delDB( n+1 );}};
    request.onerror = function(e) { console.log("Keine Datenbank " + theReihenname[ picindex ]); if( n < theReihenname.length){delDB( n+1 );}};

	request.onblocked = function (e) {
    console.log("Couldn't delete database due to the operation being blocked");
};
	
}

function writeTO( name, objstname, theobj ){
	let request = myindexedDB.open( name, dbversion );
	request.onsuccess = function(e){
    	let idb = e.target.result;
    	let trans = idb.transaction( objstname, IDBTransaction.READ_WRITE );
    	let store = trans.objectStore( objstname );
 
    	// add
    	let requestAdd = store.add( theobj );
 
    	requestAdd.onsuccess = function(e) {
			console.log("geschrieben ", name, objstname );
            idb = null;
            trans = null;
            store = null;
            requestAdd = null;
    	};
 
    	requestAdd.onfailure = function(e) {
        	console.log("nicht geschrieben ", name, objstname );
            idb = null;
            trans = null;
            store = null;
            requestAdd = null;
    	};
	};
}

function readFROM( name, objstname, theindex, fkt1wd, fkt2nod ){
	let request = myindexedDB.open( name, dbversion );
	request.onsuccess = function( e ){
		console.log( "Get from database: ", name, objstname, theindex );
    	let idb = e.target.result;
    	let transaction = idb.transaction( objstname, IDBTransaction.READ_ONLY );
   	 	let objectStore = transaction.objectStore( objstname );
 
		let cursor = IDBKeyRange.only( theindex );
    	objectStore.openCursor( cursor ).onsuccess = function( event ){
        	let cursor = event.target.result;
            request = null;
            objectStore = null;
            transaction = null;
            idb = null;
        	if( cursor ){
            	console.log('Daten vorhanden - nicht rechnen!', cursor.value );
				fkt1wd( cursor.value ); 
        	} else {
            	console.log('Keine Daten! Rechnen!');
				fkt2nod();
        	}
    	};
	};
	request.onerror = function( e ){
		console.log('Keine Datenbank.');
        request = null;
		fkt2nod();
	};
}

/*******************************IMG SAVING and Presentation / add Export*******************************/
function dodownit( contentof, nameoffile, type ){
    var af = new Blob( [ contentof ], {type: type} );
    var theIE = false || !!document.documentMode;
    if ( theIE ){
        window.navigator.msSaveOrOpenBlob( af, nameoffile );
    } else {
        var alink = document.createElement( 'a' );
        alink.href = URL.createObjectURL( af );
        alink.download = nameoffile;
        document.body.appendChild( alink )
        alink.click( );
        document.body.removeChild( alink );
    }
}

function downALTOxml(){
    let nameofxml = theReihenname[ picindex ]+"ALTO.xml";
    let thexml = [];
    thexml.push( '<?xml version="1.0" encoding="UTF-8"?>' );
    thexml.push( '<alto xmlns="http://schema.ccs-gmbh.com/ALTO">' );
    thexml.push( '<Description>' );
    thexml.push( '<MeasurementUnit>pixel</MeasurementUnit>' );
    thexml.push( '<sourceImageInformation><fileName>'+ theReihenname[ picindex ] +'</fileName></sourceImageInformation>' );
    thexml.push( '<OCRProcessing ID="ID0"><ocrProcessingStep><processingStepSettings>dictionaryFlag.D:American-English</processingStepSettings><processingSoftware><softwareCreator>khk</softwareCreator><softwareName>khkot5</softwareName><softwareVersion>v0.7732398</softwareVersion></processingSoftware></ocrProcessingStep></OCRProcessing>' );
    thexml.push( '</Description>' );
    thexml.push( '<Layout>' );

    thexml.push( '<Page ID="1_1" PHYSICAL_IMG_NR="" HEIGHT="" WIDTH="">' );
    thexml.push( '<TopMargin HEIGHT="" WIDTH="" VPOS="" HPOS=""/>' );
    thexml.push( '<LeftMargin HEIGHT="" WIDTH="" VPOS="" HPOS=""/>' );
    thexml.push( '<RightMargin HEIGHT="" WIDTH="" VPOS="" HPOS=""/>' );
    thexml.push( '<BottomMargin HEIGHT="" WIDTH="" VPOS="" HPOS=""/>' );
    thexml.push( '<PrintSpace HEIGHT="" WIDTH="" VPOS="" HPOS="">' );
    thexml.push( '<TextBlock ID="" HEIGHT="" WIDTH="" VPOS="" HPOS="">' );

    thexml.push( '<TextLine HEIGHT="" WIDTH="" HPOS="" VPOS=""></TextLine>' );

    thexml.push( '</TextBlock>' );

    thexml.push( '</PrintSpace>' );

    thexml.push( '</Page>' );
    thexml.push( '</Layout>' );
    thexml.push( '</alto>' );


    dodownit( thexml.join("\n"), nameofxml, "text/xml" );
}

function downaimageof( canvvv, nameadd ){
    let lilink = document.createElement("a");
    lilink.download = theReihenname[ picindex ]+nameadd+".png";
    canvvv.toBlob(function(thisblob){
        lilink.href = URL.createObjectURL( thisblob );
        lilink.click();
    },'image/png');
}

function printONE(){
        let canvas2 = document.createElement( "canvas" );
        let canvas1 = document.getElementById( "ocrcan1" );
	    let h =	canvas1.height;
	    let w = canvas1.width;
        canvas2.height = h;
		canvas2.width = w;
        let ctx2 = canvas2.getContext("2d");
        let DD = ctx2.getImageData( 0, 0, w, h );
        for( let x = 0; x < w ; x+=1 ){
		    for( let y = 0; y < h ; y+=1 ){
			    let pos = (x+(y*w))*4;
			    if(GLD[ pos+3 ] === 255 ){ //
				    DD.data[ pos ] = 0;
                    DD.data[ pos+1 ] = 0;
                    DD.data[ pos+2 ] = 0;
                    DD.data[ pos+3 ] = 255;
			    } else {
                    DD.data[ pos ] = 255;
                    DD.data[ pos+1 ] = 255;
                    DD.data[ pos+2 ] = 255;
                    DD.data[ pos+3 ] = 255;
                }
		    }
	    }
        ctx2.putImageData( DD, 0, 0);
        downaimageof(canvas2, "diffbild");
}

function printTWO(){
        let canvas2 = document.getElementById( "ocrcan2" );
        downaimageof(canvas2, "rand");
}

function printTHREE(){
        let canvas4 = document.getElementById( "ocrcan4" );
        downaimageof(canvas4, "freigest");
}

function printFOUR(){      
        let canvas3= document.getElementById( "ocrcan3" );
        downaimageof(canvas3, "boxess");
}

function explosionszeichnung( w, h, componenten, buchschmuckComponenten, plines, boxes ){
        //let outputcanvas = document.createElement( "canvas" );
        let outputcanvas = document.getElementById( "outputcanvas" );
        outputcanvas.height = h*2;
		outputcanvas.width = w*2;
       
        //babylon js 
        var engine = new BABYLON.Engine( outputcanvas );

        var scene = new BABYLON.Scene( engine );
        var camera = new BABYLON.ArcRotateCamera( "Camera", 3 * Math.PI / 2, Math.PI / 2, 15, BABYLON.Vector3.Zero(), scene);
        camera.setPosition( new BABYLON.Vector3(0, 0, -(2.5*w)) );
        //camera.useAutoRotationBehavior = true;
        camera.attachControl( outputcanvas, false );

        // Parameters : name, position, scene
        //var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -(2*w)), scene);

        // Targets the camera to a particular position. In this case the scene origin
        //camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas
        //camera.attachControl( outputcanvas, true);

        var light = new BABYLON.HemisphericLight( "light1", new BABYLON.Vector3(0, 1, 0), scene );
        light.intensity = 0.9;

        var light2 = new BABYLON.HemisphericLight( "light2", new BABYLON.Vector3(0, 100, -(3*w)), scene );
        light2.intensity = 0.5;
        
        //create geometry
        var original1 = BABYLON.MeshBuilder.CreatePlane("original1", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);

        var meshzwei = BABYLON.MeshBuilder.CreatePlane("plane2", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        meshzwei.position.z = -Math.floor(w/5);

        var meshdrei = BABYLON.MeshBuilder.CreatePlane("plane3", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        meshdrei.position.z = -Math.floor(w/4);

        var meshvier = BABYLON.MeshBuilder.CreatePlane("plane4", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        meshvier.position.z = -Math.floor(w/2);

        var meshfuenf = BABYLON.MeshBuilder.CreatePlane("plane5", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        meshfuenf.position.z = -w;

        var meshsechs = BABYLON.MeshBuilder.CreatePlane("plane6", {width: w, height: h, updatable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
        meshsechs.position.z = -Math.floor((w+(w/2))/2);

        //Create dynamic textures
	    var texture1 = new BABYLON.DynamicTexture("dynamic texture", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture1Context = texture1.getContext();
	
        var texture2 = new BABYLON.DynamicTexture("dynamic texture2", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture2Context = texture2.getContext();
        texture2Context.fillStyle = "rgba(0,0,0, 0.0)";
        texture2Context.fillRect(0, 0, w, h);

        var texture3 = new BABYLON.DynamicTexture("dynamic texture2", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture3Context = texture3.getContext();
        texture3Context.fillStyle = "rgba(0,0,0, 0.0)";
        texture3Context.fillRect(0, 0, w, h);

        var texture4 = new BABYLON.DynamicTexture("dynamic texture4", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture4Context = texture4.getContext();
        texture4Context.fillStyle = "rgba(0,0,0, 0.0)";
        texture4Context.fillRect(0, 0, w, h);

        var texture5 = new BABYLON.DynamicTexture("dynamic texture5", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture5Context = texture5.getContext();
        texture5Context.fillStyle = "rgba(0,0,0, 0.0)";
        texture5Context.fillRect(0, 0, w, h);

        var texture6 = new BABYLON.DynamicTexture("dynamic texture6", { width: w, height: h}, scene, false, BABYLON.Texture.NEAREST_SAMPLINGMODE);   
	    var texture6Context = texture6.getContext();
        texture6Context.fillStyle = "rgba(0,0,0, 0.0)";
        texture6Context.fillRect( 0, 0, w, h );

        //material
	    var material1 = new BABYLON.StandardMaterial("Mat", scene);  
        material1.diffuseTexture = texture1;

        var material2 = new BABYLON.StandardMaterial("Mat2", scene);    	       
        material2.diffuseTexture = texture2;
        material2.diffuseTexture.hasAlpha = true;

        var material3 = new BABYLON.StandardMaterial("Mat3", scene);    	       
        material3.diffuseTexture = texture3;
        material3.diffuseTexture.hasAlpha = true;

        var material4 = new BABYLON.StandardMaterial("Mat4", scene);    	       
        material4.diffuseTexture = texture4;
        material4.diffuseTexture.hasAlpha = true;

        var material5 = new BABYLON.StandardMaterial("Mat5", scene);    	       
        material5.diffuseTexture = texture5;
        material5.diffuseTexture.hasAlpha = true;

        var material6 = new BABYLON.StandardMaterial("Mat6", scene);    	       
        material6.diffuseTexture = texture6;
        material6.diffuseTexture.hasAlpha = true;

        //apply material
	    original1.material = material1;
        meshzwei.material = material2;
        meshdrei.material = material3;
        meshvier.material = material4;
        meshfuenf.material = material5;
        meshsechs.material = material6;

        //input or create texture data
        //first layer original image
        let oiginal = new Image();
        oiginal.src = picpath + thesrces[ picindex ];
        oiginal.onload = function( ) {
            //Add image to dynamic texture
            texture1Context.drawImage(this, 0, 0);
		    texture1.update();

            //download
            let lilink = document.createElement("a");
            lilink.download = theReihenname[ picindex ]+"texture1.png";
            texture1Context.canvas.toBlob(function(thisblob){
                lilink.href = URL.createObjectURL( thisblob );
                lilink.click();
            },'image/png');
	    }

        //second layer: Rand
        texture2Context.fillStyle = "rgba(0,0,254,1.0)";
        let ril = Rechter[1].length;
        let t = 0;
        for( t = 0; t < ril; t+=1 ){
            texture2Context.fillRect( Rechter[1][t][0], Rechter[1][t][1],5,5);
        }
        let lil = Linker[1].length; 
        for( t = 0; t < lil; t+=1 ){
            texture2Context.fillRect( Linker[1][t][0], Linker[1][t][1],5,5);
        }
        let oil = Oberer[1].length;
        for( t = 0; t < oil; t+=1 ){
            texture2Context.fillRect( Oberer[1][t][0], Oberer[1][t][1],5,5);
        }
        let uil = Unterer[1].length;
        for( t = 0; t < uil; t+=1 ){
            texture2Context.fillRect( Unterer[1][t][0], Unterer[1][t][1],5,5);
        }
		texture2.update();
        //download
        let lilink2 = document.createElement("a");
        lilink2.download = theReihenname[ picindex ]+"texture2.png";
        texture2Context.canvas.toBlob(function(thisblob){
            lilink2.href = URL.createObjectURL( thisblob );
            lilink2.click();
        },'image/png');
        //third layer paper material
        texture3Context.fillStyle = "rgba(100,100,100,1.0)";
        let canvas2 = document.getElementById( "ocrcan2" );
	    let ctx = canvas2.getContext("2d");
        let tDDD = ctx.getImageData(0, 0, w,  h);
	    for( let x = Linker[0]; x < Rechter[0] ; x+=1 ){
		    for( let y = Oberer[0]; y < Unterer[0] ; y+=1 ){
                    let pos = (x+(y*w))*4;
                if(tDDD.data[pos+3] === 253){
                    texture3Context.fillRect( x, y,1,1);
                } 
            }
        }
        texture3.update();
        //download
        let lilink3 = document.createElement("a");
        lilink3.download = theReihenname[ picindex ]+"texture3.png";
        texture3Context.canvas.toBlob(function(thisblob){
            lilink3.href = URL.createObjectURL( thisblob );
            lilink3.click();
        },'image/png');

        //fourth layer
        let bil = buchschmuckComponenten.length;
        let f = 0;
        for( f = 0; f < bil; f+=1 ){
            let ff = buchschmuckComponenten[f];
            texture4Context.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
            let cil = componenten[ff][2].length;
            let z = 0;
            for( z = 0; z < cil; z+=1 ){
                let zil = componenten[ff][2][z].length;
                let s = 0;
                for( s = 0; s < zil; s+=1 ){
                    let x = componenten[ff][2][z][s][0] //x 
                    let y = componenten[ff][2][z][s][1] //y
                    texture4Context.fillRect( x, y,2,2);

                }
            }
        }
        texture4.update();
        //download
        let lilink4 = document.createElement("a");
        lilink4.download = theReihenname[ picindex ]+"texture4.png";
        texture4Context.canvas.toBlob(function(thisblob){
            lilink4.href = URL.createObjectURL( thisblob );
            lilink4.click();
        },'image/png');
        //fifth layer
        let pil = plines.length;
        let p = 0;
        for( p = 0; p < pil; p+=1 ){ //fuer alle plines
            texture5Context.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
            let ppil = plines[p].length;
            let ll = 0;
            for( ll = 0; ll < ppil; ll+=1 ){ //eine "Zeile" alle componenten
                let llil = componenten[plines[p][ll]][2].length;
                let z = 0;
                for( z = 0; z < llil; z+=1 ){ //fuer eine componentenzeile
                    let zil = componenten[plines[p][ll]][2][z].length;
                    let s = 0;
                    for( s = 0; s < zil; s+=1 ){ //fuer alle punkte der componentenzeile
                        let x = componenten[plines[p][ll]][2][z][s][0] //x 
                        let y = componenten[plines[p][ll]][2][z][s][1] //y
                        texture5Context.fillRect( x, y,2,2);
                    }
                }
            }
        }
        texture5.update();
        //download
        let lilink5 = document.createElement("a");
        lilink5.download = theReihenname[ picindex ]+"texture5.png";
        texture5Context.canvas.toBlob(function(thisblob){
            lilink5.href = URL.createObjectURL( thisblob );
            lilink5.click();
        },'image/png');
        //sixth layer
        let bbil = boxes.length;
        let b = 0;
        for( b = 0; b < bbil; b+=1 ){
            texture6Context.fillStyle = "#"+((1<<24)*Math.random()|0).toString(16);
            let bh = Math.round( boxes[ b ][3] - boxes[ b ][2] );
            let bw = Math.round( boxes[ b ][1] - boxes[ b ][0] );
            texture6Context.fillRect( boxes[ b ][0], boxes[ b ][2], bw, bh );
            texture6Context.clearRect( boxes[ b ][0]+10, boxes[ b ][2]+10, bw-20, bh-20 );          
        }
        texture6.update();
        //download
        let lilink6 = document.createElement("a");
        lilink6.download = theReihenname[ picindex ]+"texture6.png";
        texture6Context.canvas.toBlob(function(thisblob){
            lilink6.href = URL.createObjectURL( thisblob );
            lilink6.click();
        },'image/png');

        var renderLoop = function () {
            scene.render();
        };
        engine.runRenderLoop(renderLoop);
        
        //let wnd = window.open("about:blank", "", "_blank");
	    //wnd.document.body.appendChild( outputcanvas );	
        //document.body.appendChild( outputcanvas );

        /*
        //does not work very well with the exporter
        BABYLON.GLTF2Export.GLBAsync(scene, theReihenname[ picindex ]+"GLB").then((glb) => {
            glb.downloadFiles();
        });
    */

}
function loadTheScene() {
    //let outputcanvas = document.createElement( "canvas" );
        let outputcanvas = document.getElementById( "outputcanvas" );
        outputcanvas.height = screen.height;
		outputcanvas.width = screen.width;
       
        //babylon js 
        var engine = new BABYLON.Engine( outputcanvas );
    // Create a scene.
    var scene = new BABYLON.Scene( engine );
    
    

    // Append glTF model to scene.
    BABYLON.SceneLoader.Append("scenes/", "124TestGLB.glb", scene, function (scene) {
        // Create a default arc rotate camera and light.
        //scene.createDefaultCameraOrLight(true, true, true);
        var scene = new BABYLON.Scene( engine );
        var camera = new BABYLON.ArcRotateCamera( "Camera", 3 * Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
        camera.attachControl( outputcanvas, false );
        // Parameters : name, position, scene
        //var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 0, -(2*w)), scene);

        // Targets the camera to a particular position. In this case the scene origin
        //camera.setTarget(BABYLON.Vector3.Zero());

        // Attach the camera to the canvas
        //camera.attachControl( outputcanvas, true);

        var light = new BABYLON.HemisphericLight( "light1", new BABYLON.Vector3(0, 1, 0), scene );
        light.intensity = 0.9;

        // The default camera looks at the back of the asset.
        // Rotate the camera by 180 degrees to the front of the asset.
       // scene.activeCamera.alpha += Math.PI;
         
        var renderLoop = function () {
            scene.render();
        };
        engine.runRenderLoop(renderLoop);
    });

    
};

/******************************************************************************/
/*******************************GUI Interactionen******************************/
/******************************************************************************/

function drawDiagramm( avectodraw, anametodraw,  divname, maxis, maxx){
    let plot1 = $.jqplot( divname, [avectodraw], 
                    { 
                      title:anametodraw, 
                      axes:{
                           xaxis:{min: 0, max: maxx},
                           yaxis:{
        
                                //tickOptions:{formatString: '%.1f %'},
                                min:0,
                                max:maxis,
                                //tickInterval:'10'
                             }
                      },
                      series:[
                        {
                            lineWidth:0.2,
                            markerOptions: { size: 0.5, style:'none' }
                        }
                      ]
                    }
                );
}

function newThreadCount( elem ){
	howmanyTHREADS = 2 * parseInt(elem.value);
	console.log("New Threadcount", howmanyTHREADS);
}

function loadDATAtocanvas( ){ 
	//daten laden und funktionen in den eventhandlern ausführen
	let pageimg1 = new Image();
    pageimg1.src = picpath + thesrces[ picindex ];
    pageimg1.onload = function( ) {
		console.log( "Load img No: ", picindex, picpath + thesrces[ picindex ] );
	    schwellePOSNEG = 1.0;
        GLD = [];
		createDB( theReihenname[ picindex ] );
    	let h = pageimg1.height;
		let w = pageimg1.width;
		//get a 2d context
		let c = document.getElementById( "ocrcan2" );
    	let ctx = c.getContext("2d");
    	ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
		c.height = h;
		c.width = w;
    	ctx.drawImage( pageimg1, 0, 0);
        
        
   		document.getElementById("bildinfo").innerHTML =  
			w.toString()+" x "+h.toString()+" = " +(w*h).toString()+" px";
        //talk to garbage collector
        //ctx = null;
        //c = null;
        //pageimg1 = null;
        readFROM( theReihenname[ picindex ], "POSNEGSCH", thesrces[ picindex ], gradientenbild, PosNegSchwelle );
    }	   
}

function loadlocalIMG( ev ){
    let fifisel = event.target.files[0];
    thesrces.push( fifisel.name );
    theReihenname.push( fifisel.name+"alocalpic");
    picindex = thesrces.length - 1;
    document.getElementById( "picmenu" ).innerHTML = "";
    //getting img localy

    var reader = new FileReader();

    reader.onload = function (e) {
		let pageimg1 = new Image( );
		pageimg1.src = e.target.result;
		pageimg1.onload = function () {
			console.log( "Load img No: ", picindex, picpath + thesrces[ picindex ] );
	    schwellePOSNEG = 1.0;
        GLD = [];
		createDB( theReihenname[ picindex ] );
    	let h = pageimg1.height;
		let w = pageimg1.width;
		//get a 2d context
		let c = document.getElementById( "ocrcan2" );
    	let ctx = c.getContext("2d");
    	ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
		c.height = h;
		c.width = w;
    	ctx.drawImage( pageimg1, 0, 0);
        
        
   		document.getElementById("bildinfo").innerHTML =  
			w.toString()+" x "+h.toString()+" = " +(w*h).toString()+" px";
        //talk to garbage collector
        //ctx = null;
        //c = null;
        //pageimg1 = null;
        readFROM( theReihenname[ picindex ], "POSNEGSCH", thesrces[ picindex ], gradientenbild, PosNegSchwelle );
		};
	}

    reader.readAsDataURL( fifisel );
}

function picmenu( elem ){
    picindex = parseInt(elem.id);
    document.getElementById( "picmenu" ).innerHTML = "";
    
    loadDATAtocanvas( );
}

function processNext( ){
    if( picindex < thesrces.length ){
        picindex++;
        document.getElementById( "dosaveresultimages" ).checked = true;       
        loadDATAtocanvas( );        
    }
}

function initocr( ){
    let pm = document.getElementById( "picmenu" );
    let til = thesrces.length;
    let r = 0;
    for( r = 0; r < til; r+=1 ){
        let e = document.createElement("span");
        e.className = "clickable";
		e.id = r.toString();
        e.innerHTML = "<img src='" + thumbpath + thesrces[r] + "'/> ";
        e.onclick = function(){ picmenu( this ); };
        pm.appendChild( e );
    }
	//document.getElementById( "cpucount" ).value = howmanyTHREADS;
}

function runSoftwareTest(){
    //UNUSED UNUSED UNUSED
    //neusetzen der pfade
    picpath = "pic/100test/";
    thesrces = autotest;
    
    theReihenname = autotestnamen;
    starttime = Date.now();
    let til = thesrces.length;
    let teb = 0;
    for( teb = 0; teb < til; teb+=1 ){
        picindex = teb;
        console.log("Autotest", "Load img No: ", picindex, picpath + thesrces[ picindex ], "(",theReihenname[ picindex ] ,")");
        console.log("Dauer (sek.): ", Math.floor(Date.now()-starttime/1000));
        //dump database
        //dump time
        //pectures should be dumped also???? no - mit look an funktion
    }
    
}

function lookaSoftwaretest(){
    //arrays austauschen und ablaufen lassen fertig
    document.getElementById( "picmenu" ).innerHTML = "";
    picpath = "pic/100test/";
    thesrces = autotest;
    theReihenname = autotestnamen;
    picindex = 0;
    document.getElementById( "donext" ).checked = true;
    document.getElementById( "dosaveresultimages" ).checked = true;       
    loadDATAtocanvas( );
}

function loadIMGfromdisk( elemof ){
    for (var i = 0, f; f = elemof.files[i]; i++) {
      console.log("File: ", f.name);
    }
    
} 

function downloadSoftwaretestDB(){

    alert("notdonw download imple");
}

function runSoftwareTest(){
    alert("no Software testrun implemented");
}

/******************************************************************************/
/*******************************helper FUNCTIONS*******************************/
/******************************************************************************/

//sort a object - wich is orderd by console.log, but itselb remains unsorted - !!!
function orderObject( unordered ){
   Object.keys(unordered).sort().forEach(function(key) {
        let value = unordered[key];
        delete unordered[key];
        unordered[key] = value;
    });
}

function indexnotin(A, i){
	let ail = A.length;
	for( let Ai = 0; Ai < ail; Ai+=1 ){
		if( A[Ai] === i ){
			return false;
		}
	}
	return true;
}

function getMax( arr ){ 
	let MaxX=0;
    let ail = arr.length;
    let X = 0;
    for( X = 0; X < ail; X+=1 ){
        if( MaxX < arr[X] && arr[X] ){
            MaxX = arr[X];
		}
	}
    return MaxX;
}

function getIndexatMax( arr ){ 
	let MaxX=0;
    let ail = arr.length;
    let X = 0;
    let mX = 0;
    for( X = 0; X < ail; X+=1 ){
        if( MaxX < arr[X] && arr[X] ){
            MaxX = arr[X];
            mX = X;
		}
	}
    return mX;
}

function getMin( arr ){   
	let MaxX=arr[0];
    let ail = arr.length;
    let X = 0;
    for( X = 0; X < ail; X+=1 ){
        if( MaxX > arr[ X ] ){
            MaxX = arr[ X ];
        }
    }
    return MaxX;
}

function fakultaet(n) { 
	let w = 1;
    let i = 2;
    for( i = 2; i <= n; i+=1 ){     
       w *= i;
	}
    return w;
}

function getNormVectorDistD( D, p1, p2 ){
	//farbvektor normieren

    //D ist ein 1D array der Pixeldaten und p1 und p2 sind die Arraykoordinaten zweier Punkte die Verglichen werden sollen
	let v11 = D[p1];  //Farbkomponete R von Punkt 1
	let v12 = D[p1+1];//Farbkomponten G von Punkt 1
	let v13 = D[p1+2];//Farbkomponten B von Punkt 1
	let n1 = Math.sqrt((v11*v11)+(v12*v12)+(v13*v13)); //die Norm des Farbvektors, bzw. Länge des Ortsvektors im RGB Kubus System
	let v21 = D[p2];  //Farbkomponete R von Punkt 2
	let v22 = D[p2+1];//Farbkomponete G von Punkt 2
	let v23 = D[p2+2];//Farbkomponete B von Punkt 2
	let n2 = Math.sqrt((v21*v21)+(v22*v22)+(v23*v23)); //die Norm des Farbvektors zu Punkt 2

    //Differenz bilden
    //Normieren der Komponenten von Punkt 1
    let normv12 = 0.0; //Initialisierung des Speichers / bzw. initiale letiablenbelegung
	let normv11 = 0.0; //"
	let normv13 = 0.0; //"
	if( n1 !== 0.0 || n1 !== 0 ){ // die Norm darf keine Null sein
		normv11 = (v11/n1); //Komponete R normieren
		normv12 = (v12/n1); //Komponete G normieren
		normv13 = (v13/n1); //Komponete B normieren
	}
    //Normieren der Komponenten von Punkt 2
	let normv21 = 0.0; //Initialisierung des Speichers / bzw. initiale letiablenbelegung
	let normv22 = 0.0; //"
	let normv23 = 0.0; //"
	if( n2 !== 0.0 || n2 !== 0 ){
		normv21 = (v21/n2); //Komponete R normieren
		normv22 = (v22/n2); //Komponete G normieren
		normv23 = (v23/n2); //Komponete B normieren
	}

	//Differenz bilden - Sehnendifferenz innerhalb der Kugel von Punkten auf der Kugeloberfläche
    let rn = Math.abs(normv11  - normv21); //Komponente R
    let gn = Math.abs(normv12  - normv22); //Komponente G
    let bn = Math.abs(normv13  - normv23); //Komponente B

    let rs = (normv11  + normv21);
    let gs = (normv12  + normv22);
    let bs = (normv13  + normv23);
	//Betrag des Differenzvektors angeben
	//let retweert = Math.sqrt((rn*rn)+(gn*gn)+(bn*bn)); //Euklid
	let retweert = (rn+gn+bn)/3.0; //Manhatten
    //let retweert = ((rn/rs)+(gn/gs)+(bn/bs)); //Canberra
    //Dafür Sorge Tragen, dass ein Float Wert zurück gegeben wird
	return parseFloat( retweert );
}

function getNormVectorDistV( v1, v2 ){
	//farbvektor normieren
	let v11 = v1[0];
	let v12 = v1[1];
	let v13 = v1[2];
	let n1 = Math.sqrt((v11*v11)+(v12*v12)+(v13*v13)) ;
	let v21 = v2[0];
	let v22 = v2[1];
	let v23 = v2[2];
	let n2 = Math.sqrt((v21*v21)+(v22*v22)+(v23*v23)) ;

	//differenz bilden
    let normv12 = 0.0;
	let normv11 = 0.0;
	let normv13 = 0.0;
	if(n1 !== 0.0 || n1 !== 0){
		normv11 = (v11/n1);
		normv12 = (v12/n1);
		normv13 = (v13/n1);
	}
	let normv21 = 0.0;
	let normv22 = 0.0;
	let normv23 = 0.0;
	if(n2 !== 0.0 || n2 !== 0){
		normv21 = (v21/n2);
		normv22 = (v22/n2);
		normv23 = (v23/n2);
	}
	//differenz bilden
    let rn = Math.abs(normv11  - normv21);
    let gn = Math.abs(normv12  - normv22);
    let bn = Math.abs(normv13  - normv23);
    
    let rs = (normv11  + normv21);
    let gs = (normv12  + normv22);
    let bs = (normv13  + normv23);
	//Betrag angeben
	//let retweert = Math.sqrt((rn*rn)+(gn*gn)+(bn*bn)); //Euklid
    let retweert = (rn+gn+bn)/3.0; //Manhatten
    //let retweert = ((rn/rs)+(gn/gs)+(bn/bs)); //Canberra
	return parseFloat( retweert );
}



function vecDist(v1, v2){
    //return euklidischdis(v1,v2);
    //return manhattendist(v1,v2);
    return ( canberradist(v1,v2) + euklidischdis(v1,v2) / 2.0 );
    //return cosinedist(v1,v2);
}

function euklidischdis( v1, v2 ){
    let dr = (v1[0]  - v2[0]);
    let dg = (v1[1]  - v2[1]);
    let ddb = (v1[2]  - v2[2]);	
	let retweert = Math.sqrt((dr*dr)+(dg*dg)+(ddb*ddb));
	return parseFloat( retweert );
}

function manhattendist( v1, v2 ){
    let dr = Math.abs(v1[0]  - v2[0]);
    let dg = Math.abs(v1[1]  - v2[1]);
    let ddb = Math.abs(v1[2]  - v2[2]);

    return parseFloat( (dr+dg+ddb)/3.0 ); 
}

function cosinedist(v1, v2){
    
    //farbvektor normieren
	let v11 = parseFloat(v1[0]);
	let v12 = parseFloat(v1[1]);
	let v13 = parseFloat(v1[2]);
	let n1 = Math.sqrt((v11*v11)+(v12*v12)+(v13*v13)) ;
	let v21 = parseFloat(v2[0]);
	let v22 = parseFloat(v2[1]);
	let v23 = parseFloat(v2[2]);
	let n2 = Math.sqrt((v21*v21)+(v22*v22)+(v23*v23)) ;
    if( n1 === 0.0 || n2 === 0.0 ){
        return 0.0;
    }
    let pu = (v11*v21)+(v12*v22)+(v13*v23);

    let re =  pu / (n1*n2); 
    if(!re){ // that means therer is a NaN input 
        re = 0.0;
    }
    return  re;
    
}

function canberradist( v1, v2 ){
    let dr = Math.abs(v1[0]  - v2[0]);
    let dg = Math.abs(v1[1]  - v2[1]);
    let db = Math.abs(v1[2]  - v2[2]);

    let sr = Math.abs(v1[0])  + Math.abs(v2[0]);
    let sg = Math.abs(v1[1])  + Math.abs(v2[1]);
    let sb = Math.abs(v1[2])  + Math.abs(v2[2]);

    return parseFloat( (dr/sr)+(dg/sg)+(db/sb) );
}

function distpointarray( arr, p ){//arr is array of string rep colors
    let vacount = 0;
    let mil = 10;
    let inc = Math.floor(arr.length/mil);
    let alldists = 0;
    for( let mf = 0; mf < mil; mf+=inc ){
       alldists += manhattendist(arr[ mf ],p);
    }
    return (alldists/mil);
}

function scalarProd( v1, v2 ){
    //gleiche laenge vorausgesetzt
    let sp = 0; 
    let vil = v1.length;
    let t = 0;
    for( t = 0; t < vil; t+=1 ){
        sp += v1[t]*v2[t];
    }
    return sp;
}

function winkVec( v1, v2 ){
    let l1 = vectorLen(v1[0], v1[1], v1[2]);
    if( l1 === 0){
        l1 = 1;
    }
    let l2 = vectorLen(v2[0], v2[1], v2[2]);
    if( l2 === 0 ){
        l2 = 1;
    }
    return Math.acos( (scalarProd( v1, v2 ))/( l1*l2))* (180 / Math.PI);
}

function vectorLen( v1, v2, v3 ){
	return Math.sqrt((v1*v1) + (v2*v2) + (v3*v3));
}

function vecdiff( v1, v2 ){ // arbitrary length
    if(len(v1) !== len(v2)){
        return NaN;
    }
    let s = 0;
    for(let i in v1 ){
        let d = v1[i]-v2[i];
        s += (d*d);
    }
    return Math.sqrt(s);
}

function multsum( v1, v2 ){//linearkombination
    let lenlen = Math.min(v1.length, v2.length);
    let susu = 0;
    for( let i = 0; i < lenlen; i+=1 ){
        susu+=(v1[i]*v2[i]);
    }
    return susu;
}

function xyxyDist( x1, y1, x2, y2 ){
	return Math.sqrt( ((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)) );
}

function xyzxyzDist( x1, y1, z1, x2, y2, z2 ){
	return Math.sqrt( ((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)) + ((z2-z1)*(z2-z1)) );
}

function luminosity( r, g, b ){
	return 0.2126 * Math.pow((r /  255),  2.2) + 0.7152 * Math.pow((g / 255),  2.2) + 0.0722 * Math.pow((b / 255),  2.2);
}

function intensity(r,g,b){
        return (0.2989*r) + (0.5870*g) + (0.1140*b);
}

function luminosityVec( vrgb ){
	return 0.2126 * Math.pow((vrgb[0] /  255),  2.2) + 0.7152 * Math.pow((vrgb[1] / 255),  2.2) + 0.0722 * Math.pow((vrgb[2] / 255),  2.2);
}

function intensityVec( vrgb ){
        return (0.2989*vrgb[0]) + (0.5870*vrgb[1]) + (0.1140*vrgb[2]);
}

function didi(v1,v2){ //switch between fkt
    //return  getNormVectorDistV(v1,v2);
    //return  cosinedist(v1,v2)/10;    
    //return euklidischdis( v1, v2 )*getNormVectorDistV(v1,v2);
    return manhattendist( v1, v2 )*getNormVectorDistV(v1,v2);
}

function compareFloatuptoStellen( f1, f2, stellen ){
	let stf1 = f1.toString();
	let stf1spDot = stf1.split(".");
	let stf2 = f2.toString();
	let stf2spDot = stf2.split(".");
	if(stf1spDot[0] === stf2spDot[0]){
		if(stf1spDot[1] === undefined && stf2spDot[1] === undefined){
			return true;
		} else if(stf1spDot[1] === undefined || stf2spDot[1] === undefined){
			if(parseInt(stf1spDot[0]) === 0 && parseInt(stf2spDot[0]) === 0){
				return true;
			} else {
				return false; //kommt nie vor oder???
			}
		} else {
			let f1nachkomma = stf1spDot[1].split("");
			let f2nachkomma = stf2spDot[1].split("");
			let howlongtorun = stellen;
			if(f1nachkomma.length < f2nachkomma.length){
				if(howlongtorun > f1nachkomma.length){
					howlongtorun = f1nachkomma.length;
				}
			} else {
				if(howlongtorun > f2nachkomma.length){
					howlongtorun = f2nachkomma.length;
				}
			}
	
			for(let i = 0; i < howlongtorun; i++){
				if(f1nachkomma[ i ] !== f2nachkomma[ i ]){
					return false;
				}
			}
			return true;
		}
	} else {
		return false;
	} 
}

function deltaHell( D, p1, p2 ){
		let lp1 = luminosity( D.data[p1], D.data[p1+1], D.data[p1+2] );
		let lp2 = luminosity( D.data[p2], D.data[p2+1], D.data[p2+2] );
		return Math.abs( lp1-lp2 );
}

function deltaHellD( D, p1, p2 ){
		let lp1 = luminosity( D[p1], D[p1+1], D[p1+2] );
		let lp2 = luminosity( D[p2], D[p2+1], D[p2+2] );
		return Math.abs( lp1-lp2 );
}
        
function linreg( pointsy ){
	let xSum = 0; 
	let ySum = 0;
        let xxSum = 0;
        let xySum = 0;
        let A; //m, slope
        let B; //y schittpunkt, +b

        //x Daten sind die einzelen i im for
        let L = pointsy.length;
        let i = 0;
        for ( i = 0; i < L; i+=1 ){
                xSum += i;
                ySum += pointsy[i];
                xxSum += i * i;
                xySum += i * pointsy[i];
        }
        let ax = xSum / L;
        let ay = ySum / L;

        //iff ill conditioned use average ax and ay

        A = (L * xySum - xSum * ySum) / (L * xxSum - xSum * xSum);
        B = (ySum - A * xSum) / L;
        return [ A, B ];
}


/*RADIX 2 FFT, 2^m Punkte , dir (1, -1), real (x), imaginary (y)*/
function FFTone(  dir, m, x, y ) {
    let n,i,i1,j,k,i2,l,l1,l2;
    let c1,c2,tx,ty,t1,t2,u1,u2,z;

    // Calculate the number of points 
    n = 1;
    for ( i = 0; i < m; i++ ){
        n *= 2;
    }

    // Do the bit reversal 
    i2 = n >> 1;
    j = 0;
    for( i = 0; i < n-1; i++ ){
        if( i < j ){
            tx = x[ i ];
            ty = y[ i ];
            x[ i ] = x[ j ];
            y[ i ] = y[ j ];
            x[ j ] = tx;
            y[ j ] = ty;
        }
        k = i2;
        while( k <= j ){
            j -= k;
            k >>= 1;
        }
        j += k;
    }

    // Compute the FFT 
    c1 = -1.0; 
    c2 = 0.0;
    l2 = 1;
    for( l = 0; l < m; l++ ){
        l1 = l2;
        l2 <<= 1;
        u1 = 1.0; 
        u2 = 0.0;
        for( j = 0; j < l1; j++ ){
            for( i = j; i < n; i += l2 ){
                i1 = i + l1;
                t1 = u1 * x[ i1 ] - u2 * y[ i1 ];
                t2 = u1 * y[ i1 ] + u2 * x[ i1 ];
                x[ i1 ] = x[ i ] - t1; 
                y[ i1 ] = y[ i ] - t2;
                x[ i ] += t1;
                y[ i ] += t2;
            }
            z =  u1 * c1 - u2 * c2;
            u2 = u1 * c2 + u2 * c1;
            u1 = z;
        }
        c2 = Math.sqrt( (1.0 - c1) / 2.0 );
        if( dir === 1 ){
            c2 = -c2;
        }
        c1 = Math.sqrt( (1.0 + c1) / 2.0 );
    }

    // Scaling for forward transform 
    if( dir === 1 ){
        for( i=0; i<n; i++ ){
            x[ i ] /= n;
            y[ i ] /= n;
        }
    }

    return true;
}



/**************************************************************************/
/***************************LOGISCHE / PROBALISTISCHE FUNKTIONEN***********/
/**************************************************************************/
const g = 1.0;
function sigmovalue( val ) {
  return 1 / ( 1 + Math.exp( -val / g) );
}

function tangh( val ){
    return 2 * sigmovalue( 2*val ) - 1;
}

function ln( val ){
    return Math.cbrt(  val );
}

function xoversqrtoneminusxx( val ){
    return val/Math.sqrt( 1-(val*val));
}

function piacrtan( val ){
    return (2/Math.PI)*Math.atan((Math.PI/2)*val);    
}

function xoveroneplusabsx( val ){
    return val/(1+Math.abs(val));
}

function relulu( val ){
    return Math.max(0.0, val);
}

function cusecos( val ){
    let compval = Math.min( val, (Math.PI*2) );
    return Math.cos( compval );
}

function sofmaVEC( ar ) {
    const maxiar = Math.max(...ar);
    const sco = ar.map(l => Math.exp(l - maxiar));
    const denom = sco.reduce((a, b) => a + b);
    return sco.map(s => s / denom);
}



function linfuntktionEINSasym( pos, maxat, end ){
	let fktwert = -1;
	if(pos <= maxat){ //steigung bis maxat
		fktwert = (1/maxat)*pos;
	} else { //steigung ab maxat
		fktwert = ((-1/(end-maxat))*pos)+2; //aufsteigend von -1 bis 0 am ende, dann mit + 2 in den positiven bereich korrigiert
	}
	return fktwert;
}

function linfunktionHoeheEINSverlaufAUFundAB( pos, wurzeldist ){
	//linear aufsteigend bis max = 1, dann linear absteigend bis wurzeldist, symetrisch
	let maxat = Math.round(wurzeldist/2);
	let fktwert = -1;
	if(pos <= maxat){
		fktwert = (1/maxat)*pos;
	} else {
		fktwert = (1/maxat)*(wurzeldist-pos); //wegen symetrie der fkt
	}
	return fktwert;
}
/***************************************************************************/
/**************************** ABSTRACTION OF CASES *************************/
/***************************************************************************/
function buildkomplizierteFunktion( rate, I, W1, W2, Wout ){
    //check sizes of input arrays
    //UPDATE FIRST LAYER
    let RESU1ABST = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];//should be created dynamicly after size of I
    for( let w = 0; w < W1.length; w+=1 ){
        //tangh sigmo ln was a good choise
        //let sigsog = sigmovalue( multsum( I, W1[w] ) );
        let sigsog = tangh( multsum( I, W1[w] ) );//
        //let sigsog = xoversqrtoneminusxx( multsum( I, W1[w] ) );
        //let sigsog = xoveroneplusabsx( multsum( I, W1[w] ) );
        //let sigsog = piacrtan( multsum( I, W1[w] ) );
        //let sigsog = relulu( multsum( I, W1[w] ) ) / W1[w].length;
        //let sigsog = ln( multsum( I, W1[w] ) );
        //let sigsog = cusecos( multsum( I, W1[w] ) );
        RESU1ABST[w] = sigsog;
        let ff = I[8] - sigsog;

        for(let i = 0; i < W1[w].length; i += 1){
            W1[w][i] = W1[w][i] + (rate * ff * I[i] );
        }
    }
    //UPDATE SECOND LAYER 
    let RESU2ABST = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];//should be created dynamicly after size of I
    for( let w = 0; w < W2.length; w+=1 ){
        let sigsog = sigmovalue( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = tangh( multsum( RESU1ABST, W2[w]  ) );// 
        //let sigsog = xoversqrtoneminusxx( multsum( RESU1ABST, W2[w]  ) );
        //let sigsog = xoveroneplusabsx( multsum( RESU1ABST, W2[w]  ) );
        //let sigsog = piacrtan( multsum( RESU1ABST, W2[w]  ) );
        //let sigsog = relulu( multsum( RESU1ABST, W2[w] ) ) / W2[w].length ;
        //let sigsog = ln( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = cusecos( multsum( RESU1ABST, W2[w] ) );
        RESU2ABST[w] = sigsog;
        let ff =  I[8] - sigsog;

        for(let i = 0; i < W2[w].length; i += 1){
            W2[w][i] = W2[w][i] + ( rate * ff * RESU1ABST[i] );
        }
    }
    //OUTPUT            
    //let sigOUT = sigmovalue( multsum( RESU2ABST, Wout ) );
    //let sigOUT = tangh( multsum( RESU2ABST, Wout ) );
    //let sigOUT = xoversqrtoneminusxx( multsum( RESU2ABST, Wout ) );
    //let sigOUT = xoveroneplusabsx( multsum( RESU2ABST, Wout ) );
    //let sigOUT = piacrtan( multsum( RESU2ABST, Wout ) );
    //let sigOUT = relulu( multsum( RESU2ABST, Wout ) ) / Wout.length;
    let sigOUT = ln( multsum( RESU2ABST, Wout ) );
    //let sigOUT = cusecos( multsum( RESU2ABST, Wout ) );
    let fo = I[8] - sigOUT;
    for(let i = 0; i < Wout.length; i += 1){
        Wout[i] = Wout[i] + (rate * fo * RESU2ABST[i] );
    }
    //return loss and result
    return [fo, sigOUT, W1, W2, Wout];
}

function applykomplizierteFunktion( I, W1, W2, Wout ){
    //check sizes of input arrays
    //Apply FIRST LAYER
    let RESU1ABST = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    for( let w = 0; w < W1.length; w+=1 ){
        //let sigsog = sigmovalue( multsum( I, W1[w] ) );
        let sigsog = tangh( multsum( I, W1[w] ) );// 
        //let sigsog = xoversqrtoneminusxx( multsum( I, W1[w] ) );
        //let sigsog = xoveroneplusabsx( multsum( I, W1[w] ) );
        //let sigsog = piacrtan( multsum( I, W1[w] ) );
        //let sigsog = relulu( multsum( I, W1[w] ) ) / W1[w].length;
        //let sigsog = ln( multsum( I, W1[w] ) );
        RESU1ABST[w] = sigsog;
    }
    //apply SECOND LAYER 
    let RESU2ABST = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    for( let w = 0; w < W2.length; w+=1 ){
        let sigsog = sigmovalue( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = tangh( multsum( RESU1ABST, W2[w] ) );// 
        //let sigsog = xoversqrtoneminusxx( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = xoveroneplusabsx( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = piacrtan( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = relulu( multsum( RESU1ABST, W2[w] ) ) / W2.length;
        //let sigsog = ln( multsum( RESU1ABST, W2[w] ) );
        //let sigsog = cusecos( multsum( RESU1ABST, W2[w] ) );
        RESU2ABST[w] = sigsog;
    }
    //multsum to OUTPUT            
    //let sigOUT = sigmovalue( multsum( RESU2ABST, Wout ) );
    //let sigOUT = tangh( multsum( RESU2ABST, Wout ) );
    //let sigOUT = xoversqrtoneminusxx( multsum( RESU2ABST, Wout ) );
    //let sigOUT = xoveroneplusabsx( multsum( RESU2ABST, Wout ) );
    //let sigOUT = piacrtan( multsum( RESU1ABST, Wout ) );
    //let sigOUT = relulu( multsum( RESU2ABST, Wout ) ) / Wout.length;
    let sigOUT = ln( multsum( RESU2ABST, Wout ) );
    //let sigOUT = cusecos( multsum( RESU2ABST, Wout ) );
    //return result
    return sigOUT;
}

/***************************************************************************/
/**************************** POS NEG VERFAHREN ****************************/
/***************************************************************************/
function gradientenbild( arr ){
    schwellePOSNEG = arr["posneg"];
	// Get A WebGL context
	let canvas2 = document.getElementById( "ocrcan2" );
	let ctx = canvas2.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
	let h = canvas2.height;
	let w = canvas2.width;
	let canvas1 = document.getElementById( "ocrcan1" );
	canvas1.height = h;
	canvas1.width = w;
	let gl1 = canvas1.getContext("experimental-webgl");
	gl1.viewport(0, 0, w, h);
    gl1.clearColor(0, 0, 0, 0);
    // Clear the canvas
   	gl1.clear(gl1.COLOR_BUFFER_BIT | gl1.DEPTH_BUFFER_BIT);
	//webgl stuff 
	let vertexShader = createShaderFromScriptElement(gl1, "2d-vertex-shader-1");
	let fragmentShader = createShaderFromScriptElement(gl1, "2d-fragment-shader-1");
	let program = createProgram(gl1, [vertexShader, fragmentShader]);
	gl1.useProgram( program );

	//tell wich shader part should run
	let progpart = gl1.getUniformLocation( program, "u_progpart");
	gl1.uniform1f( progpart, 1);
	// set the resolution
	let resolutionLocation = gl1.getUniformLocation( program, "u_resolution" );
	gl1.uniform2f(resolutionLocation, canvas1.width, canvas1.height);
	let rw = gl1.getUniformLocation( program, "u_w" );
	gl1.uniform1f(rw, canvas1.width);
	let rh = gl1.getUniformLocation( program, "u_h" );
	gl1.uniform1f(rh, canvas1.height);
	let sch = gl1.getUniformLocation( program, "SCH" );
	gl1.uniform1f(sch, schwellePOSNEG);
	// look up where the vertex data needs to go.
	let positionLocation = gl1.getAttribLocation(program, "a_position");

	// Create a buffer and put a single clipspace rectangle in
	let buffer = gl1.createBuffer();
	gl1.bindBuffer(gl1.ARRAY_BUFFER, buffer);
	gl1.bufferData(
    			gl1.ARRAY_BUFFER, 
    			new Float32Array([
        			-1.0, -1.0, 
        			 1.0, -1.0, 
        			-1.0,  1.0, 
        			-1.0,  1.0, 
         			 1.0, -1.0, 
         			 1.0,  1.0]), 
    			gl1.STATIC_DRAW);
	gl1.enableVertexAttribArray(positionLocation);
	gl1.vertexAttribPointer(positionLocation, 2, gl1.FLOAT, false, 0, 0);
		
	// look up where the texture coordinates need to go.
  	let texCoordLocation = gl1.getAttribLocation( program, "a_texCoord" );

  	// provide texture coordinates for the rectangle.
  	let texCoordBuffer = gl1.createBuffer();
  	gl1.bindBuffer(gl1.ARRAY_BUFFER, texCoordBuffer);
  	gl1.bufferData(gl1.ARRAY_BUFFER, new Float32Array([
      				0.0,  0.0,
      				1.0,  0.0,
      				0.0,  1.0,
      				0.0,  1.0,
      				1.0,  0.0,
      				1.0,  1.0]), gl1.STATIC_DRAW);
  	gl1.enableVertexAttribArray(texCoordLocation);
  	gl1.vertexAttribPointer(texCoordLocation, 2, gl1.FLOAT, false, 0, 0);

  	// Create a texture.
  	let texture = gl1.createTexture();
	//gl1.activeTexture(gl1.TEXTURE0);
  	gl1.bindTexture(gl1.TEXTURE_2D, texture);
	//gl1.pixelStorei(gl1.PACK_FLIP_Y_WEBGL, true);
  	// Set the parameters so we can render any size image.
  	gl1.texParameteri(gl1.TEXTURE_2D, gl1.TEXTURE_WRAP_S, gl1.CLAMP_TO_EDGE);
  	gl1.texParameteri(gl1.TEXTURE_2D, gl1.TEXTURE_WRAP_T, gl1.CLAMP_TO_EDGE);
  	gl1.texParameteri(gl1.TEXTURE_2D, gl1.TEXTURE_MIN_FILTER, gl1.NEAREST);
  	gl1.texParameteri(gl1.TEXTURE_2D, gl1.TEXTURE_MAG_FILTER, gl1.NEAREST);
  	// Upload the image into the texture.
  	gl1.texImage2D(gl1.TEXTURE_2D, 0, gl1.RGBA, gl1.RGBA, gl1.UNSIGNED_BYTE, ctx.getImageData( 0, 0, w, h ));
    
    // draw
	gl1.drawArrays(gl1.TRIANGLES, 0, 6);
         
    if( GLD.length === 0 ){   	 
	    GLD = new Uint8Array( 4 * w * h ); // be careful - allocate memory only once
    }

	//gl1.viewport(0, 0, w, h);
	gl1.readPixels(0, 0, w, h, gl1.RGBA, gl1.UNSIGNED_BYTE, GLD);
					
	//
	/*if(document.getElementById( "dosaveresultimages" ).checked === true){
        setTimeout(downaimageof(gl1, "diffbild"), timeouttimettt );
    }*/

    //
	gl1.flush();
    gl1.deleteTexture(texture);
    gl1.deleteBuffer(texCoordBuffer);
    gl1.deleteBuffer(buffer);
    gl1.finish(); 
    //gl1 = null;
    //ctx = null;
    //canvas2 = null;
    //canvas1 = null;
    //gl.deleteRenderbuffer(someRenderbuffer);
    //gl.deleteFramebuffer(someFramebuffer);
    
    //use a ABSTRACTION ABSTRACTION Multilinearkombinkruem
    let Wei1 = null; 
    let Wei2 = null;
    let WeiOu = null;
    let Wei1_old = null; 
    let Wei2_old = null;
    let WeiOu_old = null;
    let f1 = null;
    let f2 = null;
    let NEWSCHWELL = null;
    //abstraction parameter
    Wei1 = [[Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]    
                ];
    Wei2 = [[Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]    
                ];
    WeiOu = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];//[1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    let notopti = true;
    let stopit = 0;
    let eqoftwo = 0.3;
    let rate = 0.0001;
    let maxitter = 500;
    let alllossold = 0.0;

    

    if( document.getElementById( "reuseparams" ).checked ){
        Wei1 = JSON.parse( localStorage.getItem( "Wei1" ) );
        console.log("geholt");
        Wei2 = JSON.parse( localStorage.getItem( "Wei2" ) );
        WeiOu = JSON.parse( localStorage.getItem( "WeiOu" ) );
        f1 = JSON.parse( localStorage.getItem( "f1" ) );
        f2 = JSON.parse( localStorage.getItem( "f2" ) );
    }

    console.log("Wei1 init: ", Wei1);
    console.log("Wei2 init: ", Wei2);
    console.log("WeiOu init: ", WeiOu);

    let DD = ctx.getImageData( 0, 0, w, h );
    let D = DD.data;

    if( document.getElementById( "reuseparams" ).checked === false ){ 
        let posesof = [];
        let otherposof = [];
        for( let x = 1; x < w-1 ; x+=2 ){
		    for( let y = 1; y < h-1 ; y+=2 ){
                let cc = 0;
                let p = (x+(y*w))*4; // Berechnung des Index des Pixels im Datenarray
		        let pol = ((x-1)+((y-1)*w))*4; // Berechnung des Nachbarpixels links oben
                let po = ((x-1)+((y)*w))*4; // Nachbar oben
                let pl = ((x)+((y-1)*w))*4; // Nachbar links
                let pul = ((x+1)+((y-1)*w))*4; // Nachbar unten links
                let por = ((x-1)+((y+1)*w))*4; // Nachbar oben rechts
                let pr = ((x)+((y+1)*w))*4; // Nachbar rechts
                let pur = ((x+1)+((y+1)*w))*4; // Nachbar unten rechts
                let pu = ((x+1)+((y)*w))*4; // Nachbar unten

                if( GLD[ pol+3 ] !== 255 && (GLD[ po+3 ] !== 255 || GLD[ pl+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ po+3 ] !== 255 && (GLD[ pol+3 ] !== 255 || GLD[ por+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ pl+3 ] !== 255 && (GLD[ pol+3 ] !== 255 || GLD[ pul+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ pul+3 ] !== 255 && (GLD[ pl+3 ] !== 255 || GLD[ pu+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ por+3 ] !== 255 && (GLD[ po+3 ] !== 255 || GLD[ pr+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ pr+3 ] !== 255 && (GLD[ por+3 ] !== 255 || GLD[ pur+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ pur+3 ] !== 255 && (GLD[ pr+3 ] !== 255 || GLD[ pu+3 ] !== 255)){ 
                    cc += 1;
                }
                
                if( GLD[ pu+3 ] !== 255 && (GLD[ pul+3 ] !== 255 || GLD[ pur+3 ] !== 255)){ 
                    cc += 1;
                }

			    if( GLD[ p+3 ] !== 255 && cc > 2 && cc < 7 ){ //perfect for outline,  
                /*if( ( GLD[ pol+3 ] !== 255 && GLD[ pul+3 ] !== 255  && GLD[ pl+3 ] !== 255 ) ||
                    ( GLD[ pol+3 ] !== 255 && GLD[ po+3 ] !== 255  && GLD[ por+3 ] !== 255 ) ||
                    ( GLD[ pul+3 ] !== 255 && GLD[ pu+3 ] !== 255  && GLD[ pur+3 ] !== 255 ) ||
                    ( GLD[ por+3 ] !== 255 && GLD[ pr+3 ] !== 255  && GLD[ pur+3 ] !== 255 ) ||
                    ( GLD[ pl+3 ] !== 255 && GLD[ pol+3 ] !== 255  && GLD[ po+3 ] !== 255 ) ||
                    ( GLD[ po+3 ] !== 255 && GLD[ por+3 ] !== 255  && GLD[ pr+3 ] !== 255 ) ||
                    ( GLD[ pr+3 ] !== 255 && GLD[ pur+3 ] !== 255  && GLD[ pu+3 ] !== 255 ) || 
                    ( GLD[ pu+3 ] !== 255 && GLD[ pul+3 ] !== 255  && GLD[ pl+3 ] !== 255 )  ){//2 mehr, 3 weniger*/
                //if(cc > 4 && GLD[ p+3 ] === 255){
                   posesof.push( [x,y] );
        
			    } else if( GLD[ p+3 ] === 255 && cc < 2 ){
                    otherposof.push( [x,y] );	
                }

                /*if( cc > 3 ){//&& GLD[ p+3 ] === 255 ){ //
                   posesof.push( [x,y] );
			    } else if( GLD[ p+3 ] === 255 && cc === 0 ){
                    otherposof.push( [x,y] );	
                }*/
		    }
	    }
        
        let dl = D.length;
        let cases = [];
        let cases2 = [];
        for( let pi = 0; pi < posesof.length; pi += 1 ){ // second run to veryfie abstraction start with 1
            let x = posesof[pi][0];
            let y = posesof[pi][1];
            let p = (x+(y*w))*4; // Berechnung des Index des Pixels im Datenarray
            let v1 = [D[p], D[p+1],D[p+2]];
		    let pol = ((x-1)+((y-1)*w))*4; // Berechnung des Nachbarpixels links oben
            let v2 = [D[pol], D[pol+1],D[pol+2]];
            let rseultol = didi( v1, v2 );// Distanz innerhalb des Farbraums des Nachbarm mit dem zentralen Pixel
            //rseultol = luminosityVec(v2);
            let po = ((x-1)+((y)*w))*4; // Nachbar oben
            v2 = [D[po], D[po+1],D[po+2]]; 
            let rseulto = didi( v1, v2 );
            //rseulto = luminosityVec(v2);
            let pl = ((x)+((y-1)*w))*4; // Nachbar links
            v2 = [D[pl], D[pl+1],D[pl+2]];
            let rseultl = didi( v1, v2 );
            //rseultl = luminosityVec(v2);
            let pul = ((x+1)+((y-1)*w))*4; // Nachbar unten links
            v2 = [D[pul], D[pul+1],D[pul+2]];
            let rseultul = didi( v1, v2 );
            //rseultul = luminosityVec(v2);
            let por = ((x-1)+((y+1)*w))*4; // Nachbar oben rechts
            v2 = [D[por], D[por+1],D[por+2]];
		    let rseultor = didi( v1, v2 );
            //rseultor = luminosityVec(v2);
            let pr = ((x)+((y+1)*w))*4; // Nachbar rechts
            v2 = [D[pr], D[pr+1],D[pr+2]];
		    let rseultr = didi( v1, v2 );
            //rseultr = luminosityVec(v2);
            let pur = ((x+1)+((y+1)*w))*4; // Nachbar unten rechts
            v2 = [D[pur], D[pur+1],D[pur+2]];
		    let rseultur = didi( v1, v2 ); 
            //rseultur = luminosityVec(v2);
            let pu = ((x+1)+((y)*w))*4; // Nachbar unten
            v2 = [D[pu], D[pu+1],D[pu+2]];
		    let rseultu = didi( v1, v2 );
            //rseultu = luminosityVec(v2);

            cases.push([rseultol,rseulto,rseultor,rseultr,rseultur,rseultu, rseultul,rseultl, 1.0]);
            //cases.push([D[pol],D[po],D[por],D[pl], D[pr], D[pul], D[pu], D[pur], 0.0]);

            if( pi >= otherposof.length ){
                break; //if we do continue we will have more cases from the side
            }

            x = otherposof[pi][0];
            y = otherposof[pi][1];
            p = (x+(y*w))*4; // Berechnung des Index des Pixels im Datenarray
            v1 = [D[p], D[p+1],D[p+2]];
		    pol = ((x-1)+((y-1)*w))*4; // Berechnung des Nachbarpixels links oben
            v2 = [D[pol], D[pol+1],D[pol+2]];
            rseultol = didi( v1, v2 );// Distanz innerhalb des Farbraums des Nachbarm mit dem zentralen Pixel
            //rseultol = luminosityVec(v2);
            po = ((x-1)+((y)*w))*4; // Nachbar oben
            v2 = [D[po], D[po+1],D[po+2]];
            rseulto = didi( v1, v2 );
            //rseulto = luminosityVec(v2);
            pl = ((x)+((y-1)*w))*4; // Nachbar links
            v2 = [D[pl], D[pl+1],D[pl+2]];
            rseultl = didi( v1, v2 );
            //rseultl = luminosityVec(v2);
            pul = ((x+1)+((y-1)*w))*4; // Nachbar unten links
            v2 = [D[pul], D[pul+1],D[pul+2]];
            rseultul = didi( v1, v2 );
            //rseultul = luminosityVec(v2);
            por = ((x-1)+((y+1)*w))*4; // Nachbar oben rechts
            v2 = [D[por], D[por+1],D[por+2]];
		    rseultor = didi( v1, v2 );
            //rseultor = luminosityVec(v2);
            pr = ((x)+((y+1)*w))*4; // Nachbar rechts
            v2 = [D[pr], D[pr+1],D[pr+2]];
		    rseultr = didi( v1, v2 );
            //rseultr = luminosityVec(v2);
            pur = ((x+1)+((y+1)*w))*4; // Nachbar unten rechts
            v2 = [D[pur], D[pur+1],D[pur+2]];
		    rseultur = didi( v1, v2 ); 
            //rseultur= luminosityVec(v2);
            pu = ((x+1)+((y)*w))*4; // Nachbar unten
            v2 = [D[pu], D[pu+1],D[pu +2]];
		    rseultu = didi( v1, v2 );
            //rseultu= luminosityVec(v2);

            cases2.push([rseultol,rseulto,rseultor,rseultr,rseultur,rseultu, rseultul,rseultl, 0.0]);
            //cases2.push([D[pol],D[po],D[por],D[pl], D[pr], D[pul], D[pu], D[pur], 1.0]);
        }
        

        //buidl mixed array of both cases
        while( notopti ){
            let allloss = 0.0;
            for( let t = 0; t < cases2.length; t += 2 ){
                let lasssehen = buildkomplizierteFunktion( rate, cases[t], Wei1, Wei2, WeiOu );
                
                allloss = lasssehen[0]; 
                Wei1 = lasssehen[2];
                Wei2 = lasssehen[3];  
                WeiOu = lasssehen[4]; 
                
                let lasssehen_z = buildkomplizierteFunktion( rate, cases2[t], Wei1, Wei2, WeiOu );   
               
                allloss = lasssehen_z[0]; 
                Wei1 = lasssehen_z[2]; 
                Wei2 = lasssehen_z[3]; 
                WeiOu = lasssehen_z[4]; 
            }
            //quit check
            if( alllossold >= allloss && alllossold !== 0 ){ // if samll or no change
            //if(eqoftwo <= allloss){
                notopti = false;
                Wei1 = Wei1_old;
                Wei2 = Wei2_old;
                WeiOu = WeiOu_old;
            } 
            if( stopit > maxitter ){
                console.log("forced stop", Wei1, Wei2, WeiOu);
                notopti = false;
            }
            console.log(stopit, " step ", stopit*cases.length, allloss, alllossold, allloss - alllossold,"weights: ", WeiOu);
            stopit+=1;
            alllossold = allloss;

            Wei1_old = Wei1;
            Wei2_old = Wei2;
            WeiOu_old = WeiOu;
            
        }
        
        let countgood = 0;
        let c = 0;
        
        //console.log("Wei1 re: ", Wei1);
        //console.log("WeiOu re: ", WeiOu);
        
        for( let t = 1; t < cases.length; t += 2 ){
            let r = applykomplizierteFunktion( cases[t], Wei1, Wei2, WeiOu );
            f1 += r;
            //console.log(t, "r: ", r, cases[t][8]);
            r = applykomplizierteFunktion( cases2[t], Wei1, Wei2, WeiOu );
            //console.log(t, "r: ", r, cases2[t][8]);
            f2 += r;
        }
        f1 = f1 / (cases.length/2); 
        f2 = f2 / (cases.length/2);    


        //set get parameter
        localStorage.setItem( "Wei1", JSON.stringify( Wei1 ) ); 
        localStorage.setItem( "Wei2", JSON.stringify( Wei2 ) );
        localStorage.setItem( "WeiOu", JSON.stringify( WeiOu ) );
        localStorage.setItem( "f1", JSON.stringify( f1 ) );
        localStorage.setItem( "f2", JSON.stringify( f2 ) );
        console.log("input data len ", cases.length, cases2.length);
    }
    NEWSCHWELL = Math.sqrt(f1*f2);//(f1+f2)/2;
        console.log("f1: ", f1, "f2 ", f2, "NEWSCHWELL ", NEWSCHWELL, "fdiff: ", Math.abs(f1-f2));
    
    let canvas3 = document.getElementById( "ocrcan3" );
    canvas3.height = h;
	canvas3.width = w;
	let ctx3 = canvas3.getContext("2d");
    ctx3.putImageData( DD, 0, 0 );
    let DDD = ctx3.getImageData( 0, 0, w, h );
    let Da = DDD.data;
    for( let x = 0; x < w; x+=1 ){
		for( let y = 0; y < h; y+=1 ){
            let p = (x+(y*w))*4; // Berechnung des Index des Pixels im Datenarray
            let v1 = [D[p], D[p+1],D[p+2]];
		    let pol = ((x-1)+((y-1)*w))*4; // Berechnung des Nachbarpixels links oben
            let v2 = [D[pol], D[pol+1],D[pol+2]];
            let rseultol = didi( v1, v2 );// Distanz innerhalb des Farbraums des Nachbarm mit dem zentralen Pixel
            //rseultol = luminosityVec(v2);
            let po = ((x-1)+((y)*w))*4; // Nachbar oben
            v2 = [D[po], D[po+1],D[po+2]];
            let rseulto = didi( v1, v2 );
            //rseulto = luminosityVec(v2);
            let pl = ((x)+((y-1)*w))*4; // Nachbar links
            v2 = [D[pl], D[pl+1],D[pl+2]];
            let rseultl = didi( v1, v2 );
            //rseultl = luminosityVec(v2);
            let pul = ((x+1)+((y-1)*w))*4; // Nachbar unten links
            v2 = [D[pul], D[pul+1],D[pul+2]];
            let rseultul = didi( v1, v2 );
            //rseultul = luminosityVec(v2);
            let por = ((x-1)+((y+1)*w))*4; // Nachbar oben rechts
            v2 = [D[por], D[por+1],D[por+2]];
		    let rseultor = didi( v1, v2 );
            //rseultor = luminosityVec(v2);
            let pr = ((x)+((y+1)*w))*4; // Nachbar rechts
            v2 = [D[pr], D[pr+1],D[pr+2]];
		    let rseultr = didi( v1, v2 );
            //rseultr = luminosityVec(v2);
            let pur = ((x+1)+((y+1)*w))*4; // Nachbar unten rechts
            v2 = [D[pur], D[pur+1],D[pur+2]];
		    let rseultur = didi( v1, v2 ); 
            //rseultur = luminosityVec(v2);
            let pu = ((x+1)+((y)*w))*4; // Nachbar unten
            v2 = [D[pu], D[pu+1],D[pu+2]];
		    let rseultu = didi( v1, v2 );
            //rseultu = luminosityVec(v2);

            let viva = [rseultol,rseulto,rseultor,rseultr,rseultur,rseultu, rseultul,rseultl, 0.0];
            let r = applykomplizierteFunktion( viva, Wei1, Wei2, WeiOu );
            if( r >= f1 ){//&& GLD[ p+3 ] !== 255 ){
            //if( r >= f2 ){
            //if( r > 0.5 ){
            //if( r > NEWSCHWELL ){
			    Da[ p ] = 255;
		        Da[ p + 1] = 255;
			    Da[ p + 2] = 255;
				Da[ p + 3] = 255;	
                /*Da[ por ] = 0;
		        Da[ por + 1] = 0;
			    Da[ por + 2] = 0;*/
				//Da[ por + 3] = 255;
                /*Da[ po ] = 0;
		        Da[ po + 1] = 0;
			    Da[ po + 2] = 0;*/
				//Da[ po + 3] = 255;
                /*Da[ pol ] = 0;
		        Da[ pol + 1] = 0;
			    Da[ pol + 2] = 0;*/
				//Da[ pol + 3] = 255;
                /*Da[ pr ] = 0;
		        Da[ pr + 1] = 0;
			    Da[ pr + 2] = 0;*/
				//Da[ pr + 3] = 255;
                /*Da[ pl ] = 0;
		        Da[ pl + 1] = 0;
			    Da[ pl + 2] = 0;*/
				//Da[ pl + 3] = 255;
                /*Da[ pur ] = 0;
		        Da[ pur + 1] = 0;
			    Da[ pur + 2] = 0;*/
				//Da[ pur + 3] = 255;
                /*Da[ pu ] = 0;
		        Da[ pu + 1] = 0;
			    Da[ pu + 2] = 0;*/
				//Da[ pu + 3] = 255;
                /*Da[ pul ] = 0;
		        Da[ pul + 1] = 0;
			    Da[ pul + 2] = 0;*/
				//Da[ pul + 3] = 255;
			} /*else {
				Da[ p + 3] = 0;
            }*/
		}
	}
    ctx3.putImageData( DDD, 0, 0 );
    //readFROM( theReihenname[ picindex ], "HRO", thesrces[ picindex ], writeHRO, suchBuchrand );
}

function PosNegSchwelle( ){ 
	let c = document.getElementById( "ocrcan2" );
    let ctx = c.getContext("2d");
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
	let h = c.height;
	let w = c.width;
    //nimm die gleiche voraussetzung, wie für die Randsuche und schau nur drin, es wird ein farhler begangen, aber der wirkt sich im Gegenteil aus, man könnte auch posneg-rand-posneg-rand machen, aber so kommt es auf ähnliches heraus - so ist schneller
    let howfary = Math.round( h / 20 ); //Hochformat
	let howfarx = Math.round( w / 15 );
    if( w > h ){
        howfary = Math.round( h / 15 ); //Querformat
        howfarx = Math.round( w / 20 );
    }
    let dh = h - howfary;
    let dw = w - howfarx;
    let ddh = h - (howfary*2);
    let ddw = w - (howfarx*2);

	let schwes = [];
    let workerobjs = [];
    let workers = [];

    let hworker = Math.floor( ddh / howmanyTHREADS );
    let hworkerlast = (ddh - ( (howmanyTHREADS-1) * hworker ));


    for(let wo = 0; wo < howmanyTHREADS; wo++){
        //webworkerdata
        let startindex = hworker*wo;
        if( wo === howmanyTHREADS-1 ){
            hworker = hworkerlast;
        } 

    
		//let D = ctx.getImageData( 0, startindex, w,  hworker );
        let D = ctx.getImageData( howfarx, startindex, dw, hworker );

        workerobjs.push({"cmd":"eval",
						 "h":hworker,
						 "w":ddw,
						 "schwelleSOLARISATION":schwellePOSNEG,
						 "D":D});
        //webworker
        let worker = new Worker("js/isallblackwebworker.js");
        worker.onmessage = function( event ){
        	schwes.push( event.data.schw );
            if( schwes.length === workerobjs.length ){
                schwellePOSNEG = 0.0;
                for(let t = 0; t < schwes.length; t++){
                    //console.log(schwes[t]);
                    //schwellePOSNEG *= schwes[t]; //geometrisches mittel
                    schwellePOSNEG += schwes[t];//arithmetisches Mittel
                    //schwellePOSNEG += 1.0/schwes[t]; //harmonisches mIttel
                }
                //schwellePOSNEG = schwes.length/schwellePOSNEG;//harmonisches Mittel
				schwellePOSNEG = schwellePOSNEG/schwes.length;//arithmetisches mittel 
                //schwellePOSNEG = Math.pow(schwellePOSNEG, 1/schwes.length);//geometrisches Mittel
                //getMax(schwes);//
				writeTO(theReihenname[ picindex ], "POSNEGSCH", {"posneg": schwellePOSNEG, "bname": thesrces[ picindex ]} );				
				console.log("Schwelle POSNEG", schwellePOSNEG);
                //talk garbage
                c = null;
                ctx = null;
                schwes = null;
                workerobjs = null;
                workers = null;
                hworker = null;
                hworkerlast = null;
           
				gradientenbild( {"posneg": schwellePOSNEG, "bname": thesrces[ picindex ]} );
			}
            
        };
        workers.push(worker);
        //talk garbage
        D = null; 
    }
    for(let wo = 0; wo < workers.length; wo++){
        workers[ wo ].postMessage( workerobjs[ wo ] );
    } 
    
}

/*******************************************************************************/
/**************************** CONNECT Components / FILL WHITE ******************/
/*******************************************************************************/
function nichtweiszundnichtnurfnachbarn( D, cx, cy, w, h ){
	let pos = (cx+(cy*w))*4;
	let posl = ((cx-1)+(cy*w))*4;
	let posr = ((cx+1)+(cy*w))*4;
	let posol = ((cx-1)+((cy-1)*w))*4;			
	let posor = ((cx+1)+((cy-1)*w))*4;			
	let poso =   (cx+((cy-1)*w))*4;
	let posul = ((cx-1)+((cy+1)*w))*4;
	let posur = ((cx+1)+((cy+1)*w))*4;
	let posu =   (cx+((cy+1)*w))*4;

	if( D.data[ pos+3 ] === 255 ){
		let countfarbig = 0;
		if(D.data[ posl+3 ] === 255 || D.data[ posl+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posr+3 ] === 255 || D.data[ posr+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posol+3 ] === 255 || D.data[ posol+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posor+3 ] === 255 || D.data[ posor+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ poso+3 ] === 255 || D.data[ poso+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posul+3 ] === 255 || D.data[ posul+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posur+3 ] === 255 || D.data[ posur+3 ] === 254){
			countfarbig++;
		}
		if(D.data[ posu+3 ] === 255 || D.data[ posu+3 ] === 254){
			countfarbig++;
		}

		if( countfarbig === 8 || countfarbig < 1 ){
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}
function istweiszundnichtnurfnachbarn( D, cx, cy, w, h  ){
	let pos = (cx+(cy*w))*4;
	let posl = ((cx-1)+(cy*w))*4;
	let posr = ((cx+1)+(cy*w))*4;
	let posol = ((cx-1)+((cy-1)*w))*4;			
	let posor = ((cx+1)+((cy-1)*w))*4;			
	let poso =   (cx+((cy-1)*w))*4;
	let posul = ((cx-1)+((cy+1)*w))*4;
	let posur = ((cx+1)+((cy+1)*w))*4;
	let posu =   (cx+((cy+1)*w))*4;

	if( D.data[ pos+3 ] === 0 ){
		let countfarbig = 0;
		if(D.data[ posl+3 ] === 255 ){
			countfarbig++;
		}
		if(D.data[ posr+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ posol+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ posor+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ poso+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ posul+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ posur+3 ] === 255){
			countfarbig++;
		}
		if(D.data[ posu+3 ] === 255){
			countfarbig++;
		}

		if( countfarbig === 8 || countfarbig < 1 ){
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function getconnectedCzwei( ctx, D, sx, ex, sy, ey, h, w ){
	let componenten = [];
	let inc = 1;
	let notnatabglob = 0;
	let notnatab = 0;
    let alleraender = [];
    let alleraenderfarben = [];
	for( let y = sy; y < ey ; y+=inc ){ //itteriere die y- und
		for( let x = sx; x < ex ; x+=inc ){//die x- Richtung des Bildes/der Daten
            //wenn ein "Pixel" in G die eigenschaft hat Nachbarn in T zuhaben, aber nicht nur = Kriterium der Hüllenselektion
            let bewertunghuelle = nichtweiszundnichtnurfnachbarn( D, x, y, w, h );
			if( bewertunghuelle ){ //ist Punkt der Huelle
				let goamrandlang = true;//Abbruchkriterium fuer die Suche der Nachbarn
				let pos = (x+(y*w))*4;//Position im Datanarrayberechnen
				let gox = x;//Laufindex der Suche
				let goy = y;//"
				let randdercomponente = [ [gox, goy, pos] ];//Speicher fuer den Rand der Komponente
                let randdercomfuerindexof = [ pos ]; //Position war schon besucht - zusätzliches Array, om indexOf Funktion zu nutzen
                let oldrandlenght = randdercomponente.length;//vormalige Laenge der gefunden Huelle merken, um Gradient des Wachstums zu bestimmen
                let howmanytoceck = 1;//wie viel Nachbarn gibt es pro Pixel
				while( goamrandlang ){
					
                    let cheche = 0;//lokale variable fuer die Anzahl hinzukommender Nachbarn
                    let starti = randdercomponente.length-1; //welche Punkte sind schon im Huellenarray, muessen aber noch auf Nachbarn untersucht werden
                    let endi = (randdercomponente.length-1-howmanytoceck);//ende der Nachbarnuntersuchung
                    let i = starti;
					for( i = starti; i > endi; i-- ){//index Erzeugung für die Nachbarnuntersuchung, rueckwaerts im Array, um mit push das Array gleichzeitig modifizieren zu koennen
                        
                        gox = randdercomponente[ i ][0]; //Untersuchungsposition x Komponente
                        goy = randdercomponente[ i ][1]; //y Komponente
					    let posl = ((gox-1)+(goy*w))*4;  //Index im Datenarray
					    let Rposl = nichtweiszundnichtnurfnachbarn(D, (gox-1), goy, w, h ); //Bewertung nach dem Kriterium Rand zu sein
                        if( Rposl && randdercomfuerindexof.indexOf( posl ) === -1 ){ //wenn Index noch nicht im Rand vertreten und Kriterium erfuellt
                            randdercomponente.push( [gox-1, goy, posl] ); //in Huellenarray aufnehmen
                            randdercomfuerindexof.push( posl );//Array zur Kontrolle distinkter Zugehoerigkeit erweitern
                            cheche+=1;//Nachbarn dieses Punktes muessen untersucht werden
                        }
					    let posr = ((gox+1)+(goy*w))*4;
					    let Rposr = nichtweiszundnichtnurfnachbarn(D, (gox+1), goy, w, h );
                        if( Rposr && randdercomfuerindexof.indexOf( posr ) === -1 ){
                            randdercomponente.push( [gox+1, goy, posr] );
                            randdercomfuerindexof.push( posr );
                            cheche+=1;
                        }
					    let posol = ((gox-1)+((goy-1)*w))*4;		
					    let Rposol = nichtweiszundnichtnurfnachbarn(D, (gox-1), (goy-1), w, h );
                        if( Rposol && randdercomfuerindexof.indexOf( posol ) === -1 ){
                            randdercomponente.push( [gox-1, goy-1, posol] );
                            randdercomfuerindexof.push( posol );
                            cheche+=1;
                        }	
					    let posor = ((gox+1)+((goy-1)*w))*4;		
					    let Rposor = nichtweiszundnichtnurfnachbarn(D, (gox+1), (goy-1), w, h );
                        if( Rposor && randdercomfuerindexof.indexOf( posor ) === -1 ){
                            randdercomponente.push( [(gox+1), (goy-1), posor] );
                            randdercomfuerindexof.push( posor );
                            cheche+=1;
                        }	
					    let poso =   (gox+((goy-1)*w))*4;
					    let Rposo = nichtweiszundnichtnurfnachbarn(D, (gox), (goy-1), w, h );
                        if( Rposo && randdercomfuerindexof.indexOf( poso ) === -1 ){
                            randdercomponente.push( [(gox), (goy-1), poso] );
                            randdercomfuerindexof.push( poso );
                            cheche+=1;
                        }
					    let posul = ((gox-1)+((goy+1)*w))*4;
					    let Rposul = nichtweiszundnichtnurfnachbarn(D, (gox-1), (goy+1), w, h );
                        if( Rposul && randdercomfuerindexof.indexOf( posul ) === -1 ){
                            randdercomponente.push( [(gox-1), (goy+1), posul] );
                            randdercomfuerindexof.push( posul );
                            cheche+=1;
                        }
					    let posur = ((gox+1)+((goy+1)*w))*4;
					    let Rposur = nichtweiszundnichtnurfnachbarn(D, (gox+1), (goy+1), w, h );
                        if( Rposur && randdercomfuerindexof.indexOf( posur ) === -1 ){
                            randdercomponente.push( [(gox+1), (goy+1), posur] );
                            randdercomfuerindexof.push( posur );
                            cheche+=1;
                        }
					    let posu =   (gox+((goy+1)*w))*4;
					    let Rposu = nichtweiszundnichtnurfnachbarn(D, (gox), (goy+1), w, h );
                        if( Rposu && randdercomfuerindexof.indexOf( posu ) === -1 ){
                            randdercomponente.push( [(gox), (goy+1), posu] );
                            randdercomfuerindexof.push( posu );
                            cheche+=1;
                        }
                        
                    }
                    howmanytoceck = cheche;
                    if( oldrandlenght === randdercomponente.length ){ //wenn keine Nachbarn merh gefunden werden konnten, dann brich die while schleife ab (Gradient des Arrayzuwachse ist Null)
                        goamrandlang = false;
                    }
					oldrandlenght = randdercomponente.length; //neue Array Länge merken
				}
                
				
				//find min row = fang oben an - - aber mach noch nichts anderes
				if( randdercomponente.length > 1 ){
                    let rr = Math.round(Math.random() * 255);
				    let gg = Math.round(Math.random() * 255);
				    let bb = Math.round(Math.random() * 255);
                    let ril = randdercomponente.length;
                    let h = 0;
                    for( h = 0; h < ril; h+=1 ){
					    let cp = randdercomponente[ h ][2];
					    if( D.data[ cp + 3] === 255 ){
						    D.data[ cp ] = rr;
						    D.data[ cp + 1] = gg;
						    D.data[ cp + 2] = bb;
						    D.data[ cp + 3] = 254;
					    }
					}
					alleraender.push( randdercomponente );
                    alleraenderfarben.push([ rr, gg, bb ]);
				}
			}
		}
	}
    alleraender.sort( function (a, b) {
        return a.length - b.length;
    });

    let aid = alleraender.length;
    let ra = 0;
    for( ra = 0; ra < aid; ra+=1 ){
        let randdercomponente = alleraender[ra];
        let minrow = h+1;
				let maxrow = 0;
                let ril = randdercomponente.length;
				let minrowi = randdercomponente.length;
				let maxnrowi = 0;
				let rr = alleraenderfarben[ra][0];
				let gg = alleraenderfarben[ra][1];
				let bb = alleraenderfarben[ra][2];
                let rcp = 0;
				for( rcp = 0; rcp < ril; rcp+=1 ){
                    let cp = (randdercomponente[ rcp ][ 0 ]+(randdercomponente[ rcp ][ 1 ]*w))*4;
                    D.data[ cp ] = rr;
					D.data[ cp + 1] = gg;
					D.data[ cp + 2] = bb;
					let temprow = randdercomponente[ rcp ][ 1 ];
					if( minrow >= temprow ){
						minrowi = rcp;
						minrow = temprow;
					}

					if( maxrow <= temprow ){
						maxnrowi = rcp;
						maxrow = temprow;
					}
				}

                //
				
				//console.log("min row", minrow, "max row", maxrow, "randlänge", randdercomponente.length, randdercomponente.length/2);
				let incrow = minrow;
				let comp = [];	
				let absmincol = w+1;
				let absmaxcol = 0;
				while( incrow <= maxrow ){ //fülle col pro row aus
					let mincol = w+1;
					let maxcol = 0;
					for( rcp = 0; rcp < ril; rcp+=1 ){
						let temprow = randdercomponente[ rcp ][ 1 ];
						if( temprow === incrow ){
							let tempcol = randdercomponente[ rcp ][ 0 ];
                            

							if( mincol >= tempcol ){
								mincol = tempcol;
							}

							if( maxcol <= tempcol ){
								maxcol = tempcol;
							}
						
							if( absmincol >= tempcol ){
								absmincol = tempcol;
							}

							if( absmaxcol <= tempcol ){
								absmaxcol = tempcol;
							}
						}

					}
					//console.log("mincol", mincol, "maxcol", maxcol);

                    
					let pixelrow = [];
					for(let gocol = mincol; gocol <= maxcol; gocol+=1){
						let cp = (gocol+(incrow*w))*4;
						if( D.data[ cp + 3] === 255 ||

                            (D.data[ cp ] === rr &&
							D.data[ cp + 1] === gg &&
							D.data[ cp + 2] === bb)){
							D.data[ cp ] = rr;
							D.data[ cp + 1] = gg;
							D.data[ cp + 2] = bb;
							D.data[ cp + 3] = 254;
                           
							pixelrow.push([gocol, incrow, cp]);
						}
					}
					comp.push(pixelrow); 
					incrow+=1;
				}
                if( absmincol === null ){
                    console.log(absmincol, minrow, absmaxcol, maxrow);
                }
                
                let pixofcomp = comp.reduce((a,b) => a + b.length, 0);
                //console.log(pixofcomp- randdercomponente.length);
                if( (pixofcomp - ril) > 5 ){ //nur rand componenten, loecher also
                //if( comp.length > 5 ){
				    componenten.push( [[absmincol, minrow, absmaxcol, maxrow], randdercomponente, comp] );
                }
                /*} else {
                    let cil = comp.length;
                    let l = 0;    
                    for( l = 0; l < cil; l+=1 ){
                        let lil = comp[l].length;
                        let p = 0;
                        for( p = 0; p < lil; p+=1 ){
                            D.data[ comp[l][p][2] + 3 ] = 255;
                        }
                    }
                }*/   
    }
	ctx.putImageData( D, 0, 0 );
	zentrendercomponenten( ctx, D, sx, ex, sy, ey, h, w, componenten );
}

function getconnectedC( ctx, D, sx, ex, sy, ey, h, w ){
	let componentenraender = [];
	let componenten = [];
	let inc = 1;
	let notnatabglob = 0;
	let notnatab = 0;
	for( let y = sy; y < ey ; y+=inc ){
		for( let x = sx; x < ex ; x+=inc ){
			let pos = (x+(y*w))*4;
			if( D.data[ pos+3 ] === 255 ){
				let countnatab = 0;
				//start außenline
				let goamrandlang = true;
				let gopos = -1;
				let gox = x;
				let goy = y;
				let randdercomponente = [];
                let randdercomfuerindexof = [];
				let countrand = 0;
				let erg = "";
				let bewegungsindex = 0;
				randdercomponente.push( [gox, goy, pos] );
				let ccw = true;
				let inclimit = 4
				let wasnothingttwotinme = false;
				let loopdet = 0;
				while( goamrandlang ){
					//if(randdercomponente.length > (h*w)){ //notaus, wenn das Suchen des Randes sich verklemmt, keine ahnung welche konfiguration dazu führt
					if( loopdet > 5 ){

						if(ccw){
								randdercomponente = [];
								ccw = false;
						} else {
						
						/*if(loopdet !== 5){
							console.log(ccw, x, y, gox, goy, ex, ey, randdercomponente[randdercomponente.length-1],randdercomponente[randdercomponente.length-2], randdercomponente[randdercomponente.length-3]);
						}*/
						notnatab+=1;
						goamrandlang = false;
						break;
						}
					}
					

					//Der Erste nach dem Letzten
					let posl = ((gox-1)+(goy*w))*4; 
					let Rposl = istweiszundnichtnurfnachbarn(D, (gox-1), goy, w, h );
					let posr = ((gox+1)+(goy*w))*4;
					let Rposr = istweiszundnichtnurfnachbarn(D, (gox+1), goy, w, h );
					let posol = ((gox-1)+((goy-1)*w))*4;		
					let Rposol = istweiszundnichtnurfnachbarn(D, (gox-1), (goy-1), w, h );	
					let posor = ((gox+1)+((goy-1)*w))*4;		
					let Rposor = istweiszundnichtnurfnachbarn(D, (gox+1), (goy-1), w, h );	
					let poso =   (gox+((goy-1)*w))*4;
					let Rposo = istweiszundnichtnurfnachbarn(D, (gox), (goy-1), w, h );
					let posul = ((gox-1)+((goy+1)*w))*4;
					let Rposul = istweiszundnichtnurfnachbarn(D, (gox-1), (goy+1), w, h );
					let posur = ((gox+1)+((goy+1)*w))*4;
					let Rposur = istweiszundnichtnurfnachbarn(D, (gox+1), (goy+1), w, h );
					let posu =   (gox+((goy+1)*w))*4;
					let Rposu = istweiszundnichtnurfnachbarn(D, (gox), (goy+1), w, h );

					//alpha value 1 is component part
					let suchdenweg = [];
					let checkcount = 0;
					let tempindex = bewegungsindex;
					let wasnothing = true;
					let wassame = false;
					let tempgox = -1;
					let tempgoy = -1;
					let tempgopos = -1;
					
					if( ccw ){
						//suchdenweg.push( [gox-1, goy+1, posul, (D.data[ posl+3 ] === 0 ) &&( D.data[ posul+3 ] === 255) ] );//0
						suchdenweg.push( [gox-1, goy+1, posul, Rposl && ( D.data[ posul+3 ] === 255) ] );//0
						//suchdenweg.push( [gox, goy+1, posu, (D.data[ posul+3 ] === 0) && ( D.data[ posu+3 ] === 255) ] );//1
						suchdenweg.push( [gox, goy+1, posu, Rposul && ( D.data[ posu+3 ] === 255) ] );//1
						//suchdenweg.push( [gox+1,goy+1,posur, (D.data[ posu+3 ] === 0) && ( D.data[ posur+3] === 255) ] );//2
						suchdenweg.push( [gox+1,goy+1,posur, Rposu && ( D.data[ posur+3] === 255) ] );//2						
						//suchdenweg.push( [gox+1, goy,posr, (D.data[ posur+3 ] === 0) && ( D.data[ posr+3 ] === 255)  ] );  //3
						suchdenweg.push( [gox+1, goy,posr, Rposur && ( D.data[ posr+3 ] === 255)  ] );  //3			
						//suchdenweg.push( [gox+1, goy-1, posor,(D.data[ posr+3 ] === 0) &&( D.data[ posor+3 ] === 255)] );//4
						suchdenweg.push( [gox+1, goy-1, posor, Rposr &&( D.data[ posor+3 ] === 255)] );//4
						//suchdenweg.push( [gox, goy-1, poso, (D.data[ posor+3 ] === 0) &&( D.data[ poso+3 ] === 255) ] ); //5
						suchdenweg.push( [gox, goy-1, poso, Rposor &&( D.data[ poso+3 ] === 255) ] ); //5
						//suchdenweg.push( [gox-1, goy-1, posol, (D.data[ poso+3 ] === 0) &&( D.data[ posol+3 ] === 255)] );//6
						suchdenweg.push( [gox-1, goy-1, posol, Rposo &&( D.data[ posol+3 ] === 255)] );//6
						//suchdenweg.push( [gox-1, goy, posl, (D.data[ posol+3 ] === 0) && ( D.data[ posl+3 ] === 255)] );  //7
						suchdenweg.push( [gox-1, goy, posl, Rposol && ( D.data[ posl+3 ] === 255)] );  //7
						while( checkcount < 8  ){
							if( tempindex === 8 ){
								tempindex = 0;
							}
							if( suchdenweg[ tempindex ][ 3 ]  ){
								bewegungsindex = tempindex;
								for( let incbew = 0; incbew <= inclimit; incbew+=1 ){
									bewegungsindex+=1;
									if( bewegungsindex === 8 ){
										bewegungsindex = 0;
									}
								}
								gox = suchdenweg[tempindex][0]; 
								goy = suchdenweg[tempindex][1];
								gopos = suchdenweg[tempindex][2];
								wasnothing = false;
								checkcount = 8;
							} 
							tempindex+=1;
							checkcount+=1;
						}
					} else { 
						//suchdenweg.push( [gox-1, goy+1, posul, (D.data[ posu+3 ] === 0)&&( D.data[ posul+3 ] === 255) ] );//0
						suchdenweg.push( [gox-1, goy+1, posul, Rposu && ( D.data[ posul+3 ] === 255) ] );//0
						//suchdenweg.push( [gox, goy+1, posu, ( D.data[ posur+3 ] === 0) && ( D.data[ posu+3 ] === 255) ] );//1
						suchdenweg.push( [gox, goy+1, posu, Rposur && ( D.data[ posu+3 ] === 255) ] );//1
						//suchdenweg.push( [gox+1,goy+1,posur, ( D.data[ posr+3 ] === 0) && ( D.data[ posur+3] === 255) ] );//2
						suchdenweg.push( [gox+1,goy+1,posur, Rposr && ( D.data[ posur+3] === 255) ] );//2
						//suchdenweg.push( [gox+1, goy,posr, ( D.data[ posor+3 ] === 0) && ( D.data[ posr+3 ] === 255)] );  //3
						suchdenweg.push( [gox+1, goy,posr, Rposor && ( D.data[ posr+3 ] === 255)] );  //3
						//suchdenweg.push( [gox+1, goy-1, posor, ( D.data[ poso+3 ] === 0) &&( D.data[ posor+3 ] === 255)] );//4
						suchdenweg.push( [gox+1, goy-1, posor, Rposo &&( D.data[ posor+3 ] === 255)] );//4
						//suchdenweg.push( [gox, goy-1, poso, ( D.data[ posol+3 ] === 0) &&( D.data[ poso+3 ] === 255) ] ); //5
						suchdenweg.push( [gox, goy-1, poso, Rposol &&( D.data[ poso+3 ] === 255) ] ); //5
						//suchdenweg.push( [gox-1, goy-1, posol, ( D.data[ posl+3 ] === 0) &&( D.data[ posol+3 ] === 255)] );//6
						suchdenweg.push( [gox-1, goy-1, posol, Rposl &&( D.data[ posol+3 ] === 255)] );//6
						//suchdenweg.push( [gox-1, goy, posl, ( D.data[ posul+3 ] === 0) && ( D.data[ posl+3 ] === 255)] );  //7
						suchdenweg.push( [gox-1, goy, posl, Rposul && ( D.data[ posl+3 ] === 255)] );  //7
						tempindex = 7;
						while( checkcount > -8  ){
							if( tempindex === 0 ){
								tempindex = 7;
							}
							if( suchdenweg[tempindex][3]  ){
								bewegungsindex = tempindex;
								for( let incbew = 0; incbew <= inclimit; incbew+=1 ){
									bewegungsindex--;
									if( bewegungsindex === 0 ){
										bewegungsindex = 7;
									}
								}
								gox = suchdenweg[tempindex][0]; 
								goy = suchdenweg[tempindex][1];
								oldpos = gopos;
								gopos = suchdenweg[tempindex][2];
								wasnothing = false;
								checkcount = -8;
							} 
							tempindex--;
							checkcount--;
						}

					}

					
					
					//abbrechen, wenn rand geschlossen - der Rand ist immer geschlossen
					if( pos === gopos ){
						goamrandlang = false;
						countnatab+=1;
						notnatabglob+=1;
						
					} 
					
					if( wasnothing ){
						if(randdercomponente.length > 1){
						if(ccw === false){
							if(inclimit === 4){
								inclimit+=1;
							} else {
								inclimit = 4;
								goamrandlang = false;
							}
						}
						ccw = false;
						gopos = randdercomponente[1][2];
						gox = randdercomponente[1][0];
						goy = randdercomponente[1][1];
						} else {
							goamrandlang = false;
						}
					} else {
						if(randdercomfuerindexof.indexOf( gopos ) === -1 ){
						    randdercomponente.push( [gox, goy, gopos] );
                            randdercomfuerindexof.push( gopos );
                            
                        } 
					}

					if(randdercomponente.length > 2){
						if( gopos === randdercomponente[randdercomponente.length-3][2] ){
						 	loopdet+=1;
						} else {
							loopdet = 0;
						}
					}		
				}
				
				//find min row = fang oben an - - aber mach noch nichts anderes
				if( randdercomponente.length > 1 ){
				let minrow = h+1;
				let maxrow = 0;
				let minrowi = randdercomponente.length;
				let maxnrowi = 0;
				let rr = Math.round(Math.random() * 255);
				let gg = Math.round(Math.random() * 255);
				let bb = Math.round(Math.random() * 255);
                let ril = randdercomponente.length;
                let rcp = 0;
				for( rcp = 0; rcp < ril; rcp+=1 ){
					let temprow = randdercomponente[ rcp ][ 1 ];
					if( minrow >= temprow ){
						minrowi = rcp;
						minrow = temprow;
					}

					if( maxrow <= temprow ){
						maxnrowi = rcp;
						maxrow = temprow;
					}
				}

				
				//console.log("min row", minrow, "max row", maxrow, "randlänge", randdercomponente.length, randdercomponente.length/2);
				let incrow = minrow;
				let comp = [];	
				let absmincol = w+1;
				let absmaxcol = 0;
				while( incrow <= maxrow ){ //fülle col pro row aus
					let mincol = w+1;
					let maxcol = 0;
					for( rcp = 0; rcp < ril; rcp+=1 ){
						let temprow = randdercomponente[ rcp ][ 1 ];
						if( temprow === incrow ){
							let tempcol = randdercomponente[ rcp ][ 0 ];
							if( mincol >= tempcol ){
								mincol = tempcol;
							}

							if( maxcol <= tempcol ){
								maxcol = tempcol;
							}
						
							if( absmincol >= tempcol ){
								absmincol = tempcol;
							}

							if( absmaxcol <= tempcol ){
								absmaxcol = tempcol;
							}
						}

					}
					//console.log("mincol", mincol, "maxcol", maxcol);
					let pixelrow = [];
					for(let gocol = mincol; gocol <= maxcol; gocol+=1){
						let cp = (gocol+(incrow*w))*4;
						if( D.data[ cp + 3] === 255 ||

                            (D.data[ cp ] === rr &&
							D.data[ cp + 1] === gg &&
							D.data[ cp + 2] === bb)){
							D.data[ cp ] = rr;
							D.data[ cp + 1] = gg;
							D.data[ cp + 2] = bb;
							D.data[ cp + 3] = 254;
                           
							pixelrow.push([gocol, incrow, cp]);
						}
					}
					comp.push( pixelrow );
					incrow+=1;
				}
                if( absmincol === null ){
                    console.log(absmincol, minrow, absmaxcol, maxrow);
                }
				componenten.push( [[absmincol, minrow, absmaxcol, maxrow], randdercomponente, comp] );	
				}
				
				//break;	
			}
		}
	}
	console.log("nat ab", notnatabglob, "not", notnatab);
	ctx.putImageData( D, 0, 0 );
	zentrendercomponenten( ctx, D, sx, ex, sy, ey, h, w, componenten );
}

/*******************************************************************************/
/**************************** FIND RAENDER OF SEITE '''' ***********************/
/*******************************************************************************/

function suchBuchrand( ){ //Buch- oder Seitenrad
    //Data and Dimension
	let D = GLD; //not a copy, but  ref
	let cc = document.getElementById( "ocrcan2" );
	let h = cc.height;
	let w = cc.width;
    
    //hypothesis of location
    let lookahead = 30; 
    let optirange = 100;
    let dim = h*w;
    /*if( dim > 1000000 ){
        lookahead = Math.floor( dim / 100000 );
        optirange = lookahead * 2;
    }*/
	let howfary = Math.round( h / 20 ); //Hochformat
	let howfarx = Math.round( w / 15 );
    if( w > h ){
        howfary = Math.round( h / 15 ); //Querformat
        howfarx = Math.round( w / 20 );
    }
    
    //Feedback
    console.log("Randsuche Grenzbereich Y: ", howfary);
    console.log("Randsuche Grenszberch X: ", howfarx);
    console.log("Lookahead: ", lookahead);

	
    //worker data
    let workerobjs = [];
    let workers = [];
    let ergebnis = []; 
	
    for( let wowo = 0; wowo < 4; wowo++ ){
        workerobjs.push({"cmd":"eval",
					    "wichrand": wowo,
					    "h": h,
                        "w": w,
                        "lookahead": lookahead,
					    "howfary": howfary,
                        "howfarx": howfarx,
                        "optirange": optirange,
					    "D": D});
    }
    //webworker and worker exit
    for( let wowo = 0; wowo < workerobjs.length; wowo++ ){    
        let worker = new Worker( "js/israndwebworker.js" );
        worker.onmessage = function( event ){
        	ergebnis.push( event.data );
            if( ergebnis.length === workerobjs.length ){ //wait for all threads to terminate
                
                let cctx = cc.getContext("2d");
                cctx.imageSmoothingEnabled = false;
                cctx.mozImageSmoothingEnabled = false;
                cctx.webkitImageSmoothingEnabled = false;
                cctx.msImageSmoothingEnabled = false;
	            let DD = cctx.getImageData( 0, 0, w, h );
                for( let wo = 0; wo < ergebnis.length; wo++ ){
                    
                    //EINZEICHNENE
                    
                    if(ergebnis[ wo ].randtoremember !== null){
	                for(let v = 0; v < ergebnis[ wo ].randtoremember.length-1; v++){
		                /*let pos  = (ergebnis[ wo ].randtoremember[v][0]+(ergebnis[ wo ].randtoremember[v][1]*w))*4; 	
		                DD.data[pos] = 0;
		                DD.data[pos+1] = 0;
		                DD.data[pos+2] = 255;*/
                        cctx.fillStyle = "rgba(0,0,254,0.2)";
                        cctx.fillRect(ergebnis[ wo ].randtoremember[v][0],ergebnis[ wo ].randtoremember[v][1],3,3);
                        
	                }
                    } else {
                        console.log(w, h, "klsssl");
                        ergebnis[ wo ].randtoremember = [];
                        if( ergebnis[ wo ].UoO === 0 ){
		                    ergebnis[ wo ].mittelderblauentoremember =  0;
		                
	                    } 
                        else if( ergebnis[ wo ].UoO === 1 ){
		                    ergebnis[ wo ].mittelderblauentoremember = 1000;
	                    }
                        else if( ergebnis[ wo ].RoL === 0 ){
			                ergebnis[ wo ].mittelderblauentoremember = 0;
                        }
		                else if( ergebnis[ wo ].RoL === 1 ){
			                ergebnis[ wo ].mittelderblauentoremember = 1000;
		                }
                    }
                    
                    
                    //DATENBANK 
                    if( ergebnis[ wo ].UoO === 0 ){
		                Oberer = [ergebnis[ wo ].mittelderblauentoremember, ergebnis[ wo ].randtoremember];
		                writeTO(theReihenname[ picindex ], "HRO", {"data": Oberer, "bname": thesrces[ picindex ]} );
	                } 
                    if( ergebnis[ wo ].UoO === 1 ){
		                Unterer = [ergebnis[ wo ].mittelderblauentoremember, ergebnis[ wo ].randtoremember];
		                writeTO(theReihenname[ picindex ], "HRU", {"data": Unterer, "bname": thesrces[ picindex ]} );
	                }
                    if( ergebnis[ wo ].RoL === 0 ){
			            Linker = [ ergebnis[ wo ].mittelderblauentoremember, ergebnis[ wo ].randtoremember ];
			            writeTO(theReihenname[ picindex ], "VRL", {"data": Linker, "bname": thesrces[ picindex ]} );
                    }
		            if( ergebnis[ wo ].RoL === 1 ){
			            Rechter =  [ergebnis[ wo ].mittelderblauentoremember, ergebnis[ wo ].randtoremember];
			            writeTO(theReihenname[ picindex ], "VRR", {"data": Rechter, "bname": thesrces[ picindex ]} );
		            }
                    
                }
                //cctx.putImageData( DD, 0, 0 );
                //
	            /*if(document.getElementById( "dosaveresultimages" ).checked === true){
                    setTimeout(downaimageof(cctx, "rand"), timeouttimettt);
                }*/
                //talk garbage
                /*D = null;
	            cc = null;
	            h = null;
	            w = null;
                cctx = null;
	            DD = null;
	            howfary = null;
	            howfarx = null;
	            lookahead = null;
                optirange = null;
                workerobjs = null;
                workers = null;
                ergebnis = null;
                */
                //exit into next compute chain step
	            gedruckteF( );
			}   
        };
        workers.push( worker );
    }   

    //start webworker
    for( let wo = 0; wo < workers.length; wo++ ){
        workers[ wo ].postMessage( workerobjs[ wo ] );
    } 
}




/***********************************************************************
************************************************************************
FARBEN Papier UND in/auf Papier + GEDRUCKT
************************************************************************
***********************************************************************/
function writeHRO( resuObj ){
    //console.log(resuObj);
	Oberer = resuObj['data'];
	readFROM( theReihenname[ picindex ], "HRU", thesrces[ picindex ], writeHRU, function(){} );
}

function writeHRU( resuObj ){
	Unterer = resuObj['data'];
	readFROM( theReihenname[ picindex ], "VRL", thesrces[ picindex ], writeVRL, function(){} );
}

function writeVRL( resuObj ){
	Linker = resuObj['data'];
	readFROM( theReihenname[ picindex ], "VRR", thesrces[ picindex ], writeVRR, function(){} );
}

function writeVRR( resuObj ){
	Rechter = resuObj['data'];
    readFROM( theReihenname[ picindex ], "THRESH", thesrces[ picindex ], threshit, gedruckteF );
	
}

function gedruckteF(){
	let canvas2 = document.getElementById( "ocrcan2" );
	let h =	canvas2.height;
	let w = canvas2.width;
	
    //vertical border
	let startx = Linker[0];
    
	console.log("Linker Start: ", startx );
	let endx = Rechter[0];
	console.log("Rechtes Ende: ", endx );
    //horizontal border 
	let starty = 0;
    let oil = Oberer[1].length;
    let r = 0;
	for( r = 0; r < oil; r+=1 ){
		if( Oberer[1][r][1] > starty ){
			starty = Oberer[1][r][1]+1;
		}
	}
	console.log("Oberer Start: ", starty );
    
	let endy = 100000000;
    let uil = Unterer[1].length;
    let u = 0;
	for( u = 0; u < uil; u+=1 ){
		if( Unterer[1][u][1] < endy ){
			endy = Unterer[1][u][1]-1;
		}
	}
    if(endy === 100000000){
        endy = h;
    }
    //Oberer = null;
    //Unterer = null;
    //Linker = null;
    //Rechter = null;
	console.log("Unteres Ende: ", endy );

	
	let ctx2 = canvas2.getContext("2d");
    ctx2.imageSmoothingEnabled = false;
    ctx2.mozImageSmoothingEnabled = false;
    ctx2.webkitImageSmoothingEnabled = false;
    ctx2.msImageSmoothingEnabled = false;
	let D = ctx2.getImageData( 0, 0, w,  h );
	
	let canvas3 = document.getElementById( "ocrcan3" );
	canvas3.height = h;
	canvas3.width = w;
	let ctx3 = canvas3.getContext("2d");
        ctx3.imageSmoothingEnabled = false;
        ctx3.mozImageSmoothingEnabled = false;
    ctx3.webkitImageSmoothingEnabled = false;
    ctx3.msImageSmoothingEnabled = false;
	ctx3.putImageData(D, 0, 0);
	
	//iterate GLD - the w
	let rgbhisto = {};
	for( let x = startx; x < endx ; x+=1 ){
		for( let y = starty; y < endy ; y+=1 ){
			let pos = (x+(y*w))*4;
			if(GLD[ pos+3 ] === 255 ){ //ist farbe, gehört zuer ersten Gruppe der selektierten Pixel, nicht zu den weiß eingezeichneten
				let keystring = GLD[ pos ].toString()+"-"+GLD[ pos+1 ].toString()+"-"+GLD[ pos+2 ].toString();
				if( undefined === rgbhisto[ keystring ]){
					rgbhisto[ keystring ] = [1, [[x,y]]];
				} else {
					rgbhisto[ keystring ][0] += 1;
					rgbhisto[ keystring ][1].push([x,y]);
				}
			}
		}
	}
    let moeglFarbenBL = Object.keys(rgbhisto);
    let Ortederfarbstuetzstelle = [];
    let mr = 0;//mittlere Farbe rote Komponente 
    let mg = 0;//mittlere Farbe gelbe Komponente
    let mb = 0;//mittlere Farbe blaue Komponente
    
    let mc = 0;//count zur relativierung gegen die Anzahl
    let mrw = 0;//rote Komponente gewichtet mit Haeufigkeit
    let mgw = 0;//gelbe Komponnete gewichtet mit Haeufigkeit
    let mbw = 0;//blaue Komponnete gewichtet mit Haeufigkeit
    let grw = 1;//mittlere Farbe rote Komponente 
    let ggw = 1;//mittlere Farbe gelbe Komponente
    let gbw = 1;//mittlere Farbe blaue Komponente
    let mcw = 0;//Summer der Haeufigkeit
    let mil = moeglFarbenBL.length;
    let mf = 0;
    let a = 0;
    for( mf = 0; mf < mil; mf+=1 ){
       let f1s = moeglFarbenBL[ mf ].split("-");
       let f1 = [parseInt(f1s[0]),parseInt(f1s[1]),parseInt(f1s[2])];
       //let toblack = Math.round(vecDist( [1,1,1], f1 )*1000)/1000;
       //let towhite = Math.round(vecDist( [255,255,255], f1 )*1000)/1000;
       let toblack = vecDist( [0.1,0.1,0.1], f1 );
       let towhite = vecDist( [254,254,254], f1 );
       if( toblack > towhite ){
            let r = f1[0] === 0 ? 1 : f1[0];
            let g = f1[1] === 0 ? 1 : f1[1];
            let b = f1[2] === 0 ? 1 : f1[2];
            mr += r;
            mg += g;
            mb += b;
            mc += 1;
            //arithmetisches mittel
            //mrw += (f1[0]*rgbhisto[ moeglFarbenBL[ mf ] ][0]);
            //mgw += (f1[1]*rgbhisto[ moeglFarbenBL[ mf ] ][0]);
            //mbw += (f1[2]*rgbhisto[ moeglFarbenBL[ mf ] ][0]);
            //harmonisches mittel
            mrw += (rgbhisto[ moeglFarbenBL[ mf ] ][0]/r);
            mgw += (rgbhisto[ moeglFarbenBL[ mf ] ][0]/g);
            mbw += (rgbhisto[ moeglFarbenBL[ mf ] ][0]/b);
            //geometrisches mittel
            grw *= (rgbhisto[ moeglFarbenBL[ mf ] ][0]/r);
            ggw *= (rgbhisto[ moeglFarbenBL[ mf ] ][0]/g);
            gbw *= (rgbhisto[ moeglFarbenBL[ mf ] ][0]/b);
            
            mcw += rgbhisto[ moeglFarbenBL[ mf ] ][0];
            let soma = rgbhisto[ moeglFarbenBL[ mf ] ][1];
            let sol = soma.length;
		    for( a = 0; a < sol; a+=1 ){
	            Ortederfarbstuetzstelle.push( soma[ a ] );
		    }
        } 
        
    }
    
    let vamr = 0.0;
    let vamg = 0.0;
    let vamb = 0.0;
    let varcount = 0;
    let mittR = Math.round(mcw/mrw);
    let mittG = Math.round(mcw/mgw);
    let mittB = Math.round(mcw/mbw);

    //let mittR = Math.pow(grw, 1/mcw);
    //let mittG = Math.pow(ggw, 1/mcw);
    //let mittB = Math.pow(gbw, 1/mcw);
    //let chve = [];
    for( mf = 0; mf < mil; mf+=1 ){
       let f1s = moeglFarbenBL[ mf ].split("-");
       let f1 = [parseInt(f1s[0]),parseInt(f1s[1]),parseInt(f1s[2])];
       //let toblack = Math.round(vecDist( [1,1,1], f1 )*1000)/1000;
       //let towhite = Math.round(vecDist( [255,255,255], f1 )*1000)/1000;
       let toblack = vecDist( [0.1,0.1,0.1], f1 )
       let towhite = vecDist( [254,254,254], f1 );
       
       if( toblack > towhite ){
            let r = f1[0] === 0 ? 1 : f1[0];
            let g = f1[1] === 0 ? 1 : f1[1];
            let b = f1[2] === 0 ? 1 : f1[2];
            
            vamr += Math.pow( mittR - r, 2 );            
            vamg += Math.pow( mittG - g, 2 ); 
            vamb += Math.pow( mittB - b, 2 ); 
            varcount += 1;
            
        } 
        
    }
    
    console.log("Anzahl der Stützstellen:", Ortederfarbstuetzstelle.length, varcount);
/*
	let inversergbhisto = {}; // invert RGB key to value and color freq to key
	for(let k in rgbhisto){
		if( inversergbhisto[ rgbhisto[k][0] ] === undefined ){
			inversergbhisto[ rgbhisto[k][0] ] = [k];
		} else {
			inversergbhisto[ rgbhisto[k][0] ].push(k);
		}
	}

    
    //die Schluessel des invertierten RGB Historgamms sind die distinkten Haeufigkeiten
	let keysofinverted = Object.keys( inversergbhisto );   
    //Speicher fuer die Stuetzstellen 
	let Ortederfarbstuetzstelle = [];
    //Count- und Kontrollletiable
    let howman = 0;
    let di = 0;
    let diIndex = 0;
    let mittelderdiffs = 0;
    //geh das von hinten durch und finde Ende des Schwanzes - das ist diff > 1
    for( let vh = keysofinverted.length-1; vh > 1; vh-- ){ //maximalen Wert ausschalten
        let currdi = Math.abs( parseInt(keysofinverted[vh-1]) - parseInt(keysofinverted[vh]) );//suche den größten Schritt zwischen zwei Haeufigkeiten

        //mittelwert der Differenzen
        if( currdi ){
            mittelderdiffs += currdi; //summenschritt des arithmetischen Mittels
        }
        //erster Extremwert
        if( currdi > 1 && howman === 0 ){ //initialisieren bei erster groeszerem Schritt
            howman = vh;
            
        } else { //folgender extremster Wert
            if( di < currdi ){
                di = currdi;
                diIndex = vh;
            }
        }
    }

    //relativierung auf den Mittelwert hin
    mittelderdiffs = Math.floor(mittelderdiffs/keysofinverted.length);
    //speicher fuer die Indices im keysof... array
    let indicestouse = [];
    for( let vh = keysofinverted.length-1; vh > 1; vh-- ){ //maximalen Wert ausschalten
        let currdi = Math.abs( parseInt(keysofinverted[vh-1]) - parseInt(keysofinverted[vh]) );
        if( currdi >= mittelderdiffs ){ //Auswahl der Indices wenn Differenz groeszer als Mittelwert aller dieser
            indicestouse.push(vh);
        }
    }

    
    console.log("Anzahl der Stützfarben", Math.abs(diIndex-howman), "oder", indicestouse.length);
    
    //zur Wahl der Stuetzstellen wird nun ein Intervall festgelegt dieses hat als Ende die hälfte von howman beginnend bei diIndex
    
    let mr = 0;//mittlere Farbe rote Komponente 
    let mg = 0;//mittlere Farbe gelbe Komponente
    let mb = 0;//mittlere Farbe blaue Komponente
    let mc = 0;//count zur relativierung gegen die Anzahl
    let mrw = 0;//rote Komponente gewichtet mit Haeufigkeit
    let mgw = 0;//gelbe Komponnete gewichtet mit Haeufigkeit
    let mbw = 0;//blaue Komponnete gewichtet mit Haeufigkeit
    let mcw = 0;//Summer der Haeufigkeit
	//for( let sk = diIndex; sk < howman; sk += 1 ){ //die Indices für das invertierte Histogramm bilden, 1. letiante
    for(let iii = 0; iii < indicestouse.length; iii+=1){ //2. letiante
        let sk = indicestouse[ iii ]; //2. letiante
		let regbhistokeys = inversergbhisto[ keysofinverted[ sk ] ]; // Frabe aus dem Historgramm holen
        let merksdir = 0; //lokaler Speicher
        let maxmalen = 0;
        let heell1 = 0; // lokaler Farbspeicher
        let heell2 = 0;
        let heell3 = 0;
		for( let rsgk in regbhistokeys ){ //fuer alle Farben dieser Haeufigkeit
            let currcolo = regbhistokeys[rsgk].split("-"); //Einzelfarbe
            let fc1 = parseInt(currcolo[0]); //als Komponenten
            let fc2 = parseInt(currcolo[1]);
            let fc3 = parseInt(currcolo[2]);
            //let currlen = vectorLen( fc1, fc2, fc3 );//die maximal lange, also hellste Frabe wird gewaehlt
            //if( currlen > maxmalen ){ //hellst Farbe in Gruppe
			    //maxmalen += currlen;
                //merksdir = rsgk;
                heell1 += fc1;
                heell2 += fc2;
                heell3 += fc3;
            //} 
		}
        heell1 = Math.floor(heell1/regbhistokeys.length);
        heell2 = Math.floor(heell2/regbhistokeys.length);
        heell3 = Math.floor(heell3/regbhistokeys.length);

        let toblack = Math.round(vecDist( [1,1,1], [heell1, heell2, heell3] )*1000)/1000;
       let towhite = Math.round(vecDist( [255, 255, 255], [heell1, heell2, heell3] )*1000)/1000;
       //if( toblack > towhite ){

        
        //Summenschritt der Mittelwertsbildung für die zentrale helle Farbe
        mr += heell1;
        mg += heell2;
        mb += heell3;
        mc += 1;
        let currweight = parseInt( keysofinverted[ sk ] );
        mrw += (heell1*currweight);
        mgw += (heell2*currweight);
        mbw += (heell3*currweight);
        mcw += currweight;
        //Auswahl der Orte, an dienen die Farben vorkommen
        for( let rsgk in regbhistokeys ){
        let soma = rgbhisto[ regbhistokeys[rsgk] ][1];
		for(let a = 0; a < soma.length; a+=1){
	        Ortederfarbstuetzstelle.push( soma[a] );
		}
        }

        //}
	}
    rgbhisto = null; //tell garbage collector let is unused
	console.log("Stuetzstellenanzehl", Ortederfarbstuetzstelle.length);

    inversergbhisto = null;
    keysofinverted = null; //tell garbage collector let is unused
*/
    //farbliches Zentrum der UNtergrundmaterialien
    let coloratmax = [ Math.round(mr/mc), Math.round(mg/mc), Math.round(mb/mc) ];
    //arithmetisches
    //let coloratmaxW = [Math.round(mrw/mcw),Math.round(mgw/mcw),Math.round(mbw/mcw)];
    //harmonisches
    //zusätzlich die Vraianz als Addition einbeziehen
    let mcnow =  Math.round(mittR+((vamr/varcount)/255)) > 255 ? 255 : Math.round(mittR+((vamr/varcount)/255));
    let mrnow =  Math.round(mittG+((vamg/varcount)/255)) > 255 ? 255 : Math.round(mittG+((vamg/varcount)/255));
    let mgnow =  Math.round(mittB+((vamb/varcount)/255)) > 255 ? 255 : Math.round(mittB+((vamb/varcount)/255));
    let coloratmaxW = [mcnow ,mrnow, mgnow];
    console.log(mrw, mgw, mbw, mcw)
	console.log("Color at Maxcount: ", coloratmax, "coloratmaxW:", coloratmaxW );
	
    /*let lennoweightW = vectorLen(coloratmax[0], coloratmax[1], coloratmax[2]);
    let lenweightW = vectorLen(coloratmaxW[0], coloratmaxW[1], coloratmaxW[2]);
    if( lenweightW/lennoweightW < 0.6 ){
            coloratmaxW = coloratmax;
    }*/

    
	let theflaeche = Math.round((Ortederfarbstuetzstelle.length)/(w*h))+10;
    let theflaechex = Math.round(w/theflaeche);
    let theflaechey = Math.round(h/theflaeche);
    
    console.log("lokale Extrudierung Quadrat von: ", theflaeche, "x", theflaechex, "y", theflaechey, w, h);
	//asymetrische Ersetzung an Stützstellen - zur Ermittelung der Papierfläche
    /*let lllll = Ortederfarbstuetzstelle.length;
    let hllll = Math.round(lllll/2);
    let summall = 0;
    let countall = 0;
    for( let i = 0; i < hllll; i+=1000 ){
        let xtempo = Ortederfarbstuetzstelle[i][0];
        let ytempo = Ortederfarbstuetzstelle[i][1];
        let mindisttemp = 10000000;
        let minindexus = null;
        for( let j = 0; j < lllll; j+=10 ){
            let td = xyxyDist( xtempo, ytempo, Ortederfarbstuetzstelle[j][0], Ortederfarbstuetzstelle[j][1] );
            if( td < mindisttemp ){
                minindexus = td;
            }
        }
        if( minindexus !== null ){
            summall += minindexus;
            countall += 1;
        }
    }
    theflaeche = Math.round( summall/(countall*4) );
    console.log("lokale Extrudierung Quadrat von: ", theflaeche);
    */
    //das Array der Orte der Stuetzfarben, die Stuetzstellen, bildet den Ausgangspunkt fuer die Suche nach Punkten des Untergrundmaterials
    while( Ortederfarbstuetzstelle.length > 0 ){ 
        let O = Ortederfarbstuetzstelle.pop(); //eine Stuetzstelle holen
        let xin = O[0];//x Koordinate
		let yin = O[1];//y Koordinate
        //Grenzen der Flaeche dieser Suche 
		let xstartSt = xin-theflaechex; 
		let ystartSt = yin-theflaechey;
		let xendSt = xin+theflaechex;
		let yendSt = yin+theflaechey;
		if( xstartSt < 0 || ystartSt < 0 || xendSt > w || ystartSt > h){ //
			continue;
		}
		
		let besuchen = []; //fuer diese Stuetzstelle zu besuchende Punkte
		besuchen.push( [xin,yin] ); //initial
		while( besuchen.length > 0 ){ //solange Punkte besucht werden muessen
		    let p = besuchen.pop( ); //ersten holhlen
		    let x = p[0]; //x Koordinate 
		    let y = p[1]; //y Koordinate

            //wenn der Punkt im Suchquadrat liegt
		    if( x <= xendSt && x >= xstartSt && x > startx && x < endx && 
			    y <= yendSt && y >= ystartSt && y > starty && y < endy){
                //Nachbarpunktkoodinaten bestimmen
		        let posl = ((x-1)+(y*w))*4;
		        let posr = ((x+1)+(y*w))*4;
		        let pos = (x+(y*w))*4;
		
		        let posol = ((x-1)+((y-1)*w))*4;			
		        let posor = ((x+1)+((y-1)*w))*4;			
		        let poso = (x+((y-1)*w))*4;
			
		        let posul = ((x-1)+((y+1)*w))*4;
		        let posur = ((x+1)+((y+1)*w))*4;
		        let posu = (x+((y+1)*w))*4;

		
                //wenn dieser Punkt nicht als Untergrundmaterial kodiert ist
		        if( D.data[ pos+3 ] !== 253 ){ 
                    //dann weise Untergrundfarbe zu
			        D.data[pos] = coloratmaxW[0];
			        D.data[pos+1] = coloratmaxW[1];
			        D.data[pos+2] = coloratmaxW[2];
                    //kodiere als Untergundmaterial
			        D.data[pos+3] = 253;
		        }
		        //wenn der Nachbarkunkt nicht weisz in DF ist und dieser nachbarschaftspunkt noch nicht als
                //Untergrundmaterial kodiert wirde
		        if( 
			    (GLD[ posl+3 ] === 255) &&
			    (D.data[ posl+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posl ], D.data[ posl+1 ], D.data[ posl+2 ]], coloratmaxW )){
			        let nx = x-1; //konstruiere die Koordinaten
			        let ny = y;
                    //liegt der Punkt im Suchquadrat
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]); //besuche den Punkt
			        }
		        }
		        if(	
			    (GLD[ posr+3 ] === 255) &&
			    (D.data[ posr+3 ] !== 253) &&
                 schwellePOSNEG > getNormVectorDistV( [D.data[ posr ], D.data[ posr+1 ], D.data[ posr+2 ]], coloratmaxW ) ){
			        let nx = x+1;
			        let ny = y;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		        if( 
			    (GLD[ posol+3 ] === 255) &&
			    (D.data[ posol+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posol ], D.data[ posol+1 ], D.data[ posol+2 ]], coloratmaxW )){
			        let nx = x-1;
			        let ny = y-1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		        if(	
			    (GLD[ posor+3 ] === 255) &&
			    (D.data[ posor+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posor ], D.data[ posor+1 ], D.data[ posor+2 ]], coloratmaxW )){
			        let nx = x+1; 
			        let ny = y-1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		        if(
			    (GLD[ poso+3 ] === 255) &&			
			    (D.data[ poso+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ poso ], D.data[ poso+1 ], D.data[ poso+2 ]], coloratmaxW )){
			        let nx = x;
			        let ny = y-1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		        if(	
			    (GLD[ posul+3 ] === 255) &&
			    (D.data[ posul+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posul ], D.data[ posul+1 ], D.data[ posul+2 ]], coloratmaxW )){
			        let nx = x-1;
			        let ny = y+1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		        if(
			    ( GLD[ posur+3 ] === 255) &&
			    (D.data[ posur+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posur ], D.data[ posur+1 ], D.data[ posur+2 ]], coloratmaxW)){
			        let nx = x+1;
			        let ny = y+1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			        besuchen.push([nx, ny]);
			        }
		        }
		        if( 
			    ( GLD[ posu+3 ] === 255) &&
			    (D.data[ posu+3 ] !== 253) &&
                schwellePOSNEG > getNormVectorDistV( [D.data[ posu ], D.data[ posu+1 ], D.data[ posu+2 ]], coloratmaxW)){
			        let nx = x;
			        let ny = y+1;
			        if( nx >= startx || ny >= starty || nx <= endx || ny <= endy ){
			            besuchen.push([nx, ny]);
			        }
		        }
		    }
		}
	}
    //
    Ortederfarbstuetzstelle = null; //tell garbage collector let is unused
    let DD = ctx3.getImageData( 0, 0, w,  h );
        
	let canvas4 = document.getElementById( "ocrcan4" );
	canvas4.height = h;
	canvas4.width = w;
    let ctx4 = canvas4.getContext("2d");
    ctx4.mozImageSmoothingEnabled = false;
    ctx4.webkitImageSmoothingEnabled = false;
    ctx4.msImageSmoothingEnabled = false;
    ctx4.imageSmoothingEnabled = false;
	ctx4.fillStyle = "rgba(0, 0, 0, 0)";
	ctx4.fillRect(0, 0, w, h);
               
    let DDD = ctx4.getImageData( 0, 0, w,  h );
	
	
    //für jeden noch existierenden farbpunkt bestimme die 
    //farbdistanz zu den anderen faben und suche so die maximal auseinanderliegenden faben
    let reduhisto = {};
	for( let x = startx; x < endx ; x+=1 ){
		for( let y = starty; y < endy ; y+=1 ){
            let pos = (x+(y*w))*4;
            if( D.data[ pos+3 ] !== 253 ){ //alles was nicht als Hintergrund, oder ü ermäßig ausgeschieden wurde
                let keystring = D.data[ pos ].toString()+"-"+D.data[ pos+1 ].toString()+"-"+D.data[ pos+2 ].toString();
                let toadd = 1.0; //gewichtung aus dem Gradientenbild
                if( GLD[ pos+3 ] !== 255 ){
                    toadd = 0.7;
                }

				if( undefined === reduhisto[ keystring ]){
					reduhisto[ keystring ] = toadd;
				} else {
                    reduhisto[ keystring ] += toadd;
                }       
            }
        }
    }
    
    //daraus nun die Fraben ermitteln, die einen min dist zu schwarz haben
    let moeglFarben = Object.keys(reduhisto);
    let blr = 0;
    let blg = 0;
    let blb = 0;
    let blc = 0;
    let blwr = 0;
    let blwg = 0;
    let blwb = 0;
    let blwc = 0;
    let blhwr = 0;
    let blhwg = 0;
    let blhwb = 0;
    let blhwc = 0;
    mil = moeglFarben.length;
    for( mf = 0; mf < mil; mf+=1 ){
       let f1s = moeglFarben[ mf ].split("-");
       let f1 = [parseInt(f1s[0]),parseInt(f1s[1]),parseInt(f1s[2])];
       let toblack = vecDist( [1,1,1], f1 );
       let towhite = vecDist( coloratmaxW, f1 );
       if( toblack < towhite ){
            blr += f1[0];
            blg += f1[1];
            blb += f1[2];
            blc += 1;

            blwr += (f1[0]*reduhisto[ moeglFarben[ mf ] ]);
            blwg += (f1[1]*reduhisto[ moeglFarben[ mf ] ]);
            blwb += (f1[2]*reduhisto[ moeglFarben[ mf ] ]);
            blwc += reduhisto[ moeglFarben[ mf ] ];
        } 
        
    }
    
    //varianz ermitteln 
    let vablr = 0.0;
    let vablg = 0.0;
    let vablb = 0.0;
    let vacountbl = 0;
    let mittRbl = Math.round(blr/blc);
    let mittGbl = Math.round(blg/blc);
    let mittBbl = Math.round(blb/blc);
    for( mf = 0; mf < mil; mf+=1){
       let f1s = moeglFarben[ mf ].split("-");
       let f1 = [parseInt(f1s[0]),parseInt(f1s[1]),parseInt(f1s[2])];
       let toblack = vecDist( [0.1,0.1,0.1], f1 );
       let towhite = vecDist( coloratmaxW, f1 );
       if( toblack < towhite ){
            let r = f1[0] === 0 ? 1 : f1[0];
            let g = f1[1] === 0 ? 1 : f1[1];
            let b = f1[2] === 0 ? 1 : f1[2];
            
            vamr += Math.sqrt(Math.pow( mittRbl - r, 2 ));            
            vamg += Math.sqrt(Math.pow( mittGbl - g, 2 )); 
            vamb += Math.sqrt(Math.pow( mittBbl - b, 2 )); 
            vacountbl += 1;
        } 
        
    }
    
    reduhisto = null; //tell garbage collector let is unused
    moeglFarben = null; //tell garbage collector let is unused
    /*let moeglFarbenINT = [];
    for( mf = 0; mf < mil; mf+=1){
        let f1s = moeglFarben[ mf ].split("-");
       moeglFarbenINT.push( [parseInt(f1s[0]),parseInt(f1s[1]),parseInt(f1s[2])]);
    }
    console.log("MOEGL farben len", moeglFarben.length);
    */

    let centerbl = [Math.round(blr/blc),Math.round(blg/blc),Math.round(blb/blc) ];
    //let centerblw = [Math.round(blwr/blwc),Math.round(blwg/blwc),Math.round(blwb/blwc) ];

    let mcnowbl =  Math.round(mittRbl-((vablr/vacountbl)/255)) < 0 ? 0 : Math.round(mittRbl-((vablr/vacountbl)/255));
    let mrnowbl =  Math.round(mittGbl-((vablg/vacountbl)/255)) < 0 ? 0 : Math.round(mittGbl-((vablg/vacountbl)/255));
    let mgnowbl =  Math.round(mittBbl-((vablb/vacountbl)/255)) < 0 ? 0 : Math.round(mittBbl-((vablb/vacountbl)/255));
    let centerblw = [mcnowbl, mrnowbl, mgnowbl];

    
    console.log("cbl", centerbl.toString(), blc ,"cblw", centerblw.toString(), "cwi", coloratmaxW.toString());
    
    

    let choosenblcenter = centerblw;
    /*if( lenweight/lennoweight < 0.6 ){
            choosenblcenter = centerbl;
    }*/
    
    //thersholding
    let wdivb = vecDist( choosenblcenter, [255,255,255] ) / vecDist( coloratmax, [0.1,0.1,0.1] ); //schatten unterdrücken
    //let wdivb = ((manhattendist( choosenblcenter, coloratmax ))) ;
    let wdivb1 = vecDist( choosenblcenter, [0.1,0.1,0.1] )/ vecDist( coloratmax, [255,255,255] );
    //let wdivb = (Math.round(vecDist( choosenblcenter, [1,1,1] )*1000)/1000) / (Math.round(vecDist( coloratmax, [255,255,255] )*1000)/1000);
    //wdivb1 = (wdivb+wdivb1)/2; --- 
    //ein kriterium, um zwischen der Verwnedung wdivb und wdivb1 zu unterscheiden
    let chocho = wdivb1;
    let lennoweight = vectorLen(centerbl[0], centerbl[1], centerbl[2]);
    let lenweight = vectorLen(coloratmax[0], coloratmax[1], coloratmax[2]);
    console.log(lennoweight/lenweight, lennoweight, lenweight)
    if( lennoweight/lenweight < 0.35 ){
            chocho = wdivb;
            console.log("chocho!!!!!");
    }
	for( let x = startx; x < endx ; x+=1 ){
		for( let y = starty; y < endy ; y+=1 ){
                    let pos = (x+(y*w))*4;
                    
                        
                        let toblack = manhattendist( choosenblcenter, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ] );
                        let towhite = manhattendist( coloratmax, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ] );
                        //let toblack = distpointarray( moeglFarbenINT, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ]);
                        //let towhite = distpointarray( coloratmax, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ] );
                        //if( toblack < towhite ){
                        if( chocho >= (  toblack / towhite ) ){
                        //if( toblack < towhite ){
                        //if( wdivb > (toblack / towhite) ){
                                DDD.data[ pos ] = DD.data[ pos ];
                                DDD.data[ pos+1 ] = DD.data[ pos+1 ];
			        			DDD.data[ pos+2 ] = DD.data[ pos+2 ];
								DDD.data[ pos+3 ] = 255;
                        }
                        //} else {
                        //if( wdivb > (toblack / towhite) ){
                        //if( toblack < towhite ){
                        //if( wdivb > (toblack / towhite) ){
                              /*  DDD.data[ pos ] = DD.data[ pos ];
                                DDD.data[ pos+1 ] = DD.data[ pos+1 ];
			        			DDD.data[ pos+2 ] = DD.data[ pos+2 ];
								DDD.data[ pos+3 ] = 255;*/
                        //}
                        //}
                  
                        
                }
        }
    //GLD = null;
	
    ctx4.putImageData(DDD, 0, 0);
	
	ctx2.putImageData(D, 0, 0);
    
    /*if(document.getElementById( "dosaveresultimages" ).checked === true){
        setTimeout(downaimageof(ctx4, "freigest"), timeouttimettt);
        setTimeout(downaimageof(ctx2, "treagerF"), timeouttimettt);
    }*/
	console.log("done Papierfarbe und Gedrucktes/Aufpapierfarbe");
    writeTO(theReihenname[ picindex ], "THRESH", {"centerHell": coloratmaxW, "centerDunkel":centerbl, "centerDunkelW":centerblw, "ENDX": endx, "ENDY": endy, "STARTX": startx, "STARTY": starty, "bname": thesrces[ picindex ]} );	
    //canvas2= null; //tell garbage collector let is unused
    //canvas3 = null; //tell garbage collector let is unused
    //D = null;
	getconnectedCzwei( ctx3, DDD, startx, endx, starty, endy, h, w );
}

function threshit( arr ){
    let coloratmax = arr["centerHell"];
    let centerbl = arr["centerDunkel"];
    let centerblw = arr["centerDunkelW"];
    //let lennoweight = vectorLen(centerbl[0], centerbl[1], centerbl[2]);
    //let lenweight = vectorLen(centerblw[0], centerblw[1], centerblw[2]);
    

    let choosenblcenter = centerblw;
   /* if( lenweight/lennoweight < 0.6 ){
            choosenblcenter = centerbl;
    }*/
    
    let startx = arr["STARTX"];
    let endx = arr["ENDX"];
    let starty = arr["STARTY"];
    let endy = arr["ENDY"];
    //quelle
    let canvas2 = document.getElementById( "ocrcan2" );
    let h = canvas2.height;
	let w = canvas2.width;
    let ctx2 = canvas2.getContext("2d");
    ctx2.imageSmoothingEnabled = false;
    ctx2.mozImageSmoothingEnabled = false;
    ctx2.webkitImageSmoothingEnabled = false;
    ctx2.msImageSmoothingEnabled = false;
    let DD = ctx2.getImageData( 0, 0, w,  h );
    
    //ziel
    let canvas4 = document.getElementById( "ocrcan4" );
	canvas4.height = h;
	canvas4.width = w;
    let ctx4 = canvas4.getContext("2d");
    ctx4.imageSmoothingEnabled = false;
    ctx4.mozImageSmoothingEnabled = false;
    ctx4.webkitImageSmoothingEnabled = false;
    ctx4.msImageSmoothingEnabled = false;
    let DDD = ctx4.getImageData( 0, 0, w,  h );
    
    let wdivb =  vecDist( choosenblcenter, [255,255,255] ) / vecDist( coloratmax, [0.1,0.1,0.1] ); //schatten unterdrücken
    //let wdivb = ((manhattendist( choosenblcenter, coloratmax ))) ;
    let wdivb1 = vecDist( choosenblcenter, [0.1,0.1,0.1] )/ vecDist( coloratmax, [255,255,255] );
    let wwwdiv2 = (wdivb+wdivb1)/2;
    //let wdivb = (Math.round(vecDist( choosenblcenter, [1,1,1] )*1000)/1000) / (Math.round(vecDist( coloratmax, [255,255,255] )*1000)/1000);
    //wdivb1 = (wdivb+wdivb1)/2;
    for( let x = startx; x < endx ; x+=1 ){
		for( let y = starty; y < endy ; y+=1 ){
                        let pos = (x+(y*w))*4;
                        let toblack = manhattendist( choosenblcenter, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ] );
                        let towhite = manhattendist( coloratmax, [ DD.data[ pos ], DD.data[ pos+1 ], DD.data[ pos+2 ] ] );
                        
                        
                        //if( toblack <= towhite ){
                        if( wwwdiv2 >= (toblack / towhite) ){
                        //if( toblack < towhite ){
                                DDD.data[ pos ] = DD.data[ pos ];
                                DDD.data[ pos+1 ] = DD.data[ pos+1 ];
			        			DDD.data[ pos+2 ] = DD.data[ pos+2 ];
								DDD.data[ pos+3 ] = 255;
                        }
                        //} else {
                        //if( wdivb > (toblack / towhite) ){
                        //if( toblack < towhite ){
                        //if( wdivb > (toblack / towhite) ){
                        /*        DDD.data[ pos ] = DD.data[ pos ];
                                DDD.data[ pos+1 ] = DD.data[ pos+1 ];
			        			DDD.data[ pos+2 ] = DD.data[ pos+2 ];
								DDD.data[ pos+3 ] = 255;*/
                        //}
                        //}
                        
                }
        }
    
    //DD = null;
    //GLD = null;
	ctx4.putImageData(DDD, 0, 0);
    let canvas3 = document.getElementById( "ocrcan3" );
    canvas3.height = h;
	canvas3.width = w;
    let ctx3 = canvas3.getContext("2d");
    ctx3.mozImageSmoothingEnabled = false;
    ctx3.webkitImageSmoothingEnabled = false;
    ctx3.msImageSmoothingEnabled = false;
    ctx3.imageSmoothingEnabled = false;
    getconnectedCzwei( ctx3, DDD, startx, endx, starty, endy, h, w );
}

/*****************************************************************************************
******************Funktionen im Komponentenraum - nicht mehr farbraum? *******************
******************jetzt im Raum des Gedruckten - im Raum der Vorstellung von Drucklinien**
******************mal sehen**************************************************************/
//Boundingbox symmetriezentrum, rand schwerezentrum, fläche schwerezentrum
function zentrendercomponenten( ctx, D, sx, ex, sy, ey, h, w, componenten ){
    let cil = componenten.length;
    let co = 0;
	for( co = 0; co < cil; co+=1 ){
		//console.log(componenten[co][0].toString());
		//scheint die Auswirkung de Fläche zu sein, sie vervollständigt
		let mx = Math.round((componenten[co][0][0]+componenten[co][0][2])/2);//row
		let my = Math.round((componenten[co][0][1]+componenten[co][0][3])/2);//col
		//randschwerpunkte - scheint äußere Form zu betonen
		let rsx = 0;
		let rsy = 0;
        let ccil = componenten[co][1].length;
        let ra = 0;
		for( ra = 0; ra < ccil; ra+=1 ){
			rsx += componenten[co][1][ ra ][0];
			rsy += componenten[co][1][ ra ][1];
		}		
		rsx = Math.round( rsx / ccil );
		rsy = Math.round( rsy / ccil );
		//flächenschwerpunkt - scheint zwischen beiden anderen zu liegen
		let fsx = 0;
		let fsy = 0;
		let countpixel = 0;
        let cill = componenten[co][2].length;
        let ro = 0;
		for( ro = 0; ro < cill; ro+=1 ){
			let R = componenten[co][2][ro];
            let ril = R.length;
            let p = 0;
			for( p = 0; p < ril; p+=1 ){
                let r = D.data[componenten[co][2][ro][p][2]];
                let g = D.data[componenten[co][2][ro][p][2]+1];
                let b = D.data[componenten[co][2][ro][p][2]+2];
                //let flen = intensity(r,b,g);// 0.9204219814762128
                let flen = luminosity(r,g,b); // 0.9166651124076071
                //let flen = vectorLen(r,g,b); //0.9218320749197274
               fsx += componenten[co][2][ro][p][0]*flen;
			   fsy += componenten[co][2][ro][p][1]*flen;
			   countpixel += flen;
                
			}
		}
		fsx = Math.round(fsx / countpixel);
		fsy = Math.round(fsy / countpixel);
        //console.log(fsx, fsy);
		componenten[co].push( [ mx, my, rsx, rsy, fsx, fsy ] );
	}
    //clustercompzwei( ctx, D, componenten );
    //clustercomp( ctx, D, componenten );
    
	horizontaledrucklinen( ctx, D, componenten );
}

/*PIC ESTIMATION IF BUCHSCHMUCK, on none horizontaly organized comps*/

function markPICS( ctx, mincol, maxcol, minrow, maxrow, componenten, componentenBIGANDNOTINPLINE ){
    ctx.lineWidth= 4;
    let foundSchmuck = false;
    let buchschmuckComponenten = [];
    let bil = componentenBIGANDNOTINPLINE.length;
    let c = 0;
    for( c = 0; c < bil; c+=1 ){ //fuer alle Komponenten die grosz sind und nicht im horizontalen Zusammenhang stehen
        let co = componentenBIGANDNOTINPLINE[ c ]; //diese Komponente
        let cminrow = componenten[co][0][1]; //umgebendes Rechteck der Komponente y Anfang
		let cmaxrow = componenten[co][0][3]; //umgebendes Rechteck der Komponente y Ende
        let cmincol = componenten[co][0][0]; //umgebendes Rechteck der Komponente x Anfang   
		let cmaxcol = componenten[co][0][2]; //umgebendes Rechteck der Komponente x Ende
        if( minrow < cminrow &&
            maxrow > cmaxrow &&
            mincol < cmincol &&
            maxcol > cmaxcol ){
            let cwidth = Math.abs(cmaxcol - cmincol); //Komponnetenweite
            let chight = Math.abs(cmaxrow - cminrow); //Komponnetenhoehe
            let diffofcol = 0; //Spaltenspruenge des Inneren
            let allepunkte = 0; //wie viele inner Punkte hat die Komponente
            let kil = componenten[ co ][2].length;
            let comprow = 0;
            for( comprow = 0; comprow < kil; comprow+=1){ //Komponnet pro Zeile
                //console.log(comprow);
                let kkil = componenten[ co ][ 2 ][ comprow ].length;
                let compcol = 1;
                for( compcol = 1; compcol < kkil; compcol+=1 ){ //fuer jeden Punkt der Zeile
                    //Differenz ist entweder 0 oder groeszer 0
                    diffofcol += Math.abs(componenten[ co ][ 2 ][ comprow ][compcol][ 0 ] - componenten[ co ][ 2 ][ comprow ][compcol-1][ 0 ])-1;
                    allepunkte+=1;
                }
		    }
		    //Auswertung	
            if( diffofcol > componenten[ co ][ 1 ].length ){ //wenn die Außenlinie eine kleinere Ausdehung als die inneren Luecken haben
                ctx.strokeStyle="red";
                ctx.beginPath(); 
                ctx.rect(cmincol, cminrow, (cmaxcol-cmincol) ,(cmaxrow-cminrow));
                ctx.stroke();
                foundSchmuck = true;
                buchschmuckComponenten.push( co );
            } /*else { //ansonsten
                ctx.strokeStyle="black";
                ctx.beginPath(); 
                ctx.rect(cmincol, cminrow, (cmaxcol-cmincol) ,(cmaxrow-cminrow));
                ctx.stroke();
                ctx.closePath();
            }*/
         }   
    }
    
    if( foundSchmuck ){
        console.log("Buchschmuck / Grafik / Abbildung gefunden!");
    }
    return buchschmuckComponenten;
}

/*ZEILEN UND BLOECKE FUNKTIONENEN */
function pointinComponent( componenten, checkpunkt ){
    let c = 0;
    let cil = componenten.length;
    for( c = 0; c < cil; c+=1 ){
        let l = 0;
        let lil = componenten[ c ][ 2 ].length;
        for( l = 0; l < lil; l+=1 ){
            let p = 0;
            let pil = componenten[ c ][ 2 ][ l ].length;
            for( let p = 0; p < pil; p+=1 ){
                if( componenten[ c ][ 2 ][ l ][ p ][ 2 ] === checkpunkt ){
                    return true;
                }
            }
        }
    }
    return false;
}

function firsthypoCompMess( componenten, minrow, maxrow, mincol, maxcol ){
    let cowidth = 0; //durchschnittliche Komponentenweite
	let coheight = 0; //durchschnittliche Komponentenhoehe
    let cou = 0;
    let co = 0;
    let cil = componenten.length;
	for( co = 0; co < cil; co+=1 ){ //die Komponenten itterieren
		let cminrow = componenten[co][0][1]; //y Anfang des umgebenden Rechtecks
		let cmaxrow = componenten[co][0][3]; //y Ende des umgebenden Rechtecks
		let cmincol = componenten[co][0][0]; //x Anfang des umgebenden Rechtecks
		let cmaxcol = componenten[co][0][2]; //x Ende des umgebenden Rechtecks
        if( minrow < cminrow &&
            maxrow > cmaxrow &&
            mincol < cmincol &&
            maxcol > cmaxcol ){
            let cwidth = Math.abs( cmaxcol - cmincol ); //Komponetenweite ist Rechteckshoehe
		    let chight = Math.abs( cmaxrow - cminrow ); //Komponentenhoehe ist Rechtecksweite
            //if( chight < (maxrow/4) && cwidth < (maxcol / 4)){
		        cowidth += cwidth; //Summenschritt des arithmetischen Mittels 
		        coheight += chight; //Summenschritt des arithmetsichen Mittels
                cou+=1;
            //}
        }
	}
    cowidth = cowidth / cou; //Mittel der Weite vervollstaendigen
	coheight = coheight / cou;//Mittel der Hoehe vervollstaendigen

    return [cowidth, coheight];
}

function secondhypoCompMess( componenten, coheight, cowidth ){
    //zunächst die möglichen komponenten nach horizontaler definition und componentendurchschnittesgrößen
    let winkelabwDURCH = 0;  //Speicher fuer den Mittelwert der Winkel aller Nachbarschaftsverhältnisse
    let coHwidth = 0; //genauere Angabe der durchschnittlichen Komponentenhoehe
	let coHheight = 0;//genauere Angabe der durchschnittlichen Komponentenweite
    let dcoun = 0;
    let cil = componenten.length;
    let co = 0;
	for( co = 0; co < cil; co+=1 ){ // alle Komponenten
		let cminrow = componenten[co][0][1]; //Y Wert Anfang umgebendes Rechteck
		let cmaxrow = componenten[co][0][3]; //Y Wert Ende umgebendes Rechteck
        let chight = Math.abs(cmaxrow - cminrow); //Komponentenbeite 
		let cmincol = componenten[co][0][0]; //x Anfang des umgebenden Rechtecks
		let cmaxcol = componenten[co][0][2]; //x Ende des umgebenden Rechtecks
        let cwidth = Math.abs(cmaxcol - cmincol); //Komponetenweite ist Rechteckshoehe
        //Ausdehungsqunatile als Einschränkung
        if( chight > (coheight*0.2) && 
            chight < (coheight*4) &&
            cwidth > (cowidth*0.2) && 
            cwidth < (cowidth*4) ){

		    let indexofpossibleco = []; //Speicher fuer moegliche Nachbarn
            let ccoo = 0;
		    for( ccoo = 0; ccoo < cil; ccoo+=1 ){ //hier alle Komponneten durchgehen
                if( co !== ccoo ){ //ist einen andere Komponnete als, die
        		    if( //alle die horizontal einen Wert im umgebenden rechteck teilen
                        !(( cminrow > componenten[ccoo][0][1] && 
                            cminrow > componenten[ccoo][0][3] )  ||
                          ( cmaxrow < componenten[ccoo][0][1] && 
                            cmaxrow < componenten[ccoo][0][3]) ) && 
                          Math.abs( cmaxcol - componenten[ccoo][0][0] ) < (cowidth*10)  //Entfernungsbeschraenkung
                        )
                        {
                            indexofpossibleco.push( ccoo ); //moegliche Nachbarn merken
			        }
                }
		    }
		
		    //index 3 ist das array mit den zentren, 4 und 5 sind x und y des schwerezenrums
            let tempwink = 0;
            let row1 = componenten[co][3][5]; // Y Wert des Schwerezentrums der Untersuchungskomponente
            let iil = indexofpossibleco.length;
            let p = 0;
	        for( p = 0; p <  iil; p+=1 ){ //fuer die moeglichen Nachbarn den Winkel mitteln
                let row2 = componenten[ indexofpossibleco[p] ][3][5]; //Y Wert des Schwerezentrums der Nachbarkomponnete
                let b =  Math.abs( row2 - row1 ); //Zeilenabweichung
                
                let cchight = Math.abs(componenten[indexofpossibleco[p]][0][3]-componenten[indexofpossibleco[p]][0][1]);
                let hv = chight/cchight; //Groeszenunterschied zwischen Komponenten
                if(cchight < chight){
                    hv = cchight / chight;
                }
		        tempwink += (b*hv); //ergeben den Abweichungswinkel - Chebychev Distanz
            }
            if(!tempwink){
                console.log(tempwink)
            }
            if( iil !== 0 ){ //speichern der Werte, wenn Nachbarn vorhanden sind
                //Summenschritte des arithmetischen Mittels
                winkelabwDURCH += (tempwink / iil ); //Abweichungswinkel
                coHwidth += cwidth;
                coHheight += chight;
                dcoun+=1;
            }
		}
	}
    //relativieren auf den Durchschnitt hin
    coHwidth = coHwidth / dcoun;
    coHheight = coHheight / dcoun;
    winkelabwDURCH = winkelabwDURCH / dcoun;

    return [ winkelabwDURCH, coHwidth, coHheight ];
}

function comp2Nachbarn(componenten, mincol, maxcol, minrow, maxrow, winkelabwDURCH, coHwidth, coHheight, componentenBIGANDNOTINPLINE, compnachbarsch, givenletterheight){
 //Vermessung der Komponenten bezueglich der Annahme, sie stuenden in horizonatler Beziehung,
    //sowie Korrektur der horizontalen Beziehung durch einen vertikalen Abgleich
    //console.log(componenten);
    let countllllll = 0;
    let cil = componenten.length;
    let co = 0;
    for( co = 0; co < cil; co+=1 ){ //fuer alle Komponenten
        let indexHorizZusammen = []; //Speicher fuer moegliche Nachbarn
        let row1 = componenten[co][3][5]; //Schwerezentrum y
        let col1 = componenten[co][3][4]; //Schwerezentrum x
        let cmincol = componenten[co][0][0]; //umgebendes Rechteck x Anfang
		let cmaxcol = componenten[co][0][2]; //umgebendes Rechteck x Ende
        /*if(cmincol == null || cmaxcol == null || row1 == null || col1 == null){
            console.log("null is!!!");
        }*/
        let cminrow = componenten[co][0][1]; //umgebdnes Rechteck y Anfang
		let cmaxrow = componenten[co][0][3]; //umgebndes Rechteck y Ende

        if( minrow < cminrow &&
            maxrow > cmaxrow &&
            mincol < cmincol &&
            maxcol > cmaxcol ){ //im rand
            let gu = coHheight*0.1;
            if(givenletterheight === 1){
                gu = (coHheight*0.5);
            }        
            let gugu = coHheight*2;
            if(givenletterheight === 1){
                gugu = (coHheight*4);
            }
            let ga = coHheight;
            if(givenletterheight === 1){
                ga = (coHwidth*4);
            }
            let gaga = (coHwidth*2);
            if( givenletterheight === 1 ){
                gaga = (coHwidth*4);
            }
            let gagago = coHwidth;
            if( givenletterheight === 1 ){
                gagago = (coHwidth*4);
            }
            let gigi = (coHheight*0.1);
            if( givenletterheight === 1 ){
                gigi = (coHheight*0.2);
            }
            let chight = Math.abs( cmaxrow - cminrow ); //Hoehe der Komponente
            let cwidth = Math.abs( cmaxcol - cmincol ); //Weite der Komponente
            //console.log(chight,cwidth);
            if( chight >= gu && 
                chight <= gugu ){ //einschraenkende Groeszen-Quantile der Untersuchung 
                let linecomponentheightdurch = 0; //Mittel alle Hoehen der Nachbarn
                let cneterof = 0; //Mittel Y alle Nachbarn
                //welche Nachbarn kommen in Frage
                let ccoo = 0;
                for( ccoo = 0; ccoo < cil; ccoo+=1 ){
                    if( co !== ccoo ){
                        let row2 = componenten[ccoo][3][5]; //Schwerezentrum des Nachbarn y
                        let col2 = componenten[ccoo][3][4]; //Schwerezentrum des Nachbarn x
                        
                        
                        let ccminrow = componenten[ccoo][0][1]; //umgebendes Rechteck des Nachbarn y Anfang
		                let ccmaxrow = componenten[ccoo][0][3]; //umgebendes Rechteck des Nachbarn y Ende
                        
                        let cchight = Math.abs( ccmaxrow-ccminrow ); //
                        let hv = chight/cchight; //Groeszenunterschied zwischen Komponenten
                        if( cchight < chight ){
                            hv = cchight / chight;
                        }
                        let b = Math.abs( row2 - row1 )*hv; //Winkelabweichung zwischen Nachbarn und Komponente
                        let a = Math.abs( col2 - col1 ); //Abstand zwischen Nachbarn und Komponente
                        //erneute Definition des horizontalen Zusammenhangs, durch Winkelabweichung und kleiner Groeszen-Qunatile
			            if( b < winkelabwDURCH &&  //Winkelabweichungsqunatile
                            cchight >= gu && //Hoehenqunatile untere Grenze
                            cchight <= gugu && //Hoehenqunatile obere Grenze
                            a < gaga){ //Weiten-Qunatile
                                indexHorizZusammen.push( ccoo ); //indeces der Nachbarn merken
                                linecomponentheightdurch += cchight; //Mitteln der Nachbarhoehe
                                cneterof += row2; //Mitteln der Nachbarnzentren Y Werte
                        } 
                        
                    }
                }
                //Relativ Schritt des Mittels
                let iil = indexHorizZusammen.length;
                linecomponentheightdurch = linecomponentheightdurch / iil;
                cneterof = cneterof / iil;
                
                //nun alle vertikalen Zusammenhänge herstellen
                if( iil > 0 ){ //wenn Nachbarn gefunden sind
                //console.log(indexHorizZusammen);
                let vDges = 0; //durchschnittliche Distanz nach Unten
                let countmitt = 0;
                let vDgesO = 0; //durchschnittliche Distanz nach nach Oben
                let countmittO = 0;
                let minindexL = null; //Index der naechsten Komponente links
                let Lmin = 100000; 
                let minindexR = null; //Index der naechsten Komponente rechts 
                let Rmin = 100000;
                let minindexU = null; //Index der naechsten Komponente unten
                let minindexO = null; //Index der naechsten Komponente oben
                let zu = 0;
                for( zu = 0; zu < iil; zu+=1 ){ //fuer alle gefundenen Nachbarn
                    let minVdist = 100000;
                    let minVdistO = 100000;
                    
                    //Kennzahlen des umgebenden Rechtecks
                    let checkmInrow = componenten[ indexHorizZusammen[ zu ] ][0][1];
		            let checkmAxrow = componenten[ indexHorizZusammen[ zu ] ][0][3];
                    let checkmIncol = componenten[ indexHorizZusammen[ zu ] ][0][0];
		            let checkmAxcol = componenten[ indexHorizZusammen[ zu ] ][0][2];
                    let checkrow = componenten[ indexHorizZusammen[ zu ] ][3][5];
                    let checkheight = Math.abs( checkmAxrow - checkmInrow );

                    //Minima des Abstandes nach links oder rechts bezüglich der ermittelten Nachbarn
                    //console.log(cmincol - checkmAxcol, checkmIncol - cmaxcol);
                    let dl = Math.abs(cmincol - checkmAxcol)
                    if( Lmin >= dl && //Minimalitaetskriterium des Abstandes nach Links
                        checkmAxcol <= cmincol //Sicherung, dass Nachbar 
                         ){ 
                        minindexL = indexHorizZusammen[ zu ]; //Index merken
                        Lmin = dl; //neues Minimum festlegen
                    }
                    let dr = Math.abs(checkmIncol - cmaxcol);
                    if( Rmin >= dr && //Minimalitaetskriterium des Abstandes nach Rechts
                        cmaxcol <= checkmIncol //Sicherung, dass Nachbar
                         ){ //total rechts von der Untersuchungskomponnete liegt
                        minindexR = indexHorizZusammen[ zu ]; //in diesem Fall Index merken
                        Rmin = dr; //neues Minimum festlegen
                    }

                    //die Komponenten auf vertikale Nachbarn untersuchen
                    let ccoo = 0;
                    for( ccoo = 0; ccoo < cil; ccoo+=1 ){ //fuer alle Komponenten
                        if( indexHorizZusammen[ zu ] !== ccoo ){ // wenn die Komponente nicht die UNtersuchungskomponente ist
                            let tempmIncol = componenten[ ccoo ][0][0]; //Anfang des umgebenden Rechtecks x
		                    let tempmAxcol = componenten[ ccoo ][0][2]; //Ende des umgebenden Rechtecks y
                            //definition eines vertikalen Nachbarn nur in Abhängigkeit seiner x Ausdehnung
                            if( !(
                                  ( (checkmIncol-ga) > tempmIncol && //wenn der x Anfang Wert der Untersuchungskomponente subtrahiert mit der vierfachen durchschnittlichen Komponentenweite groeszer ist als der End und Anfangs x Wert der Nachbarkomponnete
                                    (checkmIncol-ga) > tempmAxcol) || //oder
                                  ( (checkmAxcol+ga) < tempmIncol && //wenn das x Ende der Untersuchungskomponente addiert mit dem vierfachen der durchschnittlichen Komponentenweite groeszer ist als der Anfangs und End x Wert der Nachbarkomponente
                                    (checkmAxcol+ga) < tempmAxcol)  )   ){
                                    //dann gild die vertikale Nachbarschaft
                                let tempmInrow = componenten[ ccoo ][0][1];
                                let tempmAnrow = componenten[ ccoo ][0][3];
                                let temphight = Math.abs(tempmAnrow-tempmInrow);
                                let temprow = componenten[ccoo][3][5];
                                //UND NACH UNTEN SUCHEN                            
                                if( tempmInrow > checkmAxrow && 
                                    temphight > gigi && //wenn Nachbarkomponente der Quantile der Hoehe entspricht
                                    temphight < gugu ){
                                    let disttc = Math.abs(temprow - checkrow);
                                    if( disttc < minVdist ){ //minimaler Abstand nach Unten
                                        minVdist = disttc;
                                        minindexU = ccoo;
                                    }
                                }
                                //UND AuCH hoch den Abstand bestimmen
                                if( tempmInrow < checkmAxrow && 
                                    temphight > gigi && 
                                    temphight < gugu ){//wenn Nachbarkomponente der Quantile der Hoehe entspricht
                                    let disttc = Math.abs(temprow - checkrow);
                                    if( disttc < minVdistO ){ //minimaler Abstand nach Oben
                                        minVdistO = disttc;
                                        minindexO = ccoo;
                                    }
                                }
                            }
                        }
                    }
                    //fuer alle so gefundenen Nachbar Komponeten die minimale Distenz merken
                    if( minVdist !== 100000){
                        vDges += minVdist;
                        countmitt+=1;
                    }
                    if( minVdistO !== 100000){
                        vDgesO += minVdistO;
                        countmittO+=1;
                    }
                }

                
                //minimale Distanz als Durchschnitt angeben
                vDges = ( vDges / countmitt );
                vDgesO = ( vDgesO / countmittO );
                countllllll+=1;

                //
                let nr = cneterof + linecomponentheightdurch; //der Initialwert der "baseline" der "Zeile"
                let nachuntenrow = nr; //so setzen den Wert der die untere "Zeile" repräsentiert
                let baselineLOK1 = nr; //Baseline so initialisieren
                //Verbesserung der Lage der baseline
                if( componenten[ minindexU ] ){ //wenn eine minimale untere Komponente existiert, dann nimm dies als Lage der unteren Zeile
                    nachuntenrow = componenten[minindexU][3][1];
                }
                if( nr < cmaxrow ){ //wenn baseline ueber dem unteren Rand liegt, dann setze den Unteren Rand (das  ist eigentlich keine baseline, weil es der Sitz der kleinen Buchstaben waere, die Erweiterung ist zeitweise, man kann so die baseline auch umsetzen)
                    baselineLOK1 = cmaxrow;
                }  else if( nr > nachuntenrow ) { //wenn baseline ueber dem Zentrum der minimalen unteren Nachbarkompopnete liegt, dann mittle zwischen der angenommenen Baseline und dem Mittel aller zenren aller Nachbar und setze dies als baseline
                    baselineLOK1 = cneterof+( vDges/2 ) - 1;
                } else {
                    baselineLOK1 = nr;//...
                }
                let ni = [chight, cwidth, vDges, vDgesO, minindexL, minindexR, cneterof, linecomponentheightdurch , minindexU, minindexO, baselineLOK1];//bilde Erweiterung der Komponenten
                //componenten[co].push( ni ); //erweitere Komponenten
                //console.log(ni);
                compnachbarsch[co] = ni; 
                } 
            } else { //Falls die Untersuchungskomponentminmaxpline.pushre nicht in der Groeszen-Quantile fuer die UNtersuchung liegt
                            if( chight > gu || cwidth > gagago ){ //waehle die obereHaelfte der Menge
                                if( componentenBIGANDNOTINPLINE.indexOf( co ) === -1){ //wenn Komponente noch nicht im Speicher
                                    componentenBIGANDNOTINPLINE.push(co); //speichere grosze Komponenten fuer weitere Untersuchungen
                                }
                            }
                        }
        } else{
            compnachbarsch[co] = new Array(); 
        }
    }
}

function sort2PLINES( componenten, compnachbarsch, plines ){

    //[coHheight, coHwidth, vDges, vDgesO, minindexL, minindexR ];
    //sort to lines
    let co = 0;
    let bil = compnachbarsch.length;
    let pil = plines.length;
    for( co = 0; co < bil; co+=1 ){ //alle Komponenten werden untersucht, ob sie 
        if( compnachbarsch[ co ] ){ //eine definition ihrer Horizoantalen Zusammenhaenge enthalten
            if( compnachbarsch[ co ][4] || compnachbarsch[ co ][5] ){ //einen minimalen Abstand nach rechts oder links haben
                let wasin = [];
                //Kontrolle, ob Komponente schon in einer potentiellen Zeile vertreten ist
                for( let line = 0; line < pil; line+=1 ){
                    let lil = plines[ line ].length;
                    for( let coco = 0; coco < lil; coco+=1 ){
                            //ist genau diese Komponente schon in einer Zeile organisiert
                        if( ((compnachbarsch[ plines[ line ][ coco ] ][4] !== null && 
                              compnachbarsch[ plines[ line ][ coco ] ][4] === co) || 
                             (compnachbarsch[ plines[ line ][ coco ] ][5] !== null && 
                              compnachbarsch[ plines[ line ][ coco ] ][5] === co)) ||
                             //ist ein Nachbar der Komponente in einer Zeile organisiert
                            ((compnachbarsch[ plines[ line ][ coco ] ][4] !== null && 
                             compnachbarsch[ plines[ line ][ coco ] ][4] === compnachbarsch[ co ][4]) || 
                            (compnachbarsch[ plines[ line ][ coco ] ][5] !== null && 
                             compnachbarsch[ plines[ line ][ coco ] ][5] === compnachbarsch[ co ][4]) ) ||
                            //ist ein anderer Nachbar in einer Zeile organisert
                            ((compnachbarsch[ plines[ line ][ coco ] ][4] !== null && 
                             compnachbarsch[ plines[ line ][ coco ] ][4] === compnachbarsch[ co ][5]) || 
                            (compnachbarsch[ plines[ line ][ coco ] ][5] !== null && 
                             compnachbarsch[ plines[ line ][ coco ] ][5] === compnachbarsch[ co ][5]) ) ){
                            if( wasin.indexOf( line ) === -1 ){
                                wasin.push( line ); //Zeile merken
                            }
                        }
                    }
                }
                wasin = Array.from( new Set( wasin ) );//distinct
                let wil = wasin.length;
                if(  wil === 0 ){ //Wenn die Komponente nicht in einer potentiellen Zeile vertreten ist, dann
                    if( compnachbarsch[ co ][5] && compnachbarsch[ co ][4] ){ //potenzielle Zeile erstellen 
                        plines.push( [co, compnachbarsch[ co ][5], compnachbarsch[ co ][4]] ); // und die Nachbarn sind mit in der Zeile
                    } else  if( compnachbarsch[ co ][5] && !compnachbarsch[ co ][4] ){
                        plines.push( [co, compnachbarsch[ co ][5]] );//nur ein Nachbar mit in der Zeile
                    } else  if( !compnachbarsch[ co ][5] && compnachbarsch[ co ][4] ){
                        plines.push( [co, compnachbarsch[ co ][4]] ); //nur ein anderer Nachbar in der Zeile
                    } else {
                        plines.push( [co] ); //nur die Komponente in der Zeile
                    }
                } else {

                    for( let w = 1; w < wil; w+=1 ){ //in jeder Zeile
                        //ergaenze
                        if( compnachbarsch[ co ][5] && compnachbarsch[ co ][4] ){
                            if( plines[ wasin[w] ].indexOf( compnachbarsch[ co ][5] ) === -1 ){
                                //wenn noch nicht vorhanden
                                plines[ wasin[w] ].push( compnachbarsch[ co ][5] );
                            }
                            if( plines[ wasin[w] ].indexOf( compnachbarsch[ co ][4] ) === -1 ){
                                plines[ wasin[w] ].push( compnachbarsch[ co ][4] );
                            }
                        } else  if( compnachbarsch[ co ][5] && !compnachbarsch[ co ][4]){
                            if( plines[ wasin[w] ].indexOf( compnachbarsch[ co ][5] ) === -1 ){
                                plines[ wasin[w] ].push( compnachbarsch[ co ][5] );
                            }
                        } else  if( !compnachbarsch[ co ][5] && compnachbarsch[ co ][4]){
                            if( plines[ wasin[w] ].indexOf( compnachbarsch[ co ][4] ) === -1 ){
                                plines[ wasin[w] ].push( compnachbarsch[ co ][4] );
                            }
                        } else {
                            if( plines[ wasin[w] ].indexOf( co ) === -1 ){
                                plines[ wasin[w] ].push( co );
                            }
                        }
                    }
                    wasin = []; //Array der Stellen im 
                    
                }
            }
        }
    }
    //Verbinde Zielenteile
    let piil = pil-1;
    for(let p = 0; p < piil; p+=1){ //fuer jede Zeile
        let ppil = plines[p].length;
        for( let Oh = 0; Oh < ppil; Oh+=1 ){ //fuer jedes Element in der Zeile
            for(let f = p+1; f < pil; f+=1){ //fuer alle folgenden Zeilen
                let fil = plines[f].length;
                for(let g = 0; g < fil; g+=1){ //fuer die Elemente der folgenden Zeilen
                    let das = plines[f][g];
                    let unddas = plines[p][Oh];
                    if( das === unddas || das === compnachbarsch[ unddas ][5] || das === compnachbarsch[ unddas ][4] ||
                        unddas === compnachbarsch[ das ][5] || unddas === compnachbarsch[ das ][4] ){ //wenn ein Komponentenindex oder ein Nachbar in beiden der Zeilen vorhanden ist, dann vereinige die Zeilen zu ersten
                               plines[p] = Array.from( new Set( plines[p].concat( plines[f] ) ) ); //vereinigung und distinct aus Set
                               plines[f] = []; //loeschen der vereinigten Zeile
                    }
                }
            }
        }
    }
  
    //horizontale Sortierung (bubble sort fuer kurze Arrays) der Komponenten in einer Zeile
    for( let p = 0; p < piil; p+=1 ){ 
        let notsorted = true;
        while( notsorted ){
            let hasnotchanged = true; //fuer jede runde wird davon ausgegangen, dass sich nichts geaendert hat
            let ppil = plines[p].length-1;
            for( let Oh = 0; Oh < ppil; Oh+=1 ){ //aenderungen an einer Zeile
                if( componenten[ plines[ p ][ Oh + 1 ] ][0][0] < componenten[ plines[ p ][ Oh ] ][0][0] ){ //nach Anfängend er Komponenten sortieren
                    let cc = plines[ p ][ Oh + 1 ]; //tausche Komponneten
                    plines[ p ][ Oh + 1 ] = plines[ p ][ Oh ];
                    plines[ p ][ Oh ] = cc;
                    hasnotchanged = false;
                }
            }

            if( hasnotchanged ){ //so lange bis sich nichts mehr aendert wird getauscht und die notsorted letiable wird gestezt
                notsorted = false;
            }
        }
    }
}

function createMINMAXplines( componenten, compnachbarsch, plines ){
    let minmaxpline = [];
    let pil = plines.length;
    for( let p = 0; p < pil; p+=1 ){ //fuer alle plines
        let ll = plines[p]; //eine "Zeile"
        let lil = ll.length;
        if( lil > 0 ){ //wenn die Zeile nicht leer ist
            let coheightperline = 0; //Durschschnitt der Komponentengroesze
            let baselinedurch = 0; //Durchschnitt der Lage des unteren Zeilenendes
            let widthofelem = 0; //Durchschnitt der Komponentenbreite
            let lastline = ll[0]; //zuletzt verarbeitet Zeile
            let minL = 100000; //Minimum X Wert
            let minLindex = null; //Indes des Minumum des X Werts
            let maxL = 0; //Maximum des X Werts
            let maxLindex = null; //Index des Maximums
            
            let count = 0;
            for(let pl = 0; pl < lil; pl+=1){//fuer alle Komponenten dieser Zeile
                baselinedurch += compnachbarsch[ lastline ][10];
                
                coheightperline += compnachbarsch[ lastline ][0];
                widthofelem += compnachbarsch[ lastline ][0];
                if( minL >= componenten[ ll[pl] ][0][0]){
                    minL = componenten[ ll[pl] ][0][0];
                    minLindex = ll[pl];
                }
                if( maxL < componenten[ ll[pl] ][0][2]){
                    maxL = componenten[ ll[pl] ][0][2];
                    maxLindex = ll[pl];
                }
                lastline = ll[pl];
                count+=1;
            }
            coheightperline = coheightperline / lil; //Divisionsschritt des arithmetischen Mittels
            baselinedurch = Math.floor(baselinedurch / lil);
            
            //Aufnahme der Daten zeilenspezifisch (Indexgleiche) in das Array
            minmaxpline.push([minL, minLindex, maxL, maxLindex, [p], coheightperline, baselinedurch, widthofelem]);
          
        }
    }
    //vertikal sortieren nach dem unteren Ende der Zeilen
    let notsorted = true;
    let mil = minmaxpline.length-1;
    let miil = mil-1;
    
    while( notsorted ){
        let wasnotmod = true; //Abbruch fuer die Sortierung, wenn ichts mehr sortiert wird
        for( let p = 0; p < miil; p+=1 ){
            if( minmaxpline[ p ][ 6 ] > minmaxpline[ p+1 ][ 6 ] ){ //wenn eine baseline einer Zeile groeszer ist als die nachfolgende
                let tempentry = minmaxpline[ p+1 ]; //tausche die beiden Array an den Indices aus
                minmaxpline[ p+1 ] = minmaxpline[ p ];
                minmaxpline[ p ] = tempentry;
                wasnotmod = false;//zeige an, dass sich etwas geaendert hat
                
            }
        }
        
        if( wasnotmod ){ //wenn sich nichts aendert, dann brich ab
            notsorted = false;
        }
    }
    
    
    //horizontal zusammenlgen von plines anhand ihrer Masze
    for(let p = 0; p < mil; p+=1){ //fuer alle Vermessungen
            if( minmaxpline[ p ] ){ //wenn diese Vermessung nicht NULL ist
                let dododozusammen = true;
                while( dododozusammen ){ //wiederholen der Zusammenlegungsuntersuchung, falls zusammen gelegt wurde
                    dododozusammen = false;
                    for(let s = 0; s < mil; s+=1){ //vergleiche mit allen anderen Vermessungen
                        
                        if( p !== s ){ //nicht sich selbst vergleichen
                            if( minmaxpline[ s ] ){ //wennd ie Vergleichsvermessunge existeirt
                                    let LHunter = Math.abs( minmaxpline[ s ][ 6 ] - minmaxpline[ p ][ 6 ] ); //Differenz der horizontalen Lage
                                    let chcheheight = (minmaxpline[s][ 5 ] + minmaxpline[ p ][ 5 ])/3;//Math.abs(minmaxpline[s][ 5 ] - minmaxpline[ p ][ 5 ] );// // Hoehe der Zeilen anhand der Komponentenhoehe
                                    if( LHunter < chcheheight ){ //wenn der Lageunterschied kleiner als die Hoehe ist
                                        //zusammenlegen weiter machen
                                        dododozusammen = true;
                                        //Zuweisung der Messungen 
                                        if( minmaxpline[ p ][2] <= minmaxpline[s][ 2 ] ){ 
                                             minmaxpline[ p ][2] = minmaxpline[s][ 2 ];
                                             minmaxpline[ p ][3] = minmaxpline[s][ 3 ];
                                        }
                                        if( minmaxpline[ p ][0] > minmaxpline[s][ 0 ] ){
                                             minmaxpline[ p ][0] = minmaxpline[s][ 0 ];
                                             minmaxpline[ p ][1] = minmaxpline[s][ 1 ];
                                        }
                                        //Vereinigung der Messungen
                                        minmaxpline[ p ][5] = (minmaxpline[s][ 5 ]+minmaxpline[ p ][5])/2;
                                        minmaxpline[ p ][7] = minmaxpline[s][ 7 ]+minmaxpline[ p ][7];
                                        let xil = minmaxpline[s][ 4 ].length;
                                        for(let r = 0; r < xil; r+=1 ){
                                            minmaxpline[ p ][4].push( minmaxpline[s][ 4 ][ r ] );
                                        }
                                        //loeschen der alten Verinigung
                                        minmaxpline[s] = null;
                                    } 
                               
                            }
                        }
                    }
                }
            }
            
    }

    //remove the null null null
    minmaxpline = minmaxpline.filter( (obj) => obj );

    mil = minmaxpline.length;
    miil = mil-1;
     //vertical sort
    notsorted = true;
    while( notsorted ){
        let wasnotmod = true;
        for( let p = 0; p < miil; p+=1 ){
            if( minmaxpline[ p ][ 6 ] > minmaxpline[ p+1 ][ 6 ] ){
                let tempentry = minmaxpline[ p+1 ];
                minmaxpline[ p+1 ] = minmaxpline[ p ];
                minmaxpline[ p ] = tempentry;
                wasnotmod = false;
            }
        }
        if( wasnotmod ){
            notsorted = false;
        }
    }

    //horizontal sort 
    /*for( let p = 0; p < plines.length-1; p+=1 ){ 
        let notsorted = true;
        while( notsorted ){
            let hasnotchanged = true;
            for( let Oh = 0; Oh < plines[p].length-1; Oh+=1 ){
                if( componenten[ plines[ p ][ Oh + 1 ] ][0][0] < componenten[ plines[ p ][ Oh ] ][0][0] ){
                    let cc = plines[ p ][ Oh + 1 ];
                    plines[ p ][ Oh + 1 ] = plines[ p ][ Oh ];
                    plines[ p ][ Oh ] = cc;
                    hasnotchanged = false;
                }
            }

            if( hasnotchanged ){
                notsorted = false;
            }
        }
    }*/

    //nachbarn vertikal
    for(let p = 0; p < mil; p+=1){
            let checkline = minmaxpline[ p ];
            if(checkline !== null && checkline !== undefined){
                let LHo = 100000;
                let LHu = 100000;
                let LHindexo = null;
                let LHindexu = null;
                for(let s = 0; s < mil; s+=1){
                    if( p !== s ){
                        if( minmaxpline[s] ){
                            if( (
                                  (checkline[0] >= minmaxpline[s][0] && checkline[2] >= minmaxpline[s][2] &&
                                   checkline[0] < minmaxpline[s][2] && checkline[2] > minmaxpline[s][0] ) ||

                                  (checkline[0] <  minmaxpline[s][0] && checkline[2] < minmaxpline[s][2] &&
                                   checkline[0] <  minmaxpline[s][2] && checkline[2] > minmaxpline[s][0]) ||

                                  (checkline[0] > minmaxpline[s][0] && checkline[2] < minmaxpline[s][2] &&
                                   checkline[0] < minmaxpline[s][2] && checkline[2] > minmaxpline[s][0]) ||

                                  (checkline[0] < minmaxpline[s][0] && checkline[2] > minmaxpline[s][2] &&
                                   checkline[0] < minmaxpline[s][2] && checkline[2] > minmaxpline[s][0]))) {
                                    let tempLH = Math.abs( minmaxpline[s][ 6 ] - checkline[ 6 ] ); 
                                     

                                    //und tempLH muß größer sein als nach OBEN
                                    if( tempLH < LHo &&  minmaxpline[s][ 6 ] < checkline[ 6 ] ){ 
                                            LHo = tempLH;
                                            LHindexo = s;
                                    }
                                    if( tempLH < LHu &&  minmaxpline[s][ 6 ] > checkline[ 6 ] ){ 
                                            LHu = tempLH;
                                            LHindexu = s;
                                    }
                            }
                        }
                    }
                }
                //vorgänger und nachfolger
                minmaxpline[ p ].push( LHo );
                minmaxpline[ p ].push( [ LHindexo ] );
                minmaxpline[ p ].push( LHu );
                minmaxpline[ p ].push( [ LHindexu ] );
                
         }
    }



    //ERSTE verikale zuzsammenlegung
    /*
    for(let p = minmaxpline.length; p > 0; p--){
            let checkline = minmaxpline[ p ];
            if( checkline ){
                        let drueberdrunter = checkline[9];
                        for( let sel = 0; sel < drueberdrunter.length; sel+=1){                           
                            let drüber = minmaxpline[ drueberdrunter[ sel ] ];
                            if( drüber ){
                                let lenghtlineA = Math.abs(checkline[ 0 ] - checkline[ 2 ]); 
                                let lenghtlineB = Math.abs(drüber[ 0 ] - drüber[ 2 ]);
                                let relcompcountA = checkline[ 7 ]/coHwidth;
                                let relcompcountB = drüber[ 7 ]/coHwidth;
                                let lueckenA = Math.abs( checkline[7]  - lenghtlineA );
                                let lueckenB = Math.abs( drüber[7]  - lenghtlineB );
                                if( checkline[6]  > drüber[ 6 ] && //muss übercheckline liegen
                                    relcompcountA > relcompcountB && //hm vielleicht die drei nächsten äquivalent
                                    checkline[ 7 ] > drüber[ 7 ]    && // hm
                                    lueckenA < lueckenB && //hm
                                    Math.abs(checkline[ 7 ] - drüber[ 7 ]) > (coHwidth*10) && //stark
                                    checkline[ 5 ]  > drüber[ 5 ] &&//nötig
                                    Math.abs(checkline[5] - drüber[ 5 ]) > (coHheight/4) //stark
                                   ){ 
                                    
                                    for(let v = 0; v < minmaxpline[ drueberdrunter[ sel ] ][9].length; v+=1){
                                        if( minmaxpline[ p ][9].indexOf( minmaxpline[ drueberdrunter[ sel ] ][9][ v ] ) === -1 && 
                                            minmaxpline[ drueberdrunter[ sel ] ][9][ v ] !== p){
                                            minmaxpline[ p ][9].push(minmaxpline[ drueberdrunter[ sel ] ][9][ v ] );
                                        }
                                    }
                                   minmaxpline[ drueberdrunter[ sel ] ] = null;
                                } 
                            }
                        }
                    
                }
                
            
    }*/
    return minmaxpline;
}

function createGAPSandextMINMAXpline( componenten, plines, minmaxpline, GAPS, MAXGABS ){
    let mil = minmaxpline.length;
    for( let li1 = 0; li1 < mil; li1+=1 ){ //aus minmaxlines - einer Sortierung
        GAPS.push( [] ); //pro horizontalem Zusammenhang
        //ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
        let tempplines = minmaxpline[ li1 ][4]; //hole die plines - einarray der componenten
        let tempcompindices = []; //Speicher fuer die Indices der Komponenten die horizontalen Zusammenhang bilden
        let til = tempplines.length;
        for( let il2 = 0; il2 < til; il2+=1 ){ //Speicher fuellen
           tempcompindices = tempcompindices.concat( plines[ tempplines[ il2 ] ] );//aus den plines 
        }
        //Indices der Komponenten sorrtieren nach x Wert der Komponenten
        let tempcompindicessorted = [];
        let ttil = tempcompindices.length;
        while( tempcompindices.length !== tempcompindicessorted.length ){ //solange noch zu sortieren ist
           let minval = 1000000; //initiales Minimum der x Werte
           let minindex = undefined; //initialer Index der Komponente
           for( let ci = 0; ci < ttil; ci+=1 ){ //die Indices der Komponenten durchgehen
               if( tempcompindices[ ci ] !== undefined ){ //wenn dieser noch existiert
                   let col = componenten[ tempcompindices[ ci ] ][0][0]; //x Wert holen
                   if( col <= minval ){ //Minimalitätskriterium
                       minval = col; //Minimum neu setzen
                       minindex = ci; //Index merken
                   }
                }
           }
           tempcompindicessorted.push( tempcompindices[ minindex ] ); //Minimum Index speichern (an richtiger Stelle der Sortierung)
           tempcompindices[ minindex ] = undefined; //den Index dieses Minimums loechen
       }
       let currgabindex = GAPS.length-1; //beginnend 
        let sil = tempcompindicessorted.length-1;
       for( let ci = 0; ci < sil; ci+=1 ){ //Vermessung der Luecken
	       let cmaxcol = componenten[ tempcompindicessorted[ ci ] ][0][2]+1;
           let cmincol2 = componenten[ tempcompindicessorted[ ci+1 ] ][0][0]-1;
           let gapsize = cmincol2 - cmaxcol;
           if(gapsize < 0){ //wahrscheinlich überlappung
               gapsize = 0;
           } 
           GAPS[ currgabindex ].push( [gapsize, cmaxcol, cmincol2, tempcompindicessorted[ ci ], tempcompindicessorted[ ci+1 ], li1, ci] );
       }
       //change MINMAXPLINE 
       minmaxpline[ li1 ].push( tempcompindicessorted ); //add sorted array of components - to reset the mengen operation
    }
    let howmanymaxgabs = 10;
    let gil = GAPS.length;
    for( let gpl = 0; gpl < gil; gpl+=1 ){
        let currmaxgabs = [];
        let lstbiggest = 10000000;
        let count = 0;
        while( count < howmanymaxgabs ){
            let currmax = 0;
            let currweight = 0.0;
            let indexatmax = undefined;
            let ggil =  GAPS[ gpl ].length;
            for( let g1 = 0; g1 < ggil; g1+=1 ){
                if( currmax <= GAPS[ gpl ][ g1 ][ 0 ]  && 
                    lstbiggest > GAPS[ gpl ][ g1 ][ 0 ] ){
                      currmax = GAPS[ gpl ][ g1 ][ 0 ];
                      indexatmax = g1;
                      currweight = GAPS[ gpl ][ g1 ][ 5 ];
                }
            }
            
            if( indexatmax !== undefined ){
                lstbiggest = currmax;
                currmaxgabs.push( GAPS[ gpl ][ indexatmax ]);
                currmaxgabs[currmaxgabs.length-1].push(indexatmax);
            }
            
            count+=1;
        }
        MAXGABS.push( currmaxgabs );
        //}
    }
}

function gab2cut( ctx, componenten, coHwidth, coHheight, GAPS, MAXGABS, alllasenkrecht ){
    let CUTS1 = []; //speicher fuer die vertikalen Schnitte
    //MPLEMENTIERUNG VON LUECKEN UNTEREINANDER
    let mil = MAXGABS.length;
    for( let gpl = 0; gpl < mil; gpl+=1 ){ //fuer einen horizontalen Zusammenhang
        let mmil = MAXGABS[ gpl ].length;
        for(let g1 = 0; g1 < mmil; g1+=1 ){ //kontrolliere alle Luecken
            //console.log(gpl,  g1);
            let unterderluecke = [ [gpl,g1] ]; //Speicher fuer alle Luecken unter der Kontrollluecke
            let prozeileOLD = []; //Speicher fuer vorherige Luecken
            for( let gpl2 = gpl+1; gpl2 < mil; gpl2+=1 ){ //untersuche alle vertikal folgenden horizontalen Zusammenhänge
                let prozeile = []; //aktuell gefundene Luecken
                // wenn letze Luecke vor der Untersuchungsluecke liegt, dann liegt der ganze horizontale Zusammehnag vor der Luecke
                
                if( GAPS[ gpl2 ][ GAPS[ gpl2 ].length - 1][2] < MAXGABS[ gpl ][ g1 ][ 2 ]){ 
                    prozeile.push( [gpl2,"<"] ); //speichern der Codierung fuer diesen Sachverhalt
                //wenn die erste Luecke nach der Untersuchungsluecke liegt, dann liegt der ganze Zusammenhang nach der Luecke
                } else if( GAPS[ gpl2 ][ 0 ][ 1 ] > MAXGABS[ gpl ][ g1 ][ 1 ] ){
                    prozeile.push( [gpl2,">"] );
                } else { //jede Luecke untersuchen
                    let miil = MAXGABS[ gpl2 ].length;
                    for( let g2 = 0; g2 < miil; g2+=1 ){
                        if( 
                        MAXGABS[ gpl ][ g1 ][ 1 ] <=  MAXGABS[ gpl2 ][ g2 ][ 2 ] && 
                        MAXGABS[ gpl ][ g1 ][ 2 ] >=  MAXGABS[ gpl2 ][ g2 ][ 1 ]  
                        ){ //grundsätzliche Lage der X Werte 
                         if(
                         (MAXGABS[ gpl ][ g1 ][ 1 ] >= MAXGABS[ gpl2 ][ g2 ][ 1 ] && 
                          MAXGABS[ gpl ][ g1 ][ 2 ] >= MAXGABS[ gpl2 ][ g2 ][ 2 ] ) ||
                         (MAXGABS[ gpl ][ g1 ][ 1 ] <= MAXGABS[ gpl2 ][ g2 ][ 1 ] && 
                          MAXGABS[ gpl ][ g1 ][ 2 ] <= MAXGABS[ gpl2 ][ g2 ][ 2 ] ) ||
                         (MAXGABS[ gpl ][ g1 ][ 1 ] >= MAXGABS[ gpl2 ][ g2 ][ 1 ] && 
                          MAXGABS[ gpl ][ g1 ][ 2 ] <= MAXGABS[ gpl2 ][ g2 ][ 2 ] ) ||
                         (MAXGABS[ gpl ][ g1 ][ 1 ] <= MAXGABS[ gpl2 ][ g2 ][ 1 ] && 
                          MAXGABS[ gpl ][ g1 ][ 2 ] >= MAXGABS[ gpl2 ][ g2 ][ 2 ] )
                         ){ //logische Abfrage zur Lage der Luecken untereinander
                            prozeile.push( [gpl2,g2] ); //sind jene so gelegen, speichern
                         }
                        }
                    }//ende pro Zeile
                }
                //console.log(MAXGABS[ gpl ].toString());
                //console.log(MAXGABS[ gpl2 ].toString());
                //console.log(prozeile.length, unterderluecke.length);
                if( prozeile.length === 0){ //keine Luecke liegt unter der Untresuchungsluecke: Abbruch
                    
                    break;
                } else {
                    let oil = prozeileOLD.length;
                    let zil = prozeile.length;
                    if( oil !== 0 ){ //wenn bereits Luecken untereinander gefunden sind
                        let tempoldO = [];
                        
                        for(let vv = 0; vv < oil; vv+=1){
                            let glpold = prozeileOLD[vv][0];
                            let gold =  prozeileOLD[vv][1];
                            
                            for(let vvv = 0; vvv < zil; vvv+=1){
                                let gplcurr = prozeile[vvv][0];
                                let gcurr = prozeile[vvv][1];
                                //was fuer eine Luecke zutrifft muss fuer eine vorherige Luecke auch zugetroffen haben
                                let notin = unterderluecke.toString().indexOf([glpold, gold].toString());
                                
                                if(notin === -1){
                                if( (gcurr === "<" || gcurr === ">") && (gold === "<" || gold === ">") ){
                                    unterderluecke.push( [glpold, gold] );
                                    tempoldO = prozeile;
                                    break;
                                } else if( (gcurr === "<" || gcurr === ">") && (gold !== "<" && gold !== ">") ){
                                    if( gcurr === "<" ){
                                       if(  GAPS[ gplcurr ][ GAPS[ gplcurr ].length - 1][1] < MAXGABS[ glpold ][ gold ][ 2 ] ){
                                            unterderluecke.push( [glpold, gold] );
                                            tempoldO = prozeile;
                                            break;
                                       }
                                    } else {
                                        if(  GAPS[ gplcurr ][ 0 ][2] > MAXGABS[ glpold ][ gold ][ 1 ] ){
                                            unterderluecke.push( [glpold, gold] );
                                            tempoldO = prozeile;
                                            break;
                                       }
                                    }
                                } else if( (gcurr !== "<" && gcurr !== ">") && (gold === "<" || gold === ">") ){
                                    if( gold === "<" ){
                                       if(  GAPS[ glpold ][ GAPS[ glpold ].length - 1][1] < MAXGABS[ gplcurr ][ gcurr ][ 2 ] ){
                                            unterderluecke.push( [glpold, gold] );
                                            tempoldO = prozeile;
                                            break;
                                       }
                                    } else {
                                        if(  GAPS[ glpold ][ 0 ][2] > MAXGABS[ gplcurr ][ gcurr ][ 1 ] ){
                                            unterderluecke.push( [glpold, gold] );
                                            tempoldO = prozeile;
                                            break;
                                       }
                                    }
                                
                                } else if( gcurr !== "<" && gcurr !== ">" && gold !== "<" && gold !== ">" ){//nicht irgendein kleiner oder groeszer
                                    
                                    if( 
                                    MAXGABS[ glpold ][ gold ][ 1 ] <=  MAXGABS[ gplcurr ][ gcurr ][ 2 ] && 
                                    MAXGABS[ glpold ][ gold ][ 2 ] >=  MAXGABS[ gplcurr ][ gcurr ][ 1 ]  
                                    ){
                                    if(
                                     (MAXGABS[ glpold ][ gold ][ 1 ] >= MAXGABS[ gplcurr ][ gcurr ][ 1 ] && 
                                      MAXGABS[ glpold ][ gold ][ 2 ] >= MAXGABS[ gplcurr ][ gcurr ][ 2 ] ) ||
                                     (MAXGABS[ glpold ][ gold ][ 1 ] <= MAXGABS[ gplcurr ][ gcurr ][ 1 ] && 
                                      MAXGABS[ glpold ][ gold ][ 2 ] <= MAXGABS[ gplcurr ][ gcurr ][ 2 ] ) ||
                                     (MAXGABS[ glpold ][ gold ][ 1 ] >= MAXGABS[ gplcurr ][ gcurr ][ 1 ] && 
                                      MAXGABS[ glpold ][ gold ][ 2 ] <= MAXGABS[ gplcurr ][ gcurr ][ 2 ] ) ||
                                     (MAXGABS[ glpold ][ gold ][ 1 ] <= MAXGABS[ gplcurr ][ gcurr ][ 1 ] && 
                                      MAXGABS[ glpold ][ gold ][ 2 ] >= MAXGABS[ gplcurr ][ gcurr ][ 2 ] )
                                     ){
                                        unterderluecke.push( [glpold, gold] ); //wenn das ausgangspunkt sein kann
                                        let notin2 = tempoldO.toString().indexOf([gplcurr, gcurr].toString());
                                        if(notin2 === -1){
                                            tempoldO.push( [gplcurr, gcurr] );//wenn das erreicht werden konnte
                                        }
                                        
                                        
                                    }
                                    }
                                }
                                }
                            }
                            
                        }
                        if( tempoldO.length === 0 ){
                            break;
                        }
                        prozeileOLD = tempoldO;
                        
                    } else {
                        prozeileOLD = prozeile;
                    }
                }
                
            }
            //console.log("unter der luecke", unterderluecke);
            let uil = unterderluecke.length;
            if( uil > 1 ){
            //if( GAPS.length / unterderluecke.length < 2 ){      //das könnte so gut sein - das konvergiert auf die Spalten
            //console.log(gpl, g1, unterderluecke.length, unterderluecke);
            //zeichne mal ein
            /*ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            ctx.lineWidth= 4;
            let gz = 0;
            for( let zei = 0; zei < unterderluecke.length; zei+=1 ){
                let gplz = unterderluecke[zei][0];
                
                if( unterderluecke[zei][1] !== ">" && unterderluecke[zei][1] !== "<" ){
                    
                
                console.log(gplz,gz, GAPS[ gplz ][ gz ]);
                ctx.beginPath();
                ctx.moveTo(componenten[ GAPS[ gplz ][ gz ][ 3 ]][ 0 ][ 2 ],
                           componenten[GAPS[ gplz ][ gz ][ 3 ]][ 0 ][ 1 ]);
                ctx.lineTo(componenten[GAPS[ gplz ][ gz ][ 4 ]][ 0 ][ 2 ],
                           componenten[GAPS[ gplz ][ gz ][ 4 ]][ 0 ][ 1 ]);
                ctx.stroke();
                ctx.closePath();
                }
            }*/
            let cuil = CUTS1.length;
            if( cuil === 0 ){
               CUTS1.push( unterderluecke );
                
            } else { //vereinigen von den gefundenen Luecken mit eventuell schon vorhandenen Schnitten
                let wasnotin = true;
                for( let r = 0; r < cuil; r+=1 ){
                    let ril = CUTS1[ r ].length;
                    for(let f = 0; f < ril; f+=1 ){
                        if( CUTS1[ r ][ f ][0] === gpl && CUTS1[ r ][ f ][1] === g1 ){
                           wasnotin = false;
                           //CUTS1[ r ] = CUTS1[ r ].concat(unterderluecke);
                            for( let l = 0; l < uil; l+=1 ){
                                let topush = true;
                                for( let ff = 0; ff < ril; ff+=1 ){
                                    if( CUTS1[ r ][ff][0] === unterderluecke[ l ][0] ){//&&
                                        //CUTS1[ r ][ff][1] === unterderluecke[ l ][1] ){
                                        topush = false;
                                        break;
                                    } 
                                }
                                if( topush ){
                                    CUTS1[ r ].push( unterderluecke[ l ] );
                                    
                                }
                            }
                           
                        }
                    }
                    if(wasnotin === false){
                        break;
                    }
                }
                if( wasnotin && unterderluecke.length !== 0 ){
                    CUTS1.push( unterderluecke );
                    
                }
            }
            
            //CUTS1.push( unterderluecke );
            }
        }
    }
    //check if two cuts - the end and the start sattisfie the condition of gaps rechable (and gaps in between too)
    let ccuil = CUTS1.length-1;
    for( let r = 0; r < ccuil; r+=1){
        
        
        //FIX CARE FOR KLEINER unD GROESZER
        let abziehen = 1;
        let ruil = CUTS1[ r ].length;
        if( CUTS1[ r ][ruil-abziehen][1] === "<" || CUTS1[ r ][ruil-abziehen][1] === ">" ){
            let donotstop = true;
            while( donotstop ){
                abziehen+=1;
                if( abziehen === ruil ){
                    donotstop = false;
                } else {
                    if( CUTS1[ r ][ruil-abziehen][1] !== "<" || CUTS1[ r ][ruil-abziehen][1] !== ">" ){
                        donotstop = false;
                    }  
                    
                }
            } 
        }

        

        let iomg10 = CUTS1[ r ][ruil-abziehen][0]; //gpl
        let iomg11 = CUTS1[ r ][ruil-abziehen][1]; //g1

        let dazuzaehlen = 0;
        if( CUTS1[ r+1 ][dazuzaehlen][1] === "<" || CUTS1[ r+1 ][dazuzaehlen][1] === ">"){
            let donotstop = true;
            while( donotstop ){
                dazuzaehlen+=1;
                if( dazuzaehlen === ruil-1 ){
                    donotstop = false;
                } else {
                    if( CUTS1[ r ][dazuzaehlen][1] !== "<" || CUTS1[ r ][dazuzaehlen][1] !== ">" ){
                        donotstop = false;
                    }
                    
                }
            } 
        }
        
        let iomg20 = CUTS1[ r+1 ][dazuzaehlen][0];
        let iomg21 = CUTS1[ r+1 ][dazuzaehlen][1];

        

        if( iomg11 === "<" || iomg11 === ">" || iomg21 === "<" || iomg21 === ">" ){
            //console.log("not added together");
            continue;
        }

        let firstgapCOL1 = MAXGABS[iomg10][iomg11][1];
        let fisrtgapCOL2 = MAXGABS[iomg10][iomg11][2];
        let secondgapCOL1 = MAXGABS[iomg20][iomg21][1];
        let secondgapCOL2 = MAXGABS[iomg20][iomg21][2];

        
        if( firstgapCOL1 <=  secondgapCOL2 && 
            fisrtgapCOL2 >=  secondgapCOL1) {
                            
            if(
            (firstgapCOL1 >= secondgapCOL1 && fisrtgapCOL2 >= secondgapCOL2 ) ||
            (firstgapCOL1 <= secondgapCOL1 && fisrtgapCOL2 <= secondgapCOL2 ) ||
            (firstgapCOL1 >= secondgapCOL1 && fisrtgapCOL2 <= secondgapCOL2 ) ||
            (firstgapCOL1 <= secondgapCOL1 && fisrtgapCOL2 >= secondgapCOL2 )) 
            {
                for(let o = 0; o < ruil; o+=1){
                    let topush = true;
                    let tsil = CUTS1[ r+1 ].length;
                    for( let ff = 0; ff < tsil; ff+=1 ){
                        if( CUTS1[ r+1 ][ff][0] === CUTS1[ r ][o][0] &&
                            CUTS1[ r+1 ][ff][1] === CUTS1[ r ][o][1] ){
                            topush = false;
                            break;
                        } 
                    }
                    if( topush ){
                        CUTS1[ r+1 ].push(CUTS1[ r ][o]);
                    }

                    
                }
                CUTS1[ r ] = [];
            }
        }

    }
    //console.log("after while")
    //console.log(CUTS1);
    //turn CUTS1 into dict

    let arrayofdiccuts = [];
    let cuil = CUTS1.length;
    for(let c = 0; c < cuil; c+=1){
        let dictof = {};
        let tsil = CUTS1[ c ].length;
        for(let f = 0; f < tsil; f+=1 ){
            let gpl = CUTS1[ c ][ f ][0];
            let g1 = CUTS1[ c ][ f ][1];
            if( gpl in dictof ){
               dictof[ gpl ].push( g1 ); 
            } else {
               dictof[ gpl ] = [ g1 ];
            }
        }
        arrayofdiccuts.push( dictof );
    }
    
    
    let teilsenkrecht = []; //Speicher fuer die Teilstrecken des Untereinander
    let oldstart = 0;
    let oldend = 0;
    let oldpii = 0;
    let ail = arrayofdiccuts.length;
    for( let c = 0; c < ail; c+=1 ){ //Array von Dictionary Speichern der Schnitte, mit Zeilennummer als Key
        //ermittle durchschnittliche Grenzen des Schnittes
        let durchanfang = 0; //durchschnittlicher Anfang der Luecken eines Schnittes
        let durchend = 0; //durchschnittliches Ende der Luecken eines Schnittes 
        let du = 0; // count
        let fil = arrayofdiccuts[ c ].length;
        for( let f = 0; f < fil; f += 1 ){ //in arrayofdiccuts[ c ] ){
            let gpl = parseInt( f ); //Zeilennummer - Bezug zu den horizonatlen Zusammenhaengen
            let tui = arrayofdiccuts[ c ][ f ].length;
            for( let lue = 0; lue < tui; lue+=1 ){ //alle Luecken
                let g1 = arrayofdiccuts[ c ][ f ][lue]; //den Index der Luecken bilden
                 if( g1 === "<" ){
                    durchanfang += componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ]; //ueber Index der Komponente x Wert
                    durchend += componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 4 ]][ 0 ][ 0 ]; //  ueber Index der zweiten Komponente x Wert
                } else if( g1 === ">" ){
                    durchanfang += componenten[ MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ]; //...
                    durchend += componenten[ MAXGABS[ gpl ][ 0 ][ 4 ]][ 0 ][ 0 ]; //...       
                } else {       
                    durchanfang += componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ]; //...
                    durchend += componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][ 0 ][ 0 ]; //...
                            
                }
                du+=1;  //Increment
            }
        }
        durchanfang = Math.floor(durchanfang / du); //Durchschnitt
        durchend = Math.floor(durchend / du); //Durchschnitt
    ctx.globalAlpha = 0.5;   
    for( let pii = durchanfang; pii < durchend; pii+=1 ){ //Pixel Spalte
        let zusammenhaengende = []; //Speicher fuer erreichbare Luecken in dieser Pixel Spalte
        
        let start = null; //Speicher fuer erste Zeile der erreichbaren Luecken
        let abstartcount = 0; //wie viele Luecken sind erreichbar
        let gil = GAPS.length;
        for( let g = 0; g < gil; g+=1 ){ //nach Zeilen organisierte Lueckenodernung
            let hasgapinplace = false; //hat die Zeile eine Luecke in dieser Pixelspalte
            if( GAPS[ g ][ 0 ][ 1 ] > pii ){ //total danach
                hasgapinplace = true;
            } else if( GAPS[ g ][ GAPS[ g ].length-1 ][2] < pii ){ //total davor
                hasgapinplace = true;
            } else {
                let gui = GAPS[ g ].length;
                for( let f = 0; f < gui; f+=1 ){ //alle Luecken der Zeile untersuchen
                    let ganf = GAPS[ g ][ f ][ 1 ];
                    let gende = GAPS[ g ][ f ][ 2 ];
                    if( pii >= ganf && pii <= gende && coHwidth < GAPS[ g ][ f ][0]){  //wenn Luecke fuer die Pixelspalte exitiert
                        hasgapinplace = true;
                        break;//einmalig genügt
                    }
                }
                
            }
                if( hasgapinplace ){ //wenn Luecke vorhanden, meke die Indices und zähle Zeilen
                    if(start === null){
                        start = g; //start speichern
                    }
                    abstartcount+=1; //Zeilen zählen
                } else {
                    if( abstartcount !== 0 ){ //wenn keine Lueck vorhanden, aber vorher luecken untereinader gefunden wurde
                        zusammenhaengende.push([start,abstartcount]); //speichere tupel des Schnittes
                    }
                    start = null;
                    abstartcount = 0;
                }
            
        }
        if(abstartcount !== 0){
            zusammenhaengende.push( [start,abstartcount] );
        }
        let maxzusleng = 0;
        let maxzusstart = null;
        //maximale Schnitte (fuer eine Luecke) auswählen
        let ziu = zusammenhaengende.length;
        for( let zu = 0; zu < ziu; zu+=1 ){
            //ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            if( zusammenhaengende[zu][1] >= maxzusleng ){
                maxzusleng = zusammenhaengende[zu][1];
                maxzusstart = zusammenhaengende[zu][0];
            }
            /*ctx.lineWidth= 1;
            ctx.beginPath();
            ctx.moveTo( pii, componenten[GAPS[ zusammenhaengende[zu][0] ][ 0 ][ 4 ]][ 0 ][ 1 ]); 
            ctx.lineTo( pii, componenten[GAPS[ zusammenhaengende[zu][0]+zusammenhaengende[zu][1]-1 ][ 0 ][ 4 ]][ 0 ][ 1 ]);
            ctx.stroke();
            ctx.closePath();*/
        }
        if( maxzusleng !== 0 ){ //wenn maximaler Schnitt fuer eine Luecke vorhanden
            //ctx.lineWidth= 1;
            //ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            //ctx.beginPath();
            let startrow = componenten[GAPS[ maxzusstart ][ 0 ][ 4 ]][ 0 ][ 1 ];
            let endrow = componenten[GAPS[ maxzusstart+maxzusleng-1 ][ 0 ][ 4 ]][ 0 ][ 3 ];
            
            //ctx.moveTo( pii, startrow); 
            //ctx.lineTo( pii, endrow);
            //ctx.stroke();
            //ctx.closePath();
            if( 
                //lage des Schnittes zum vorherigen Schnitt, bzw. vertikale Lage, wenn Schnitt entfernt liegt vom anderen
                ( startrow >=  oldend ) ||
                ( endrow <= oldstart ) ||
                ( pii-oldpii !== 1 )
                            
            ) 
            { //wenn das der Fall ist, dann schreibe die Teilstrecke in den alle Strecken senkrecht Speicher
                if( teilsenkrecht.length !== 0){
                    alllasenkrecht.push( teilsenkrecht );
                }
                teilsenkrecht = [[pii, startrow, endrow]]; //setze Teilstrecken neu
                

            } else { //ansonsten erweitere die Teilstrecke
                teilsenkrecht.push([pii, oldstart, oldend]);
            }
            
            oldstart = startrow; //verfoplgen der Werte der Teilstrecken
            oldend = endrow;
            oldpii = pii;
         }
        }
    
    }
    if( 1 < teilsenkrecht.length ){ //letzte Teilstrecke
        alllasenkrecht.push( teilsenkrecht );
    }
    
    
    
    //jetzt diese strecken zu ihren hauptsächlichen Beginn und Enden reduzieren
    //historgramm machen, dann erstes max nehmen
    let alllasenkrechtSTREND = [];
    let alllasenkrechtSTENredux = [];
    let auil = alllasenkrecht.length;
    for(let a = 0; a < auil; a+=1){
        let histogrammofSTART = {};
        let histogrammofEND = {};
        let minstart = 1000000;
        let maxend = 0;
        let verticalmittel = 0;
        let bui = alllasenkrecht[a].length;
        for(let b = 0; b < bui; b+=1){
            let pii = alllasenkrecht[a][b][0];
            let startrow = alllasenkrecht[a][b][1];
            let endrow = alllasenkrecht[a][b][2];

            
            if( minstart > startrow ){
                minstart = startrow;
            }
            if( maxend < endrow ){
                maxend = endrow;
            }

            if( histogrammofSTART[ startrow ] ){
                histogrammofSTART[ startrow ] += 1;
            } else {
                histogrammofSTART[ startrow ] = 1;
            }

            if( histogrammofEND[ endrow ] ){
                histogrammofEND[ endrow ] += 1;
            } else {
                histogrammofEND[ endrow ] = 1;
            }

        }
        alllasenkrechtSTREND.push([ minstart, maxend ]);
        let newrowstart = 0;
        let maxcount = 0;
        let viererteil = Math.floor( ( maxend - minstart ) / 4 );
        let bisanfangsuch = minstart+viererteil;
        let vonendesuch = maxend-viererteil;
        for( let strts in histogrammofSTART ){
            if( histogrammofSTART[ strts ] > maxcount && bisanfangsuch > strts ){
                newrowstart = strts;
                maxcount = histogrammofSTART[ strts ];
            }
        }

        let newrowend = 0;
        maxcount = 0;
        for( let ens in histogrammofEND ){
            if( histogrammofEND[ ens ] > maxcount && ens > vonendesuch ){
                newrowend = ens;
                maxcount = histogrammofEND[ ens ];
            }
        }
        alllasenkrechtSTENredux.push([ newrowstart, newrowend ]);
        /*ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
        
        for(let b = 0; b < alllasenkrecht[a].length; b+=1){
            ctx.lineWidth= 1;
            ctx.beginPath();
            let pii = alllasenkrecht[a][b][0];
            let startrow = alllasenkrecht[a][b][1];
            let endrow = alllasenkrecht[a][b][2];
            
            ctx.moveTo( pii, newrowstart); 
            ctx.lineTo( pii, newrowend);
            ctx.stroke();
            ctx.closePath();
        }*/
        
    }
    //dann gucken dass keine dieser Strecken nebeneinander stehen - nimm die breiteste und längste von solch einem Nebeneinander     
    //dann müssten die im bild mittleren übriggeblieben sein
    let dil = alllasenkrechtSTREND.length;
    for( let st = 0; st < dil; st+=1){
        
        for( let tt = st+1; tt < dil; tt+=1){
            
            if(! ( (alllasenkrechtSTREND[st][0] > alllasenkrechtSTREND[tt][1]) ||
                   (alllasenkrechtSTREND[tt][0] > alllasenkrechtSTREND[st][1]) )){
                    if( ( alllasenkrechtSTREND[st][1] - alllasenkrechtSTREND[st][0] ) > 
                        (alllasenkrechtSTREND[tt][1] - alllasenkrechtSTREND[tt][0])){
                        alllasenkrecht[tt] = null;
                    } else {
                        alllasenkrecht[st] = null;
                        break;
                    }
            }
        }
    }
    
    
}

function wirklichTrennen( componenten, plines, minmaxpline, mincol1, maxcol1, minrow1, maxrow1, mincol2, maxcol2, minrow2, maxrow2){
    let duCheightB1 = 0;
    let countB1 = 0;
    let duCheightB2 = 0;
    let countB2 = 0;
    let pil = plines.length;
    let ppil = pil-1;
    for(let p = 0; p < ppil; p++){ //fuer jede Zeile
        let til = plines[p].length;
        for( let Oh = 0; Oh < til; Oh++ ){ //fuer jedes Element in der Zeile
            let c = plines[ p ][ Oh ];
            let cminrow = componenten[ c ][0][1];
		    let cmaxrow = componenten[ c ][0][3];
            let cmincol = componenten[ c ][0][0];
            let cmaxcol = componenten[ c ][0][2];
            let cheight = Math.abs( cmaxrow - cminrow );
            //evaluate to box 1
            if( minrow1 < cminrow &&
                maxrow1 > cmaxrow &&
                mincol1 < cmincol &&
                maxcol1 > cmaxcol ){
                    duCheightB1+=cheight;
                    countB1++;
            }
            if( minrow2 < cminrow &&
                maxrow2 > cmaxrow &&
                mincol2 < cmincol &&
                maxcol2 > cmaxcol ){
                    duCheightB2+=cheight;
                    countB2++;
            }

        }
    }
    duCheightB1 = duCheightB1 / countB1;
    duCheightB2 = duCheightB2 / countB2;
    let diffcheight = Math.abs(duCheightB1-duCheightB2);
    let verhcount = countB1 / countB2;
    if( countB2 < countB1){
        verhcount = countB2 / countB1;
    }
    let countlinesinbox = 0;
    let mil = minmaxpline.length;
    let mmil = mil - 1;
    for(let mmp = 1; mmp < mil; mmp++ ){
        if( minmaxpline[ mmp ][ 6 ] > minrow1 && minmaxpline[ mmp ][ 6 ] < maxrow1 ){
            countlinesinbox++;
        }
    }
    let wahrheitueber = true;
    if( countB1 === 0 || countB2 === 0 ){
        console.log("Box rejected reason: one emtpty Box");
        wahrheitueber = false;
    } else if( diffcheight < 3 ){ //line height equal is like Componentheight equal
        let baseloben = minmaxpline[ 0 ][ 6 ];
        if( minrow1 < baseloben ){
            baseloben = minmaxpline[ 0 ][ 6 ]-minmaxpline[0][ 5 ];
        }
        let baselunten = minmaxpline[ mmil ][ 6 ];
        if( maxrow1 < baselunten ){
            baselunten = minmaxpline[ mmil ][ 6 ] - minmaxpline[ mmil ][ 5 ];
        }
        let diffoben = Math.abs( minrow1- baseloben );
        let diffunten = Math.abs( maxrow1-baselunten );
        console.log( "oben",   minrow1, baseloben,  diffoben, minmaxpline[0][ 5 ]);
        console.log( "untern", maxrow1, baselunten, diffunten, minmaxpline[mmil][ 5 ]);
        if( verhcount > 0.15 ){ //not asym co count
            if( diffoben < minmaxpline[0][ 5 ] && diffunten < minmaxpline[mmil][ 5 ] ){
                console.log("Box! equal line height and end of plines oben und unten");
                maxrow1 = minmaxpline[ mmmil ][ 6 ];
                minrow1 = minmaxpline[ 0 ][ 6 ]-minmaxpline[0][ 5 ];
                console.log("SSS", minrow1, maxrow1);
                wahrheitueber = true;
            } else if( diffoben < minmaxpline[0][ 5 ] && countlinesinbox > 2 ){
                let oldliinc = 0;
                let countmax = 0;
                let mxxof = 0;
                let mm
                for(let mmp = mmil; mmp > 1 ; mmp-- ){
                    let locallineinc = minmaxpline[ mmp ][ 6 ] - minmaxpline[ mmp-1 ][ 6 ];
                    if( minmaxpline[ mmp ][ 6 ] > minrow1 && minmaxpline[ mmp ][ 6 ] < maxrow1 ){
                        if( locallineinc > mxxof ){
                            mxxof = locallineinc;
                            countmax += 1;
                        }
                        //console.log(Math.abs(locallineinc-oldliinc), mmp);
                        
                    } 
                    oldliinc = locallineinc;
                }
                console.log("The max is:", mxxof);
                if( countmax === 1 ){
                    console.log("Box! equal line height and end of plines oben and max at end of box");
                    wahrheitueber = true;
                } else {
                    let isglobalmax = true;
                    for( let mmp = 1; mmp < mil; mmp++ ){
                        if( !(minmaxpline[ mmp ][ 6 ] > minrow1 && minmaxpline[ mmp ][ 6 ] < maxrow1) ){
                            let locallineinc = minmaxpline[ mmp ][ 6 ] - minmaxpline[ mmp-1 ][ 6 ];
                            if(locallineinc > mxxof){
                                isglobalmax = false;
                                break;
                            }
                        }
                    }
                    if( isglobalmax ){
                        console.log("Box! equal line height and end of plines oben and global max lininc enthalten");
                        wahrheitueber = true;
                    } else {
                        console.log("Box rejected: equal line height and end of plines oben, not max at end");
                        wahrheitueber = false;
                    }
                    
                }
            } else if( diffunten < minmaxpline[mmil][ 5 ] && countlinesinbox > 2){
                let oldliinc = 0;
                let countmax = 0;
                let mxxof = 0;
                for(let mmp = 1; mmp < mil; mmp++ ){
                    let locallineinc = minmaxpline[ mmp ][ 6 ] - minmaxpline[ mmp-1 ][ 6 ];
                    if( minmaxpline[ mmp ][ 6 ] > minrow1 && minmaxpline[ mmp ][ 6 ] < maxrow1 ){
                        if( locallineinc > mxxof ){
                            mxxof = locallineinc;
                            countmax += 1;
                        }
                        //console.log(Math.abs(locallineinc-oldliinc), mmp);
                        
                    } 
                    oldliinc = locallineinc;
                }
                if( countmax === 1 ){
                    console.log("Box! equal line height and end of plines unten");
                    wahrheitueber = true;
                } else {
                    console.log("Box rejected reason: equal line height and end of plines unten no max gab");
                    wahrheitueber = false;
                }
            } else {
                console.log("Box rejected reason: equal line height and no nothing");
                wahrheitueber = false;
            }
        } else {
            console.log("Box rejected reason: equal line height asym cocount");
            wahrheitueber = false;
        }
    } else {
        
        if( verhcount > 0.15 && countlinesinbox > 2){ //das funktioniert nur halb gut!!!
            console.log("Box! reason line height different", verhcount);
            wahrheitueber = true;
        } else {
            
            console.log("Box rejected reason line height different but extrem asym cocount", verhcount);
            wahrheitueber = false;
        }
    }
    console.log("Box Cheight", duCheightB1, countB1, duCheightB2, countB2, Math.abs(duCheightB1-duCheightB2));
    return [wahrheitueber, minrow1, maxrow1];
}

/*cluster the components NACH FORM*/

/*IDEE: Nun ist es scheinbar immer so, dass eizenlne Abdrücke einer OCR zugeführt werden. Also Komponenten einzelen zu einer solchen Berechnung herangezogen werden. Erstmal wäre ess schön von dieser OCR Scheiße wegzukommen, denn der Schritt zum Buchstaben ist zu groß. Wir müssen zunächst mal ganz genau die Komponenten Clustern. Ich bin mir sicher, dass dann schön sauberer Gruppen entstehen. Oder nicht? Vielleicht mehrere pro Buchstaben, aber was soll es, wenn sie schön sauber sind, dann ist das gut. Anschließend könnte man dann nochmal mit einer OCR kommen und sagen - nun gut ich habe ja jetzt hier so ein paar ziemlich ähnliche Abdrücke (oder ähnliches, halt Komponenten), wie sieht es aus mit einer kleinen OCR auf dieser Menge. Dann hätte man auch mehr Exemplare - ändert das was? - Keine Ahnung. Ist das einfach zuzuordnen? Ja kann schon sein. Jedenfalls sollte man es mal auf die Weise probieren. Macht ja niemand. Das Denken an den Buchstaben lässt einen vergessen, dass es möhglicher Weise Abdrücke oder anderes ist, was man verarbeitet.*/

function len( aA ){
    if( aA ){
        if( aA instanceof Set ){
            return aA.size;
        } else {
            return aA.length;
        }
    } else {
        return 0;
    }
}

function set( aA ){
    return new Set( aA );
}

function list( aS ){
    return Array.from( aS );
}

function SetSymDiff( setA, setB ){ 
    let AB = [...setA].filter(x => !setB.has( x ));
    let BA = [...setB].filter(x => !setA.has( x ));
    /*print(BA instanceof Array, AB instanceof Array);
    for( let item of AB ){
        BA.add( item );
    }*/
    let symDiff = set( AB.concat( BA ) );
    return symDiff;
}

function SetDiff( setA, setB ){ 
    return [...setA].filter(x => !setB.has( x ));
}


function SetUnsion( setA, setB ){
    let union = set( [...setA, ...setB] );
    return union;
}

function SetIntersection( setA, setB ){ //return vector
    return [...setA].filter( x => setB.has( x ) );
}

function computeraddist( x1, y1, x2, y2 ){

    let xres = Math.abs(x1-x2);
    let yres = Math.abs(y1-y2);
    return (xres+yres)/2.0;
}

function clustercomp( ctx, D, componenten ){
    //initiale regionswahl
    let h =	ctx.canvas.height;
	let w = ctx.canvas.width;
    let mincol = Linker[0];
	let maxcol = Rechter[0];
    let minrow = Oberer[0];
	let maxrow = Unterer[0];

    ctx.clearRect( 0, 0, w, h );
    D = ctx.getImageData( 0, 0, w, h );

    let startofclust = Date.now();
    //DATA preparation
    let alleversch = [];
    let alleverschset = []
    for( let c = 0; c < componenten.length; c += 1 ){
        let cversch = []; //x,y pairs but as strings!!!
        for( let row in componenten[c][2] ){
            for( let col in componenten[c][2][row] ){
                cversch.push( ( componenten[c][2][row][col][0] - componenten[c][3][4] ).toString()+","+
                               ( componenten[c][2][row][col][1] - componenten[c][3][5] ).toString() );
            }
        }
        alleversch.push(cversch);
        alleverschset.push( set( cversch ) );
    }

    let mengofrelatedform = [];
    //run the loop over matrix of comparin all comp with all comp
    for( let c = 0; c < componenten.length; c += 1 ){
       /* if( c < 803 || c > 903 ){
            continue;
        }*/
        /*if(c !== 11 ){//F:30 - das ist ein zurückweisungsproblem - keine Ahnung wie das gehen soll?
            continue;
        }*/
        let c1versch = alleversch[c]; //x,y pairs but as strings!!!
        let setc1versch = alleverschset[c];
        let distanzenprocomponentezuALLENcomp = [];
        let einzelwerte = [];
        /*let cminrow = componenten[ c ][0][1];
		let cmaxrow = componenten[ c ][0][3];
        let cmincol = componenten[ c ][0][0];
        let cmaxcol = componenten[ c ][0][2];
        let cheight = Math.abs( cmaxrow - cminrow );
        let cwidth = Math.abs( cmincol - cmaxcol );*/
        for( let g = 0; g < componenten.length; g+=1 ){
            /*let gminrow = componenten[ g ][0][1];
		    let gmaxrow = componenten[ g ][0][3];
            let gmincol = componenten[ g ][0][0];
            let gmaxcol = componenten[ g ][0][2];
            let gheight = Math.abs( gmaxrow - gminrow );
            let gwidth = Math.abs( gmincol - gmaxcol );*/

            if( c !== g ){  //&& ((gheight < gwidth) === (cheight < cwidth))
                let c2versch = alleversch[g]; //x,y pairs but as strings!!!
                let setc2versch = alleverschset[g];
                let randdist = 0;
                let wieoftrandversch = 0;
                if(len(c1versch) < (len(c2versch)*2)  ){ //Jap67

                
                 for( let rand = 1; rand < componenten[g][1].length; rand += 1 ){
                    let ggx = componenten[g][1][rand-1][0];// - componenten[g][3][4];
                    let ggy = componenten[g][1][rand-1][1];// - componenten[g][3][5];
                    let gx = componenten[g][1][rand][0];// - componenten[g][3][4];
                    let gy = componenten[g][1][rand][1];// - componenten[g][3][5];
        
                    if( ggx === gx && ggy !== gy ){ //hoch runter bewegt sich die Außenlinie von gc
                        gx = gx - componenten[g][3][4];
                        gy = gy - componenten[g][3][5];
                        //also muss rechts links (inc X 1, -1) gesucht werden nach einer Außenlinie in cc
                        //chekcen wo Inne in gc an diesem Punkt ist, in die anderer Richtung gehen
                        let richtung1a = (gx+1).toString()+","+(gy).toString();
                        let richtung1b = (gx+1).toString()+","+(gy-1).toString();
                        let richtung1c = (gx+1).toString()+","+(gy+1).toString();
                        //let richtung2 = (gx-1).toString()+","+(gy).toString();
                        let rechts = false; 
                        if( setc2versch.has( richtung1a ) || setc2versch.has( richtung1b ) || setc2versch.has( richtung1c ) ){
                            rechts = true; 
                        }  
                        
                        //jetzt auf den Rand cc beziehen
                        //Mehrfachbesuche müssen bestraft werden!!! ueberleg dir was
                        for( let ri = 0; ri < componenten[c][1].length; ri += 1 ){
                            let cx = componenten[c][1][ri][0] - componenten[c][3][4];
                            let cy = componenten[c][1][ri][1] - componenten[c][3][5];
                            if( gy == cy ){
                                let r1a = (cx+1).toString()+","+(cy).toString();
                                let r1b = (cx+1).toString()+","+(cy-1).toString();
                                let r1c = (cx+1).toString()+","+(cy+1).toString();
                                if( rechts ){ //rechts liegt die componente
                                    if( gx > cx ){ //also muss punkt (gx) größer sein als check componnete (da wir ja nach links kontrollieren müssen)
                                        if( setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c ) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break; //just finde one of the component
                                        }
                                    }
                                } else {
                                    if( gx < cx ){
                                        if( !(setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c )) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                }
                            }
                        }
                    } else if( ggx !== gx && ggy === gy ){ //rechts links
                        //go search up down inc y 1, -1
                        gx = gx - componenten[g][3][4];
                        gy = gy - componenten[g][3][5];
                        //chekcen wo Inne in gc an diesem Punkt ist, in die andere Richtung gehen
                        let richtung1a = (gx).toString()+","+(gy+1).toString();
                        let richtung1b = (gx-1).toString()+","+(gy+1).toString();
                        let richtung1c = (gx+1).toString()+","+(gy+1).toString();
                        //let richtung2 = (gx).toString()+","+(gy-1).toString();
                        let hoch = false; 
                        if( setc2versch.has( richtung1a ) || setc2versch.has( richtung1b ) || setc2versch.has( richtung1c ) ){
                            hoch = true; 
                        }
                        //jetzt auf den Rand cc beziehen
                        for( let ri = 0; ri < componenten[c][1].length; ri += 1 ){
                            let cx = componenten[c][1][ri][0] - componenten[c][3][4];
                            let cy = componenten[c][1][ri][1] - componenten[c][3][5];
                            if( gx == cx ){ //kriterium für suche hoch runter
                                let r1a = (cx).toString()+","+(cy+1).toString();
                                let r1b = (cx-1).toString()+","+(cy+1).toString();
                                let r1c = (cx+1).toString()+","+(cy+1).toString();
                                if( hoch ){ //oben liegt die componente
                                    if( gy < cy ){ //also muss punkt (gy) kleiner sein als check componnete (da wir ja nach unten gehen kontrollieren müssen)
                                        if( setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc2versch.has( richtung1c ) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                } else {
                                    if( gy > cy ){
                                        if( !(setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc2versch.has( richtung1c )) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                }
                            }
                        }
                    } else if( (ggx < gx && ggy > gy) || 
                               (ggx > gx && ggy < gy) ){ //linksunten nach rechtsoben bzw umgekehrt
                        gx = gx - componenten[g][3][4];
                        gy = gy - componenten[g][3][5];
                        //chekcen wo Inne in gc an diesem Punkt ist, in die andere Richtung gehen
                        let richtung1a = (gx-1).toString()+","+(gy-1).toString();
                        let richtung1b = (gx).toString()+","+(gy-1).toString();
                        let richtung1c = (gx-1).toString()+","+(gy).toString();
                        //let richtung2 = (gx+1).toString()+","+(gy+1).toString();
                        let linksoben = false; 
                        if( setc2versch.has( richtung1a ) || setc2versch.has( richtung1b ) || setc2versch.has( richtung1c ) ){
                            linksoben = true; 
                        }  
                        //jetzt auf den Rand cc beziehen
                        for( let ri = 0; ri < componenten[c][1].length; ri += 1 ){
                            let cx = componenten[c][1][ri][0] - componenten[c][3][4];
                            let cy = componenten[c][1][ri][1] - componenten[c][3][5];
                            if( gx - cx === gy - cy ){ //kriterium für suche diagonal
                                let r1a = (cx-1).toString()+","+(cy-1).toString();
                                let r1b = (cx).toString()+","+(cy-1).toString();
                                let r1c = (cx-1).toString()+","+(cy).toString();
                                if( linksoben ){ //oben liegt die componente
                                    if( gx < cx && gy < cy){ //also muss punkt (gy) kleiner sein als check componnete (da wir ja nach unten gehen kontrollieren müssen)
                                        if( setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c ) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                } else {
                                    if( gx > cx && gy > cy ){
                                        if( !(setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c )) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                }
                            }
                        }
                    } else if( (ggx < gx && ggy < gy) || 
                               (ggx > gx && ggy > gy) ){ //linksoben nach rechtsunten und umgekehrt
                        gx = gx - componenten[g][3][4];
                        gy = gy - componenten[g][3][5];
                        //chekcen wo Inne in gc an diesem Punkt ist, in die andere Richtung gehen
                        let richtung1a = (gx+1).toString()+","+(gy-1).toString();
                        let richtung1b = (gx).toString()+","+(gy-1).toString();
                        let richtung1c = (gx+1).toString()+","+(gy).toString();
                        //let richtung2 = (gx-1).toString()+","+(gy+1).toString();
                        let rechtsoben = false; 
                        if( setc2versch.has( richtung1a ) || setc2versch.has( richtung1b ) || setc2versch.has( richtung1c ) ){
                            rechtsoben = true; 
                        } 
                        //jetzt auf den Rand cc beziehen
                        for( let ri = 0; ri < componenten[c][1].length; ri += 1 ){
                            let cx = componenten[c][1][ri][0] - componenten[c][3][4];
                            let cy = componenten[c][1][ri][1] - componenten[c][3][5];
                            if( gx - cx === gy - cy ){ //kriterium für suche diagonal
                                let r1a = (cx+1).toString()+","+(cy-1).toString();
                                let r1b = (cx).toString()+","+(cy-1).toString();
                                let r1c = (cx+1).toString()+","+(cy).toString();
                                if( rechtsoben ){ //rechts oben liegt die componente
                                    if( gx > cx && gy < cy){ //also muss punkt (gy) links unten weiter gesucht werden
                                        if( setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c ) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                } else {
                                    
                                    if( gx < cx && gy > cy ){
                                        if( !(setc1versch.has( r1a ) || setc1versch.has( r1b ) || setc1versch.has( r1c )) ){
                                            randdist += computeraddist(gx,gy,cx,cy);//Math.abs( gx - cx );
                                            wieoftrandversch += 1;
                                            //break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                   
                }
                } 
                if( randdist !== 0 ){
                    let schnitt = SetIntersection( setc1versch, setc2versch );
                    let lensch = len(schnitt);
                    let duchschnverschie = (randdist/wieoftrandversch);
                    //einzelwerte.push([lensch, duchschnverschie, Math.abs(len(setc2versch) - lensch), Math.abs(len(setc1versch) - lensch)]);
                    randdist =  (duchschnverschie) * Math.max( Math.abs(len(setc1versch) - lensch), Math.abs(len(setc2versch) - lensch));
                    /*let cminrow = componenten[ c ][0][1];
		            let cmaxrow = componenten[ c ][0][3];
                    let cmincol = componenten[ c ][0][0];
                    let cmaxcol = componenten[ c ][0][2];
                    let cheight = Math.abs( cmaxrow - cminrow );
                    let cwidth = Math.abs( cmincol - cmaxcol );
                    let cboundfl = cheight*cwidth;
                    randdist = randdist / cboundfl;*/
                    //randdist =  ((duchschnverschie * Math.abs(len(setc1versch) - lensch))+( duchschnverschie * Math.abs(len(setc2versch) - lensch)))/2;
                } else {
                    randdist = 10000.0;//+(Math.abs(len(setc1versch)-len(setc2versch)) / len(schnitt));
                }
                
                distanzenprocomponentezuALLENcomp.push( randdist );
                
            } else {
                distanzenprocomponentezuALLENcomp.push( 10000.0 ); //c==g
            }
        }
        //console.log(distanzenprocomponentezuALLENcomp);
             //color this comp
        
            let rr = Math.round(Math.random() * 255);
            let gg = Math.round(Math.random() * 255);
		    let bb = Math.round(Math.random() * 255);
            //drawDiagramm( distanzenprocomponentezuALLENcomp, "Abstände", 'chartdiv', 3000, componenten.length);
            let copyof = [];
            for( let cop = 0; cop < distanzenprocomponentezuALLENcomp.length; cop += 1 ){
                copyof.push( distanzenprocomponentezuALLENcomp[ cop ] );
            }
            copyof.sort( function (a, b) {
                return a - b;
            });
                 
            //drawDiagramm( copyof, "sortierte Abstände", 'chartdiv2', 3000, componenten.length);

		    let halfsu = Math.floor(copyof.length/3);
            let maxdelt = 0;
            let firstmax = 0;
            //console.log( halfsu );
            let indexatmax = 0;
            let indexatfirstmax = 0;
            let doo = 0;
            let deltsare = [];
            let firstis = true;
            let firstmin = 10000;
            let mitt = 0;
            for(let su = 1; su < halfsu; su += 1 ){
                
                let delt1 = Math.abs(copyof[su] - copyof[su-1]);
                let delt2 = Math.abs(copyof[su+1] - copyof[su]);
                let delt3 = Math.abs(copyof[su+2] - copyof[su+1]);
                let em = delt1;//(delt1+delt2+delt3)/3;
                //console.log(delt);
                //deltsare.push( delt );
                mitt += delt1; 
                
                if( em > firstmax && firstis ){
                    firstmax = em;
                    indexatfirstmax = su-1;
                    maxdelt = em;
                    indexatmax = su-1;
                } else {
                    //break;
                   firstis = false;
                   if( em > maxdelt ){
                        maxdelt = em;
                        indexatmax = su-1;
                    } 
                }
            }
            mitt = mitt / (halfsu-1);
            let klein = 0;
            console.log("Mitt", mitt);
           
            
            let delt1i = Math.abs(copyof[1] - copyof[0]);
            let delt2i = Math.abs(copyof[2] - copyof[1]);
            let delt3i = Math.abs(copyof[3] - copyof[2]);
            let emi = delt1i;//(delt1i+delt2i+delt3i)/3;
            deltsare.push( emi );
            let deltsdraw = [];
            let wasintal = false;
            let indexatminend = null;
            let lastem = 0;
            let lokalfirstmin = null;
            let getfirstlokmin = true;
            for(let su = 1; su < copyof.length-2; su += 1 ){
                let delt1 = Math.abs(copyof[su] - copyof[su-1]);
                let delt2 = Math.abs(copyof[su+1] - copyof[su]);
                let delt3 = Math.abs(copyof[su+2] - copyof[su+1]);
                let em = delt1;//(delt1+delt2+delt3)/3;
                //deltsare.push(delt1);
                //deltsare.push( em );
                if( em > mitt ){//(em / mitt) + (deltsare[deltsare.length-1] / mitt) > 1.5){
                    if( wasintal && indexatminend === null ){
                        indexatminend = su-1;
                    }
                    if( lastem !== 0 && lastem < em && getfirstlokmin && indexatfirstmax < su-1 ){
                        lokalfirstmin = su-1;
                        getfirstlokmin = false;
                    }
                    deltsdraw.push( em );
                } else {
                    wasintal = true;
                    deltsdraw.push( 0 );
                }
                deltsare.push( em );
                lastem = em;
            }
            
            //drawDiagramm( deltsdraw, "Unterschiede der sortierten Abstände", 'chartdiv3', 15, componenten.length);
            //let klein = 2/((1/copyof[indexatmax]) + (1/copyof[indexatfirstmax]));
            //indexatmax = 10;
            console.log(indexatfirstmax, lokalfirstmin, indexatminend, indexatmax); 
            
            //let klein = Math.pow(copyof[indexatmax]*copyof[indexatfirstmax], 1/2); 

            klein = copyof[indexatminend];
            if( indexatmax < indexatminend || halfsu < indexatminend){
                //du musst wahrscheinlich nohmal suchen in diesem Bereich bis indexatminend
                if( indexatmax === indexatfirstmax ){
                    if( indexatfirstmax === 0  && halfsu > indexatminend ){
                        klein = Math.pow(copyof[indexatmax]*copyof[lokalfirstmin], 1/2); //der fall bedeutet, dass der größte Unterschiedssprung schon ganz vorn liegt, also das das nächste 0 Tal gar nicht auf diesen großen Sprung bezogen ist. Daher nimm das erste loka Minimum, das ist dann zum ersten Hügel gehörig.
                    } else {
                        console.log("quasi Zurückweisung");
                        //klein = Math.pow(copyof[indexatmax]*copyof[0], 1/2)-0.01; //quasi zurückweisung
                        klein = copyof[indexatfirstmax] - 0.1;
                    }
                } else {
                    if( ((lokalfirstmin + indexatmax) / indexatminend) < 0.5){
                        console.log("Zurückweisungsfall")
                        klein = copyof[indexatfirstmax] - 0.1; //hier liegt ein großer und ein noch größerer Sprung vor dem ersten Tall, also sind die Komponenten ziemlich oder sehr unterschiedlich - zurückweisen. // es müsste noch etwas geben, das absolut arbeitet - sieh Beispiel 1211
                    } else {
                        klein = 2/((1/copyof[indexatfirstmax]) + (1/copyof[lokalfirstmin]));
                    }
                }
            }
            

            
            //console.log(klein, indexatmax);
            //color the distanz low comps
            let docolor = false;
            let closerelatedform = [];
            let farb = 254;
            for( let j = distanzenprocomponentezuALLENcomp.length-1; j > 0; j -= 1 ){
                if( distanzenprocomponentezuALLENcomp[j] <= klein ){
                    closerelatedform.push( j );
                    //console.log("klein", distanzenprocomponentezuALLENcomp[j], j, einzelwerte[j]);
                    /*docolor = true;
                    for( let row in componenten[j][2] ){
                        for( let col in componenten[j][2][row] ){
                            let cp = componenten[j][2][row][col][2];
                            D.data[ cp ] = 0;
                            D.data[ cp + 1] = 0;
			                D.data[ cp + 2] = farb;
                            D.data[ cp + 3] = 254;
                            
                        }
                    }*/
                    
                } 
            }
            //closerelatedform.push(c);
            console.log( "Comp related", closerelatedform.length, " alle sind ",distanzenprocomponentezuALLENcomp.length, "compnum", c, klein, componenten[c][1].length/klein );
            /*for( let row in componenten[c][2] ){
                for( let col in componenten[c][2][row] ){
                    let cp = componenten[c][2][row][col][2];
                    D.data[ cp ] = 254;
                    D.data[ cp + 1] = 0;
		            D.data[ cp + 2] = 0;
                    D.data[ cp + 3] = 254;
                }
            }*/
               
            mengofrelatedform.push(closerelatedform);
        
    }
    let sortedtogether = [];
    for( let i = 0; i < mengofrelatedform.length; i+=1 ){
        if( mengofrelatedform[i] !== null ){
            let per= [];
            let s1 = set(mengofrelatedform[i]);
            //per = per.concat( mengofrelatedform[i] );
            for( let j = 0; j < mengofrelatedform.length; j+=1 ){
                if( mengofrelatedform[j] !== null && i !== j ){
                    let s2 = set(mengofrelatedform[j]);
                    if( s2.has( i ) ){
                        if(s1.has( j )){//if( len( SetIntersection(s1, s2)) !== 0 ){
                            per.push(j);
                        }
                    } 
                }
            }
            sortedtogether.push(per);
        }
    }
    
    for( let i = 0; i < sortedtogether.length; i += 1 ){
        if( sortedtogether[i] !== null ){
            let s1 = set(sortedtogether[i]);
            for( let j = 0; j < sortedtogether.length; j += 1 ){
                if( sortedtogether[j] !== null ){
                    let s2 = set(sortedtogether[j]);
                    let sec = SetIntersection(s1, s2);
                    if( len(sec) !== 0 || (s2.has(i) && s1.has(j)) ){
                        
                        sortedtogether[i] = null;
                        sortedtogether[j] = list( SetUnsion(s1, s2) );
                    }
                }
            }
        }
    }

    writeTO(theReihenname[ picindex ], "related", {"data": sortedtogether} );
    console.log( mengofrelatedform );
    console.log( sortedtogether );
    //for( let m in sortedtogether ){
        
      //  if( sortedtogether[m] != null ){
            
            let rr = Math.round(Math.random() * 255);
            let gg = Math.round(Math.random() * 255);
	        let bb = Math.round(Math.random() * 255);
            let m = 937; 
            /*
                1028 - roh sehr gut
                232 - Akzent sehr gut
                454 - Schlange sehr gut
                557 - tailing sigma sehr gut
                795 - 
                937 - ny sehr gut
                
            */
            for( let row in componenten[m][2] ){
                for( let col in componenten[m][2][row] ){
                    let cp = componenten[m][2][row][col][2];
                    D.data[ cp ] = 254;
                    D.data[ cp + 1] = 0;
		            D.data[ cp + 2] = 0;
                    D.data[ cp + 3] = 254;
                }
            }
            console.log(sortedtogether[m], mengofrelatedform[m]);
            for( let j in sortedtogether[m] ){
                let con = sortedtogether[m][j];
                console.log(j, con)
                for( let row in componenten[con][2] ){
                    for( let col in componenten[con][2][row] ){
                        let cp = componenten[con][2][row][col][2];
                        D.data[ cp ] = rr;
                        D.data[ cp + 1] = gg;
                        D.data[ cp + 2] = bb;
                        D.data[ cp + 3] = 254;
                    }
                }
            } 
     //   }   
   // }
    console.log("Dauer: ", Date.now() - startofclust);
    ctx.putImageData(D, 0, 0);
}

function clustercompzwei( ctx, D, componenten ){
    //initiale regionswahl
    let h =	ctx.canvas.height;
	let w = ctx.canvas.width;
    let mincol = Linker[0];
	let maxcol = Rechter[0];
    let minrow = Oberer[0];
	let maxrow = Unterer[0];

    ctx.clearRect( 0, 0, w, h );
    D = ctx.getImageData( 0, 0, w, h );

    console.log("start alle zu allen");
    let startofclust = Date.now();
    let alleversch = [];
    let alleverschset = []
    let ableitungundrichtung = [];
    for( let c = 0; c < componenten.length; c += 1 ){
        let cversch = []; //x,y pairs but as strings!!!
        for( let row in componenten[c][2] ){
            for( let col in componenten[c][2][row] ){
                cversch.push( ( componenten[c][2][row][col][0] - componenten[c][3][4] ).toString()+","+
                               ( componenten[c][2][row][col][1] - componenten[c][3][5] ).toString() );
            }
        }
        let steigc = [];
        for( let ri = 0; ri < componenten[c][1].length-2; ri += 1 ){
            let cx = componenten[c][1][ri][0];
            let cy = componenten[c][1][ri][1];
            let ccx = componenten[c][1][ri+1][0];
            let ccy = componenten[c][1][ri+1][1]; 
            let cccx = componenten[c][1][ri+2][0];
            let cccy = componenten[c][1][ri+2][1]; 
            let mt = Math.abs( (cccy - cy) / (cccx - cx) );
            let mtt = Math.abs( (ccy - cy) / (ccx - cx) );
            let mnt = 1/((mt+mtt)*0.5);
            steigc.push([mt,mnt]);
           

        }
        
        let cx = componenten[c][1][componenten[c][1].length-2][0] - componenten[c][3][4];
        let cy = componenten[c][1][componenten[c][1].length-2][1] - componenten[c][3][5];
        let ccx = componenten[c][1][componenten[c][1].length-1][0] - componenten[c][3][4];
        let ccy = componenten[c][1][componenten[c][1].length-1][1] - componenten[c][3][5];
        let cccx = componenten[c][1][0][0] - componenten[c][3][4];
        let cccy = componenten[c][1][0][1] - componenten[c][3][5]; 
        let mt = Math.abs( (cccy - cy) / (cccx - cx) );
        let mtt = Math.abs( (ccy - cy) / (ccx - cx) );
        let mnt = 1/((mt+mtt)*0.5);
        steigc.push([mt,mnt]);
        cx = componenten[c][1][componenten[c][1].length-1][0] - componenten[c][3][4];
        cy = componenten[c][1][componenten[c][1].length-1][1] - componenten[c][3][5];
        ccx = componenten[c][1][0][0] - componenten[c][3][4];
        ccy = componenten[c][1][0][1] - componenten[c][3][5];
        cccx = componenten[c][1][1][0] - componenten[c][3][4];
        cccy = componenten[c][1][1][1] - componenten[c][3][5]; 
        mt = Math.abs( (cccy - cy) / (cccx - cx) );
        mtt = Math.abs( (ccy - cy) / (ccx - cx) );
        mnt = 1/((mt+mtt)*0.5);
        steigc.push([mt,mnt]);
        ableitungundrichtung.push(steigc);
        alleversch.push(cversch);
        alleverschset.push( set( cversch ) );
    }
    //console.log(ableitungundrichtung);

    let allezuallen = [];
    //run the loop over matrix of comparin all comp with all comp
    for( let c = 0; c < componenten.length; c += 1 ){
        if( c !== 100 ){
            continue;
        }
        for( let row in componenten[c][2] ){
            for( let col in componenten[c][2][row] ){
                let cp = componenten[c][2][row][col][2];
                D.data[ cp ] = 254;
                D.data[ cp + 1] = 0;
                D.data[ cp + 2] = 0;
                D.data[ cp + 3] = 254;
            }
        }
        let setc1versch = alleverschset[c];
        let allezudieser = [];
        for( let g = 0; g < componenten.length; g += 1 ){
            if( c !== g ){
                let disttoone = 0.0;
                let wieoftrandversch = 0;
                let setc2versch = alleverschset[g];
                //jetzt auf den Rand cc beziehen
                let verschbar = 0;
                for( let ri = 0; ri < componenten[c][1].length; ri += 1 ){
                    let cx = componenten[c][1][ri][0] - componenten[c][3][4];
                    let cy = componenten[c][1][ri][1] - componenten[c][3][5]; 
                    
                    let stei = ableitungundrichtung[c][ri][1];
                    /*let quadrant = function(ix,iy){ return false; };
                    if( cx < 0 && cy > 0 ){
                        quadrant = function(ix,iy){ if( ix < 0 && iy > 0){ return true; } };
                    } else if( cx > 0 && cy > 0 ){
                        quadrant = function(ix,iy){ if( ix > 0 && iy > 0){ return true; } };
                    } else if( cx < 0 && cy < 0 ){
                        quadrant = function(ix,iy){ if( ix < 0 && iy < 0){ return true; } };
                    } else if( cx > 0 && cy < 0 ){
                        quadrant = function(ix,iy){ if( ix > 0 && iy < 0){ return true; } };
                    }*/
                    let distonerandpos = 0.0;
                    let coutoone = 0;
                    for( let rand = 0; rand < componenten[g][1].length; rand += 1 ){
                        let gx = componenten[g][1][rand][0] - componenten[g][3][4];
                        let gy = componenten[g][1][rand][1] - componenten[g][3][5];
                        /*
                            distonerandpos += computeraddist( gx,gy,cx,cy );
                            coutoone += 1;
                        }*/
                        //if( quadrant( gx, gy ) ){
                        if( Math.abs( (gy-cy) / (gx-cx) ) === stei ){
                            distonerandpos += computeraddist( gx,gy,cx,cy );
                            coutoone += 1;
                        }
                        //}
                    }
                    //console.log(coutoone, distonerandpos, len(setc1versch), stei);
                    if( coutoone === 0 ){
                        distonerandpos = 1.0;
                    } else {
                        distonerandpos = distonerandpos / coutoone;
                        verschbar+=1;
                        disttoone += distonerandpos;
                    }
                    
                }
                if( disttoone !== 0 ){
                    
                    let schnitt = SetIntersection( setc1versch, setc2versch );
                    let lensch = len(schnitt);
                    let duchschnverschie = ( disttoone / verschbar ) * Math.abs(verschbar-componenten[c][1].length);
                    //console.log(duchschnverschie, lensch);
                    //einzelwerte.push([lensch, duchschnverschie, Math.abs(len(setc2versch) - lensch), Math.abs(len(setc1versch) - lensch)])
                    //disttoone =  duchschnverschie * Math.abs(len(setc2versch) - lensch);
                    //disttoone = duchschnverschie * Math.max(Math.abs(len(setc2versch) - lensch), Math.abs(len(setc1versch) - lensch)) ;
                    disttoone = duchschnverschie;
                } else {
                    disttoone = 1000000.0;//+(Math.abs(len(setc1versch)-len(setc2versch)) / len(schnitt));
                }
                
                allezudieser.push( disttoone );
            } else {//g!==c if 
                allezudieser.push( 1000000.0 );
            }
        }//g componenten
        allezuallen.push( allezudieser );
    }//c componenten
    
    console.log(allezuallen);
    
    for( let i = 0; i < allezuallen.length; i += 1 ){
        let countthem = 0;
        //let klein = getMin(allezuallen[i])*2;
        //console.log(klein);
        /*for( let j = 0; j < allezuallen[i].length; j += 1 ){
            //console.log(allezuallen[j] <= 5, allezuallen[i][j], j);
            if( allezuallen[i][j] <= klein ){
                countthem+=1;
                //console.log(j, allezuallen[i][j]);
                for( let row in componenten[j][2] ){
                    for( let col in componenten[j][2][row] ){
                        let cp = componenten[j][2][row][col][2];
                        D.data[ cp ] = 254;
                        D.data[ cp + 1] = 0;
	                    D.data[ cp + 2] = 0;
                        D.data[ cp + 3] = 254;
                    }
                }
                
            } 
        }*/
        let distanzenprocomponentezuALLENcomp = allezuallen[i];
        let rr = Math.round(Math.random() * 255);
            let gg = Math.round(Math.random() * 255);
		    let bb = Math.round(Math.random() * 255);
            drawDiagramm( distanzenprocomponentezuALLENcomp, "Abstände", 'chartdiv', 3000, componenten.length);
            let copyof = [];
            for( let cop = 0; cop < distanzenprocomponentezuALLENcomp.length; cop += 1 ){
                copyof.push( distanzenprocomponentezuALLENcomp[ cop ] );
            }
            copyof.sort( function (a, b) {
                return a - b;
            });
                 
            drawDiagramm( copyof, "sortierte Abstände", 'chartdiv2', 3000, componenten.length );

		    let halfsu = Math.floor(copyof.length/3);
            let maxdelt = 0;
            let firstmax = 0;
            //console.log( halfsu );
            let indexatmax = 0;
            let indexatfirstmax = 0;
            let doo = 0;
            let deltsare = [];
            let firstis = true;
            for(let su = 1; su < halfsu; su += 1 ){
                
                let delt = Math.abs(copyof[su] - copyof[su-1]);
                //console.log(delt);
                deltsare.push(delt);
                if( delt > firstmax && firstis){
                    firstmax = delt;
                    maxdelt = delt;
                    indexatmax = su;
                    indexatfirstmax = su;
                } else {
                    //break;
                    firstis = false;
                   if( delt > maxdelt ){
                        maxdelt = delt;
                        indexatmax = su-1;
                    }
                }
            }
            drawDiagramm( deltsare, "Unterschiede der sortierten Abstände", 'chartdiv3', 15, componenten.length);
            //let klein = 2/((1/copyof[indexatmax]) + (1/copyof[indexatfirstmax])); 
            let klein = Math.pow(copyof[indexatmax]*copyof[indexatfirstmax], 1/2); 
            //let klein = copyof[indexatfirstmax];
            //console.log(klein, indexatmax);
            //color the distanz low comps
            let docolor = false;
            let closerelatedform = [];
            let farb = 0;
            for( let j = distanzenprocomponentezuALLENcomp.length-1; j > 0; j -= 1 ){
                if( distanzenprocomponentezuALLENcomp[j] <= klein ){
                    closerelatedform.push( j );
                    //console.log("klein", distanzenprocomponentezuALLENcomp[j], j, einzelwerte[j]);
                    docolor = true;
                    for( let row in componenten[j][2] ){
                        for( let col in componenten[j][2][row] ){
                            let cp = componenten[j][2][row][col][2];
                            D.data[ cp ] = 0;
                            D.data[ cp + 1] = 0;
			                D.data[ cp + 2] = farb;
                            D.data[ cp + 3] = 254;
                            
                        }
                    }
                    
                } 
            }
            
        console.log("Anz: ", countthem);
        
    }
    console.log("Dauer: ", Date.now() - startofclust);
    ctx.putImageData(D, 0, 0);
    console.log("End alle zu allen")            
        
}

/*von oben nach unten!
k Linie: oberste Line, obere Grenze der Typengröße, obere Grenze der kleinbuchstaben
H Linie: obere Line der Großbuchstaben
alles Vorher: Oberlänge
x Linie: Mittelline, oder die Höhe von o u 
Grundline: Standpunkt auf dem alles außer Unterlänge sitzt
alles Vorher: Mittellänge
p Linie: untere Grenze von Kleinbuchstaben
Unterlänge: von Grundline zu p Linie
line increment / Zeilenabstand: von p Linie zu p Linie
Durchschuß: von p zu k Linie*/ 
function horizontaledrucklinen( ctx, D, componenten ){
    //initiale regionswahl
    let h =	ctx.canvas.height;
	let w = ctx.canvas.width;
    let mincol = Linker[0];
	let maxcol = Rechter[0];
    let minrow = Oberer[0];
	let maxrow = Unterer[0];
	//hypothetische Durchschinttwerte ermitteln für alle Komponenten
	let ergHypCoMess1 = firsthypoCompMess( componenten, minrow+(5/h), maxrow-(5/h), mincol+(5/w), maxcol-(5/w) );
    let cowidth = ergHypCoMess1[ 0 ];
    let coheight = ergHypCoMess1[ 1 ];
    console.log( "Duch alle componenten", "cow:", cowidth, "coh:", coheight );
    //console.log(componenten);
    let ergHypCoMess2 = secondhypoCompMess( componenten, coheight, cowidth );
	let winkelabwDURCH = ergHypCoMess2[ 0 ];  //Speicher fuer den Mittelwert der Winkel aller Nachbarschaftsverhältnisse
    let coHwidth = ergHypCoMess2[ 1 ]; //genauere Angabe der durchschnittlichen Komponentenhoehe
	let coHheight = ergHypCoMess2[ 2 ];//genauere Angabe der durchschnittlichen Komponentenweite
    console.log( "Duch horiz componenten", "cow:", coHwidth, "coh:", coHheight, "winkelabwDURCH", winkelabwDURCH );
    
    
    
    let componentenBIGANDNOTINPLINE = [];//Komponenten, die nicht die horizontale Nachbarschaft erfüllen und groß sind bezueglich der anderen
    let compnachbarsch = [];    
    let cil = componenten.length;
    for( let co = 0; co < cil; co++ ){
        compnachbarsch.push( null );
    }
    comp2Nachbarn(componenten, mincol, maxcol, minrow, maxrow, winkelabwDURCH, coHwidth, coHheight, componentenBIGANDNOTINPLINE, compnachbarsch, 1); //schreibt die eingabe arrays componentenBIGANDNOTINPLINE und compnachbarsch
    console.log(compnachbarsch);
    let plines = []; //Speicher fuer die potentiellen Zeilen
    sort2PLINES( componenten, compnachbarsch, plines ); //modifiziert plines

    console.log(plines);
    //push min und max col of line to linie array, line messurements
    ctx.font = "11pt Arial";
    let minmaxpline = createMINMAXplines( componenten, compnachbarsch, plines ); //Speciher fuer die Vermessung der pline  
    
    //einzeichnen und zählen  
    let countlines = 0;
    let box1mincol = 10000;
    let box2maxcol = 0;
    let mil = minmaxpline.length;
    console.log(minmaxpline);
    for(let p = 0; p < mil; p++){
        //if(minmaxpline[ p ]){
                    countlines++;
                    ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                    ctx.lineWidth=2;
		            ctx.beginPath();
			
                    ctx.moveTo( minmaxpline[ p ][0],minmaxpline[ p ][6] );
		            ctx.lineTo( minmaxpline[ p ][2],minmaxpline[ p ][6] );
		            ctx.stroke();
                    ctx.closePath();
                    if( minmaxpline[ p ][0] < box1mincol ){
                        box1mincol = minmaxpline[ p ][0];
                    }
                    if( box2maxcol < minmaxpline[ p ][2] ){
                        box2maxcol = minmaxpline[ p ][2];
                    }
                    let dil = minmaxpline[ p ][9].length;
                    for( let h = 0; h < dil; h++){
                        let inde = minmaxpline[ p ][9][h];
                        if( minmaxpline[ inde ] ){
                            ctx.beginPath();
			
                            ctx.moveTo( minmaxpline[ p ][0],minmaxpline[ p ][6] );
		                    ctx.lineTo( minmaxpline[ inde ][0],minmaxpline[ inde ][6] );
		                    ctx.stroke();
                            ctx.closePath();
                        }
                    }
                    let bil = minmaxpline[ p ][11].length;
                    for( let h = 0; h < bil; h++){
                        let inde = minmaxpline[ p ][11][h];
                        if( minmaxpline[ inde ] ){
                            ctx.beginPath();
			
                            ctx.moveTo( minmaxpline[ p ][0],minmaxpline[ p ][6] );
		                    ctx.lineTo( minmaxpline[ inde ][0],minmaxpline[ inde ][6] );
		                    ctx.stroke();
                            ctx.closePath();
                        }
                    }
                ctx.fillText(p.toString() +", "+ countlines.toString(),minmaxpline[ p ][0],minmaxpline[ p ][6]);
                //}
    }
    console.log("Pline (after concat and sort) Count:", countlines);
    
    console.log("Lückenstruktur untersuchen");

    //wir sollten vielleicht horizontal trennen, oder auch dafür Trennungsletianten bestimmen und dann fragen, wie ist es, wenn ich hier und da trenne!!!!
    //console.log(minmaxpline);

    //vertikal teilen - mit maximaler luecke
    //lueckensammlen
    
    let GAPS = [];
    let MAXGABS = [];
    createGAPSandextMINMAXpline( componenten, plines, minmaxpline, GAPS, MAXGABS );
    //console.log("after gabs");
    //abs max gabs pro pline finden
   
    
    
    //console.log(MAXGABS);
    //GAPS untersuchen
    //es muss für eine Lücke untersucht werden, ob diese sich bis zur Letzten Zeile oder zu mehren Fortsetzt, wenn ja, ob rechts und links von der Lücke mehr als wenige Zeichen stehen, und die Lücken die so sind müssen zudem maximal sein, dh in der sonnehälfte des lückenhistogramms liegen
    let alllasenkrecht = []; //Speicher fuer das senkrechte Unteeinander
    gab2cut( ctx, componenten, coHwidth, coHheight, GAPS, MAXGABS, alllasenkrecht );//modifies the alllasenkrecht array
    
    //remove the null null null
    alllasenkrecht = alllasenkrecht.filter( (obj) => obj );
    //console.log("after cuts", alllasenkrecht.length, minmaxpline.length, alllasenkrecht);
    //testen
    //ctx.globalAlpha = 0.5;
    //ctx.lineWidth= 5;
    let boxes = [];
    let ail = alllasenkrecht.length;
    for(let a = 0; a < ail; a++){
        
        let box1maxcol = 0;
        let box1minrow = 100000;
        let box1maxrow = 0;
        let cuont = 0;
        let takemaxlen = 0;
        if( alllasenkrecht[a] !== null ){
            let fil = alllasenkrecht[a].length;
            for(let b = 0; b < fil; b++){
                let lenof =  alllasenkrecht[a][b][2] - alllasenkrecht[a][b][1];          
                //box1maxcol += (alllasenkrecht[a][b][0]*lenof);
                if( takemaxlen < lenof ){
                    takemaxlen = lenof;
                    box1maxcol = alllasenkrecht[a][b][0];
                }
                let sta = alllasenkrecht[a][b][1];
                if( sta < box1minrow ){
                    box1minrow = sta;
                }
                let en = alllasenkrecht[a][b][2];
                if( box1maxrow < en ){
                    box1maxrow = en;
                }
                /*ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                ctx.beginPath();
                ctx.moveTo( alllasenkrecht[a][b][0], alllasenkrecht[a][b][1]); 
                ctx.lineTo( alllasenkrecht[a][b][0], alllasenkrecht[a][b][2]);
                ctx.stroke();
                ctx.closePath();*/
                cuont+=lenof;
            }
            //box1maxcol = box1maxcol / cuont; //important-do not use the outerbox, use the exact alllasenkrecht werte!!! dieser Mittelwert liegt manchmal falsch!!! - die box muss anders definiert werden, nämlich kleinteiliger!!!! jojojo und somit unregelmäsziger
            
            //check box if Trennable oder nicht
            //able to modifie rows
            let istrennunggut = wirklichTrennen( componenten, plines, minmaxpline, box1mincol, box1maxcol, box1minrow, box1maxrow,
                                                 box1maxcol, box2maxcol, box1minrow, box1maxrow);//take box points of trennung
            

            if(istrennunggut[0]){
                boxes.push([box1mincol, box1maxcol, istrennunggut[1], istrennunggut[2] ]);
                
                /*ctx.beginPath();
                ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                ctx.rect(box1mincol, istrennunggut[1], (box1maxcol-box1mincol) ,(istrennunggut[2]-istrennunggut[1]));
                ctx.stroke();ctx.closePath();*/
                boxes.push([box1maxcol, box2maxcol, istrennunggut[1], istrennunggut[2] ]);
                /*ctx.beginPath();
                ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                ctx.rect(box1maxcol, istrennunggut[1], (box2maxcol-box1maxcol) ,(istrennunggut[2]-istrennunggut[1]));
                ctx.stroke();ctx.closePath();*/
                
            }
            /*ctx.beginPath();
            
            ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            ctx.moveTo( box1maxcol, istrennunggut[1]); 
            ctx.lineTo( box1maxcol, istrennunggut[2]);
            ctx.stroke();ctx.closePath();*/
            
        }
    }

    //wenn es boxen geben kann, die außerhalb der bisherigen boxen liegen, dann ergänze diese
    mil = minmaxpline.length;
    let bil = boxes.length; 
    if( bil === 0 ){
        if( mil !== 0 ){
            var minxstart = 1000000;
            var maxxend = 0;
            for( let p = 0; p < mil; p++  ){
                if( minxstart > minmaxpline[ p ][0] ){
                    minxstart = minmaxpline[ p ][0];
                }
                if( maxxend < minmaxpline[ p ][2] ){
                    maxxend = minmaxpline[ p ][2];
                } 
            }
            boxes.push([minxstart, maxxend, minmaxpline[ 0 ][6]-( minmaxpline[ 0 ][5]*1.5), minmaxpline[ mil-1 ][6]+(minmaxpline[ mil-1 ][5]*0.5)]);
        }
    } else {
        let notbisganzoben = true;
        let notbisganzunten = true;
        let Allmaxrow = minmaxpline[ mil-1 ][6];
        let Allminrow = minmaxpline[ 0 ][6]-(minmaxpline[ 0 ][5]*1.5);
        let untereboxvon = 0;
        let obererboxbis = 100000;
        
        for( let b = 0; b < bil; b++ ){
            if( boxes[ b ][2] <= Allminrow){ //startrow of boxes
                notbisganzoben = false;
                
            }
            if( boxes[ b ][3] >= Allmaxrow ){//endrow  of boxes
                notbisganzunten = false;
                untereboxvon = boxes[ b ][3];
            }
            if( obererboxbis > boxes[ b ][2] ){
                obererboxbis = boxes[ b ][2];
            }
            if( untereboxvon < boxes[ b ][3] ){
                untereboxvon = boxes[ b ][3];
            }
            
        }
        var minxstart = 1000000;
        var maxxend = 0;
        for( let p = 0; p < mil; p++  ){
            if( minxstart > minmaxpline[ p ][0] ){
                minxstart = minmaxpline[ p ][0];
            }
            if( maxxend < minmaxpline[ p ][2] ){
                maxxend = minmaxpline[ p ][2];
            } 
        }
        if(notbisganzoben){
            boxes.push([minxstart, maxxend, Allminrow, obererboxbis]);
        }
        if(notbisganzunten){
            boxes.push([minxstart, maxxend, untereboxvon, Allmaxrow]);
        }
    }
    /*WENN DIE BOX "ZWEIFELSFREI BESTÄTIGT WURDE; DANN MACHEN WIR EINE FFT UND BEKOMMEN DIE ZEILENHÖHE; ODER NICHT
    http://www.malgil.com/esl/aldus-fft/    
    http://paulbourke.net/miscellaneous/dft/"*/
    //es müsste doch klappen wenn du eine FFT pro box column machst, oder etwa nicht?
    //prepare a array with all selected component points
    /*let compPOINTSall = [];
    for( let c = 0; c < componenten.length; c++ ){
        for( let l = 0; l < componenten[ c ][ 2 ].length; l++ ){
            for( let p = 0; p < componenten[ c ][ 2 ][ l ].length; p++ ){
                compPOINTSall.push( componenten[ c ][ 2 ][ l ][ p ][ 2 ] );
                
            }
        }
    }*/
    let buchschmuckComponenten = [ ];
        
    for( let b = 0; b < bil; b++ ){
        let bh = Math.round( boxes[ b ][3] - boxes[ b ][2] ); //introduce a second box size for fft analysis, smaler to the durchschnitt of endings and anfangings
        let exponent = 0;
        let expresult = 1;
        while( expresult < bh ){
            expresult <<= 1;
            exponent++;
        }
        //reduce to next smaller power of two
        expresult >>= 1;
        exponent--;
        console.log( "bh", bh, "expresult", expresult, "exponent", exponent );
        let merkdirdieerg = [];
        let durchwl1 = 0;
        let durchwl2 = 0;
        let coucouwl = 0;
        
        for( let col = Math.round(boxes[ b ][0]); col < boxes[ b ][1]; col++ ){ //für jede Spalte der BOX
            let realpart = [];
            let imgpart = [];
            for(let row = Math.round(boxes[ b ][2]); row < boxes[ b ][3]; row++){
                if( realpart.length < expresult ){
			        let p = ( col + ( row * w ) ) * 4;
                    //console.log(col, row, p, ceckD.data[ p ], ceckD.data[ p + 1 ], ceckD.data[ p + 2 ], ceckD.data[ p + 3 ]);
			        if( ( D.data[ p + 3 ]  === 255 || D.data[ p + 3 ]  === 254 )){ //just take things that are not ugly components!!!  && compPOINTSall.indexOf( p ) !== -1
				        realpart.push(1);
			        } else {
                        realpart.push(0);
                    }
                    imgpart.push(0);
                } else {
                    break;
                }
		    }
            if( realpart.length < expresult ){
                let topush = 0;
                while( realpart.length < expresult ){
                    realpart.push( realpart[ topush ] );
                    imgpart.push(0);
                    topush++;
                }
            }
            FFTone(  1, exponent, realpart, imgpart );
            let magnitudeoffreq = [];   
            for( let j = 0; j < (Math.floor(realpart.length/2)-1); j++){ //without DC
                let magmag = Math.sqrt (realpart[ j ] * realpart[ j ] + imgpart[ j ] * imgpart[ j ] );
                magnitudeoffreq.push( magmag );
            }
            //mean filtering forward 3 windowed
            let maxfilteredmagmag = [];
            for( let j = 0; j < magnitudeoffreq.length-3; j++ ){
                maxfilteredmagmag.push( (magnitudeoffreq[j]+ magnitudeoffreq[j+1]+ magnitudeoffreq[j+2])/3);
            }
            let magindex = null;
            let magmax = 0;
            let oldmagmag = maxfilteredmagmag[ 0 ];
            let after = false;
            let ril = maxfilteredmagmag.length;
            for( let j = 1; j < ril; j++ ){ //without DC
                let magmag = maxfilteredmagmag[ j ];
                if( magmax < magmag && after && ((expresult/j) < (4*coHheight))){ //bevor du das abs Maximum finden kannst musst due das erste minimum finden und danach das maximum abs suchen!!! - DC ist ein Berg zu Anfang des Diagramms
                    magindex = j;
                    magmax = magmag;
                }
                if(oldmagmag < magmag){
                    after = true; 
                }
                oldmagmag = magmag;
            }
            /*if(coucouwl === 10){
            drawDiagramm(maxfilteredmagmag, "Magn o freq box"+b.toString()+" col "+col.toString());
            console.log("magmax", magmax, "magindex", magindex, realpart[magindex], imgpart[magindex] );
            return;
            }*/
            if( magindex !== null ){
                merkdirdieerg.push(expresult/magindex);
                durchwl2 += (expresult/magindex);
                coucouwl++;
            }
            
        }   
        durchwl2 = durchwl2/coucouwl;
        //
        let typosizesA = [durchwl2*2, durchwl2, durchwl2*(11/12), durchwl2*(10/12), durchwl2*(9/12), durchwl2*(8/12), durchwl2*(7/12), durchwl2/2, durchwl2*(5/12), durchwl2*(4/12), durchwl2*(3/12), durchwl2*(1/6), durchwl2*(1.5/12), durchwl2/12];
        let hair = Math.round(durchwl2/12);
        let typosizes = [hair*24, hair*12, hair*11, hair*10, hair*9, hair*8, hair*7, hair*6, hair*5, hair*4, hair*3, hair*2, hair*1.5, hair];
        
        /*GIBT ES HIER NOCH ANDERE??? TEILUNGEN DES EM QUADRAT - DAS HAB ICH - UND DANN, wie kann ich die Teilungen kennen, oder muss ich die voraussetzen, kann ich in der ersten Gruppe etwas unterdrücken????*/

        //hier noch eine andere Granularität ansetzen und eine Klasse kleiner als hair - für schmutz und eine Klasse größer als EMq

        let typosizesNa = ["emem", "em", "thin+mid+en", "thick+en", "mid+en", "thick+thick", "mid+thick", "en", "mid+thin", "thick", "mid", "thin", "vthin", "hair"];
        console.log("Box", b)
        console.log("Lineheight/em width", durchwl2);
        console.log("hair", durchwl2/12);
        console.log("vers thin", durchwl2*(1/5));
        console.log("thin", durchwl2*(1/6));
        console.log("middle", durchwl2*(3/12));
        console.log("thick space", durchwl2*(2/6));
        console.log("en quadrat", durchwl2/2);

        

        //do a drwing of the em gitter on the box
        //boxes[ b ][0], boxes[ b ][1], boxes[ b ][2], boxes[ b ][3]
        ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
        ctx.lineWidth= 1;
        for( let u = boxes[ b ][0]; u < boxes[ b ][1]; u += durchwl2 ){
            ctx.beginPath();
            ctx.moveTo( u, boxes[ b ][2] ); 
            ctx.lineTo( u, boxes[ b ][3] );
            ctx.stroke();
            ctx.closePath();
        }
        for( let u = boxes[ b ][2]; u < boxes[ b ][3]; u += durchwl2 ){
            ctx.beginPath();
            ctx.moveTo( boxes[ b ][0], u ); 
            ctx.lineTo( boxes[ b ][1], u );
            ctx.stroke();
            ctx.closePath();
        }
        //rethinking the line extraction, first build a histogramm of the components in box space according to the typosizes, take the three biggest???? and call it letters, than orient yourself in the em grit? and sort it according to it?
        let histosize = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let indexofcomp = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
        let realsizes = {};
        for( let co = 0; co < cil; co+=1 ){
            let ctmincol = componenten[co][0][0]; //umgebendes Rechteck x Anfang
		    let ctmaxcol = componenten[co][0][2]; //umgebendes Rechteck x Ende
            let ctminrow = componenten[co][0][1]; //umgebdnes Rechteck y Anfang
		    let ctmaxrow = componenten[co][0][3]; //umgebndes Rechteck y Ende
            if( boxes[ b ][2] <= ctminrow &&
                boxes[ b ][3] >= ctmaxrow &&
                boxes[ b ][0] <= ctmincol &&
                boxes[ b ][1] >= ctmaxcol ){
                let cthight = parseFloat( Math.abs(ctmaxrow-ctminrow) );
                if( realsizes[cthight] ){
                    realsizes[cthight] += 1;
                } else {
                    realsizes[cthight] = 1;
                }
                let minindex = null;
                let minis = 1000000000;
                for( let s = 0; s < typosizes.length; s++ ){
                    let curdiff = Math.abs( Math.round((typosizes[ s ] - cthight )*10)/10 ); 
                    if( curdiff <  minis ){
                        minis = curdiff;//Math.abs(typosizes[s] - cthight );
                        minindex = s;
                    }
                }
                if( minindex !== null ){
                    histosize[ minindex ] += 1;
                    indexofcomp[ minindex ].push( co );
                }
            }
        }
        console.log("histo sizes");
        console.log(typosizesNa);
        console.log(histosize);
        console.log(typosizes);

        let componentenBIGANDNOTINPLINEnone = [];//Komponenten, die nicht die horizontale Nachbarschaft erfüllen und groß sind bezueglich der anderen
        let compnachbarschTHISBOX = [];    
        for( let co = 0; co < cil; co++ ){
            compnachbarschTHISBOX.push( null );
        }
        //check mal die anderen check mal die anderen componenten, ob bilder dabei sein können
        buchschmuckComponenten = markPICS(ctx, mincol, maxcol, minrow, maxrow, componenten, componentenBIGANDNOTINPLINE );

        //comp2Nachbarn(componenten, boxes[ b ][0], boxes[ b ][1], boxes[ b ][2], boxes[ b ][3], winkelabwDURCH, durchwl2, durchwl2, componentenBIGANDNOTINPLINEnone, compnachbarschTHISBOX, 0); //schreibt die eingabe arrays componentenBIGANDNOTINPLINE und compnachbarsch

        //comp2Nachbarn(componenten, boxes[ b ][0], boxes[ b ][1], boxes[ b ][2], boxes[ b ][3], winkelabwDURCH, durchwl2,  durchwl2*(2/6), componentenBIGANDNOTINPLINEnone, compnachbarschTHISBOX, 1);
        //let plinesTHISBOX = []; //Speicher fuer die potentiellen Zeilen
        //sort2PLINES( componenten, compnachbarschTHISBOX, plinesTHISBOX );
        
        //console.log(plinesTHISBOX);
        //das ergibt eien Stützlinie, um die eine Region der EM höhe liegen muss, die dann den Ort der Zeile bildet!!!, dann Box anhand dieser Regionsvorstellung vollständig aufteilen - fertig
        /*for(let p = 0; p < plinesTHISBOX.length-1; p++){ //fuer jede Zeile
            ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            for( let Oh = 0; Oh < plinesTHISBOX[p].length; Oh++ ){ //fuer jedes Element in der Zeile
                
                let co = plinesTHISBOX[p][Oh];
                if(componenten[ co ] !== undefined){
                    let checkmInrow = componenten[ co ][0][1];
		            let checkmAxrow = componenten[ co ][0][3];
                    let checkmIncol = componenten[ co ][0][0];
		            let checkmAxcol = componenten[ co ][0][2];
                    ctx.beginPath();
                
                    ctx.moveTo( checkmIncol, checkmAxrow); 
                    ctx.lineTo( checkmAxcol, checkmAxrow);
                    ctx.stroke();
                    ctx.closePath();
                }
                
            }
        }*/
        ctx.lineWidth= 5;
        let anfofrange = 0;
        let endofrange = 14;
        let color = ["", "", "", "", "Gold", "Red", "Green", "Yellow", "Blue", "Black", "Navi", "", "", ""];
        let colorhex = ["", "", "", "", "#FFD700", "#FF0000", "#00FF00", "#FFFF00", "#0000FF", "#000000", "#000080", "", "", ""];
        for( let g = anfofrange; g < endofrange; g += 1 ){
            ctx.strokeStyle= colorhex[g];//"#"+((1<<24)*Math.random()|0).toString(16);
            console.log( typosizesNa[g],"(",color[g],"):", typosizes[g], histosize[g]);
            let iil = indexofcomp[g].length;
            for(let tcc = 0; tcc < iil; tcc += 1){
                let tc = indexofcomp[ g ][ tcc ];
                let checkmInrow = componenten[ tc ][0][1];
		        let checkmAxrow = componenten[ tc ][0][3];
                let checkmIncol = componenten[ tc ][0][0];
                let checkmAxcol = componenten[ tc ][0][2];
                ctx.beginPath();
                ctx.moveTo( checkmIncol, checkmAxrow); 
                ctx.lineTo( checkmAxcol, checkmAxrow);
                ctx.stroke();
                ctx.closePath();

                 ctx.beginPath();
                ctx.moveTo( checkmIncol, checkmInrow); 
                ctx.lineTo( checkmAxcol, checkmInrow);
                ctx.stroke();
                ctx.closePath();
            }
        }

        //print histo of real sizes:
        for( let size in realsizes ){
            console.log(size, realsizes[size]);
        }

        //der rechte nächste nachbar ist jetzt auf ALLE FÄLLE NACHBAR IN DER ZEILE; ODER WAS?????
        ctx.lineWidth= 2;
        for( let g = anfofrange; g < endofrange; g += 1 ){
            let gil = indexofcomp[g].length;
            for( let tcc = 0; tcc < gil; tcc += 1 ){
                let tc = indexofcomp[ g ][ tcc ];

                if( buchschmuckComponenten.indexOf( tc ) !== -1 ){
                    continue;
                }
                let row1 = componenten[ tc ][ 3 ][ 5 ]; //Schwerezentrum y
                let col1 = componenten[ tc ][ 3 ][ 4 ]; //Schwerezentrum x
                let checkmInrow = componenten[ tc ][0][1];
		        let checkmAxrow = componenten[ tc ][0][3];
                let checkmIncol = componenten[ tc ][0][0];
                let checkmAxcol = componenten[ tc ][0][2];
                if( Math.abs( checkmAxcol - checkmIncol) < typosizes[ 11 ] ){
                    continue;
                }
                let foundrow2 = null;
                let foundcol2 = null;
                let minisrealy = 100000000;
                let minzeilenabst = 10000000;
                for( let gg = anfofrange; gg < endofrange; gg += 1 ){
                    let til = indexofcomp[gg].length;
                    for( let ttcc = 0; ttcc < til; ttcc += 1 ){
                        let ttc = indexofcomp[ gg ][ ttcc ];
                        if( buchschmuckComponenten.indexOf( ttc ) !== -1 ){
                            continue;
                        }
                        if(ttc !== tc){
                            let row2 = componenten[ ttc ][ 3 ][ 5 ]; //Schwerezentrum y
                            let col2 = componenten[ ttc ][ 3 ][ 4 ]; //Schwerezentrum x
                            let checkmInrow2 = componenten[ ttc ][0][1];
		                    let checkmAxrow2 = componenten[ ttc ][0][3];
                            let checkmIncol2 = componenten[ ttc ][0][0];
                            let checkmAxcol2 = componenten[ ttc ][0][2];
                            if( Math.abs( checkmAxcol2 - checkmIncol2) < typosizes[ 11 ] ){
                                continue;
                            }
                            if( xyxyDist( col1, row1, checkmIncol2, row2 ) < minisrealy && 
                                col1 < checkmIncol2 &&
                                !(
                                 (checkmInrow > checkmInrow2 && checkmInrow > checkmAxrow2 ) ||
                                 (checkmAxrow < checkmInrow2 && checkmAxrow < checkmAxrow2 ) 
                                )){
                                foundrow2 = row2;
                                foundcol2 = col2;
                                minisrealy = xyxyDist( col1, row1, checkmIncol2, row2 );
                                
                            }
                        }
                    }
                }
                if(foundrow2!== null){
                    ctx.beginPath();
                    ctx.moveTo( col1, row1); 
                    ctx.lineTo( foundcol2, foundrow2 );
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    }

    //und jetzt kannst du auch ein Bildrauschen unterdrücken, weil du alle hair definierten höhen raus lassen kannst, dass sind fehler, ganz gewiss!
    
    

    /*let realpart = [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1];
    let imgpart =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    FFTone(  1, 5, realpart, imgpart );
    console.log("realpart", realpart);
    console.log("imgpart", imgpart);
    FFTone(  -1, 5, realpart, imgpart );
    console.log("realpart", realpart);
    console.log("imgpart", imgpart);
    */
    //bilde die Boxen
    
    //untersuche die Abstände
    //bilde die Boxen neu
    //anschließend geh die Componenten durch und definiere einen neuen horizonatlen zusammenhang und fürge die Zeilen neu
    // gib die Maße an
    

    
    //boxen einzeichnen
    for( let b = 0; b < bil; b++ ){
                ctx.beginPath();
                ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                ctx.rect(boxes[ b ][0], boxes[ b ][2], (boxes[ b ][1]-boxes[ b ][0]) ,(boxes[ b ][3]-boxes[ b ][2]));
                ctx.stroke();
                ctx.closePath();
    }
    //zeichne alle längsten pixel wege ein, dann analysiere die optimalen und längsten weg - gibt es lücken, dann
    /*for(let c = 0; c < arrayofdiccuts.length; c++){ // pro cut
        for( let f in arrayofdiccuts[ c ] ){ // pro zeile des cut

        }
    }*/
    /*
    for(let c = 0; c < CUTS1.length; c++){
        
        ctx.lineWidth= 4;
        for(let f = 0; f < CUTS1[ c ].length; f++ ){
            let gpl = CUTS1[ c ][ f ][0];
            let g1 = CUTS1[ c ][ f ][1];
            ctx.beginPath();
            if( g1 === "<" ){
                
                ctx.lineWidth= 2;
                ctx.moveTo(componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 1 ]);
                ctx.lineTo(componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 4 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 4 ]][ 0 ][ 1 ]);
                ctx.fillText( c.toString()+"-"+f.toString()+"/"+gpl.toString()+"-"+g1.toString() , 
                              componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ], 
                              componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 1 ] );
            } else if( g1 === ">" ){
                ctx.lineWidth= 2;
                ctx.moveTo(componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 1 ]);
                ctx.lineTo(componenten[MAXGABS[ gpl ][ 0 ][ 4 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ 0 ][ 4 ]][ 0 ][ 1 ]);
                ctx.fillText( c.toString()+"-"+f.toString()+"/"+gpl.toString()+"-"+g1.toString() , 
                              componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ], 
                              componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 1 ] );
            } else {
                
                
                ctx.moveTo(componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 1 ]);
                ctx.lineTo(componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][ 0 ][ 2 ],
                           componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][ 0 ][ 1 ]);
                ctx.fillText( c.toString()+"-"+f.toString()+"/"+gpl.toString()+"-"+g1.toString() , 
                              componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ], 
                              componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 1 ] );
                
                
            }
            ctx.stroke();
            ctx.closePath();
        }
    }

    
    //get all DIST to CENTERofDRUCKSPIEGEL
    let CUTSlengthl = [];
    
    for( let r = 0; r < CUTS1.length; r++){
        let oldlineindex = -1;
        let countpergablines = 0;
        for(let f = 0; f < CUTS1[ r ].length; f++ ){
            if( oldlineindex !== CUTS1[ r ][ f ][0] ){
                countpergablines++;
            }
            oldlineindex = CUTS1[ r ][ f ][0];
        }
        CUTSlengthl.push( countpergablines );
    }
    console.log( CUTSlengthl );
    let currlongestcut = [];
    let lstlonggest = 10000000;
    let count = 0;
    while( count < 10 ){
        let currlongest = 0;
        let indexatmax = undefined;
        for( let l = 0; l < CUTSlengthl.length; l++ ){
            if( currlongest <= CUTSlengthl[ l ] && 
                lstlonggest  >  CUTSlengthl[ l ]    ){
                  currlongest = CUTSlengthl[ l ] ;
                  indexatmax = l;
            }
        }
        
        if( indexatmax !== undefined ){
            lstlonggest = currlongest;
            currlongestcut.push( indexatmax );
        }
        
        count++;
    }
    console.log(currlongestcut);


    let DISTCenter = [];
    let maxDistindex = null;
    let maxdist = 1000000000000;
    let lenofcut = 0;
    for( let i = 0; i < currlongestcut.length; i++ ){
        let r = currlongestcut[i];
        if(  CUTS1[r].length !== 0){
            let dist = 0;
            let cuco = 0;
            let cuco2 = 0;
            for(let f = 0; f < CUTS1[ r ].length; f++ ){
                if(MAXGABS[ CUTS1[ r ][ f ][0] ].length !== 0){
                if( CUTS1[ r ][ f ][1] === "<" ){
                    dist += (2*Math.abs(druckspiegelmittevertikal-MAXGABS[ CUTS1[ r ][ f ][0] ][ MAXGABS[ CUTS1[ r ][ f ][0] ].length-1 ][2])); 
                    cuco += 1;//MAXGABS[ CUTS1[ r ][ f ][0] ][ MAXGABS[ CUTS1[ r ][ f ][0] ].length-1 ][0];
                } else if( CUTS1[ r ][ f ][1] === ">" ){
                    //console.log( CUTS1[ r ][ f ][0], GAPS );
                    dist += (2*Math.abs(druckspiegelmittevertikal-MAXGABS[ CUTS1[ r ][ f ][0] ][ 0 ][1])); //MAXGABS[ CUTS1[ r ][ f ][0] ][ 0 ][5];
                    cuco += 1;//MAXGABS[ CUTS1[ r ][ f ][0] ][ 0 ][0];
                } else {
                    dist += MAXGABS[ CUTS1[ r ][ f ][0] ][ CUTS1[ r ][ f ][1] ][5];
                    cuco += MAXGABS[ CUTS1[ r ][ f ][0] ][ CUTS1[ r ][ f ][1] ][0];
                }
                cuco2++;
                }
                
            }
            
            
            console.log( "ad", r, dist, cuco2, cuco );
            dist = (dist / cuco)/cuco2;
            if( maxdist > dist ){
                maxdist = dist;
                maxDistindex = r;
                lenofcut = CUTSlengthl[r];
                console.log("dtemp", maxDistindex, maxdist);
            }
        }
    }
    console.log("d", maxDistindex, maxdist);
    

    
    let durchanfang = 0;
    let durchend = 0;
    let du = 0;
    //choose smallest dist as cut!
            //for( let r = 0; r < CUTS1.length; r++){
            //for( let i = 0; i < currlongestcut.length; i++ ){
       // let maxDistindex = currlongestcut[i];
            ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                for(let f = 0; f < CUTS1[ maxDistindex ].length; f++ ){
                            let gpl = CUTS1[ maxDistindex ][ f ][0];
                            let g1 = CUTS1[ maxDistindex ][ f ][1];
                            
                            if( CUTS1[ maxDistindex ][ f ][1] === "<" ){
                                durchanfang += componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ];
                                durchend += componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 4 ]][ 0 ][ 2 ];
                                ctx.beginPath();
                                ctx.fillText( maxDistindex.toString()+"-"+f.toString() , 
                                              componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ], 
                                              componenten[MAXGABS[ gpl ][ MAXGABS[ gpl ].length-1 ][ 3 ]][ 0 ][ 1 ] );
		                        ctx.stroke();
                                ctx.closePath();
                                
                            } else if( CUTS1[ maxDistindex ][ f ][1] === ">" ){
                                durchanfang += componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ];
                                durchend += componenten[MAXGABS[ gpl ][ 0 ][ 4 ]][ 0 ][ 2 ];
                                ctx.beginPath();
                                ctx.fillText( maxDistindex.toString()+"-"+f.toString() , 
                                              componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ], 
                                              componenten[MAXGABS[ gpl ][ 0 ][ 3 ]][ 0 ][ 1 ] );
		                        ctx.stroke();
                                ctx.closePath();
                            } else {
                                
                        
		                        durchanfang += componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ];
                                durchend += componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][ 0 ][ 2 ];
                                
                                ctx.lineWidth= 3;
                                ctx.beginPath();
                                ctx.moveTo(componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ],componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][0][1]);
		                        ctx.lineTo(componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][ 0 ][ 2 ],componenten[MAXGABS[ gpl ][ g1 ][ 4 ]][0][1]);
                                ctx.fillText( maxDistindex.toString()+"-"+f.toString() , componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ], componenten[MAXGABS[ gpl ][ g1 ][ 3 ]][ 0 ][ 1 ] );
		                        ctx.stroke();
                                ctx.closePath();
                        }
                        du++;
           
                }
         //   }
    
    //historgramm aus pro pixel wie viele luecken sind im cut vorhanden, nimm die maximalste als CUT und auch nur die lines - ist dann trueCUT
    
    let trueCUT = null; // start end index of line in CUTS1[ maxDistindex ]
    let histogrammPIXandGAP = [];
    let invhistogrammPIXandGAP = [];
    durchanfang = Math.floor(durchanfang / du);
    durchend = Math.floor(durchend / du);
    
    let histogrammPIXandGAP = [];
    for( let pii = durchanfang; pii < durchend; pii++ ){ //PIX ROW
        let axcount = 0;
        let abscount = 0;
        let axindexstart = null;
        let oldindex = null;
        let tempCountAnfang = [];      
        let lue = null;
        //von oben nach unten suchen
        for(let g = 0; g < GAPS.length; g++ ){
            
            let hasgapinplace = false;
            if( GAPS[ g ][ 0 ][ 1 ] > pii ){ //total danach
                lue = 0;
                hasgapinplace = true;
                
            } else if( GAPS[ g ][ GAPS[ g ].length-1 ][2] < pii ){ //total davor
                lue = GAPS[ g ].length-1;
                hasgapinplace = true;
                
            } else {
                for( let f = 0; f < GAPS[ g ].length; f++ ){ //second histogr param GAPS
                    let ganf = GAPS[ g ][ f ][ 1 ];
                    let gende = GAPS[ g ][ f ][ 2 ];
                    if( pii >= ganf && pii <= gende ){
                        hasgapinplace = true;
                        lue = f;
                        break;
                    }
                }
            }
            if( hasgapinplace ){
                //console.log(oldindex, g, pii, axcount, abscount);
                abscount++;
                if(axindexstart === null){
                        axindexstart = g;
                    }
                if( oldindex !== null &&  g - oldindex !== 1  ){
                    
                    if( axcount !== 0 ){
                        if( axindexstart === null ){
                            tempCountAnfang.push([ axcount, g-axcount-1,lue ]);
                        } else {
                            tempCountAnfang.push([ axcount, axindexstart,lue ]);
                        }
                    }
                    axcount = 1;
                    axindexstart = g;
                } else {
                    
                    
                    axcount++;
                    
                }
                oldindex = g;
                
            }
        }
        
        if(0 < tempCountAnfang.length){
        axcount = 0;
        for( let b = 0; b < tempCountAnfang.length; b++ ){
            if( axcount <= tempCountAnfang[ b ][0] ){ //what if ===
                axcount = tempCountAnfang[ b ][0];
                axindexstart = tempCountAnfang[ b ][1];
                
            } else if( axcount === tempCountAnfang[ b ][0]){
                console.log("was eaqual nonono");
            }
        }
        } 
        histogrammPIXandGAP.push( [pii, axcount, axindexstart, lue] );
    
        axcount = 0;
        abscount = 0;
        axindexstart = null;
        oldindex = null;
        tempCountAnfang = [];      
        lue = null;
        //von unten nach oben suchen
        for(let g = GAPS.length-1; g > 0; g-- ){
            
            let hasgapinplace = false;
            if( GAPS[ g ][ 0 ][ 1 ] > pii ){ //total danach
                lue = 0;
                hasgapinplace = true;
                
            } else if( GAPS[ g ][ GAPS[ g ].length-1 ][2] < pii ){ //total davor
                lue = GAPS[ g ].length-1;
                hasgapinplace = true;
                
            } else {
                for( let f = 0; f < GAPS[ g ].length; f++ ){ //second histogr param GAPS
                    let ganf = GAPS[ g ][ f ][ 1 ];
                    let gende = GAPS[ g ][ f ][ 2 ];
                    if( pii >= ganf && pii <= gende ){
                        hasgapinplace = true;
                        lue = f;
                        break;
                    }
                }
            }
            if( hasgapinplace ){
                //console.log(oldindex, g, pii, axcount, abscount);
                abscount++;
                if(axindexstart === null){
                        axindexstart = g;
                    }
                if( oldindex !== null &&  g - oldindex !== -1  ){
                    
                    if( axcount !== 0 ){
                        if( axindexstart === null ){
                            tempCountAnfang.push([ axcount, g+axcount-1,lue ]);
                        } else {
                            tempCountAnfang.push([ axcount, axindexstart,lue ]);
                        }
                    }
                    axcount = 1;
                    axindexstart = g;
                } else {
                    
                    
                    axcount++;
                    
                }
                oldindex = g;
                
            }
        }
        //console.log(pii, tempCountAnfang);
        if(0 < tempCountAnfang.length){
        axcount = 0;
        for( let b = 0; b < tempCountAnfang.length; b++ ){
            if( axcount <= tempCountAnfang[ b ][0] ){ //what if ===
                axcount = tempCountAnfang[ b ][0];
                axindexstart = tempCountAnfang[ b ][1];
                
            } else if( axcount === tempCountAnfang[ b ][0]){
                console.log("was eaqual nonono 2");
            }
        }
        } 
        invhistogrammPIXandGAP.push( [pii, axcount, axindexstart, lue] );
    }
    console.log(invhistogrammPIXandGAP);

    let truecutlen = 0;
    for( let t = 0; t < histogrammPIXandGAP.length; t++ ){
        if( truecutlen < histogrammPIXandGAP[t][1] ){
            trueCUT = histogrammPIXandGAP[t];
            truecutlen = histogrammPIXandGAP[t][1];
        }
    }
    truecutlen = 0;
    let invtrueCUT = null;
    for( let t = 0; t < invhistogrammPIXandGAP.length; t++ ){
        if( truecutlen < invhistogrammPIXandGAP[t][1] ){
            invtrueCUT = invhistogrammPIXandGAP[t];
            truecutlen = invhistogrammPIXandGAP[t][1];
        }
    }
    console.log(trueCUT, invtrueCUT);
    ctx.lineWidth= 3;
    ctx.beginPath();
    ctx.strokeStyle="red";
    let cutmitte = Math.floor((durchanfang+durchend)/2);
    ctx.moveTo( cutmitte, 0 );
    ctx.lineTo( cutmitte, Unterer[0]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo( durchanfang, 0 );
    
    ctx.lineTo( durchanfang, Unterer[0]);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo( durchend, 0 );
    
    ctx.lineTo( durchend, Unterer[0]);
    
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth= 2;
    ctx.closePath();
   */

   

    /*let an = componenten[ GAPS[ trueCUT[2]              ][ 0 ][ 3 ] ][ 0 ][ 1 ];
    let en = componenten[ GAPS[ trueCUT[2]+trueCUT[1]-1 ][ 0 ][ 4 ] ][ 0 ][ 1 ];
    ctx.moveTo( trueCUT[0], an   );    
    ctx.lineTo( trueCUT[0], en   );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth= 1;
   

   

    let an = componenten[ GAPS[ invtrueCUT[2]              ][ 0 ][ 3 ] ][ 0 ][ 1 ];
    let en = componenten[ GAPS[ invtrueCUT[2]-invtrueCUT[1]+1 ][ 0 ][ 4 ] ][ 0 ][ 1 ];
    ctx.moveTo( invtrueCUT[0], en   );    
    ctx.lineTo( invtrueCUT[0], an   );
    ctx.stroke();
    ctx.closePath();

    //BOx 1
    
    console.log(minmaxpline);
    let currbox = []
    let currbox2 = [];
    let currboxgaps = [];
    let currboxgaps2 = [];
    let BOXES = [];
    let BOXESGAPS = [];
    let sttarrt = CUTS1[ maxDistindex ][ 0 ][ 0 ];
    for( let lin = 0; lin < minmaxpline.length; lin++ ){
        if( sttarrt <= lin && lin+sttarrt < CUTS1[ maxDistindex ].length ){
            if(currbox.length !== 0 && currbox2.length === 0){
                BOXES.push( currbox );
                currbox = [];
                BOXESGAPS.push( currboxgaps );
                currboxgaps = [];
            }
            let indexINcut = lin - sttarrt
            let gpl = CUTS1[ maxDistindex ][ indexINcut ][0];
            let g1 = CUTS1[ maxDistindex ][ indexINcut ][1];
            if( g1 === "<" ){
                currbox.push(minmaxpline[lin][12]);  
                currboxgaps.push(GAPS[ gpl ]);      
            } else if( g1 === ">" ){
                currbox2.push(minmaxpline[lin][12]);  
                currboxgaps2.push(GAPS[ gpl ]);             
            } else {
                            console.log( "split l",  MAXGABS[ gpl ][ g1 ][6], lin, "at", MAXGABS[ gpl ][ g1 ][7], "of", minmaxpline[lin][12].length, " known from CUTindex",  indexINcut);//component index
            //split 
            
            //push to first and second box
            currbox.push( minmaxpline[lin][12].slice(0, (MAXGABS[ gpl ][ g1 ][7]+1)) );
            currbox2.push( minmaxpline[lin][12].slice( (MAXGABS[ gpl ][ g1 ][7]+1), minmaxpline[lin][12].length) );
            let spliindexgaps = MAXGABS[ gpl ][ g1 ][8];
            currboxgaps.push( GAPS[ gpl ].slice(0, (spliindexgaps))); 
            currboxgaps2.push(GAPS[ gpl ].slice((spliindexgaps+1),GAPS[ gpl ].length));      
            }
        } else { //nocut
            if(currbox.length !== 0 && currbox2.length !== 0){
                BOXES.push( currbox );
                BOXESGAPS.push( currboxgaps );
                currbox = [];
                currboxgaps = [];
                BOXES.push( currbox2 );
                BOXESGAPS.push( currboxgaps2 );
                currbox2 = [];
                currboxgaps2 = [];
            }
            console.log( "no split l",  lin);
            currbox.push( minmaxpline[ lin ][ 12 ] );
            currboxgaps.push( GAPS[ lin ] );
        }
                   
    }
    if(currbox.length !== 0 ){
        BOXES.push( currbox );
        BOXESGAPS.push( currboxgaps );
        currbox = null;
        currboxgaps = null;
    }
    if(currbox2.length !== 0){
        BOXES.push( currbox2 );
        BOXESGAPS.push( currboxgaps2 );
        currbox2 = null;
        currboxgaps2 = null;
    }
    console.log(BOXES, BOXESGAPS);

    for(let b = 0; b < BOXES.length; b++){
        ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth= 1;
    //BOXES[b][0][0]//component
    //[0][0] //x 
    //[0][1] //y
    let x = componenten[BOXES[b][0][0]][0][2];
    let y = componenten[BOXES[b][0][0]][0][1];
    let wid = componenten[BOXES[b][BOXES[b].length-1][BOXES[b][BOXES[b].length-1].length-1]][0][2]-x;
    let hoe = componenten[BOXES[b][BOXES[b].length-1][BOXES[b][BOXES[b].length-1].length-1]][0][1]-y;
    ctx.rect(x, y, wid , hoe);
    ctx.stroke();
    ctx.closePath();
    }
    
//[gapsize, cmaxcol, cmincol2, tempcompindicessorted[ ci ], tempcompindicessorted[ ci+1 ], gapweight2sp, li1, ci]
    for(let b = 0; b < BOXESGAPS.length; b++){//box
    
    let CUTS2 = [];
    let maxlueckcount = 0;
    let m = null;
    for( let gpl = 0; gpl < BOXESGAPS[b].length; gpl++ ){//line (gaps) of box
        for(let g1 = 0; g1 < BOXESGAPS[b][ gpl ].length; g1++ ){//gaps of line
            let countluecken = 0;
            let lueckenforcut = [[gpl,g1]];
            for( let gpl2 = gpl+1; gpl2 < BOXESGAPS[b].length; gpl2++ ){
                
                // gut ist wenn alle luecken vor der untersuchungslücke liegen
                let isnichtgut = 0; //--- 
                if( BOXESGAPS[b][ gpl2 ][ BOXESGAPS[b][ gpl2 ].length - 1][2] < BOXESGAPS[b][ gpl ][ g1 ][ 1 ]){
                    lueckenforcut.push([gpl2,"<"]);
                    countluecken++;
                    continue;
                } else {
                    //gut ist wenn jede luecke hinter der untersuchungsluecke liegen
                    if( BOXESGAPS[b][ gpl2 ][ 0 ][ 1 ] > BOXESGAPS[b][ gpl ][ g1 ][ 2 ] ){
                        lueckenforcut.push( [gpl2,">"] );
                        countluecken++;
                        continue;
                    }
                    let lueckentopushperline = [];
                    //gut ist wenn eine Luecke existiert, die genu auf die Luecke passt
                    for( let g2 = 0; g2 < BOXESGAPS[b][ gpl2 ].length; g2++ ){
                      
                        if( BOXESGAPS[b][ gpl ][ g1 ][ 1 ] <=  BOXESGAPS[b][ gpl2 ][ g2 ][ 2 ] && 
                            BOXESGAPS[b][ gpl ][ g1 ][ 2 ] >=  BOXESGAPS[b][ gpl2 ][ g2 ][ 1 ]) {
                            
                            if(
                            (BOXESGAPS[b][ gpl ][ g1 ][ 1 ] >= BOXESGAPS[b][ gpl2 ][ g2 ][ 1 ] && BOXESGAPS[b][ gpl ][ g1 ][ 2 ] >= BOXESGAPS[b][ gpl2 ][ g2 ][ 2 ] ) ||
                            (BOXESGAPS[b][ gpl ][ g1 ][ 1 ] <=  BOXESGAPS[b][ gpl2 ][ g2 ][ 1 ] && BOXESGAPS[b][ gpl ][ g1 ][ 2 ] <= BOXESGAPS[b][ gpl2 ][ g2 ][ 2 ] ) ||
                            (BOXESGAPS[b][ gpl ][ g1 ][ 1 ] >= BOXESGAPS[b][ gpl2 ][ g2 ][ 1 ] && BOXESGAPS[b][ gpl ][ g1 ][ 2 ] <= BOXESGAPS[b][ gpl2 ][ g2 ][ 2 ] ) ||
                            (BOXESGAPS[b][ gpl ][ g1 ][ 1 ] <= BOXESGAPS[b][ gpl2 ][ g2 ][ 1 ] && BOXESGAPS[b][ gpl ][ g1 ][ 2 ] >= BOXESGAPS[b][ gpl2 ][ g2 ][ 2 ] )) 
                            {
                                
                                        isnichtgut++;
                                        lueckentopushperline.push([gpl2,g2]);
                                        
                                
                            }
                        }
                        //wenn luecken hinter testluecke liegen brak
                    }
                    if( lueckentopushperline.length !== 0){
                        let tempdist = 0;
                        let tempnottoclean = [];
                        //console.log(lueckentopushperline);
                        //selct first if just one or the biggest dist value

                        for(let v = 0; v < lueckentopushperline.length; v++){
                            //wenn Ende der Zeile näher ist dann nimm das!!!!!!
                            if( BOXESGAPS[b][lueckentopushperline[ v ][0]][lueckentopushperline[ v ][1]][5] > tempdist){
                                    tempdist = BOXESGAPS[b][lueckentopushperline[ v ][0]][lueckentopushperline[ v ][1]][5];
                                    tempnottoclean = lueckentopushperline[ v ];
                                }
                            
                        }
                        lueckenforcut.push( tempnottoclean );
                    }
                }

                
                if( isnichtgut === 0 || isnichtgut > 1){//jojojo groeszer 1 ist extrem wichtiges kriterium man man man 
                    break;
                } else {
                    countluecken++;
                }
                
            }
            //wenn gut zähle Lücke 
            if(countluecken > 1){ //rest ab drei zeilen "hintereinander" wird gewertet, es gibt nachbarn und das "hintereinander" im array, sind fast gleich
            //console.log(lueckenforcut);
                       
            if( CUTS2.length === 0 && lueckenforcut.length !== 0 ){
               CUTS2.push( lueckenforcut );
            } else {
                let wasnotin = true;
                for( let r = 0; r < CUTS2.length; r++ ){
                    for(let f = 0; f < CUTS2[ r ].length; f++ ){
                        if( CUTS2[ r ][ f ][0] === gpl && CUTS2[ r ][ f ][1] === g1 ){
                           wasnotin = false;
                           //CUTS2[ r ] = CUTS2[ r ].concat(lueckenforcut);
                            for( let l = 0; l < lueckenforcut.length; l++ ){
                                let topush = true;
                                for( let ff = 0; ff < CUTS2[ r ].length; ff++ ){
                                    if( CUTS2[ r ][ff][0] === lueckenforcut[ l ][0] ){//&&
                                        //CUTS2[ r ][ff][1] === lueckenforcut[ l ][1] ){
                                        topush = false;
                                        break;
                                    } 
                                }
                                if( topush ){
                                    CUTS2[ r ].push( lueckenforcut[ l ] );
                                }
                            }
                           
                        }
                    }
                    if(wasnotin === false){
                        break;
                    }
                }
                if( wasnotin && lueckenforcut.length !== 0 ){
                    CUTS2.push( lueckenforcut );
                }
            }

            if( CUTS2[CUTS2.length-1].length > maxlueckcount ){
                maxlueckcount = CUTS2[CUTS2.length-1].length
                m = CUTS2.length-1;
            }
            
            
            //console.log("Für Zeile", gpl, "Lücken nummer:", g1, BOXESGAPS[b][ gpl ][ g1 ][ 1 ], BOXESGAPS[b][ gpl ][ g1 ][ 2 ], "gibt es", countluecken );
            //wenn zu dieser luecke viel leucken passen oder es einfach häufig am stueck gut ist, dann ist das eine potenzieller schnitt
            }
        }
        //wenn uafeinanderfolgende luecken schnitte sein können nimm die letze luecke
    }
    console.log("max in", b, "is", m, CUTS2[ m ], CUTS2);
    //for( let m = 0; m < CUTS2.length; m++ ){
            ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
                for( let f = 0; f < CUTS2[ m ].length; f++ ){
                            let gpl = CUTS2[ m ][ f ][0];
                            let g1 = CUTS2[ m ][ f ][1];
                            
                            if( CUTS2[ m ][ f ][1] === "<" ){
                                //durchanfang += componenten[BOXESGAPS[b][ gpl ][ BOXESGAPS[b][ gpl ].length-1 ][ 3 ]][ 0 ][ 2 ];
                                //durchend += componenten[BOXESGAPS[b][ gpl ][ BOXESGAPS[b][ gpl ].length-1 ][ 4 ]][ 0 ][ 2 ];
                            } else if( CUTS2[ m ][ f ][1] === ">" ){
                                //durchanfang += componenten[BOXESGAPS[b][ gpl ][ 0 ][ 3 ]][ 0 ][ 2 ];
                                //durchend += componenten[BOXESGAPS[b][ gpl ][ 0 ][ 4 ]][ 0 ][ 2 ];
                            } else {
                                
                        
		                        //durchanfang += componenten[BOXESGAPS[b][ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ];
                                //durchend += componenten[BOXESGAPS[b][ gpl ][ g1 ][ 4 ]][ 0 ][ 2 ];
                                
                                ctx.lineWidth= 3;
                                ctx.beginPath();
                                ctx.moveTo(componenten[BOXESGAPS[b][ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ],componenten[BOXESGAPS[b][ gpl ][ g1 ][ 3 ]][0][1]);
		                        ctx.lineTo(componenten[BOXESGAPS[b][ gpl ][ g1 ][ 4 ]][ 0 ][ 2 ],componenten[BOXESGAPS[b][ gpl ][ g1 ][ 4 ]][0][1]);
                                ctx.fillText( b.toString()+"-"+m.toString()+"-"+f.toString() , componenten[BOXESGAPS[b][ gpl ][ g1 ][ 3 ]][ 0 ][ 2 ], componenten[BOXESGAPS[b][ gpl ][ g1 ][ 3 ]][ 0 ][ 1 ] );
		                        ctx.stroke();
                                ctx.closePath();
                        }
                        
           
                }
    //}
}
*/
    console.log( "PLINES" );

    /*Printing and exporting*/
    if( document.getElementById( "dosaveresultimages" ).checked === true){
        printTWO();
        printTHREE();
        printFOUR();
        printONE();
        downALTOxml();
    } else if( document.getElementById( "doexplo" ).checked === true ){
            explosionszeichnung( w, h, componenten, buchschmuckComponenten, plines, boxes );
    }

    if( document.getElementById( "donext" ).checked === true ){
            processNext();
    }
    
    
/*
    //historgramm aus pro pixel wie viele luecken sind im cut vorhanden, nimm die maximalste als CUT und auch nur die lines - ist dann trueCUT
    let trueCUT = null; // start end index of line in CUTS1[ maxDistindex ]
    let histogrammPIXandGAP = [];
    durchanfang = Math.floor(durchanfang / du);
    durchend = Math.floor(durchend / du);
    
    for( let pii = durchanfang; pii < durchend; pii++ ){ //PIX ROW
        let abscount = 0;
        for(let g = 0; g < GAPS.length; g++ ){
            let hasgapinplace = false;
            for( let f = 0; f < GAPS[ g ].length; f++ ){ //second histogr param GAPS
                let ganf = GAPS[ g ][ f ][ 1 ]+1;
                let gende = GAPS[ g ][ f ][ 2 ]-1;
                if( pii > ganf && pii < gende ){
                    hasgapinplace = true;
                    break;
                }
            }
            if( hasgapinplace ){
                abscount++;
                
                
            } 
        }
        
        
        histogrammPIXandGAP.push( [pii, abscount] );
    }
    //console.log(histogrammPIXandGAP);
    let truecutlen = 0;
    for( let t = 0; t < histogrammPIXandGAP.length; t++ ){
        if( truecutlen <= histogrammPIXandGAP[t][1] ){
            trueCUT = histogrammPIXandGAP[t];
            truecutlen = histogrammPIXandGAP[t][1];
        }
    }
    console.log(trueCUT);
    ctx.lineWidth= 3;
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo( druckspiegelmittevertikal, 0 );
    ctx.lineTo( druckspiegelmittevertikal, Unterer[0]);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.moveTo( durchanfang, 0 );
    
    ctx.lineTo( durchanfang, Unterer[0]);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.moveTo( durchend, 0 );
    
    ctx.lineTo( durchend, Unterer[0]);
    
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth= 5;
    ctx.closePath();
   

    
    ctx.moveTo( trueCUT[0], 0   );    
    ctx.lineTo( trueCUT[0], Unterer[0]   );
    ctx.stroke();
    */
    //nach eingeschlossenheit suchen, wenn LH einbricht, oder so

    //LH bestimmen
    

    //wenn eine Zeile von zweien umgeben ist, die eine andere gemeinsame länge haben dann bringe die zeile auf diese länge durch streckung oder Teilung wenn dabei keine kleinen schnipsel gleiche line hight entstehen

    //zweite definition
    //suche nach vertical zusammengehörenden Linien
    //let boxmodell = [];
    /*for(let b = 0; b < boxmodell.length; b++){
            //if(b > 0){break;}
            let BOX = boxmodell[ b ];
            let Bmincol = 100000;
            let Bmaxcol = 0;
            let Bminrow = 100000;
            let Bmaxrow = 0;
            ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
            for(let l = 0; l < BOX.length; l++){
                
                let linenum = BOX[l];
                let line = plines[ minmaxpline[ linenum ][4] ];
                for(let ll = 0; ll < line.length; ll++){
                    //oh tut mir leid hannes, das ist vielleicht doch etwas verschachtelt - viel spass beim debuggen
                    
                    if( Bmincol >  componenten[ line[ll] ][0][0] ){
                        Bmincol = componenten[ line[ll] ][0][0];
                    }
                     if( Bmaxcol < componenten[ line[ll] ][0][2] ){
                        Bmaxcol = componenten[ line[ll] ][0][2]
                    }
                    if( Bminrow > componenten[ line[ll] ][0][1] ){
                        Bminrow = componenten[ line[ll] ][0][1];
                    }
                     if( Bmaxrow < componenten[ line[ll] ][0][3] ){
                        Bmaxrow = componenten[ line[ll] ][0][3];
                    }

                  }  
                    ctx.lineWidth=5;
		            ctx.beginPath();
			
                    ctx.moveTo( minmaxpline[ linenum ][0],minmaxpline[ linenum ][5] );
		            ctx.lineTo( minmaxpline[ linenum ][2],minmaxpline[ linenum ][5] );
		            ctx.stroke();
                    ctx.closePath();
                
            }
            console.log(Bmincol, Bminrow, Bmaxcol-Bmincol, Bmaxrow-Bminrow);
            ctx.lineWidth="5";
		    ctx.beginPath();
			
                    ctx.moveTo( Bmincol,Bminrow );
		            ctx.lineTo( Bmaxcol,Bminrow );
		            ctx.stroke();
			ctx.strokeRect(Bmincol, Bminrow, Bmaxcol-Bmincol, Bmaxrow-Bminrow);
            ctx.closePath();

    }*/
    
}
