import { UAParser } from 'ua-parser-js';
import countryList from 'country-list';
/**
 * Translate an adress to a readable adress
 * @param {object} adress - The adress as an object with fields {city, line1, line2, country, postal_code, state}.
 * @returns {string} The formatted adress.
 */
function getFormattedAddress(address) {
    const { line1, line2, city, postal_code, state, country } = address;
    let formattedAddress = line1;
    if (line2) {
        formattedAddress += ", " + line2;
    }
    formattedAddress += ", " + city + ", " + postal_code;
    if (state) {
        formattedAddress += ", " + state;
    }

    const countryName = countryList.getName(country);
    formattedAddress += ", " + countryName;

    return formattedAddress;
}
function getBrowserData() {
    let parser = new UAParser();
    let parserResults = parser.getResult();

    // Handle unknown device type
    let deviceType = parserResults.device.type;
    if (!deviceType || deviceType === 'unknown') {
        deviceType = 'desktop';
    }

    // Construct browser and device information
    const browser = parserResults.browser.name;
    const device = `${deviceType} ${parserResults.device.vendor} ${parserResults.device.model}`;

    // Return the browser and device information
    return {
        browser,
        device,
    };
}

function formatAmount(amount, currency) {
    const formattedAmount = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0, // Set minimum fraction digits to 0
        maximumFractionDigits: 2 // Set maximum fraction digits to 2
    }).format(amount / 100);

    return formattedAmount;
}

/**
 * Format a timestamp into a readable date string based on the specified format type.
 * @param {number} timestamp - The timestamp object in the form { seconds: number, nanoseconds: number }.
 * @param {number} formatType - The format type: 0 for '12 July 2023', 1 for '12/07/2023', 2 for '12/07/2023 at 12:47'.
 * @returns {string} The formatted date string based on the specified format type.
 */
function formatTimestamp(timestamp, type, locale) {
    const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds

    switch (type) {
        case 0:
            return date.toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });

        case 1:
            return date.toLocaleDateString(locale, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });

        case 2:
            return date.toLocaleString(locale, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            });

        default:
            return date.toLocaleString();
    }
}



export {
    formatAmount,
    getBrowserData,
    formatTimestamp,
    getFormattedAddress
}