export default class Bus {

  constructor () {
    this.callback = {}
  }
  $on (name, fn) {
    this.callback[name] = this.callback[name] || []
    this.callback[name].push(fn)
  }
  $emit (name, args) {
    if (this.callback[name]) {
      this.callback[name].forEach(cb => cb(args))
    }
  }
}
