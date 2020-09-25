import app from "./app";
import { PORT } from "./constants/pokeApi.constants";
import { connect } from "../src/module/connection";
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));