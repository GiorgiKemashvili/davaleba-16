// Task 1:  daweret punktsia, romelits parametrad miighebs ert mtel ritskhvs da daabrunebs true -s tu ritskhvi aris 3is jeradi , kholo tu araa mashn false-s 
function isMultipleOf3(number) {
    return number % 3 === 0; // abrunebs true  tu ritskhvi 3-is namravlia, winaaghmdeg shemtkhvevashi mtsdaria
}

/* Task 2:  daweret punqcia, getCurrencySymbolFromCode romelic  
parametrad miighebs valutis kods (USD an EUR an GEL) 
stringis sakhit da daabrunebs am kodis shesabamis simbolos ($, €, l) 
tu iseti kods gadavtsem romlis simbolots ar makvs daabrunos kodi. */
function getCurrencySymbolFromCode(code) {
    switch (code) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GEL':
            return 'l';
        default:
            return 'Unknown'; // abrunebs 'Unknown' 
    }
}

// Task 3: punktsia mtsire strikonis didze gadaqcevistvis
function convertToUpperCase(lowerCaseString) {
    return lowerCaseString.toUpperCase(); // abrunebs strikonis did versias
}

// Task 4: punktsia mogebis procentis gamosatvlelad
function calculateProfitPercentage(sellingPrice, askingPrice) {
    let profit = sellingPrice - askingPrice; // gamoitvlis mogebas
    return (profit / sellingPrice) * 100; // gamoitvlis mogebas procentulad
}

// Task 5:punkcia masividan luwi ritskhvebis piltraciistvis
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0); // abrunebs mkholod luwi ritskhvebs .filter() metodis gamokenebit
}

// Task 6: funqcia obieqtebis masivshi konkretuli sakhelis mqone obiektis mosadzebnad
function findObjectByName(objectsArray, name) {
    return objectsArray.find(obj => obj.name === name); // aghmochenis shemtkhvevashi abrunebs obiekts mititebuli sakhelit
}
