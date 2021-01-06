"use strict";

/*GLOBALS*/
let zahlenzumonate = { "01": "Januar", "02": "Februar", "03": "März", "04": "April", "05": "Mai", "06": "Juni", "07": "Juli", "08":"August", "09": "September", "10":"Oktober", "11": "November", "12": "Dezember"};
let tagnamen = new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
let tagnamenKu = new Array("So","Mo","Di","Mi","Do","Fr","Sa");
let CVStext = "";
let CVSname = "";
let otherCSV = [];
let lemIDtoliveIN = "";
let onece = true;

/* ENTER FUNCTION */
function spipla(){
    console.log("Theater Javascript Spielplan rendering start");
    if( otherCSV.length === 0 ){
        //getallcsv( inpspie, "content" );
        getallcsv( makespie, "content" );
        //getallcsv( makespieZ, "content" );
        //getallcsv( editspiepla, "content" );
    } else {
        //inpspie( "content" );
        makespie( "content" );
        //makespieZ( "content" );
        //editspiepla( "content" );
    }
}



/*MAKE SPIELPLAN*/
function showfirstofmonth(){
    let menuelem = document.getElementsByClassName( "spiemenu" )[0];
    //settoopen(menuelem.children[0]);
    menuelem.children[0].dispatchEvent(new MouseEvent("click",{bubbles: true, cancellable: true}));
}

function makespie( elemID ){ 
    console.log("Just make spie");
    lemIDtoliveIN = elemID;
	let intoElem = document.getElementById( elemID );
    //add spielplanmenu
    let spiemeni = document.createElement( "div" );
    spiemeni.className = "spiemenu";
    spiemeni.id = "spiemenu"
    spiemeni.innerHTML = "Spielplan"
    intoElem.appendChild( spiemeni );

    let dd = new Date();
    let zahm = dd.getMonth()+1;
    let zahy = dd.getFullYear();
    let zahmnext = zahm+1;
    if( 12 < zahmnext ){
        zahmnext = zahmnext - 12;
    }
    let zahmnextnext = zahmnext + 1;
    if( 12 < zahmnextnext ){
        zahmnextnext = zahmnextnext - 12;
    }

    let currmonatzahl = zahm.toString();
    if( currmonatzahl.length == 1){
        currmonatzahl = "0" + currmonatzahl;
    }

    let currmonatzahlo = zahmnext.toString();
    if( currmonatzahlo.length == 1){
        currmonatzahlo = "0" + currmonatzahlo;
    }

    let currmonatzahloo = zahmnextnext.toString();
    if( currmonatzahloo.length == 1){
        currmonatzahloo = "0" + currmonatzahloo;
    }
    console.log("This Mo", currmonatzahl, "n", currmonatzahlo, "nn", currmonatzahloo);
    console.log(otherCSV);
    let yearrelevant = false;
    for( let c = 0; c < otherCSV.length; c++){
        console.log( currmonatzahl == otherCSV[ c ].split("-")[0], currmonatzahl, otherCSV[ c ].split("-")[0], otherCSV[ c ].split("-")[1]);
        if( (parseInt(otherCSV[ c ].split("-")[1]) === zahy && zahm <= otherCSV[ c ].split("-")[0] ) || 
            (parseInt(otherCSV[ c ].split("-")[1]) !== zahy && zahm > otherCSV[ c ].split("-")[0] ) ){
            yearrelevant = true;
        }
        if( yearrelevant && (currmonatzahl == otherCSV[ c ].split("-")[0] || 
            currmonatzahlo == otherCSV[ c ].split("-")[0] || 
            currmonatzahloo == otherCSV[ c ].split("-")[0]) ){
            let m = document.createElement( "span" );
            if( c < otherCSV.length-1 ){
                m.innerHTML = zahlenzumonate[ otherCSV[ c ].split("-")[0] ] + "&emsp;|";
            } else {
                m.innerHTML = zahlenzumonate[ otherCSV[ c ].split("-")[0] ];
            }
            m.name = otherCSV[ c ];
            console.log("menu monat ", m.name);
            m.onclick = function(){ settoopen(this); };
            spiemeni.appendChild( m );
        }
        yearrelevant = false;
    }
    //spiemeni.innerHTML = spiemeni.innerHTML + "&emsp;&emsp;&emsp;&emsp;&emsp;Kartentelefon +49 (361)5982924"
    
    //add displayed month to the menu
    //let mo1 = document.createElement( "span" );
    //mo1.id = "spiedisp";
    //spiemeni.appendChild( mo1 );
    //next month
    //let mo2 = document.createElement( "span" );
    //mo2.id = "spienext";
    //spiemeni.appendChild( mo2 );
    //next next month
    //let mo3 = document.createElement( "span" );
    //mo3.id = "spienextnext";
    //spiemeni.appendChild( mo3 );

    //add spieplan div
    let spieinto = document.createElement("div");
	spieinto.className = "spielplan";
	spieinto.id = "spiedisp";
    
    intoElem.appendChild( spieinto );
    let lines = CVStext.split( "\n" );
    let doscroll = false;
    for(let l = 1; l < lines.length; l++){
        //Datum 0; Begin 1; Ende 2; Sondertitel 3; Titel 4; Beschreibung 5; Text 6; Kartenstatus 7; Veranstaltungstyp 8; Preis Kind 9; Preis Erw 10; Pries Erw erm 11
        let data = lines[l].split( ";" );
        if( data.length == 12 ){
            //console.log(data);
            //main per termin
            let terminmain = document.createElement( "div" );
            terminmain.className = "termin";
            spieinto.appendChild( terminmain );

            //two horizontal boxes
            let layer1 = document.createElement( "span" );
            layer1.className = "terminlayer1";
            terminmain.appendChild( layer1 );
            let info = document.createElement( "span" );
            info.className = "termininfo";
            terminmain.appendChild( info );
            let best = document.createElement( "span" );
            best.className = "terminbest";
            terminmain.appendChild( best );
             
            //first layer data
            let datumsplit = data[ 0 ].split(".");
			let lastMonat = zahlenzumonate[ datumsplit[ 1 ] ];
            //console.log(datumsplit);
            if( datumsplit[ 2 ].length == 2 ){
		        datumsplit[ 2 ] = "20"+datumsplit[2];
			}
		    let thisdateis = new Date( datumsplit[2]+"/"+datumsplit[1]+"/"+datumsplit[0]);

            //add bestell status
            let bestbutt = document.createElement( "div" );
            bestbutt.name = data[4]+";"+datumsplit.join(".")+";"+data[1]+" Uhr;"+data[8]+";"+data[9]+";"+data[10]+";"+data[11];
            //kartenstatus.name = onepartincsvl[ 4 ] +";"+ bd + ";"+ onepartincsvl[1]+";"+ onepartincsvl[ 8 ]+";"+ onepartincsvl[ 9 ]+";"+ onepartincsvl[ 10 ]+";"+ onepartincsvl[ 11 ];
            if( data[7].indexOf( "0" ) != -1 ){
                bestbutt.className = "ausverk";
				bestbutt.innerHTML = "Karten ausverkauft";
            } else if( data[7].indexOf( "1" ) != -1 ){
                bestbutt.className = "bestk";
                bestbutt.innerHTML = "Karten bestellen";
                bestbutt.onclick = function(){Bestellung( bestbutt.name );};
            } else if( data[7].indexOf( "2" ) != -1 ){
                bestbutt.className = "bestk";
                bestbutt.innerHTML = "Einzelplätze";
                bestbutt.onclick = function(){Bestellung( bestbutt.name );};
            } else if( data[7].indexOf( "3" ) != -1 ){
                bestbutt.className = "keinek";
                bestbutt.innerHTML = "Keine Karten";
            }
            //put scroll to id
            if( dd.getDate() == datumsplit[0] && zahm == datumsplit[1] ){
                bestbutt.id = "scrollhere";
                doscroll = true;
            }
            best.appendChild( bestbutt );
            //add layer fro beschreibung
            
            let layer2 = document.createElement( "div" );
            layer2.className = "terminlayer2";
            info.appendChild( layer2 );
            let layer3 = document.createElement( "div" );
            layer3.className = "terminlayer3";
            layer3.onclick = function(){ showORlink( this, data[6] ); };
            info.appendChild( layer3 );
            let layer4 = document.createElement( "div" );
            layer4.className = "terminlayer4";
            info.appendChild( layer4 );

            //first layer
            //monat
            let datum = document.createElement( "div" );
            datum.className = "spiedatum";
            datum.name = data[ 0 ];
            datum.innerHTML = zahlenzumonate[ datumsplit[ 1 ] ] +" "+datumsplit[ 2 ]+"<br>"+tagnamen[ thisdateis.getDay() ];
            //tag
            layer1.appendChild( datum );
            let tag = document.createElement( "div" );
            tag.className = "spietag";
            tag.innerHTML = datumsplit[ 0 ]+".";
            layer1.appendChild( tag );
            //uhrzeit beginn            
            let beginn = document.createElement( "div" );
            beginn.className = "spieuhr";
            if( data[ 1 ] !== "" ){
                beginn.innerHTML = data[ 1 ] + " Uhr";
            } else {
                beginn.innerHTML = " &nbsp;&nbsp;&nbsp;";
            }
            layer1.appendChild( beginn );

            //add data to 
            layer2.innerHTML = data[3];
            layer3.innerHTML = data[4];
            //if( data[3].length < 1 ){
            //    layer4.innerHTML = data[5]+" <br> <br>";
            //} else {
                layer4.innerHTML = data[5];
            //}
        }
    }

   
    corrDots();
    if( doscroll ){
        scrolltoElem();
    }
    corrhorpos();
    if(onece){
        setTimeout( showfirstofmonth, 1000 );
        onece = false;
    }
}

function makespieZ( elemID ){ //all stacked display version (not so nice but mor robust i think)
    console.log("Just make spie Z");
    lemIDtoliveIN = elemID;
	let intoElem = document.getElementById( elemID );
    //add spielplanmenu
    let spiemeni = document.createElement( "div" );
    spiemeni.className = "spiemenu";
    spiemeni.innerHTML = "Spielplan"
    intoElem.appendChild( spiemeni );

    let dd = new Date();
    let zahm = dd.getMonth()+1;
    let zahy = dd.getFullYear();
    let zahmnext = zahm+1;
    if( 12 < zahmnext ){
        zahmnext = zahmnext - 12;
    }
    let zahmnextnext = zahmnext + 1;
    if( 12 < zahmnextnext ){
        zahmnextnext = zahmnextnext - 12;
    }

    let currmonatzahl = zahm.toString();
    if( currmonatzahl.length == 1){
        currmonatzahl = "0" + currmonatzahl;
    }

    let currmonatzahlo = zahmnext.toString();
    if( currmonatzahlo.length == 1){
        currmonatzahlo = "0" + currmonatzahlo;
    }

    let currmonatzahloo = zahmnextnext.toString();
    if( currmonatzahloo.length == 1){
        currmonatzahloo = "0" + currmonatzahloo;
    }
    console.log("This Mo", currmonatzahl, "n", currmonatzahlo, "nn", currmonatzahloo);
    let yearrelevant = false;
    
    for( let c = 0; c < otherCSV.length; c++){
        console.log( zahm, zahy, currmonatzahl == otherCSV[ c ].split("-")[0], currmonatzahl, otherCSV[ c ].split("-")[0]);
        if( (parseInt(otherCSV[ c ].split("-")[1]) === zahy && zahm <= otherCSV[ c ].split("-")[0] ) || 
            (parseInt(otherCSV[ c ].split("-")[1]) !== zahy && zahm > otherCSV[ c ].split("-")[0] ) ){
            yearrelevant = true;
        }
        if( yearrelevant && (currmonatzahl == otherCSV[ c ].split("-")[0] || 
            currmonatzahlo == otherCSV[ c ].split("-")[0] || 
            currmonatzahloo == otherCSV[ c ].split("-")[0]) ){
            let m = document.createElement( "span" );
            if( c < otherCSV.length-1 ){
                m.innerHTML = zahlenzumonate[ otherCSV[ c ].split("-")[0] ] + "&emsp;|";
            } else {
                m.innerHTML = zahlenzumonate[ otherCSV[ c ].split("-")[0] ];
            }
            m.name = otherCSV[ c ];
            console.log("menu monat ", m.name);
            m.onclick = function(){ settoopenZ(this); };
            spiemeni.appendChild( m );
        }
        yearrelevant = false;
    }
    //spiemeni.innerHTML = spiemeni.innerHTML + "&emsp;&emsp;&emsp;&emsp;&emsp;Kartentelefon +49 (361)5982924"
    
    //add displayed month to the menu
    //let mo1 = document.createElement( "span" );
    //mo1.id = "spiedisp";
    //spiemeni.appendChild( mo1 );
    //next month
    //let mo2 = document.createElement( "span" );
    //mo2.id = "spienext";
    //spiemeni.appendChild( mo2 );
    //next next month
    //let mo3 = document.createElement( "span" );
    //mo3.id = "spienextnext";
    //spiemeni.appendChild( mo3 );

    //add spieplan div
    let spieinto = document.createElement("div");
	spieinto.className = "spielplan";
	spieinto.id = "spiedisp";
    let doscroll = false;
    intoElem.appendChild( spieinto );
    let lines = CVStext.split( "\n" );
    for(let l = 1; l < lines.length; l++){
        //Datum 0; Begin 1; Ende 2; Sondertitel 3; Titel 4; Beschreibung 5; Text 6; Kartenstatus 7; Veranstaltungstyp 8; Preis Kind 9; Preis Erw 10; Pries Erw erm 11
        let data = lines[l].split( ";" );
        if( data.length == 12 ){
            //console.log(data);
            //main per termin
            let terminmain = document.createElement( "div" );
            terminmain.className = "termin";
            spieinto.appendChild( terminmain );

            //two horizontal boxes
            let info = document.createElement( "span" );
            info.className = "termininfo";
            terminmain.appendChild( info );
            let best = document.createElement( "span" );
            best.className = "terminbest";
            terminmain.appendChild( best );
             
            //first layer data
            let datumsplit = data[ 0 ].split(".");
			let lastMonat = zahlenzumonate[ datumsplit[ 1 ] ];
            if( datumsplit[ 2 ].length == 2 ){
		        datumsplit[ 2 ] = "20"+datumsplit[2];
			}
		    let thisdateis = new Date( datumsplit[2]+"/"+datumsplit[1]+"/"+datumsplit[0]);

            //add bestell status
            let bestbutt = document.createElement( "div" );
            bestbutt.name = data[4]+";"+datumsplit.join(".")+";"+data[1]+" Uhr;"+data[8]+";"+data[9]+";"+data[10]+";"+data[11];
            //kartenstatus.name = onepartincsvl[ 4 ] +";"+ bd + ";"+ onepartincsvl[1]+";"+ onepartincsvl[ 8 ]+";"+ onepartincsvl[ 9 ]+";"+ onepartincsvl[ 10 ]+";"+ onepartincsvl[ 11 ];
            if( data[7].indexOf( "0" ) != -1 ){
                bestbutt.className = "ausverk";
				bestbutt.innerHTML = "Karten ausverkauft";
            } else if( data[7].indexOf( "1" ) != -1 ){
                bestbutt.className = "bestk";
                bestbutt.innerHTML = "Karten bestellen";
                bestbutt.onclick = function(){Bestellung( bestbutt.name );};
            } else if( data[7].indexOf( "2" ) != -1 ){
                bestbutt.className = "bestk";
                bestbutt.innerHTML = "Einzelplätze";
                bestbutt.onclick = function(){Bestellung( bestbutt.name );};
            } else if( data[7].indexOf( "3" ) != -1 ){
                bestbutt.className = "keinek";
                bestbutt.innerHTML = "Keine Karten";
            }
            best.appendChild( bestbutt );
            //add layer fro beschreibung
            let layer1 = document.createElement( "div" );
            layer1.className = "terminlayer1";
            info.appendChild( layer1 );
            let layer2 = document.createElement( "div" );
            layer2.className = "terminlayer2";
            info.appendChild( layer2 );
            let layer3 = document.createElement( "div" );
            layer3.className = "terminlayer3";
            layer3.onclick = function(){ showORlink( this, data[6] ); };
            info.appendChild( layer3 );
            let layer4 = document.createElement( "div" );
            layer4.className = "terminlayer4";
            info.appendChild( layer4 );

            //first layer
            let tag = document.createElement( "span" );
            tag.className = "spietag";
            tag.innerHTML = tagnamen[ thisdateis.getDay() ];
            layer1.appendChild( tag );
            let datum = document.createElement( "span" );
            datum.className = "spiedatum";
            datum.name = data[ 0 ];
            if( dd.getDate() == datumsplit[0] && zahm == datumsplit[1] ){
                bestbutt.id = "scrollhere";
                doscroll = true;
            }
            datum.innerHTML = "/"+datumsplit.join(".")+"/";
            layer1.appendChild( datum );
            //uhrzeit beginn            
            let beginn = document.createElement( "span" );
            beginn.className = "spieuhr";
            if( data[ 1 ] !== "" ){
                beginn.innerHTML = data[ 1 ] + " Uhr";
            } else {
                beginn.innerHTML = " &nbsp;&nbsp;&nbsp;";
            }
            layer1.appendChild( beginn );

            //add data to 
            layer2.innerHTML = data[3];
            layer3.innerHTML = data[4];
            layer4.innerHTML = data[5];
        }
    }

   
    corrDots();
    if( doscroll ){
        scrolltoElem();
    }
    corrhorpos();
    if(onece){
        setTimeout( showfirstofmonth, 1000 );
        onece = false;
    }
}

/* EDIT A SPIELPLAN */
function editspiepla( elemID ){
    console.log("ed spie");
    
    lemIDtoliveIN = elemID;
    let intoElem = document.getElementById( elemID );
    
    

    //menu of all possible csv
    let allspies = document.createElement("div");
	allspies.className = "spielsmenu";
    console.log(otherCSV);
    for( let c = 0; c < otherCSV.length; c++){
        let m = document.createElement( "span" );
        m.innerHTML = otherCSV[ c ];
        m.onclick = function(){ settoopen(this); };
        allspies.appendChild( m );
    }
    intoElem.appendChild( allspies );

    //add spieplan div
    let spieinto = document.createElement("div");
	spieinto.className = "spielplan";
	spieinto.id = "spiedisp";
    intoElem.appendChild( spieinto );

    

    //send button
    let submispi = document.createElement("div");
	submispi.onclick = function(){sTOs();};
	submispi.innerHTML = "&Auml;ndern!";
    submispi.className = "spiesend";
    intoElem.appendChild( submispi );

    let lines = CVStext.split( "\n" );
    for(let l = 1; l < lines.length; l++){
        //Datum 0; Begin 1; Ende 2; Sondertitel 3; Titel 4; Beschreibung 5; Text 6; Kartenstatus 7; Veranstaltungstyp 8; Preis Kind 9; Preis Erw 10; Pries Erw erm 11
        let data = lines[l].split( ";" );
        if( data.length == 12 ){
            console.log(data);
            //main per termin
            let terminmain = document.createElement( "div" );
            terminmain.className = "termin";
            spieinto.appendChild( terminmain );
            //two horizontal boxes
            let layer1 = document.createElement( "span" );
            layer1.className = "terminlayer1";
            terminmain.appendChild( layer1 );
            let info = document.createElement( "span" );
            info.className = "termininfo";
            terminmain.appendChild( info );
            let best = document.createElement( "span" );
            best.className = "terminbest";
            terminmain.appendChild( best );
            let bestbutt = document.createElement("select");
		    let o0 = document.createElement("OPTION"); 
			o0.value = 0;
			o0.text = "Karten ausverkauft";
			bestbutt.appendChild(o0);
			let o1 = document.createElement("OPTION"); 
			o1.value = 1;
			o1.text = "Karten bestellen";
			bestbutt.appendChild(o1);
			let o2 = document.createElement("OPTION"); 
			o2.value = 2;
            o2.text = "Einzelplätze";
			bestbutt.appendChild(o2);
			let o3 = document.createElement("OPTION"); 
			o3.value = 3;
			o3.text = "Keine Karten";
			bestbutt.appendChild(o3);
			best.appendChild( bestbutt );
			bestbutt.selectedIndex = parseInt(data[7]);

            //add last info to edit the karten information
            let spanmittext8 = document.createElement("div");
			spanmittext8.innerHTML = "<br/>Veranstaltungstyp:";
            spanmittext8.style.fontSize = "13px";
			best.appendChild( spanmittext8 );
            let inputverantyp = document.createElement("input");
            inputverantyp.value = data[8];
			best.appendChild( inputverantyp );
			
            let spanmittext9 = document.createElement("div");
			spanmittext9.innerHTML = "<br/>Preis Kind in &euro;:";
            spanmittext9.style.fontSize = "13px";
			best.appendChild( spanmittext9 );
			let inputpk = document.createElement("input");
			inputpk.value = data[9];
			best.appendChild( inputpk );

            let spanmittext10 = document.createElement("div");
            spanmittext10.style.fontSize = "13px";
			spanmittext10.innerHTML = "<br/>Preis Erwachsener in &euro;:";
			best.appendChild( spanmittext10 );
			let inputperw = document.createElement("input");
			inputperw.value = data[10];
			best.appendChild( inputperw );
			

            let spanmittext11 = document.createElement("div");
            spanmittext11.style.fontSize = "13px";
			spanmittext11.innerHTML = "<br/>Preis Erwachsener erm&auml;&szlig;igt in &euro;):";
			best.appendChild( spanmittext11 );
			let inputperwerm = document.createElement("input");
			inputperwerm.value = data[11];
			best.appendChild( inputperwerm );
			

            //add layer fro beschreibung
            
            let layer2 = document.createElement( "input" );
            layer2.className = "terminlayer2";
            info.appendChild( layer2 );
            let layer3 = document.createElement( "input" );
            layer3.className = "terminlayer3";
            info.appendChild( layer3 );
            let layer4 = document.createElement( "input" );
            layer4.className = "terminlayer4";
            info.appendChild( layer4 );
            let layer5 = document.createElement( "textarea" );
            layer5.className = "terminlayer5";
            info.appendChild( layer5 );


            //first layer data
            let datumsplit = data[ 0 ].split(".");
			let lastMonat = zahlenzumonate[ datumsplit[ 1 ] ];
            if( datumsplit[ 2 ].length == 2 ){
		        datumsplit[ 2 ] = "20"+datumsplit[2];
			}
		    let thisdateis = new Date( datumsplit[2]+"/"+datumsplit[1]+"/"+datumsplit[0]);
            
            //first layer
            //monat
            let datum = document.createElement( "div" );
            datum.className = "spiedatum";
            datum.name = data[ 0 ];
            datum.innerHTML = zahlenzumonate[ datumsplit[ 1 ] ] +" "+datumsplit[ 2 ];
            //tag
            layer1.appendChild( datum );
            let tag = document.createElement( "div" );
            tag.className = "spietag";
            tag.innerHTML = tagnamenKu[ thisdateis.getDay() ] +" "+datumsplit[ 0 ]+".";
            layer1.appendChild( tag );
            //uhr zeit beginn
            let beginn = document.createElement("input");
            beginn.className = "spieuhr";
			beginn.value = data[ 1 ];
            layer1.appendChild( beginn );
            //add data to 
            layer2.value = data[3];
            layer2.style.width = "90%";
            layer3.value = data[4];
            layer3.style.width = "90%";
            layer4.value = data[5];
            layer4.style.width = "90%";
            layer5.value = data[6];
            layer5.style.width = "89.8%";
            layer5.style.height = "120px";
            layer5.style.resize = "vertical";        
        }
    }

    //run the autosave in set time out
    //sTOb
    corrDots();
    corrhorpos();
}



/* INPUT A NEW SPIELPLAN */
function uploadCSV( astring ){
    let request = new XMLHttpRequest();
    request.open("POST", "up.php", true);
    request.setRequestHeader("Content-type", "text/csv;charset=UTF-8");
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            console.log("up done", request.responseText );
            alert("Spielplan hochgeladen!");
            //call waht?
        }
    }
    request.send( astring );
}

function handFileNa( ev ){
    let input = ev.target;
    let reader = new FileReader( );
    reader.onload = function(){
        uploadCSV( CVSname+".csv-----"+reader.result);
    };
    //reader.readAsDataURL( input.files[0] ); //for IMAGES
    reader.readAsText( input.files[0] );
    //new up load or back to spielplan dialog
}

function inpspie( elemID ){
    let mon = prompt("Bitte geben Sie den Monat als Ziffer an (Format: 01, 02, ..., 12)");
    if( mon.length != 2 || parseInt( mon ) == NaN ){
        inpspie( elemID );
    }
    let ja = prompt("Bitte geben Sie das Jahr als Zahl an (Format: 2019, 2020, ...)");
    if( ja.length != 4 || parseInt( ja ) == NaN ){
        inpspie( elemID );
    }
    CVSname = mon+"-"+ja;
    lemIDtoliveIN = elemID;
    let intoElem = document.getElementById( elemID );

    let fS = document.createElement('input');
    fS.setAttribute('type', 'file');
    fS.addEventListener('change', handFileNa, false);
    intoElem.appendChild( fS );
}

/* DELETE a SPIELPLAN */




/*colect data*/

function colectcsvdata( ){
    //write to csvtext
    let astring = "Datum 0; Begin 1; Ende 2; Sondertitel 3; Titel 4; Beschreibung 5; Text 6; Kartenstatus 7; Veranstaltungstyp 8; Preis Kind 9; Preis Erw 10; Pries Erw erm 11\n";
    //Datum 0; 
    let dadatum = document.getElementsByClassName( "spiedatum" );
    //Begin 1; 
    let dabegin = document.getElementsByClassName( "spieuhr" );
    //Ende 2; -notset-

    //Sondertitel 3; 
    let dasondert = document.getElementsByClassName( "terminlayer2" );
    //Titel 4; 
    let datitel = document.getElementsByClassName( "terminlayer3" );
    //Beschreibung 5; 
    let dabesch = document.getElementsByClassName( "terminlayer4" );
    //Text 6; terminlayer5
    let datext = document.getElementsByClassName( "terminlayer5" );
    //Kartenstatus 7;  [0] (select)
    let dabestell = document.getElementsByClassName( "terminbest" );
    //Veranstaltungstyp 8; [2] (input) 

    //Preis Kind 9; [4]

    //Preis Erw 10; [6]

    //Pries Erw erm 11 [8]

    
    for( let e = 0; e < dadatum.length; e++ ){
        astring = astring + dadatum[e].name+";"+dabegin[e].value+";;"+dasondert[e].value+";"+datitel[e].value+";"+dabesch[e].value+";"+datext[e].value+";"+dabestell[e].children[0].value+";"+dabestell[e].children[2].value+";"+dabestell[e].children[4].value+";"+dabestell[e].children[6].value+";"+dabestell[e].children[8].value+"\n";
    }
    return astring;
}

/*save*/

function sTOs(){
    //check pw
    //colectcsvdata and send cvsvtext
    uploadCSV( CVSname+".csv-----"+colectcsvdata() );
}

function sTOb(){
    //colectcsvdata
    //TO BRWOSER
    //  csvname als key und cvstext als value;
}

/*GETTING CSV AND HTTP HELPER*/
function resethttp(){
    let http = null;
    if ( window.XMLHttpRequest ) {
		http = new XMLHttpRequest();
    } else if ( window.ActiveXObject ) {
		http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return http;
}

function getallcsv( fkttocall, elmid ){
    if( otherCSV.length === 0 ){
        //console.log("alle csv getting");
        function returnthis( ){
            //console.log("all csv get", http);
		    if ( http.readyState == 4 && http.status == 200 ) {
                let ent = http.responseText.split(";;");
                //console.log("got it", ent)
                let sortedyear = {};
                if( otherCSV.length == 0 ){
                    for( let e = 2; e < ent.length; e++ ){
                        let onlyfilename = ent[ e ].replace(".csv", "");
                            let moyear = onlyfilename.split("-");
                            //console.log( "aa", ent[ e ], moyear);
                            if( sortedyear[parseInt(moyear[1])] ){
                                sortedyear[parseInt(moyear[1])][parseInt(moyear[0])] = onlyfilename;
                            } else {
                                let obj = {};
                                obj[parseInt(moyear[0])] = onlyfilename;
                                sortedyear[parseInt(moyear[1])] = obj;
                            }
                            //otherCSV.push(ent[ e ].replace(".csv", ""));
                    }
                    //console.log(sortedyear);
                    let onlyyear = Object.keys( sortedyear );
                    console.log(onlyyear);
                    for( let o = 0; o < onlyyear.length; o+=1 ){
                        let months = Object.keys(sortedyear[onlyyear[o]]);
                        for( let m in months ){
                            console.log("push", o, m, onlyyear[o], months[m],sortedyear[onlyyear[o]][months[m]]);
                            otherCSV.push( sortedyear[onlyyear[o]][months[m]] );

                        }
                    }
                    fkttocall( elmid );
                }
		    }
        }
        let http = resethttp( );
        http.open( "GET", "gedi.php", true );
        http.onreadystatechange = returnthis;
        http.send( null );	
    }
}

function getONEcsv( MonatundJahr, acall, elemID ){
    function returnthis( ){
		if ( http.readyState == 4 && http.status == 200 ) {
            CVSname = MonatundJahr;
	    	CVStext = cleantext( http.responseText );
            acall( elemID );
		}
    }
    let http = resethttp( );
    http.open( "GET", "csvbase/"+MonatundJahr+".csv", true );
    http.onreadystatechange = returnthis;
    http.send( null );	
}


/*Bestellungen*/
function Bestellung( astring ){

	let thedatatotranmit = astring.split(";");
    console.log(thedatatotranmit);
	let datumsangabe = new Date();
	let diesertag = parseInt(datumsangabe.getDate());
	let diesermonat = parseInt(datumsangabe.getMonth())+1;
	let diesesjahr = parseInt(datumsangabe.getFullYear());
	let viertageright = true;
	
	let verandatum = thedatatotranmit[1].split(".");
    let taganzmonat = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let tagedistanzzurbestell = 4;
	console.log(verandatum, diesertag, diesermonat, diesesjahr, parseInt(verandatum[0]) == diesermonat,  Math.abs( parseInt(verandatum[1]) - diesertag ) < tagedistanzzurbestell);
	if( parseInt(verandatum[1]) == diesermonat ){
		if( Math.abs( parseInt(verandatum[0]) - diesertag ) < tagedistanzzurbestell ){
			viertageright = false;
		}
	} else {
		if( Math.abs( parseInt(verandatum[1]) - diesermonat ) == 1 ){
			if( ( Math.abs( taganzmonat[diesermonat-1] - diesertag ) + parseInt(verandatum[0]) ) < tagedistanzzurbestell ){
				viertageright = false;
			}
		}
	}
	
	if(viertageright){
		window.open("bestell.php?titel="+thedatatotranmit[0]+"&zeit="+thedatatotranmit[2]+"&datum="+thedatatotranmit[1]+"&verantyp="+thedatatotranmit[3]+"&p1="+thedatatotranmit[4]+"&p2="+thedatatotranmit[5]+"&p3="+thedatatotranmit[6]);
	} else {
		alert("Onlinebestellungen sind leider nur bis vier Tage vor einer Vorstellung möglich. Kurzfristige Kartenbestellungen nehmen wir gerne telefonisch unter 0361 / 598 2924 entgegen.");

	}

}

/*interaktion mit der Darstellung, onclick handler / Darstellung */
function corrDots(){
 //adding to the css
    let addstr = "";
    
    let anzahl = Math.floor( window.innerWidth/16.5 );
    console.log(anzahl)
    for(let t = 0; t < anzahl; t++){
        addstr = addstr + "•";
    }
    console.log(addstr);
    document.styleSheets[0].addRule('.termin:after','content: "'+addstr+'";');
}

function getthismonthandsoon(){
    var d = new Date();
    let currmonatzahloo = (d.getMonth()+1).toString();
    if( currmonatzahloo.length == 1){
        currmonatzahloo = "0" + currmonatzahloo;
    }
    return currmonatzahloo+"-"+d.getFullYear().toString();
}
function settoopen( el ){
    let intoElem = document.getElementById( lemIDtoliveIN );
    intoElem.innerHTML = "";
    
    if( el.name != undefined ){
        console.log(el.name)
        getONEcsv( el.name, makespie, lemIDtoliveIN );
    } else {
        getONEcsv( el.innerHTML, editspiepla, lemIDtoliveIN );
    }
}
function settoopenZ( el ){
    let intoElem = document.getElementById( lemIDtoliveIN );
    intoElem.innerHTML = "";
    
    if( el.name != undefined ){
        console.log(el.name)
        getONEcsv( el.name, makespieZ, lemIDtoliveIN );
    } 
}


function scrolltoElem(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    let posofelem = getpositiononpage( document.getElementById( "scrollhere" ) );
    console.log(posofelem, posofelem[ 0 ]+100);
    document.documentElement.scrollTop = document.body.scrollTop = posofelem[ 0 ]-100;
}

/*function corrMenu(){
    let posofelem = getpositiononpage( document.getElementById( "container" ) );
    document.getElementById( "spiemenu" ).style.top = "0px";
}*/
function corrhorpos(){
    let ele1 = document.getElementById( "spiemenu" );
    let ele2 = document.getElementById( "spiedisp" );
    let posofelem = [0,0];//getpositiononpage( document.getElementById( "header" ).children[0].children[0].children[0] );
    //console.log(posofelem,  document.getElementById( "header" ).children[0].children[0].children[0].style.marginLeft)
    //ele1.style.paddingLeft = document.getElementById( "header" ).children[0].children[0].children[0].style.marginLeft;
    //ele2.style.marginLeft = document.getElementById( "header" ).children[0].children[0].children[0].style.marginLeft;
    //ele1.style.paddingLeft = (posofelem[1]+22).toString()+"px";
    //ele2.style.marginLeft = (posofelem[1]+22).toString()+"px";
}

function closeadiv( elem ){
    elem.parentElement.removeChild( elem );
}

function showORlink( elem, astring ){
    
    if( elem.parentElement.children.length == 3 ){
        if( astring.length > 0 ){ //popup   
            let layertoadd = document.createElement( "div" );
            layertoadd.className = "terminlayeradd";
            layertoadd.innerHTML = astring;
            elem.parentElement.appendChild( layertoadd );

            let clo = document.createElement( "span" );
            clo.className = "close";
            clo.onclick = function(){ closeadiv( layertoadd ); };
            clo.innerHTML = "&#10006;";
            layertoadd.appendChild( clo );
        } else { //linking
            console.log("no string - where to link to ???");
        }
    }
}


/*Helper fkt*/
function getpositiononpage( element ){
  if( element.nodeType ){
	let rect = element.getBoundingClientRect();
	let elementLeft,elementTop; //x F y
	let scrollTop = document.documentElement.scrollTop?
                document.documentElement.scrollTop:document.body.scrollTop;
	let scrollLeft = document.documentElement.scrollLeft?                   
                 document.documentElement.scrollLeft:document.body.scrollLeft;
	elementTop = rect.top+scrollTop;
	elementLeft = rect.left+scrollLeft;
	return [elementTop, elementLeft];
  } else {
  return false;
  }
}

function cleantext( atext ){
    let t1 = atext.split("&rsquo;").join("'");
	let t2 = t1.split("&lsquo;").join("'");
	let t3 = t2.split("&bdquo;").join("'");
	let t4 = t3.split("&ldquo;").join("'");
	let t5 = t4.split("&rdquo;").join("'");
	let t6 = t5.split("&laquo;").join("'");
	let t7 = t6.split("&raquo;").join("'");
	let t8 = t7.split("&lsaquo;").join("'");
	let t9 = t8.split("&rsaquo;").join("'");
	let t10 = t9.split("&ndash").join(" ");
	let t11 = t10.split("&mdash;").join(" ");
	let t12 = t11.split("&nbsp;").join(" ");
	let t13 = t12.split("&quot;").join(" ");
    let t14 = t13.split("&auml;").join("ä");
    let t15 = t14.split("&Auml;").join("Ä");
    let t16 = t15.split("&ouml;").join("ö");
    let t17 = t16.split("&Ouml;").join("Ö");
    let t18 = t17.split("&uuml;").join("ü");
    let t19 = t18.split("&Uuml;").join("Ü");
    let t20 = t19.split("&szlig;").join("ß");
    let t21 = t20.split("&lt;br&gt;").join("<br>");
    let t22 = t21.split("&amp;").join("&");
    return t22;
}
