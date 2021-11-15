var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};


function user(user){
    const userName = document.querySelector('#username')
userName.innerText = user.displayName; 
const tweetCount = document.querySelector('#tweetCount')
tweetCount.innerText = `${user.tweets.length} tweets`; 
const banner = document.querySelector('#banner')
console.log(banner)
banner.innerHTML = `<div id="#banner" class="banner"><img src=${user.coverPhotoURL} alt="Cover Photo">
</div>`
const avatar = document.querySelector('#avatar')
avatar.innerHTML = `<div class="avatar" id="avatar">
<img src=${user.avatarURL} alt="Default profile photo">
</div>`

const name1 = document.querySelector('#name')
name1.innerText = user.displayName;
const handler = document.querySelector('#handler')
handler.innerText = user.userName;

const joined = document.querySelector('#joined')
joined.innerHTML = `<h3>📅 Joined ${user.joinedDate}</h3>`
const follow = document.querySelector('#follow')
follow.innerHTML = `<h3>${user.followingCount}</h3><h3>Following</h3>
<h3>${user.followerCount}</h3><h3>Followers</h3>`

const tweetContainer = document.querySelector('#tweetContainer')
tweetContainer.innerHTML = `
<img src=${user.avatarURL} alt="avatar">
<div>
  <h3>${user.displayName}</h3>
  <h3>${user.userName}</h3>
  <h3>${user.tweets.map(tweet=>{
      tweet.text; 
  })}</h3>
</div>
`

}
user(user2)









