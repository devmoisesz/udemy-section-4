function calculator() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.captureClicks()
    this.captureEnter()
  };

  this.captureEnter = () => {
    this.display.addEventListener('keypress', event => {
        if(event.keyCode === 13){
            this.result()
        } 
    })
  }

  this.captureClicks = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("btn-num")) this.addNumberDisplay(element)

      if (element.classList.contains("btn-clear")) this.clear()

      if (element.classList.contains("btn-del")) this.deleteone()

      if (element.classList.contains("btn-eq")) this.result()
    });
  };

  this.addNumberDisplay = (element) => {
    this.display.value += element.innerText
    this.display.focus()
  }

  this.clear = () => (this.display.value = "")

  this.deleteone = () => (this.display.value = this.display.value.slice(0, -1));

  this.result = () => {
    try {
      const conta = eval(this.display.value)
      if (!conta) {
        alert("Conta inválida")
        return;
      }
      this.display.value = conta;
    } catch (error) {
      alert("Conta inválida")
      return;
    }
  };

}

const calculadora = new calculator();
calculadora.start();
