let converter = new showdown.Converter()

let arrayOfCodeSampleHolders = Array.from(document.querySelectorAll('.code'))

let editCodeSampleHolder = codeSampleHolder => {
  let id = codeSampleHolder.id
  console.log(id)
  let domEl = document.querySelector(`#${id}`)
  domEl.innerHTML =  converter.makeHtml(codeSamples[codeSampleHolder.id])
}

arrayOfCodeSampleHolders.map(editCodeSampleHolder)