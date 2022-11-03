
const profile = {
  name: `Jacques Gluke`,
  tag: `jgluke`,
  location: `Ocho Rios, Jamaica`,
  avatar: `https://......./.../.../.../....jpg`,
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarcup = function (userProfile) {
    const {
        avatar = `https://......./.../.../.../....jpg `,
        name,
        tag,
        location = `Planet Earth`,
        stats: { followers, views, likes },
    } = userProfile;

    return `<div>
        <img src="${avatar}" alt="user avatar">
            <p>${name}<span>@${tag}</span></p>
            <p>Location: ${location}</p>
            <ul>
                <li>Followers: ${followers}</li>
                <li>Views: ${views}</li>
                <li>Likes: ${likes}</li>
            </ul>
            </div>`;
};

const marcup = makeProfileMarcup(profile);

console.log(marcup);

document.body.insertAdjacentHTML(`afterbegin`, marcup);
