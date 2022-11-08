class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();

  }

  setupBoard() {
    const board = document.createElement('ul')

    let rowCount = 0;
    let colCount = 0;

    for (let i = 0; i < 9; i++){

      if (i === 3 || i === 6) rowCount++
      if (i === 3 || i === 6) colCount = 0;

      let li = document.createElement('li')
      li.dataset.pos = JSON.stringify([rowCount,colCount]);
      board.appendChild(li)

      colCount++
    }

    this.el.appendChild(board);



    // for (let i = 0; i < board.childNodes.length; i++) {

    //   let currChild = board.childNodes[i]

    //   if (i === 2|| i === 5) rowCount++
    //   if (i === 2 || i === 5) colCount = 0;

      
    // }


    // const dataRow = document.createAttribute('data-row')
    // currChild.setAttribute(dataRow, rowCount)
    // debugger
    // board.childNodes[i].createAttribute('data-column')
    // board.childNodes[i].setAttribute('data-column', colCount)

    // document.querySelector("ul").style.display = 'flex';
    // document.querySelector("ul").style.width = '900px';
    // document.querySelector("ul").style.flexWrap = 'wrap';
    // document.querySelector("li").style.width = "300px";
    // document.querySelector("li").style.border = "4px";
    // document.querySelector("li").style.backgroundColor = "grey";
    // document.querySelector("li").style.backgroundColor = "grey";


    // board.childNodes.forEach(li => {
      
    // });
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
