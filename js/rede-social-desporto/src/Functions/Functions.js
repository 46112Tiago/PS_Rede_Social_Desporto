export function filterMaterials(material) {
    return material.id
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
  
  