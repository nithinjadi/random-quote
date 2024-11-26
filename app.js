let quote = document.getElementById("quote")
        const quotes = [
            "నేను ఎంత తెలివిగా ఉన్నానో… ఆ ఒక్క విషయం తట్టుకోలేకే కాలేజీ సెలెక్ట్ చేసుకోలేదు.",
            "ఏంటి వీడు నాకొచ్చినంత వరకూ మంచోడు లాగా ఉన్నాడు… ఇప్పుడు మాత్రం ఎక్కడో ఆఫీసు బడి మారిపోయాడు!",
            "నీ గురించే గదా మాట అడిగాను… రాక్షసుడా నీ వల్ల అర్ధం కాదు.",
            "వెన్నెల లోన ఏదైనా నువ్వు చెప్పినట్టు జరగదు… కానీ చెప్పుకున్నాము సింపుల్ గా తినేయవచ్చు.",
            "ఆఫ్ అవ్వని AC ని నువ్వే పుట్టించావు, నా వెనక తెరిచి పెట్టావ్‌.",
            "బంధం తోటి పప్పు… అంతా డ్రామా పైన డ్రామా!",
            "సాఫ్ట్ వేర్ ఉద్యోగానికి మనం చదువుకున్న టెన్షన్ కంటే ఆ టీ, కాఫీ షాపు టెన్షన్ ఎక్కువ.",
            "నా ఆశ మోసం చేసింది. అందుకే నాతో పెట్టుకోకపోతేనే బాగుండు అన్నీ మానుకున్నాను.",
            "పెళ్లి అంటే ఒక సందేహం… ఎవరికీ తేలలేదు ఎందుకంటే అందులోనే రసముంది.",
            "ప్రేమ ముందు ఆటను వదిలితే, బాధల్లో బాటలేదు.",
            "అతని తెలివితేటలు చూసి సైంటిస్టులు కూడా షాక్ అవుతున్నారు.",
            "నీ ఫోన్ వదిలేసి మనం ముచ్చటించుకోగలం అంటే సూర్యుడు పశ్చిమానికే వస్తాడు!",
            "ఇలాంటి ఫ్రెండ్స్ ఉంటే శత్రువులకే పనిలేదు.",
            "నువ్వు నాతో కాఫీకి రావా అంటే రాను, ఎందుకంటే తాగించేది నేను.",
            "వారు తన పిల్లల కోసం ఎవరూ ఇంత అద్దికిపోతారు అనుకుంటే బాగా ప్లాన్ చేసుకున్నారు.",
            "చాప్టర్ తెరిచాడు పుస్తకం మాత్రం భయపడి మూసేస్తుంది.",
            "నాకే అంత ఇష్టం అయితే తనికెందుకు రాయాలో తెలుసుకోవాల్సిందే!",
            "ఎవరన్నా సరే తినాలనే ఆలోచన ఆపుకోలేం.",
            "అతను అప్పుడు టెస్ట్ రాశాడు, ఫలితం ఇంకా రాలేదు!",
            "గడియారం టిక్ టాక్ గా నడుస్తుంటే గుండె మెల్లగా ఊపిరిపీలుస్తుంది.",
            "నీకు తెలిసినంతవరకే తెలియడం ఇష్టం లేదు అన్న మాటలు వింటుంటే భయపడతా.",
            "సరదా కొద్దీ సూర్యుడు తేలికగా తీసుకున్నాడు.",
            "చాలా కాలం తర్వాత కలిస్తే అతని ప్రవర్తన చాలా మారిపోయింది!",
            "జీవితం భయంకరమైనదే, కానీ తల్లిదండ్రుల ఫోన్ కాల్ వెనకాల దాచుకున్నంత పద్దతిగా ఉండాలి.",
            "సోషల్ మీడియాలో ఉన్నట్టు బయట ఉండలేం, అందుకే బయటి ప్రపంచానికి దూరం.",
            "వాళ్ళ నచ్చని షిర్ట్ చూస్తే ముందుగా చప్పడం అంటే చెప్పడం లేదు.",
            "పిల్లలు ఇంత చల్లగా ఎందుకు ఉంటారో కానీ, మా పిల్లలు పక్కా అదే ఉండరు!",
            "ఇలా మాట్లాడితే ఇక వాళ్ళ ఎగోనేంటా?",
            "ఇవాళ ఎంత పనిచేసినా చిల్లరే ఎలాగంటే ఇప్పుడే అర్థం కాదు.",
            "నువ్వే బలంగా ఉండు, అర్థం చేసుకో, డైలాగులే గానీ జనం ఎప్పుడో అలసిపోతారు!"     
        ];
        function getQuote() {
            let singleQuote = Math.floor(Math.random() * quotes.length)
            console.log(singleQuote);
            quote.textContent = quotes[singleQuote]
        }