export function filterMaterials(material) {
    return material.id || material.other
}

export function filterSports(sports) {
    return sports.id 
}

export function filterSchedule(schedule) {
    return schedule.openingHour && schedule.closingHour
}

export function converttoSportsArray(sportsId) {
    let sports = []
    sportsId.map((sportObj,idx)=>{
        sports.push({id:parseInt(sportObj)})
    })
    return sports
}

export function convertToFieldArray(htmlFields) {
    let fields = []
    for(let i = 0; i < htmlFields.length; i++){
        const nameValue = htmlFields[i].value
        if(nameValue != ''){
            fields.push({name:nameValue})
        }
        
    }
    return fields
}
  
export function convertHexToImage(hex) {
    if (hex.length % 2) {
        console.log("cleaned hex string length is odd.");
        return;
    }

    let binary = new Array();
    for (let i = 0; i < hex.length / 2; i++) {
        let h = hex.substr(i * 2, 2);
        binary[i] = parseInt(h, 16);
    }

    let byteArray = new Uint8Array(binary);

    return byteArray
}

  