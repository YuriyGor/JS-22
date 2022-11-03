
// Методы объекта и this при обращении к свойствам в методах


    // -  changeName
    // - addTrack
    // - updateRating
    // - getTrackCount
   


const playlist = {
  name: `Мой супер плейлист`,
  rating: 5,
  tracks: [`трек-1`, `трек-2`, `трек-3`],
  trackCount: 3,
    changeName(newName) {
        console.log(`this внутри changeName: `, this);

        this.name = newName;
    },  
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.track.length;
    },
  
 };

// console.log(playlist.getTrackCount());

playlist.changeName(`Новое имя`);

playlist.addTrack(`новый трек`);
// console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);

