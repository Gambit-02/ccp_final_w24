var img = document.querySelector(".travel-grid > div > img");

document.querySelector(".travel-grid > div > img").addEventListener("click", function() {
    this.style.width = this.style.width*2;
    this.style.height = this.style.height*2;
    sleep(2000);
    this.style.width = this.style.width/2;
    this.style.height = this.style.height/2;
});