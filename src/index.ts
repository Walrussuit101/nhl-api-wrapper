import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

NhlApiWrapper.conference().then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})

NhlApiWrapper.franchise({
    where: {
        teamName: "Penguins"
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})

NhlApiWrapper.venue({
    where: {
        id: 5064
    }
}).then(data => {
    console.log(data);
})

export { ApiBaseUrl };
export default NhlApiWrapper;
