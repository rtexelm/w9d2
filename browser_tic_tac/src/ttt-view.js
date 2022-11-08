class View {
  constructor(game, el) {}

  setupBoard() {
    const board = document.createElement('ul')
    for (let i = 0; i <= 9; i++){
      // let space = document.createElement('li')
      let li = document.createElement('li')
      board.appendChild(li)
    }

    let rowCount = 0;
    let colCount = 0;

    for (let i = 0; i < board.childNodes.length; i++) {

      if (i === 2|| i === 5) rowCount++
      if (i === 2 || i === 5) colCount = 0;

      board.childNodes[i].createAttribute('data-row')
      board.childNodes[i].setAttribute('data-row', rowCount)

      board.childNodes[i].createAttribute('data-column')
      board.childNodes[i].setAttribute('data-column', colCount)

      colCount++
    }

    document.querySelector("ul").style.display = 'flex';
    document.querySelector("ul").style.width = '900px';
    document.querySelector("ul").style.flexWrap = 'wrap';
    document.querySelector("li").style.width = "300";
    document.querySelector("li").style.border = "4px";
    document.querySelector("li").style.backgroundColor = "grey";
    document.querySelector("li").style.backgroundColor = "grey";


    // board.childNodes.forEach(li => {
      
    // });
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
