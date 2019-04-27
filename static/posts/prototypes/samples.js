let codeSamples = {
  "es5-code-prototypes-1": `
  \`\`\`javascript
  function Person(name){
    this.name = name
  }

  var johnSmith = new Person()
  johnSmith.sayHi()
  \`\`\`
  `,
  "es6-code-prototypes-1": `
  \`\`\`javascript
  class Person {
    constructor(name) {
      this.name = name
    }

    sayHi() {
      console.log(\`Hi! I'm $\{this.name\}\`)
    }
  }
  const johnSmith = new Person()
  johnSmith.sayHi()
  \`\`\`
  `
}