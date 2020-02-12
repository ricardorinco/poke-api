import app from './app';

import { PORT } from './constants/poke-api.constants';

app.listen(PORT, () => {
    console.log(`Server started listening to port ${PORT}`);
});