
class Channel {
    #channelSubscriber = []
    #lastMessage = ""

    attach(o) {
        this.#channelSubscriber.push(o)
    }

    detach(o) {}

    notify() {
        for (let suscriber of this.#channelSubscriber) {
            suscriber.update()
        }
    }

    addNew(message) {
        this.#lastMessage = message
        this.notify()
        console.log("New message to channel")
    }

    lastMessage() {
        return this.#lastMessage
    }
}

class Subscriber {

    constructor(observable = null) {
        this.observable = observable
    }

    update() {
        console.log("New update")
        console.log(this.observable.lastMessage())
    }
}

let channel = new Channel()
let s1 = new Subscriber(channel)
let s2 = new Subscriber(channel)

channel.attach(s1)
channel.attach(s2)

channel.addNew("My first message")