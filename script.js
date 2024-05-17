const hourshand = document.querySelector('.hand.hours');
const minuteshand = document.querySelector('.hand.minutes');
const secondshand = document.querySelector('.hand.seconds');


const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
}

const setClock = () => {
    const CurrentDate = new Date();

    const secondsPercentage = CurrentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + CurrentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + CurrentDate.getHours()) / 12;

    setRotation(secondshand, secondsPercentage);
    setRotation(minuteshand, minutesPercentage);
    setRotation(hourshand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);

