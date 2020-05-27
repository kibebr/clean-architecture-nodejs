import 
{
    addAfazer,
    findAfazeres,
} from "../services/index.js";

import makeGetAfazeres from "./get_afazeres.js";
import makePostAfazer from "./post_afazer.js";

const getAfazeres = makeGetAfazeres({findAfazeres});
const postAfazer  = makeGetAfazeres({findAfazeres});

const afazeresController = Object.freeze({
    getAfazeres,
    postAfazer
});

export default afazeresController;
export {getAfazeres};