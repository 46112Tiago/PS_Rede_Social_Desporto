export function filterMaterials(material) {
    return material.id
}

export function filterSchedule(schedule) {
    return schedule.openingHour && schedule.closingHour
}
  
  