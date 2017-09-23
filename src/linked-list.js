const Node = require('./node');

class LinkedList {
    constructor() {
     this.length=0;
     this.a=null;
     this.z=null;
    }

    append(data) {
    var node = new Node(data);
    if(this.length){
      this.z.next=node;
      node.previous=this.z;
      this.z=node;
      }
    else{
      this.z=node;
      this.a=node;
    }
    this.length++;
    return this;

    head() {
    return this.a.data; 
    }

    tail() {
    return this.z.data; 
    }

    at(index) {
    var b=0;
    var c;
      if(!c) {
        c=this.a;
        b++;
      }
      while(b<=index){
        c=c.next;
        b++;
      }
      return c.data;
    }

    insertAt(index, data) {
    var b=0;
    var c;
    var newNode=new Node(data);
      if(!c) {
        c=this.a;
        b++;
      }
      while(b<=index){
        c=c.next;
        c.previous.next=newNode;
        newNode.previous=c.previous;
        c.previous=newNode;
        newNode.next=c;
        c++;
      }
      return this;
    }

    isEmpty() {
    return !this.length;
    }

    clear() {
    this.length=0;
    this.a.data=null;
    this.z.data=null;
    return this;
    }

    deleteAt(index) {
    var b=0;
    var c,d,e;
    if((this.length===1)||(!this.length)) return this;
    if(!c) {
      c=this.a;
      b++;
    }
    while(b<=index){
      c=c.next;
      b++;
    }
    d=c.previous;
    e=c.next;
    d.next=e;
    e.previous=d;
    this.length--;
    return this;
    }

    reverse() {
     var c=this.z;
     this.a=c;
     for(var i=0;i<this.length;i++){
       var next=c.next;
       c.next=c.previous;
       c.previous=next;
       if(c.next){
         c=c.next;
         continue;
       }
     }
     this.z=c;
     return this;
   }

    indexOf(data) {
    var i=0;
    var c;
    if(!c) {
      c=this.a;
      if(c.data===data){
        return i;
      }
      i++;
    }
    for(i;i<this.length;i++){
      c=c.next;
      if(c.data===data){
        return i;
      }
    }
    return -1;
  }
}

module.exports = LinkedList;
(function(){
    const list = new LinkedList();
        function f() {
            list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);
        }
        f();
})
