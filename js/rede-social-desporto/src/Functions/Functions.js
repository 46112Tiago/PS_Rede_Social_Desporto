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

export function createMessage(typeMessage,message) {
    const div1 = document.createElement('div')
    div1.className = `messages${0}`
    const div2 = document.createElement('div')
    const p = document.createElement('p')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    p.className = typeMessage
    p.innerHTML = message
    div2.appendChild(p)
    div2.appendChild(br1)
    div2.appendChild(br2)
    div2.appendChild(br3)
    div1.appendChild(div2)
    return div1
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

  