function propertiesData() {
    return {
        properties: [],

        async init() {
            try {
                const response = await fetch(hostNameUrl() + 'properties.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                this.properties = data.properties;

                if (typeof initFlowbite === 'function') {
                    initFlowbite();
                } else {
                    console.warn('initFlowbite() is not defined.');
                }

                console.log(this.properties); // Debugging output
            } catch (error) {
                console.error('Error fetching property data:', error);
            }
        }
    };
}

function daysAgo(date) {
    const listedDate = new Date(date);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - listedDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function hostNameUrl() {
    const hostname = window.location.hostname;
    return hostname !== '127.0.0.1'
        ? 'https://raw.githubusercontent.com/markvalenzuela72/luxury-homes/refs/heads/main/'
        : './';
}