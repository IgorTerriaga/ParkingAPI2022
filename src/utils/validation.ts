function validaPlaca(placa) {
    const regexPlacaMercosulCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
    const regexPlacaMercosulMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
    const regexOld = /^[a-zA-Z]{3}[0-9]{4}$/;
    if (regexPlacaMercosulCarro.test(placa) || regexPlacaMercosulMoto.test(placa) || regexOld.test(placa)) {
        return true;
    }
    return false;
}

interface IPosicao {
    lat: number
    lng: number
}

function deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(position1: IPosicao, position2: IPosicao): number {
    const R: number = 6371;
    const dLat: number = deg2rad(position2.lat - position1.lat);
    const dLng: number = deg2rad(position2.lng - position1.lng)
    const a: number = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(deg2rad(position1.lat))
        * Math.cos(deg2rad(position1.lat))
        * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseInt((R * c * 1000).toFixed());
}

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

function minPosArray(array: number[]): number {
    let posMin = 0;
    let min = array[0];
    array.forEach((a: number, index: number) => {
        if (a < min) {
            min = a;
            posMin = index;
        }
    });
    return posMin;

}

export { validaPlaca, getDistanceFromLatLonInKm, minPosArray, getRandomInt };