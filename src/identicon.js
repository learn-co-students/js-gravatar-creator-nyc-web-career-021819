class Identicon {

  constructor(string) {
    this.hashedArr = md5.array(string)
    this.r = this.hashedArr[0]
    this.g = this.hashedArr[1]
    this.b = this.hashedArr[2]
    this.booleanArr = this.hashedArr.slice(0, 15).map(el => el % 2 === 0)
  }

}
