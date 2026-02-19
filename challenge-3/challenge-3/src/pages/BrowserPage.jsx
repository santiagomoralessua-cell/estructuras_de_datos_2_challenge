import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DoublyLinkedList from '../structures/DoublyLinkedList'

// Fake browser history pages
const PAGES_DATA = [
  { title: 'Google', url: 'https://google.com', icon: '🔍', color: '#4285f4' },
  { title: 'GitHub', url: 'https://github.com', icon: '🐙', color: '#333' },
  { title: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '💬', color: '#f48024' },
  { title: 'YouTube', url: 'https://youtube.com', icon: '▶️', color: '#ff0000' },
  { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: '📚', color: '#0d6efd' },
]

const buildBrowserHistory = () => {
  const list = new DoublyLinkedList()
  PAGES_DATA.forEach((page) => list.append(page))
  return list
}

function BrowserPage() {
  const navigate = useNavigate()
  const [browserHistory] = useState(() => buildBrowserHistory())
  const [currentNode, setCurrentNode] = useState(null)
  const [allPages, setAllPages] = useState([])

  useEffect(() => {
    setCurrentNode(browserHistory.head)
    setAllPages(browserHistory.toArray())
  }, [])

  const handleBack = () => {
    if (currentNode && currentNode.prev) {
      setCurrentNode(currentNode.prev)
    }
  }

  const handleForward = () => {
    if (currentNode && currentNode.next) {
      setCurrentNode(currentNode.next)
    }
  }

  const isFirst = currentNode === browserHistory.head
  const isLast = currentNode && !currentNode.next

  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate('/')}>← Back</button>

      <div style={styles.header}>
        <p style={styles.label}>Challenge 03 — Doubly Linked List</p>
        <h1 style={styles.title}>🌐 Browser History</h1>
        <p style={styles.sub}>Navigating with a <strong>Doubly Linked List</strong> (forward & back)</p>
      </div>

      {/* Browser UI */}
      {currentNode && (
        <div style={styles.browserCard}>
          {/* Browser Toolbar */}
          <div style={styles.toolbar}>
            <button
              style={isFirst ? styles.navBtnDisabled : styles.navBtn}
              onClick={handleBack}
              disabled={isFirst}
            >
              ←
            </button>
            <button
              style={isLast ? styles.navBtnDisabled : styles.navBtn}
              onClick={handleForward}
              disabled={isLast}
            >
              →
            </button>
            <div style={styles.urlBar}>
              🔒 {currentNode.value.url}
            </div>
          </div>

          {/* Page Content */}
          <div style={styles.pageContent}>
            <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>{currentNode.value.icon}</div>
            <h2 style={styles.pageTitle}>{currentNode.value.title}</h2>
            <p style={styles.pageUrl}>{currentNode.value.url}</p>
            <div style={{ ...styles.visitedBadge, background: currentNode.value.color }}>
              Visited page
            </div>
          </div>

          {/* Pointer info */}
          <div style={styles.pointerInfo}>
            <span style={styles.pointer}>prev: {currentNode.prev ? `"${currentNode.prev.value.title}"` : 'null'}</span>
            <span style={styles.pointerCurrent}>[ current ]</span>
            <span style={styles.pointer}>next: {currentNode.next ? `"${currentNode.next.value.title}"` : 'null'}</span>
          </div>
        </div>
      )}

      {/* History List */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          History — size: {browserHistory.size()} nodes
        </h3>
        <div style={styles.historyList}>
          {allPages.map((page, index) => {
            const isCurrent = currentNode && currentNode.value === page
            return (
              <div key={index} style={isCurrent ? styles.historyItemActive : styles.historyItem}>
                <span style={styles.historyIcon}>{page.icon}</span>
                <div style={styles.historyInfo}>
                  <p style={styles.historyTitle}>{page.title}</p>
                  <p style={styles.historyUrl}>{page.url}</p>
                </div>
                {index > 0 && <span style={styles.arrowLeft}>←→</span>}
                {isCurrent && <span style={styles.currentBadge}>current</span>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Print doubly linked list */}
      <div style={styles.codeBox}>
        <p style={styles.codeLabel}>list.print() — doubly linked</p>
        <p style={styles.codeText}>{browserHistory.print()}</p>
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', background: '#0a0a0f', color: '#f0f0f8', padding: '30px 20px', maxWidth: '560px', margin: '0 auto', fontFamily: 'sans-serif' },
  backBtn: { background: 'none', border: '1px solid #2a2a3a', color: '#6b6b8a', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', marginBottom: '24px' },
  header: { marginBottom: '28px' },
  label: { fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f76a8a', marginBottom: '6px' },
  title: { fontSize: '2rem', fontWeight: 800, margin: 0 },
  sub: { color: '#6b6b8a', fontSize: '0.85rem', marginTop: '6px' },
  browserCard: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' },
  toolbar: { background: '#1a1a24', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #2a2a3a' },
  navBtn: { background: '#2a2a3a', border: 'none', color: '#f0f0f8', width: '30px', height: '30px', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' },
  navBtnDisabled: { background: '#13131a', border: '1px solid #2a2a3a', color: '#3a3a5a', width: '30px', height: '30px', borderRadius: '6px', cursor: 'not-allowed', fontSize: '1rem' },
  urlBar: { flex: 1, background: '#0a0a0f', border: '1px solid #2a2a3a', borderRadius: '6px', padding: '5px 12px', fontSize: '0.8rem', color: '#6b6b8a' },
  pageContent: { padding: '40px 20px', textAlign: 'center' },
  pageTitle: { fontSize: '1.6rem', fontWeight: 700, margin: '0 0 6px' },
  pageUrl: { color: '#6b6b8a', fontSize: '0.85rem', margin: '0 0 16px' },
  visitedBadge: { display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', color: '#fff', opacity: 0.85 },
  pointerInfo: { display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a24', borderTop: '1px solid #2a2a3a', fontSize: '0.72rem', fontFamily: 'monospace' },
  pointer: { color: '#6b6b8a' },
  pointerCurrent: { color: '#f76a8a', fontWeight: 700 },
  section: { marginBottom: '20px' },
  sectionTitle: { fontSize: '0.75rem', color: '#6b6b8a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' },
  historyList: { display: 'flex', flexDirection: 'column', gap: '6px' },
  historyItem: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' },
  historyItemActive: { background: '#1a1a2e', border: '1px solid #f76a8a', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' },
  historyIcon: { fontSize: '1.2rem' },
  historyInfo: { flex: 1 },
  historyTitle: { margin: 0, fontSize: '0.88rem', fontWeight: 600 },
  historyUrl: { margin: 0, fontSize: '0.75rem', color: '#6b6b8a' },
  arrowLeft: { color: '#3a3a5a', fontSize: '0.72rem' },
  currentBadge: { color: '#f76a8a', fontSize: '0.72rem' },
  codeBox: { background: '#13131a', border: '1px solid #2a2a3a', borderRadius: '10px', padding: '14px', marginBottom: '20px' },
  codeLabel: { color: '#f76a8a', fontSize: '0.75rem', margin: '0 0 6px', fontFamily: 'monospace' },
  codeText: { color: '#a0a0c0', fontSize: '0.75rem', margin: 0, fontFamily: 'monospace', wordBreak: 'break-all' },
}

export default BrowserPage
