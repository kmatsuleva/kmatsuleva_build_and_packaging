import _ from 'lodash';
import './style.scss';
import firstImg from './tsarevets.jpg';
import secondImg from './marno-pole.jpg';
import thirdImg from './cerkov.jpg';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}



let navigation = () => {
    let unorderedList = document.createElement('UL');

    let listItemMuseums = document.createElement('LI');
    let submenu = document.createElement('A');
    submenu.setAttribute('href', '#');
    let restaraunts = document.createTextNode('Museums');

    submenu.appendChild(restaraunts);
    listItemMuseums.appendChild(submenu);
    unorderedList.appendChild(listItemMuseums);

    let listItemChurch = document.createElement('LI');
    let submenuChurch = document.createElement('A');
    submenuChurch.setAttribute('href', '#');
    let church = document.createTextNode('Church');

    submenuChurch.appendChild(church);
    listItemChurch.appendChild(submenuChurch);
    unorderedList.appendChild(listItemChurch);

    let listItemRestaurants = document.createElement('LI');
    let submenuRestaurants = document.createElement('A');
    submenuRestaurants.setAttribute('href', '#');
    let restaurants = document.createTextNode('Restaurants');

    submenuRestaurants.appendChild(restaurants);
    listItemRestaurants.appendChild(submenuRestaurants);
    unorderedList.appendChild(listItemRestaurants);


    let listItem = document.createElement('LI');
    let link = document.createElement('A');
    link.setAttribute('href', '#');
    let logIn = document.createTextNode('Log in');

    link.appendChild(logIn);
    listItem.appendChild(link);
    unorderedList.appendChild(listItem);

    return unorderedList;
}


let background = () => {
    let background = document.createElement('div');
    background.className = 'bg';

    let caption = document.createElement('div');
    caption.className = 'caption';

    background.appendChild(caption);

    return background;
}

let tarnovoIs = () => {
    let divForTarnovoIs = document.createElement('div');
    divForTarnovoIs.className = 'after-bg';

    let hAbout = document.createElement('h2');
    let headerInTarnovoIs = document.createTextNode('TARNOVOIS');
    hAbout.appendChild(headerInTarnovoIs);
    divForTarnovoIs.appendChild(hAbout);

    let hr = document.createElement('hr');
    divForTarnovoIs.appendChild(hr);


    let aboutSite = document.createElement('p');
    aboutSite.innerHTML = _.join(['От богатите си исторически ценности, до оживения модерен и нощен живот, с пищната природа, която дава невероятни възможности за спорт и отдих, Велико Търново ви предлага всичко, което бихте желали за едно приятно прекарване или перфектна почивка.'], ' ');


    divForTarnovoIs.appendChild(aboutSite);

    return divForTarnovoIs;
}


let gallery = () => {
    let container = document.createElement('div');
    container.className = 'gallery';

    let fImage = new Image();
    fImage.src = firstImg;
    container.appendChild(fImage);

    let sImage = new Image();
    sImage.src = secondImg;
    container.appendChild(sImage);

    let thImage = new Image();
    thImage.src = thirdImg;
    container.appendChild(thImage);

    return container;
}



let aboutTarnovo = () => {
    let discription = document.createElement('div');
    discription.className = 'about-tarnovo';

    let header = document.createElement('h3');
    let welcome = document.createTextNode('Welcome to Veliko Tarnovo');
    header.appendChild(welcome)

    let line = document.createElement('hr');

    let paragraph = document.createElement('p');
    let textOfDescription = document.createTextNode('Велико Търново е град на минало и съвремие, на легенди и действителност, на богато културно наследство и кипящ обществен живот. Той е пресечната точка на поколения българи и пази духа на отминалите епохи запечатан във всеки свой камък.Емблемата на средновековно Търново от времето му на столица на Второто Българско цартсво все още се извисява в източната част на града. Хълмът-крепост “Царевец” е заобиколен от всички страни от водите на река Янтра и все още пленява със своите величие и неслонимост. Духът му често се събужда, огласяван от великолепните звуци на уникалния аудио - визуален спектакъл “Царевград Търнов - Звук и Светлина".');
    paragraph.appendChild(textOfDescription);


    let sparagraph = document.createElement('p');
    let stextOfDescription = document.createTextNode('Praesent ut consectetur leo. Curabitur commodo lacus id mi dapibus gravida. Phasellus ac massa consequat, sodales augue a, venenatis erat. Fusce sagittis, orci ut sagittis fermentum, neque risus efficitur magna, sed pretium lacus metus ut tortor. Mauris finibus a sem sedletius. Donec vulputate fringilla aliquam. Cras pretium, ipsum sit amet feugiat congue, lacus felis sodales quam, ut molestie odio elit ut felis.    Duis sit amet pulvinar nulla. Aenean ut nisi tortor. Aliquam ut consequat mi, a ullamcorper urna. Integer gravida commodo ex eu semper. Suspendisse mi nunc, faucibus in justo vitae, mollis mollis mauris. Etiam interdum, nulla ut dictum gravida, purus purus congue quam, non suscipit nisi ex dapibus purus. Aenean vel volutpat est. Sed malesuada auctor turpis, ac congue lacus gravida vitae. Nulla convallis sagittis ornare. Cras leo ex, luctus sed lacus ut, feugiat scelerisque enim. Curabitur volutpat ac enim egestas sagittis. Nulla auctor ante eros, vel fermentum enim eleifend et. Ut pulvinar aliquet velit, in maximus turpis dictum ac. Aenean bibendum, mauris quis convallis imperdiet, quam velit lacinia tellus, quis vulputate tortor urna nec dolor. Integer porttitor eget mi ac commodo. Nunc aliquam neque risus, egetletius odio ultricies id. Ut auctor enimletius leoletius porttitor.');
    sparagraph.appendChild(stextOfDescription);


    discription.appendChild(header);
    discription.appendChild(line);
    discription.appendChild(paragraph);
    discription.appendChild(sparagraph);
    document.body.appendChild(discription);

    return discription;
}


let footer = () => {

    let footer = document.createElement('footer');

    // about us
    let infoInFooter = document.createElement('div');
    infoInFooter.className = 'about-us';

    let aboutUs = document.createElement('h3');
    let aboutUsText = document.createTextNode('about us');
    aboutUs.appendChild(aboutUsText);
    infoInFooter.appendChild(aboutUs);


    let infoFLine = document.createElement('p');
    let textInfoOfFLine = document.createTextNode('Lorem ipsum dolor sit amet');
    infoFLine.appendChild(textInfoOfFLine)
    infoInFooter.appendChild(infoFLine);

    let infoSLine = document.createElement('p');
    let textInfoOfSLine = document.createTextNode('Lorem ipsum dolor sit amet');
    infoSLine.appendChild(textInfoOfSLine)
    infoInFooter.appendChild(infoSLine);

    let infoTLine = document.createElement('p');
    let textInfoOfTLine = document.createTextNode('Lorem ipsum dolor sit amet');
    infoTLine.appendChild(textInfoOfTLine)
    infoInFooter.appendChild(infoTLine);

    footer.appendChild(infoInFooter);


    //contact info 

    let contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    let contacts = document.createElement('h3');
    let contactsText = document.createTextNode('contact info');
    contacts.appendChild(contactsText);
    contactInfo.appendChild(contacts);


    let gmailInfo = document.createElement('p');
    let gmailInfoText = document.createTextNode('tarnovois@gmail.com');
    gmailInfo.appendChild(gmailInfoText);
    contactInfo.appendChild(gmailInfo);


    let abv = document.createElement('p');
    let abvText = document.createTextNode('tarnovis@abv.bg');
    abv.appendChild(abvText);
    contactInfo.appendChild(abv);


    let tel = document.createElement('p');
    let telText = document.createTextNode('1-234-567-8910');
    tel.appendChild(telText);
    contactInfo.appendChild(tel);

    footer.appendChild(contactInfo);



    //find us

    let placeInfo = document.createElement('div');
    placeInfo.className = 'find-us';

    let whereToFind = document.createElement('h3');
    let textWhereToFindUs = document.createTextNode('Where to find us');
    whereToFind.appendChild(textWhereToFindUs);
    placeInfo.appendChild(whereToFind);

    let placeFLine = document.createElement('p');
    let textInfoPlace = document.createTextNode('Lorem ipsum dolor sit amet');
    placeFLine.appendChild(textInfoPlace)
    placeInfo.appendChild(placeFLine);

    let placeSLine = document.createElement('p');
    let placeInfoSLine = document.createTextNode('Lorem ipsum dolor sit amet');
    placeSLine.appendChild(placeInfoSLine)
    placeInfo.appendChild(placeSLine);

    let placeTLine = document.createElement('p');
    let placeInfoOfTLine = document.createTextNode('Lorem ipsum dolor sit amet');
    placeTLine.appendChild(placeInfoOfTLine)
    placeInfo.appendChild(placeTLine);

    footer.appendChild(placeInfo);


    return footer;
}


document.body.appendChild(navigation());
document.body.appendChild(background());
document.body.appendChild(tarnovoIs());
document.body.appendChild(gallery());
document.body.appendChild(aboutTarnovo());
document.body.appendChild(footer());