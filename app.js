const express = require('express');
const app = express();

const ghanaRegions = [
    { state: 'Oti Region', capital: 'Dambai' },
    { state: 'Bono East Region', capital: 'Techiman' },
    { state: 'Ahafo Region', capital: 'Goaso' },
    { state: 'Bono Region', capital: 'Sunyani' },
    { state: 'North East Region', capital: 'Nalerigu' },
    { state: 'Savannah Region', capital: 'Damango' },
    { state: 'Western North Region', capital: 'Sefwi Wiawso' },
    { state: 'Western Region', capital: 'Sekondi' },
    { state: 'Volta Region', capital: 'Ho' },
    { state: 'Greater Accra Region', capital: 'Accra' },
    { state: 'Eastern Region', capital: 'Koforidua' },
    { state: 'Ashanti Region', capital: 'Kumasi' },
    { state: 'Central Region', capital: 'Cape Coast' },
    { state: 'Northern Region', capital: 'Tamale' },
    { state: 'Upper East Region', capital: 'Bolgatanga' },
    { state: 'Upper West Region', capital: 'Wa' }
];

app.get('/', (req, res) => {
    res.json(ghanaRegions);
});

app.listen(3000, () => {
    console.log('Listening');
});
