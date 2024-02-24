'use strict';

// Global Constants
const osInfo = document.querySelector('.os-info');
const userLanguage = document.querySelector('.user-lang')
const browserInfo = document.querySelector('.browser-info');
const pageWidth = document.querySelector('.page-w');
const pageHeight = document.querySelector('.page-h');
const pageOrientation = document.querySelector('.orientation');
const batteryInfo = document.querySelector('.battery-info');
const batteryStatus = document.querySelector('.battery-status');
const connectionStatus = document.querySelector('.connection-status');
const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");

// Function to check the client OS
const readOS = () => {
    const userAgent = navigator.userAgent;
    let osName;
    switch (true) {
    case userAgent.includes('Windows'):
        osName = 'Windows';
        break;
    case userAgent.includes('Mac'):
        osName = 'Mac OS';
        break;
    case userAgent.includes('Linux'):
        osName = 'Linux';
        break;
    case userAgent.includes('iOS'):
        osName = 'iOS';
        break;
    case userAgent.includes('Android'):
        osName = 'Android';
        break;
    default:
        osName = 'Unknown';
        break;
    }
// Returns the Client OS name
osInfo.innerText = `OS: ${osName}`;
}
// Reads the OS name at page load
window.addEventListener('load', readOS);

// Function to get the Client Language
const getUserLanguage = () => {
    const language = navigator.language;

    // Returns the Client set language
    userLanguage.innerText = `Language: ${language}`; 
}

window.addEventListener('load', getUserLanguage);


// Function to check the client Browser
const readBrowser = () => {
    const userAgent = navigator.userAgent;
    let browserName;

    // Compares the browser name to navigator.userAgent
    switch (true) {
        case userAgent.includes('Safari') && !(userAgent.includes('Chrome') || userAgent.includes('Edg')):
            browserName = 'Safari';
            break;
        case userAgent.includes('OPR'):
            browserName = 'Opera';
            break;
        case userAgent.includes('Firefox'):
            browserName = 'Firefox';
            break;
        case userAgent.includes('Edg'):
            browserName = 'Edge';
            break;
        case userAgent.includes('Chrome'):
            browserName = 'Chrome';
            break;
        default:
            browserName = 'Unknown';
            break;
    }
    // Returns the browser name
    browserInfo.innerText = `Browser: ${browserName}`;
}

window.addEventListener('load', readBrowser);

// Function to read window width and height and returns 
// the orientation as window's size change
const readWindow = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    pageWidth.innerText = `Width: ${width}px`;
    pageHeight.innerText = `Height: ${height}px`;
    if (width >= (height + 100)) {
        pageOrientation.innerText = `Orientation: Landscape`;
    } else  pageOrientation.innerText = `Orientation: Portrait`;
}

window.addEventListener('load', readWindow);
window.addEventListener('resize', readWindow);

//  Function to get battery level
const getBattery = () => {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            batteryInfo.innerText = `Level: ${battery.level * 100}%`;
        })
    } else batteryInfo.innerText = `Level: Not Available`;
}

window.addEventListener('load', getBattery);

// Function to get the Battery charging status
function getBatteryStatus() {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function(battery) {
        updateBatteryStatus(battery.charging);
  
        battery.addEventListener('chargingchange', function() {
          updateBatteryStatus(battery.charging);
        });
      })
    } else batteryStatus.innerText = `Status: Not available`;
}

function updateBatteryStatus(isCharging) {
    if (isCharging) {
        batteryStatus.innerText = `Status: Charging`;
    } else batteryStatus.innerText = `Status: Not Charging`;
}

window.addEventListener('load', getBatteryStatus);

//  Function to get the network status on page load and 
//  returns the status with color
window.addEventListener('load', () => {
    if (navigator.onLine){
        connectionStatus.innerText = `ONLINE`;
        styleTag.innerHTML = `
            :root {
                --status: rgb(37, 157, 61);
            }
            `;
            headTag.appendChild(styleTag);
    } else {
        connectionStatus.innerText = `OFFLINE`;
        styleTag.innerHTML = `
            :root {
                --status: rgb(240, 167, 39);
            }
            `;
            headTag.appendChild(styleTag);
    }
});

// Function to check the active network online status
window.addEventListener('online', () => {
    connectionStatus.innerText = `ONLINE`;
    styleTag.innerHTML = `
        :root {
            --status: rgb(37, 157, 61);
        }
        `;
        headTag.appendChild(styleTag);
});

// Function to check the active network offline status
window.addEventListener('offline', () => {
    connectionStatus.innerText = `OFFLINE`;
    styleTag.innerHTML = `
            :root {
                --status: rgb(240, 167, 39);
            }
            `;
            headTag.appendChild(styleTag);
});
