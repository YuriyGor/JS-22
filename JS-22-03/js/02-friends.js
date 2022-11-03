
// Работа с коллекцией (массивом объектов)

const friends = [
    { name: `Mango`, online: false },
    { name: `Kiwi`, online: true },
    { name: `Poly`, online: true },
    { name: `Ajax`, online: false },
];  

console.table(friends);



// Ищем друга по имени

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);

        if (friend.name === friendName) {
            return `НАШЛИ!!!!`;
        }
    }

    return `НЕ НАШЛИ :)`;
 };

// console.log(findFriendByName(friends, `Poly`));
// console.log(findFriendByName(friends, `Chelsy`));



// Получаем имена всех друзей

const getAllNames = function (allFriends) {
    // const names = [];

    // for (const friend of allFriends) {
    //     console.log(friend.name);

    //     names.push(friend.name);
    // }

    // return names;
};

// console.log(getAllNames(friends));



// Получаем имена всех друзей которые онлайн

const getOnlineFriends = function (allFriend) {
    const onlineFriends = [];
for (const friend of friends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
        onlineFriends.push(friend);
    }
}

    return onlineFriends;
}

// console.log(getOnlineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend  of allFriends) {
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue 
        }
            friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
}

console.log(getFriendsByOnlineStatus(friends));



const x = {
    a: 1,
    b: 2,
    c: 30,
    d: 50,
}

console.log(Object.keys(x).length);
