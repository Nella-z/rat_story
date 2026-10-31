const AllTheStories = [
  { id: 1,
    title: "Автопортрет Фриды Кало",
    author: "Фрида Кало, 1940",
    location: "Центр Гарри Рэнсома, Остин",
    text: "Колибри, колючее ожерелье и немигающий взгляд. Фрида Кало никогда не рисовала просто лицо. Что на самом деле значит каждая деталь этого автопортрета ?",
    audio: "./audio/Frida-Kahlo-Self-Portrait.mp3",
    Image: "./images/image-2.jpg",
    ImageMini: "./images/image-2_mini.jpg"
  },
  { id: 2,
    title: "“Крик” Мунка",
    author: "Эдвард Мунк, 1893",
    location: "Национальный музей, Осло",
    text: "Крик, который знает весь мир. Но слышал ли его сам художник, или это только красное небо над фьордом ? Что на самом деле произошло на том мосту ?",
    audio: "./audio/The-Scream.mp3",
    Image: "./images/image-3.jpg",
    ImageMini: "./images/image-3_mini.jpg"
  },
  { id: 3,
    title: "Мона Лиза",
    author: "Леонардо да Винчи, 1503",
    location: "Лувр, Париж",
    text: "Одна из самых известных картин в мире. Её загадочная улыбка, кажется, знает больше чем говорит. Но что скрывается за этим образом на самом деле ?",
    audio: "./audio/Mona-Lisa.mp3",
    Image: "./images/image-1.jpg",
    ImageMini: "./images/image-1_mini.jpg"
  },
  { id: 4,
    title: "Звездная ночь",
    author: "Винсент Ван Гог, 1889",
    location: "Музей современного искусства (MoMA), Нью-Йорк",
    text: "Небо закручивается в вихри, а деревня внизу спит. Ван Гог писал это из окна лечебницы. Что он видел в этих звёздах на самом деле ?",
    audio: "./audio/Starry-Night.mp3",
    Image: "./images/image-4.jpg",
    ImageMini: "./images/image-4_mini.jpg"
  },
  { id: 5,
    title: "Тайная вечеря",
    author: "Леонардо да Винчи, 1495–1498",
    location: "Санта-Мария-делле-Грацие, Милан",
    text: "Тринадцать человек за одним столом и один страшный вопрос. Говорят, у этой фрески больше тайн, чем у любого детектива. Кто там и о чём шепчется ?",
    audio: "./audio/The-Last-Supper.mp3",
    Image: "./images/image-5.jpg",
    ImageMini: "./images/image-5_mini.jpg"
  },
  { id: 6,
    title: "Постоянство памяти",
    author: "Сальвадор Дали, 1931",
    location: "Музей современного искусства (MoMA), Нью-Йорк",
    text: "Часы тают, как сыр на солнце. Дали уверял, что идея пришла к нему за обедом. Но так ли всё просто с этим сном наяву ?",
    audio: "./audio/The-Persistence-of-Memory.mp3",
    Image: "./images/image-6.jpg",
    ImageMini: "./images/image-6_mini.jpg"
  },
  { id: 7,
    title: "Девушка с жемчуной серьгой",
    author: "Ян Вермеер, около 1665",
    location: "Маурицхёйс, Гаага",
    text: "Она обернулась и смотрит прямо на нас. Кто эта девушка с жемчужной серьгой, и почему о ней спорят уже сотни лет ?",
    audio: "./audio/Girl-with-a-Pearl-Earring.mp3",
    Image: "./images/image-7.jpg",
    ImageMini: "./images/image-7_mini.jpg"
  },
  { id: 8,
    title: "Поцелуй",
    author: "Густав Климт, 1907–1908",
    location: "Бельведер, Вена",
    text: "Золото, узоры и один бесконечный миг. Самая романтичная картина в мире скрывает куда больше, чем кажется на первый взгляд. Что именно ?",
    audio: "./audio/The-Kiss.mp3",
    Image: "./images/image-8.jpg",
    ImageMini: "./images/image-8_mini.jpg"
  },
  { id: 9,
    title: "Рождение Венеры",
    author: "Сандро Боттичелли, около 1485",
    location: "Галерея Уффици, Флоренция",
    text: "Богиня выходит из морской пены, а вокруг уже суетятся ветры и нимфы. Но кто на самом деле заказал эту картину и зачем ?",
    audio: "./audio/The-Birth-of-Venus.mp3",
    Image: "./images/image-9.jpg",
    ImageMini: "./images/image-9_mini.jpg"
  },
];
const historyImages = document.querySelector('.history__images');
const historyImagesHome = document.querySelector('.history__images-home');

const stories = AllTheStories;
function createStoryCard(stori) {
    return `
        <a class="history__image" href="picture.html?id=${stori.id}">
          <img  class="history__img-sect" src="${stori.ImageMini}" alt="">
          <p class="history__text">${stori.title}</p>
         </a>
    `;
}
if (historyImages) {
    historyImages.innerHTML = stories.map(createStoryCard).join('');
}
function createStoryCardHome(stori) {
    return `
        <a class="history__image" href="picture.html?id=${stori.id}">
          <img  class="history__img" src="${stori.ImageMini}" alt="">
          <p class="history__text">${stori.title}</p>
         </a>
    `;
}


if (historyImagesHome) {
    historyImagesHome.innerHTML = stories.map(createStoryCardHome).join('');
}


const container__picture = document.querySelector('.container__picture');
const picture__content = document.querySelector('.picture__content');
const picture__source = document.querySelector('.img__picture');

function containerPicture(stori) {
    return `

             <div class="picture__left">
         <img  class="history__img-picture" src="${stori.Image}" alt="${stori.title}">
    </div>
    <div class="picture__right">
        <h1 class="title__painting">${stori.title}</h1>
        <h3 class="title__name">${stori.author}</h3>
        <p  class="text__picture"> ${stori.text}</p>
<button type="button" class="truth__btn open-mobal"> А теперь правда <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 4.20452C4.50027 3.94134 4.56978 3.68287 4.70154 3.45506C4.8333 3.22724 5.02268 3.0381 5.25067 2.90663C5.47865 2.77516 5.73721 2.70599 6.00038 2.70605C6.26356 2.70612 6.52208 2.77543 6.75 2.90702L20.25 10.6995C20.4784 10.8311 20.668 11.0205 20.7999 11.2486C20.9318 11.4768 21.0012 11.7357 21.0012 11.9993C21.0012 12.2628 20.9318 12.5217 20.7999 12.7499C20.668 12.9781 20.4784 13.1675 20.25 13.299L6.75 21.093C6.52197 21.2247 6.26331 21.294 6.00001 21.294C5.73671 21.294 5.47804 21.2247 5.25002 21.093C5.02199 20.9614 4.83263 20.772 4.70098 20.544C4.56932 20.316 4.50001 20.0573 4.5 19.794V4.20452Z" fill="currentColor"/>
</svg>
</button >
    </div>
    `;
}
function pictureContent(stori) {
    return `
<div class="inf-picture__content">
    <div class="img__picture">
         <img  class="history__img-picture history__img-dialog" src="${stori.Image}" alt="${stori.title}">
    </div>
     <div class="inf__picture">
        <div class="inf__picture-dialog">
            <div class="inf__picture-btn">
                <button type="button" class="mobal-btn mobal-active">Содержание</button>
                <button type="button" class="source-mobal mobal-btn">Источник</button>
                  <button type="button" class="close-mobal"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.96953 7.17159L21.0766 21.3487" stroke-width="3" stroke="#F5F5F5"/>
<path d="M7.17244 21.3138L21.3496 7.20673" stroke-width="3" stroke="#F5F5F5"/>
</svg>
</button>
            </div>
<h1 class="title__paint">${stori.title}</h1>
        <p class="person__paint"><img src="images/person.svg" alt="">${stori.author}</p>
        <p class="local__paint"><img src="images/local.svg" alt="">${stori.location}</p>
        <div class="gossip">
            <div class="gossip__inf">
                <img src="images/music.svg" alt="music">
                <div class="gossip__text">
                    <h1>Сплетня</h1>
                    <p> ${stori.text}</p>
                </div>
            </div>
            <div class="player-progress-wrap">
                <button class="player-btn" type="button"> <svg class="play" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 4C16.5375 4 4 16.5375 4 32C4 47.4625 16.5375 60 32 60C47.4625 60 60 47.4625 60 32C60 16.5375 47.4625 4 32 4ZM41.0062 32.4313L27.3563 42.3625C27.2814 42.4163 27.1932 42.4484 27.1013 42.4553C27.0094 42.4622 26.9174 42.4436 26.8354 42.4016C26.7533 42.3597 26.6845 42.2959 26.6363 42.2173C26.5882 42.1387 26.5626 42.0484 26.5625 41.9562V22.1063C26.5622 22.0139 26.5875 21.9233 26.6355 21.8444C26.6836 21.7656 26.7525 21.7016 26.8347 21.6595C26.9169 21.6175 27.0091 21.599 27.1012 21.6061C27.1932 21.6133 27.2815 21.6458 27.3563 21.7L41.0062 31.625C41.0707 31.6706 41.1233 31.731 41.1596 31.8012C41.196 31.8713 41.2149 31.9491 41.2149 32.0281C41.2149 32.1071 41.196 32.1849 41.1596 32.2551C41.1233 32.3252 41.0707 32.3856 41.0062 32.4313Z" fill="#F0EDE9"/>
</svg>
<svg class="pause" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.0006 5.3335C17.3073 5.3335 5.33398 17.3068 5.33398 32.0002C5.33398 46.6935 17.3073 58.6668 32.0006 58.6668C46.694 58.6668 58.6673 46.6935 58.6673 32.0002C58.6673 17.3068 46.694 5.3335 32.0006 5.3335ZM29.334 24.0002V42.6668H24.0007V21.3335H29.334V24.0002ZM40.0006 24.0002V42.6668H34.6673V21.3335H40.0006V24.0002Z" fill="#F0EDE9"/>
</svg>

</button>
<div class="player-track">
    <span class="player-time">00:00 / 00:00</span>
    <input type="range" class="player-range" min="0" value="0" step="any">
</div>
            </div>
            <audio src=" ${stori.audio}"></audio>
            <img src="images/rat.svg" alt="крыса" class="rat__img">
        </div>
        </div>
    </div>
</div>
    `;
}

function pictureSource(stori) {
    return `
        <img  class="history__img-picture history__img-dialog" src="${stori.Image}" alt="${stori.title}">
    
    
    `;
}


const params = new URLSearchParams(location.search).get('id');

if (container__picture && params) {
    const currentStory = stories.find(story => story.id === Number(params));

    if (currentStory) {
        container__picture.innerHTML = containerPicture(currentStory);
        
        if (picture__content) {
            picture__content.innerHTML = pictureContent(currentStory);
        }
        
        if (picture__source) {
            picture__source.innerHTML = pictureSource(currentStory); 
        }
    } else {
        container__picture.innerHTML = '<p>История с таким ID не найдена.</p>';
    }
}