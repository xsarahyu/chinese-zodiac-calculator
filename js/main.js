let btn = document.querySelector("button").addEventListener("click", calculate)
let year = document.querySelector("input")
let animal = document.querySelector(".animal")
let personality = document.querySelector(".personality")
let info = document.querySelector(".info")

function calculate() {
    if (year.value % 12 === 0) {
        animal.innerText = "Monkey (猴 / Hóu) 🐵"
        personality.innerText = "Intelligent, witty, innovative"
        info.innerText = "People born in the year of the Monkey do things based on interest. If it's something they don't quite care for, they'll do the work sloppily. If it's something they're interested in, they'll put their entire heart into it and work until they succeed. They live a long life full of energy and curiosity for the world. Monkeys also value relationships, but spoiling children may be their weakness."
    }
    else if (year.value % 12 === 1) {
        animal.innerText = "Rooster (鸡 / Jī) 🐓"
        personality.innerText = "Punctual, organized, and self-assured"
        info.innerText = "People born in the year of the Rooster are able to sense what others are thinking or feeling. They have quick reactions and high EQ. They make great friends, although some are cunning. Roosters are creative and talented in the arts, but few find a career in that field. They have foresight and plan everything carefully."
    }
    else if (year.value % 12 === 2) {
        animal.innerText = "Dog (狗 / Gǒu) 🐶"
        personality.innerText = "Loyal, honest, and protective"
        info.innerText = "People born in the year of the Dog are conservative and full of justice. Because of their loyalty, Dogs are valued in the workplace. They rarely break rules, unless it's for the sake of people important to them. In life, they only wish to live quietly with their family."
    }
    else if (year.value % 12 === 3) {
        animal.innerText = "Pig (猪 / Zhū) 🐷"
        personality.innerText = "Caring, generous, and optimistic"
        info.innerText = "People born in the year of the Pig think logically and are able to fix any problem they're in. They aren't good communicators, but they're kind and able to provide for the family. Most of them are wealthy. Their only obvious fault is that they lose their temper easily."
    }
    else if (year.value % 12 === 4) {
        animal.innerText = "Rat (鼠 / Shǔ) 🐭"
        personality.innerText = "Clever, resourceful, and adaptable"
        info.innerText = "People born in the year of the Rat like saving and collecting. They never experience hard times financially and live organized lives. If you receive a valuable gift from a Rat, know that they think highly of you, because they don't usually like opening their wallet for others. Rats don't look for praise and recognition. They are very sensitive and know when there is trouble. When they do take risks, they're usually successful."
    }
    else if (year.value % 12 === 5) {
        animal.innerText = "Ox (牛 / Niú) 🐂"
        personality.innerText = "Reliable, diligent, and honest"
        info.innerText = "People born in the year of the Ox are hard workers and have a strong sense of responsibility. Even if they run into difficulty during work, they'll persevere. They aren't very romantic, but are patient and would never force themselves onto someone who doesn't like them. They are usually quiet and keep their emotions bottled up inside. It's hard for others to understand them. When they do lose their temper, they're explosive and can drive others away."
    }
    else if (year.value % 12 === 6) {
        animal.innerText = "Tiger (虎 / Hǔ) 🐯"
        personality.innerText = "Brave, competitive, and charismatic"
        info.innerText = "People born in the year of the Tiger are independent and have high self-esteem. They enjoy being the leader and protector of their people. They love justice and never back down in an argument. Recklessness is their biggest weakness, causing them to fail at times. However, they never truly fail. Tigers will always find a way to stand back up and succeed in the end."
    }
    else if (year.value % 12 === 7) {
        animal.innerText = "Rabbit (兔 / Tù) 🐰"
        personality.innerText = "Gentle, kind, and elegant"
        info.innerText = "People born in the year of the Rabbit are gentle, quiet, and polite. They are also patient, intelligent, and chic. Their sense of responsibility and attention to detail lead to great career success. They take love seriously, and would never fall for someone easily. If they find the right person, they'll love them to the end of the world and back."
    }
    else if (year.value % 12 === 8) {
        animal.innerText = "Dragon (龙 / Lóng) 🐲"
        personality.innerText = "Energetic, enthusiastic, and confident"
        info.innerText = "People born in the year of the Dragon have hearts full of adventure and romance. It's hard for people to understand a Dragon's mysterious personality. At the same time, they are indifferent to things the average person worries about. They may seem lazy, but once they decide to do something, they'll be more ambitious and vigorous than anyone else."
    }
    else if (year.value % 12 === 9) {
        animal.innerText = "Snake(蛇 / Shé) 🐍"
        personality.innerText = "Wise, intuitive, and mysterious"
        info.innerText = "People born in the year of the Snake are idealists. On the outside, they may seem cold, but deep inside, they are warm and enthusiastic. Their desire for exclusive ownership is very fierce. It irks them if they can't fully understand someone. Snakes are devoted and determined, but their worst enemy is laziness."
    }
    else if (year.value % 12 === 10) {
        animal.innerText = "Horse (马 / Mǎ) 🐴"
        personality.innerText = "Independent, adventurous, and hardworking"
        info.innerText = "People born in the year of the Horse are never one to surrender. They are always positive and energetic, pushing themselves and others forward. Their biggest desire is to have the freedom to do what they like and to be able to express themselves. However, they also have various negative traits. Horses are bad at keeping secrets and lose interest quickly."
    }
    else if (year.value % 12 === 11) {
        animal.innerText = "Goat (羊 / Yáng) 🐐"
        personality.innerText = "Creative, gentle, and compassionate"
        info.innerText = "People born in the year of the Goat have pure and kind hearts. They'd rather suffer silently than argue and ruin someone else's mood. However, even in silence, they still hold onto their own opinion. In regards to their dreams, they will do anything to fulfill them. Though kind, Goats have tricks up their sleeves as well. They are skilled at using soft power, able to patiently and politely persuade others into their favor."
    }
    else {
        animal.innerText = "Not a valid year☹️"
    }
}