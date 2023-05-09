var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const arrPerson = [
    {
        name: 'Courtney Dallas',
        position: 'Plastic Surgery Client',
        img: 'image_1.jpg',
        content: `“The whole experience of the people, the caring doctors, the hospital, the friendliness... was unbelievable. I traveled to a foreign country and always felt safe. I can’t stress that enough. I would most definitely recommend Trafalgar’s services."`
    },
    {
        name: 'Ike Proudfoot',
        position: 'Plastic Surgery Client',
        img: 'image_2.jpg',
        content: `“I am a new person… thanking you is not even enough. My gratitude goes very deep. You have changed my life tremendously. …I feel healthier now than I did 30 years ago. It was just one phone call, and you did the rest!”`
    },
    {
        name: 'Chuck Jackson',
        position: 'Dental Restoration Client',
        img: 'image_3.jpg',
        content: `"My experience was excellent! Dr. Loria is a highly skilled dentist. The two bridges he made for me fit perfectly, and the whole process took three days instead of 15-21 as quoted in the States. The price quoted was the price I paid, and less than 40% of estimate back home. When I need dental services I will return without hesitation."`
    },
    {
        name: 'Paul Johnson',
        position: 'Hip Replacement Client',
        img: 'image_4.jpg',
        content: `"When I first got there, I had my doubts...what did we do? We're in another country? But within 10 minutes after talking to staff I felt better, because they're really listening to you!"`
    }
]

let imgNode = $('.js-slide-img');
let nameNode = $('.js-slide-name');
let positionNode = $('.js-slide-position');
let descriptionNode = $('.js-slide-description');
let dotNode = $('.js-slide-dots');
let arrowLeft = $('.js-slide-arrow-left');
let arrowRight = $('.js-slide-arrow-right');

let slideLength = arrPerson.length;

arrPerson.forEach(person => {
    let round = document.createElement('div');
    round.classList.add('slide__directional--round');
    dotNode.appendChild(round);
})

let dotNodes = $$('.slide__directional--round');

function slide(i) {
    imgNode.srcset = `./assets/image/slide/${arrPerson[i].img} 2x`;
    nameNode.innerHTML = arrPerson[i].name;
    positionNode.innerHTML = arrPerson[i].position;
    descriptionNode.innerHTML = arrPerson[i].content;
    dotNodes.forEach(dot => dot.classList.remove('js-full'));
    dotNodes[i].classList.add('js-full');
}

let i = 0;
slide(i);

setInterval(() => {
    arrowRight.onclick = () => {
        i++;
        slide(i);

        if (i === slideLength - 1) {
            i = -1;
        }
    }

    arrowLeft.onclick = () => {
        if (i === 0) {
            i = slideLength;
        }

        i--;
        slide(i);
    }

    i++;
    slide(i);
    if (i === slideLength - 1) {
        i = -1;
    }
}, 2000)










