import mushroom from "mushroomjs";
import "mushroomjs-auth-rn";
import "mushroomjs-file";
import LinkApi from "../Config/ServerConfig";

mushroom._defineAsyncResource({
    name: 'dealer',
    actions: {
        findMany: { clientCache: false },
        findById: { clientCache: true },
        createOne: {},
        createMany: {},
        updatePartially: {},
        deleteOne: {}
    },
    views: {}
});
mushroom._defineAsyncResource({
    name: 'rouletteTable',
    actions: {
        findMany: { clientCache: false },
        findById: { clientCache: true },
        createOne: {},
        createMany: {},
        updatePartially: {},
        deleteOne: {}
    },
    views: {}
});
mushroom._defineAsyncResource({
    name: 'rouletteNumber',
    actions: {
        findMany: { clientCache: false },
        findById: { clientCache: false },
        createOne: {},
        createMany: {},
        updatePartially: {},
        deleteOne: {}
    },
    views: {}
});
mushroom.$using(LinkApi);
export default mushroom;