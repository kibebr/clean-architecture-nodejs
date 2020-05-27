import makeFindAfazeres from "./find_afazeres.js";
import makeAddAfazer from "./add_afazer.js";

import afazeresDB from "../../../db/index.js";

const findAfazeres = makeFindAfazeres({afazeresDB});
const addAfazer = makeAddAfazer({afazeresDB});

const afazeresService = Object.freeze({
    addAfazer,
    findAfazeres
});

export default afazeresService;
export {findAfazeres, addAfazer};