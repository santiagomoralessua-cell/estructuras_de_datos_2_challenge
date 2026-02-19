import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkedList from '../structures/LinkedList'

// Mocked song data
const SONGS_DATA = [
  { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
  { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
  { title: 'Stay', artist: 'The Kid LAROI', duration: '2:21' },
  { title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
  { title: 'Peaches', artist: 'Justin Bieber', duration: '3:18' },
  { title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58' },
]

// Build the linked list with mocked songs
const buildSongList = () => {
  const list = new LinkedList()
  SONGS_DATA.forEach((song) => list.append(song))
  return list
}

function SongsPage() {
  const navigate = useNavigate()
  const [songList] = useState(() => buildSongList())
  const [currentNode, setCurrentNode] = useState(null)
  const [allSongs, setAllSongs] = useState([])

  useEffect(() => {
    setCurrentNode(songList.head)
    setAllSongs(songList.toArray())
  }, [])

  const handleNext = () => {
    if (currentNode && currentNode.next) {
      setCurrentNode(currentNode.next)
    }
  }

  const isFirst = currentNode === songList.head
  const isLast = currentNode && !currentNode.next

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← Back</button>

      <div style={styles.header}>
        <p style={styles.label}>Challenge 03 — Linked List</p>
        <h1 style={styles.title}>🎵 Song Player</h1>
        <p style={styles.sub}>Navigating with a <strong>Linked List</strong> (only goes forward)</p>
      </div>

      {/* Current Song Card */}
      {currentNode && (
        <div style={styles.playerCard}>
          <div style={styles.albumArt}>🎵</div>
          <p style={styles.nowPlaying}>NOW PLAYING</p>
          <h2 style={styles.songTitle}>{currentNode.value.title}</h2>
          <p style={styles.artist}>{currentNode.value.artist}</p>
          <p style={styles.duration}>{currentNode.value.duration}</p>

          <div style={styles.controls}>
            <button style={styles.btnDisabled} disabled>
              ⏮ Prev
            </button>
            <div style={styles.playBtn}>▶</div>
            <button
              style={isLast ? styles.btnDisabled : styles.btnNext}
              onClick={handleNext}
              disabled={isLast}
            >
              Next ⏭
            </button>
          </div>
          {isLast && <p style={styles.endMsg}>End of playlist</p>}
        </div>
      )}

      {/* Song Queue - shows the linked list */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Queue — size: {songList.size()} nodes
        </h3>
        <div style={styles.queue}>
          {allSongs.map((song, index) => {
            const isCurrent = currentNode && currentNode.value === song
            return (
              <div key={index} style={isCurrent ? styles.queueItemActive : styles.queueItem}>
                <span style={styles.queueIndex}>{index + 1}</span>
                <div style={styles.queueInfo}>
                  <p style={styles.queueTitle}>{song.title}</p>
                  <p style={styles.queueArtist}>{song.artist}</p>
                </div>
                <span style={styles.queueDuration}>{song.duration}</span>
                {isCurrent && <span style={styles.playingBadge}>▶ playing</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Print the list structure */}
      <div style={styles.codeBox}>
        <p style={styles.codeLabel}>list.print()</p>
        <p style={styles.codeText}>{songList.print()}</p>
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f8', padding: '30px 20px', maxWidth: '560px', margin: '0 auto', fontFamily: 'sans-serif' },
  backBtn: { background: 'none', border: '1px solid #2a2a3a', color: '#6b6b8a', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' },
  header: { marginBottom: '28px' },
  label: { fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c6af7', marginBottom: '6px' },
  title: { fontSize: '2rem', fontWeight: 800, margin: 0 },
  sub: { color: '#6b6b8a', fontSize: '0.85rem', marginTop: '6px' },
  playerCard: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '16px', padding: '28px', textAlign: 'center', marginBottom: '24px' },
  albumArt: { fontSize: '4rem', marginBottom: '12px' },
  nowPlaying: { fontSize: '0.7rem', letterSpacing: '0.2em', color: '#7c6af7', textTransform: 'uppercase', margin: 0 },
  songTitle: { fontSize: '1.5rem', fontWeight: 700, margin: '8px 0 4px' },
  artist: { color: '#6b6b8a', margin: '0 0 4px' },
  duration: { color: '#6b6b8a', fontSize: '0.85rem', margin: 0 },
  controls: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '20px' },
  btnNext: { background: '#7c6af7', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 700 },
  btnDisabled: { background: '#1a1a24', border: '1px solid #2a2a3a', color: '#3a3a5a', padding: '10px 20px', borderRadius: '10px', cursor: 'not-allowed' },
  playBtn: { width: '48px', height: '48px', background: '#f76a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' },
  endMsg: { color: '#f76a8a', fontSize: '0.82rem', marginTop: '10px' },
  section: { marginBottom: '20px' },
  sectionTitle: { fontSize: '0.75rem', color: '#6b6b8a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' },
  queue: { display: 'flex', flexDirection: 'column', gap: '6px' },
  queueItem: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' },
  queueItemActive: { background: '#1a1a2e', border: '1px solid #7c6af7', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' },
  queueIndex: { color: '#3a3a5a', fontSize: '0.8rem', minWidth: '20px' },
  queueInfo: { flex: 1 },
  queueTitle: { margin: 0, fontSize: '0.9rem', fontWeight: 600 },
  queueArtist: { margin: 0, fontSize: '0.78rem', color: '#6b6b8a' },
  queueDuration: { color: '#6b6b8a', fontSize: '0.78rem' },
  playingBadge: { color: '#7c6af7', fontSize: '0.72rem' },
  codeBox: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '10px', padding: '14px', marginBottom: '20px' },
  codeLabel: { color: '#7c6af7', fontSize: '0.75rem', margin: '0 0 6px', fontFamily: 'monospace' },
  codeText: { color: '#a0a0c0', fontSize: '0.78rem', margin: 0, fontFamily: 'monospace', wordBreak: 'break-all' },
}

export default SongsPage
