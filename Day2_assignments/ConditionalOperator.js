let browsername = launchBrowser('dsd');
function launchBrowser(browsername) {
    if (browsername == 'Chrome') {
        console.log('Chrome Browser');
    }
    else if (browsername== 'Firefox') {
         console.log('Firefox browser');
     }
    else {
        console.log('nothing launched');
    }
}

function runTest(type) {
    switch (type) {
        case 'smoke':
            console.log("smoke test");
            break;
        case 'sanity':
            console.log("sanity test");
            break;
        case 'regression':
            console.log("regression test");
            break;
        default:
            console.log('nothing');
            break;
    }
}
runTest('dhsfhj');