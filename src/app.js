const itemBtn_1 = document.getElementById('Item_0_SwitchBtn')
const itemBtn_2 = document.getElementById('Item_1_SwitchBtn')
const contentItem = document.getElementById('contentItem')
const windowShow = document.getElementById('image-show')
const innerWind = document.getElementById('innerWind')

innerWind.onclick = () => {
    return;
}
contentItem.style.transition = ".2s"

// States
const stateManger = {
    btnSwitcherState: {
        useNow: itemBtn_1.id
    },
    'Item_0_SwitchBtn': `<div class="grid grid-cols-2 gap-[40px] sm:gap-[10px] md:grid-cols-1 md:max-w-full max-w-[1240px] mx-auto">
    <img src="./images/sm.aspx-2.jpeg" alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
    <img src="./images/sm.aspx.jpeg"   alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
    <img src="./images/sm.aspx-3.jpeg" alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
    <img src="./images/sm.aspx-4.jpeg" alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
    <img src="./images/sm.aspx-5.jpeg" alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
    <img src="./images/sm.aspx-6.jpeg" alt="image-info-exposition" class="w-[600px] mx-auto h-[350px] sm:h-[180px] object-cover snap-center rounded-[15px] sm:mb-[5px]" />
</div>`,
    'Item_1_SwitchBtn': `<div class="flex justify-between max-w-[1240px] mx-auto md:flex-col md:gap-[30px]">
    <div class="w-[580px] md:w-full md:mx-auto">
        <img src="./images/image 712.png" alt="book-1" class="md:w-full">
        <h2 class="mainText mt-[20px] text-[36px] text-white leading-[37px] md:text-[24px] md:leading-[25px] sm:text-[16px] sm:leading-[17px] md:mt-[20px] sm:mt-[10px]">Вайна. Юнацтва. Подзвіг</h2>
    </div>
    <div class="w-[580px] md:w-full md:mx-auto md:mt-[30px]">
        <img src="./images/image 711.png" alt="book-1" class="md:w-full">
        <h2 class="mainText mt-[20px] text-[36px] text-white leading-[37px] md:text-[24px] md:leading-[25px] sm:text-[16px] sm:leading-[17px] md:mt-[20px] sm:mt-[10px]">Маленькие солдаты большой войны</h2>
    </div>
</div>`
}


// Handles 
const handleSetNewBtnSwitcherState = (newState, deactivate, activate) => {
    deactivate.classList.remove('opacity-100')
    deactivate.classList.add('opacity-40')
    activate.classList.add('opacity-100')
    activate.classList.remove('opacity-40')
    contentItem.style.opacity = '0'
    setTimeout(() => {
        contentItem.style.opacity = '1'
        contentItem.innerHTML = stateManger[activate.id]
    }, 250)
    stateManger.btnSwitcherState.useNow = newState;
}

const windowDeactivate = () => {
    windowShow.style.display = 'none'
}

const windowActivate = () => {
    windowShow.style.display = 'block'
}

// On State
itemBtn_1.onclick = () => {
    handleSetNewBtnSwitcherState(itemBtn_1.id, itemBtn_2, itemBtn_1)
}

itemBtn_2.onclick = () => {
    handleSetNewBtnSwitcherState(itemBtn_2.id, itemBtn_1, itemBtn_2)
}

windowShow.onclick = () => {
    windowDeactivate()
}

document.querySelectorAll('img').forEach((img) => {
    img.onclick = () => {
        windowActivate()
        innerWind.innerHTML = `<img src="${img.src}" class="w-full" alt="Image-1" />`
    }
})
windowDeactivate()