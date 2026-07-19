'use strict';

{

  const tabBtn = document.querySelectorAll('.btns');
  const listElem = document.querySelectorAll('.lists');

  const change = (e) => {
    const clickedBtn = e.currentTarget;
    const targetElem = document.getElementById(clickedBtn.dataset.target);
    tabBtn.forEach((tab) => {
      tab.classList.remove('btn-active');
    });
    listElem.forEach((list) => {
      list.classList.remove('list-active');
    });

    clickedBtn.classList.add('btn-active');
    targetElem.classList.add('list-active');
  };

  tabBtn.forEach((btn) => {
    btn.addEventListener('click', change);
  });


}