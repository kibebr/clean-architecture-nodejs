export default function buildMakeAfazer()
{
    return function makeAfazer({
        id,
        title,
        color,
        dueDate,

    })  
    {

        if(id === ''){
            throw new Error("Afazer must have an ID.");
        }

        if(title === ''){
            throw new Error("Afazer must have a title");
        }

        return Object.freeze({
            getTitle: () => title,
            getColor: () => color,
            getDueDate: () => dueDate
        });
    };
}