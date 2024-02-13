const log = {
    count : 100,
    save: function () {
        console.log(this.count);
    }
}
setTimeout(log.save, 500);