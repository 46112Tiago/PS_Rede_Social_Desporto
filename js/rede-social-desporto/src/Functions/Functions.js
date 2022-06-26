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
 
/*

The MIT License (MIT)

Copyright (c) 2022 by Abdul Hassan (https://codepen.io/abdhass/pen/jdRNdj)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


export function convertHexToImage(hex) {
    if (hex.length % 2) {
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

  