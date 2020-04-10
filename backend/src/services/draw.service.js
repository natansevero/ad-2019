const PersonRepostiroty = require('./../repositories/person.repository');
const EmailService = require('./../services/email.service');

const draw = async () => {
    const people = await PersonRepostiroty.getAll();

    if (people.length < 4 || people.length % 2 === 1) {
        return false;
    }

    const shuffledPeolpe = people.sort(() => Math.random() - 0.5);

    const drewFriends = shuffledPeolpe.map((person, index) => {
        return {
            _id: person._id,
            name: person.name,
            email: person.email,
            friend: people[(people.length - 1) - index]._id
        }
    });

    drewFriends.map(async person => {
        await PersonRepostiroty.updateById(person._id, {
            name: person.name,
            email: person.email,
            friend: person.friend
        })
    })

    notifyFriendsWithEmail();

    return true;
}

const notifyFriendsWithEmail = async () => {
    try {
        const people = await PersonRepostiroty.getAllWithFriendEmail();

        people.map(person => {
            EmailService.send(person.name, person.friend.email, person.friend.name);    
        });
    } catch(err) {
        throw err;
    }
    
}

module.exports = {
    draw
}