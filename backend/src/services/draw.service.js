const PersonRepostiroty = require('./../repositories/person.repository');
const EmailService = require('./../services/email.service');

const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const choiceTheRightIndex = (index, arrayLength) => index === (arrayLength - 1) ? 0 : index + 1;

const updateDrewPeople = people => {
    people.map(async person => {
        await PersonRepostiroty.updateById(person._id, {
            name: person.name,
            email: person.email,
            friend: person.friend
        })
    })
}

const notifyFriendsWithEmail = async () => {
    try {
        const people = await PersonRepostiroty.getAllWithFriendName();

        people.map(person => {
            EmailService.send(person.name, person.email, person.friend.name);
        });
    } catch (err) {
        throw err;
    }
}

const draw = async () => {
    const people = await PersonRepostiroty.getAll();

    if (people.length < 4 || people.length % 2 === 1) {
        return false;
    }

    const shuffledPeolpe = shuffleArray(people);

    const drewFriends = shuffledPeolpe.map((person, index) => {
        return {
            _id: person._id,
            name: person.name,
            email: person.email,
            friend: people[choiceTheRightIndex(index, shuffledPeolpe.length)]._id
        }
    });

    updateDrewPeople(drewFriends);

    notifyFriendsWithEmail();

    return true;
}

module.exports = {
    draw
}