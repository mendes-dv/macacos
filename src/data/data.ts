// Define a simple interface for representing a person
interface Person {
    uuid: number;
    latitude: string;
    longitude: string;
    description: string;
}

// Define an array of Person objects
export const people: Person[] = [
    {
        uuid: 1,
        latitude: '-26.8560346',
        longitude:"-29.239188",
        description: 'Description 1'
    },
    {
        uuid: 2,
        latitude: '-16.8560346',
        longitude:"-49.239189",
        description: 'Description 2'
    },
    {
        uuid: 3,
        latitude: '-16.8560346',
        longitude:"-42.239189",
        description: 'Description 3'
    },
    {
        uuid: 4,
        latitude: '-21.8560346',
        longitude:"-21.239188",
        description: 'Description 1'
    },
];

// Define an interface for representing data containing an array of Person objects
interface Data {
    properties: Person[];
}

// Export the Data interface
export default Data;