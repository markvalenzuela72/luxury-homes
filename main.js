function propertiesData() {
    return {
        properties: [],

        async init() {
            try {
                const response = await fetch('properties.json');
                const data = await response.json();
                this.properties = data.properties;
                initFlowbite();
                console.log(this.properties)
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
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
}