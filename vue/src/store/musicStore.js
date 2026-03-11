import { reactive, computed } from 'vue'

const demoUsers = {
  sihan: {
    username: 'sihan',
    password: '1234',
    displayName: 'Si Han',
  },
  guest: {
    username: 'guest',
    password: 'guest',
    displayName: 'Guest User',
  },
}

export const store = reactive({
  currentUser: null,
  nowPlaying: null,

  songs: [
    {
      id: 1,
      title: 'Green Tea Dreams',
      artist: 'Cafe Vibes',
      color: '#D8E2DC',
      next: 'Jasmine Serenity',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      imageurl: '/images/example.jpg',
    },
    {
      id: 2,
      title: 'Jasmine Serenity',
      artist: 'Lo-Fi Brewer',
      color: '#E0F2F1',
      next: 'Espresso Rain',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      imageurl: '/images/example.jpg',
    },
    {
      id: 3,
      title: 'Espresso Rain',
      artist: 'Sunday Morning',
      color: '#D7CCC8',
      next: 'Green Tea Dreams',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      imageurl: '/images/example.jpg',
    },
  ],

  userData: {
    sihan: {
      favorites: [],
      playlists: [],
    },
    guest: {
      favorites: [],
      playlists: [],
    },
  },

  login(username, password) {
    const foundUser = Object.values(demoUsers).find(
      (user) => user.username === username && user.password === password,
    )

    if (foundUser) {
      this.currentUser = foundUser
      return true
    }

    return false
  },

  logout() {
    this.currentUser = null
    this.nowPlaying = null
  },

  playSong(song) {
    this.nowPlaying = song
  },

  favoriteSong(song) {
    if (!this.currentUser) return { success: false, message: 'Please log in first.' }

    const favorites = this.userData[this.currentUser.username].favorites
    const alreadyExists = favorites.some((fav) => fav.id === song.id)

    if (!alreadyExists) {
      favorites.push(song)
    }

    return { success: true }
  },

  createPlaylist(name) {
    if (!this.currentUser) return { success: false, message: 'Please log in first.' }
    if (!name.trim()) return { success: false, message: 'Playlist name is required.' }

    const playlists = this.userData[this.currentUser.username].playlists
    const exists = playlists.some(
      (playlist) => playlist.name.toLowerCase() === name.trim().toLowerCase(),
    )

    if (exists) {
      return { success: false, message: 'Playlist already exists.' }
    }

    playlists.push({
      id: Date.now(),
      name: name.trim(),
      songs: [],
    })

    return { success: true }
  },

  addSongToPlaylist(song, playlistId) {
    if (!this.currentUser) return { success: false, message: 'Please log in first.' }

    const playlists = this.userData[this.currentUser.username].playlists
    const selectedPlaylist = playlists.find((playlist) => playlist.id === playlistId)

    if (!selectedPlaylist) {
      return { success: false, message: 'Playlist not found.' }
    }

    const alreadyExists = selectedPlaylist.songs.some((playlistSong) => playlistSong.id === song.id)

    if (!alreadyExists) {
      selectedPlaylist.songs.push(song)
    }

    return { success: true }
  },
})

export function useUserFavorites() {
  return computed(() => {
    if (!store.currentUser) return []
    return store.userData[store.currentUser.username].favorites
  })
}

export function useUserPlaylists() {
  return computed(() => {
    if (!store.currentUser) return []
    return store.userData[store.currentUser.username].playlists
  })
}
