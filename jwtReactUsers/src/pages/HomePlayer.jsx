import React, { useState, useContext } from 'react'
import { MyScoreContext } from '../context/MyContext.jsx'
import Iframe from 'react-iframe'
import '../sass/pagesComponents/HomePlayer.scss'


function HomePlayer() {
  const { isLoggedin } = useContext(MyScoreContext)

  return (
    <div className="contHomePlayer">
      {
        isLoggedin ?
        <Iframe url="https://tonyfverdu.github.io/Visual-Audio-Web-API/"
          // width="1822px"
          // height="840px"
          position="relative"
          width='100%'
          height='100%'
          id=""
          className=""
          display="block"
          allow="microphone"
        />
        : 
        <div>
          <h1 style={{color: "white"}}>No permitido</h1>
        </div>
      }
    </div>
  )
}

export default HomePlayer

  // const audioElem = useRef()

  // async function fetchDataRecords() {
  //   const fecthToGetAllRecords = await fetch('http://127.0.0.1:3001/records', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })

  //   const response = await fecthToGetAllRecords.json()

  //   if (fecthToGetAllRecords.status === 200) {
  //     setRecordsOfBeatles(response.records)
  //   } else if (fecthToGetAllRecords.status === 400) {
  //     const result = await response.json()
  //     for (const row of result.message) {
  //       for (const key in row) {
  //         errors.push(row[key])
  //       }
  //     }
  //     setErrors(errors)
  //   } else {
  //     setErrors(['Etwas ist schief gelaufen'])
  //   }
  // }
  // async function fecthOfSongs() {
  //   const fetchDataSongs = await fetch('http://127.0.0.1:3001/songs', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })

  //   const response = await fetchDataSongs.json()
  //   const { message, songs } = response

  //   if (response.status === 200) {
  //     console.log('All OK:  ', message)
  //     setSongsOfBeatles(songs)
  //   } else if (response.status === 400) {
  //     const result = await response.json()
  //     for (const row of result.message) {
  //       for (const key in row) {
  //         errors.push(row[key])
  //       }
  //     }
  //     setErrors(errors)
  //   } else {
  //     setErrors(['Etwas ist schief gelaufen'])
  //   }
  // }

  // useEffect(() => {
  //   fetchDataRecords()
  //   fecthOfSongs()
  // }, [])

  // useEffect(() => {
  //   const tokenSaved = window.localStorage.getItem("tokenSpotify")
  //   const hash = window.location.hash
  //   window.location.hash = ""

  //   if (!tokenSaved && hash) {
  //     const _tokenSpotify = hash.split("&")[0].split("=")[1]
  //     window.localStorage.setItem("tokenSpotify", _tokenSpotify)
  //     setTokenSpotify(_tokenSpotify)
  //     setClientTokenSpotify(_tokenSpotify)
  //   } else {
  //     setTokenSpotify(tokenSaved)
  //     setClientTokenSpotify(tokenSaved)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isPlaying) {
  //     setSongsReproductions([...songsReproductions, { song: currentSong, reproductions: songsReproductions.reproductions + 1 }])
  //   }
  // }, [isPlaying])

  // useEffect(() => {
  //   audioElem.current.volume = theVolume
  // }, [theVolume])

  // useEffect(() => {
  //   audioElem.current.muted = theMuted
  // }, [theMuted])

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioElem.current.play()
  //   } else {
  //     audioElem.current.pause()
  //   }
  // }, [isPlaying])

  // function onPlaying() {
  //   setTotalDuration(audioElem.current.duration / 60) //  Duration in Minuten
  //   setMyCurrentTime(audioElem.current.currentTime / 60) //  Duration played in Minuten
  // }

/*
return (
  <>
    <audio src={currentSong.mp3} ref={audioElem} type="audio/mp3" onTimeUpdate={onPlaying} />
    {!tokenSpotify &&
      <LoginSpotify />
    }
    <div className="contMainPlayer">
      <div className="contSideBarAlbums">
        <CompSideBarAlbum />
      </div>
      <div className="contPlayerMusic">
        <div className="contSidebar">
          <Sidebar
          />
        </div>
        {isLoggedin ? <div className="contFunctionPlayer">
          {
            isFunction === 'Feed' &&
            <Feed />
          }
          {
            isFunction === 'Trending' &&
            <Treding />
          }
          {
            isFunction === 'Player' &&
            <PlayerMusic
              audioElem={audioElem}
            />
          }
          {
            isFunction === 'Like' &&
            <Like />
          }
          {
            isFunction === 'Library' &&
            <Library />
          }
          {
            isFunction === 'Setting' &&
            <Setting />
          }
        </div>
          : <div className="contLogin">
            <CompLogin />
          </div>
        }
      </div>
    </div>
  </>
)
*/