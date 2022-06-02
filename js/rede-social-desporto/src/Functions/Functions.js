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
  
  