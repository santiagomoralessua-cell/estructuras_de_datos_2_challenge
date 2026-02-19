import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <p style={styles.label}>Estructura de Datos II</p>
        <h1 style={styles.title}>Challenge 03</h1>
        <p style={styles.sub}>Linked Lists implementation in React</p>
      </div>

      <div style={styles.cards}>
        {/* Card 1 - Linked List */}
        <div style={styles.card} onClick={() => navigate('/songs')}>
          <div style={styles.cardIcon}>🎵</div>
          <div style={styles.cardBadge}>Linked List</div>
          <h2 style={styles.cardTitle}>Song Player</h2>
          <p style={styles.cardDesc}>
            A linked list of songs. Each node points to the next song. Navigate forward only.
          </p>
          <div style={styles.cardStructure}>
            <span style={styles.node}>Song 1</span>
            <span style={styles.arrow}>→</span>
            <span style={styles.node}>Song 2</span>
            <span style={styles.arrow}>→</span>
            <span style={styles.nodeNull}>null</span>
          </div>
          <button style={styles.btn}>Open →</button>
        </div>

        {/* Card 2 - Doubly Linked List */}
        <div style={styles.card} onClick={() => navigate('/browser')}>
          <div style={styles.cardIcon}>🌐</div>
          <div style={{ ...styles.cardBadge, background: '#f76a8a22', color: '#f76a8a' }}>
            Doubly Linked List
          </div>
          <h2 style={styles.cardTitle}>Browser History</h2>
          <p style={styles.cardDesc}>
            A doubly linked list of pages. Each node has prev and next pointers. Navigate both ways.
          </p>
          <div style={styles.cardStructure}>
            <span style={styles.node}>Page 1</span>
            <span style={styles.arrow}>⇄</span>
            <span style={styles.node}>Page 2</span>
            <span style={styles.arrow}>⇄</span>
            <span style={styles.nodeNull}>null</span>
          </div>
          <button style={{ ...styles.btn, background: '#f76a8a' }}>Open →</button>
        </div>
      </div>

      <div style={styles.info}>
        <p style={styles.infoText}>
          Jonathan López Londoño · Estructura de Datos II · UAO
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f8', padding: '50px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  header: { textAlign: 'center', marginBottom: '40px' },
  label: { fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c6af7', marginBottom: '8px' },
  title: { fontSize: '2.5rem', fontWeight: 800, margin: '0 0 8px' },
  sub: { color: '#6b6b8a', margin: 0 },
  cards: { display: 'flex', flexDirection: 'column', gap: '16px' },
  card: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'border-color 0.2s' },
  cardIcon: { fontSize: '2rem', marginBottom: '10px' },
  cardBadge: { display: 'inline-block', background: '#7c6af722', color: '#7c6af7', fontSize: '0.72rem', padding: '3px 10px', borderRadius: '20px', marginBottom: '8px', letterSpacing: '0.05em' },
  cardTitle: { fontSize: '1.3rem', fontWeight: 700, margin: '0 0 6px' },
  cardDesc: { color: '#6b6b8a', fontSize: '0.85rem', margin: '0 0 14px', lineHeight: '1.5' },
  cardStructure: { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' },
  node: { background: '#1a1a24', border: '1px solid #3a3a5a', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' },
  nodeNull: { color: '#3a3a5a', fontSize: '0.75rem', fontFamily: 'monospace' },
  arrow: { color: '#7c6af7', fontSize: '0.9rem' },
  btn: { background: '#7c6af7', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' },
  info: { textAlign: 'center', marginTop: '40px' },
  infoText: { color: '#3a3a5a', fontSize: '0.75rem' },
}

export default HomePage
