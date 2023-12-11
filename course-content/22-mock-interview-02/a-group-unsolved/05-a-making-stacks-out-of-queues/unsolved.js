var Queue = function(data = []) {
  
  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
   return this.data.shift()
  }

  this.peek = function() {
    return this.data[0]
  }

}

var Stack = function() {

  this.queue1 = new Queue([1,2,3,4,5,6,7])
  
  this.add = function() {
    this.data.queue1.unshift()
  }
  this.remove = function() {
    return this.data.queue1.shift()
  }
  this.peek = function() {
    return this.data.queue1[0]
  }
}