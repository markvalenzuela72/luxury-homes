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