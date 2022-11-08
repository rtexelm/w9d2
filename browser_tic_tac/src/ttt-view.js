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

    // board.childNodes.forEach(li => {
      
    // });
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
