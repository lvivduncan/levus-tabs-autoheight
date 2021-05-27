// 27.05.2021
{
    const buttons = document.querySelectorAll('.levus-tabs-autoheight .header span');
    const pane = document.querySelectorAll('.levus-tabs-autoheight .pane');

    // quantity
    const count = document.querySelector('.panes').childElementCount;

    const panes = document.querySelector('.levus-tabs-autoheight .panes');
    panes.style.width = `${100 * count}%`;
    panes.style.gridTemplateColumns = `repeat(${count}, 1fr)`;


    buttons[0].classList.add('active');
    pane[0].classList.add('active');        

    buttons.forEach((item,index) => {

        item.addEventListener('click', () => {
            buttons.forEach(item => item.classList.remove('active'));
            buttons[index].classList.add('active');

            pane.forEach(item => {
                item.style.transform = `translateX(${-100 * index}%)`;
            });
        });

    });

    // todo: кілька вкладок на сторінці
    // todo: відключення на мобільних екранах
}